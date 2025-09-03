// bai21 placeholder


export async function fetchOneTodo(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const todo = await response.json();
        return todo
    } catch (error) {
        console.error(error);
    }
}
