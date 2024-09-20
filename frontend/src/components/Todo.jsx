export function Todo({todos}) {
    return <dev>
        {todos.map(function(todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <butt>{todo.completed == true ? "Completed" : "Mark as completed"}</butt>
            </div>
        })}
       
    </dev>
}