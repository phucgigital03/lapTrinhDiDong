// bai23 placeholder
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function fetchCompletedTodos(): Promise<Todo[] | void> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const todo = await response.json();
        return todo.filter((item: Todo) => item.completed);
    } catch (error) {
        console.error(error);
    }
}
