import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, FlatList } from "react-native";
// Standard Imports
import { useDispatch, useSelector } from "react-redux";
// Import Types and Actions
import { RootState, AppDispatch } from "../../redux/store";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  updateContent,
} from "../../redux/todoSlice";

export default function TodoScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // 1. SETUP DISPATCH & SELECTOR (Manually Typed)
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos.items);

  const [text, setText] = useState("");
  const [updateText, setUpdateText] = useState("");
  const [updateToggle, setUpdateToggle] = useState("");

  // 2. FETCH
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // 3. FILTER
  const userTodos = todos.filter((todo) => todo.userId === id);

  // 4. HANDLERS
  const handleAdd = () => {
    if (text.trim() && id) {
      dispatch(addTodo({ title: text, completed: false, userId: id }));
      setText("");
    }
  };

  const handleDelete = (todoId: string) => {
    dispatch(deleteTodo(todoId));
  };

  // Toggle Completed Status
  const handleToggle = (item: any) => {
    dispatch(updateTodo({ id: item.id, completed: item.completed }));
  };

  // Update content of todo list
  const handleUpdateContent = async (item: any) => {
      await dispatch(updateContent({id: item.id, title: updateText}))
      setUpdateText("")
      setUpdateToggle("")
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Pressable
        onPress={() => router.push(`/`)}
        style={{
          backgroundColor: "yellow",
          padding: 10,
          borderRadius: 5,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white" }}>BACK</Text>
      </Pressable>
      {/* Input UI */}
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="New Task"
          style={{ flex: 1, borderWidth: 1, padding: 10, marginRight: 10 }}
        />
        <Pressable
          onPress={handleAdd}
          style={{ backgroundColor: "blue", padding: 10, borderRadius: 5 }}
        >
          <Text style={{ color: "white" }}>ADD</Text>
        </Pressable>
      </View>

      {/* List UI */}
      <FlatList
        data={userTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 15,
              borderBottomWidth: 1,
            }}
          >
            {/* Update / Toggle */}
            <Pressable onPress={() => handleToggle(item)} style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 18,
                  textDecorationLine: item.completed ? "line-through" : "none",
                }}
              >
                {item.title}
              </Text>
            </Pressable>

            {/* Delete and update content */}
            <View style={{ display: "flex" }}>
              <Pressable
                onPress={() => handleDelete(item.id)}
                style={{ backgroundColor: "red", padding: 5, borderRadius: 5 }}
              >
                <Text style={{ color: "white" }}>Del</Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  if (updateToggle === item.id) {
                    setUpdateToggle("");
                  } else {
                    setUpdateToggle(item.id);
                  }
                }}
                style={{
                  backgroundColor: "green",
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "white" }}>Update</Text>
              </Pressable>
            </View>

            <View>
              {updateToggle === item.id && (
                <View>
                  <TextInput
                    value={updateText}
                    onChangeText={setUpdateText}
                    style={{
                      borderColor: "black",
                      borderWidth: 1,
                    }}
                  />
                  <Pressable
                    onPress={() => handleUpdateContent(item)}
                    style={{
                      backgroundColor: "grey",
                      padding: 5,
                      borderRadius: 5,
                    }}
                  >
                    <Text style={{ color: "white" }}>Save</Text>
                  </Pressable>
                </View>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}
