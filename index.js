const todos = document.getElementById('todos');

function getTodos(){
    axios.get("http://localhost:5051/api/todos").then((res) => {
        // console.log(res.data);
    res.data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        todos.appendChild(listItem);
    });
    }).catch(err => console.log(err))
};

function addTodo(e){

};

getTodos();