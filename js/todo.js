const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; // 업데이트 되는 값이므로 let으로 변경해줌.

const saveTodo = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteTodo = (event) => {
  const li = event.target.parentNode; // 삭제할 대상
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
};

const paintTodo = (newTodo) => {
  const li = document.createElement("li");
  li.id = newTodo.id; // id 속성 추가

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "✂️";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
};

const handleToDoSubmit = (event) => {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = ""; // 값 비우기
  const newTodoObj = {
    // 단순히 string이 아닌, object를 toDos 배열에 저장.
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj); // 오브젝트 전달
  saveTodo();
};

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos); // 기존에 가지고 있던 data
  toDos = parsedToDos; // 지금 화면에 보여지고 있는 todo에 restore.
  parsedToDos.forEach(paintTodo);
}
