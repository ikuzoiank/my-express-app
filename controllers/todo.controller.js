 //this is our "temporary database" in memory

 let todos = [
    { id: 1, task: "Learn Express", completed: false},
    { id: 2, task: "Build an API", completed: false}
 ];

 // 2. The function to GET all tasks
    const getTodos = (req, res) => {
    res.json(todos);
 };
 //3. POST (Create) a new task
 const createTodo = (req, res) => {
        // We get the task name from the request body
    const { task } = req.body;

    if (!task) {
        return res.status(400).json({ message: "Task content is required!" });
    }
    const newTodo = {
        id: todos.length + 1, 
        task: task, //we will make this dynamic later!
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
 };

 // DELETE a task by ID
 const deleteTodo = (req, res) => {
    const { id } = req.params; // Get ID from URL
    
    // Filter out the task with that ID
    const initialLength = todos.length;
    todos = todos.filter(todo => todo.id !== parseInt(id));

    if (todos.length === initialLength) {
        return res.status(404).json({ message: "Task not found!" });
    }

    res.json({ message: `Task with ID ${id} deleted successfully` });
 };

 // UPDATE a task's status
const updateTodo = (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;

    // Find the task in our array
    const todo = todos.find(t => t.id === parseInt(id));

    if (!todo) {
        return res.status(404).json({ message: "Task not found!" });
    }

    // Update only the completed status
    if (typeof completed === 'boolean') {
        todo.completed = completed;
    }

    res.json({ message: `Task ${id} updated!`, todo });
};

 module.exports = { 
    getTodos, 
    createTodo,
    deleteTodo,
    updateTodo
 };