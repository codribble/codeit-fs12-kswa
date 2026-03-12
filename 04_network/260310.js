// db.json 데이터 조회 예제 (json-server 사용)
// 실행: npx json-server db.json --port 3000

const { compact } = require("lodash");

async function getTodos() {
  const response = await fetch("http://localhost:4000/todos");
  const todos = await response.json();
  console.log("전체 할 일 목록:", todos);
  return todos;
}

async function getTodoById(id) {
  const response = await fetch(`http://localhost:4000/todos/${id}`);
  const todo = await response.json();
  console.log(`할 일 #${id}:`, todo);
  return todo;
}

async function updateTodoById(id, todo) {
  const response = await fetch(`http://localhost:4000/todos/${id}`, {
    method: "patch",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updateTodo = await response.json();
  console.log(`수정할 일: `, updateTodo);
  return updateTodo;
}

// 실행 예시
getTodos().then((todos) => {
  console.log(`총 ${todos.length}개의 할 일`);
});

// 특정 id로 조회
// getTodoById(1);

// 특정 id 수정
updateTodoById(3, {
  completed: true,
});
