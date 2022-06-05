
const form=document.getElementById('form');
const input=document.getElementById('input');
const todoUL=document.getElementById('todo');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    addTodo()
})

function addTodo(todo){
    let todoText=input.value;
    if(todo){
        todoText=todo.text;
    }
    if(todoText){
        const todoElement=document.createElement('li');
        if(todo && todo.completed){
            todoElement.classList.add('completed');
            updateLocalStorage();
        }
        todoElement.innerText=todoText;
        todoElement.addEventListener('click',(event)=>{
            todoElement.classList.toggle('completed');
        })
        todoElement.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
            todoElement.remove();
            updateLocalStorage();
        })
        todoUL.appendChild(todoElement);
        input.value='';
    }
}

function updateLocalStorage(){
    todoElement=document.querySelectorAll('li');
    const todo=[]
    todoElement.forEach(item=>todo.push({
        text:item.innerText,
        complet:item.classList.contains('complet')
    }))
}