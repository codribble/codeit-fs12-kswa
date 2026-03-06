// 아래 6개의 함수를 완성하세요.

let todos = [];
let nextId = 1;

// 1. 할 일 추가
function addTodo(title) {
  todos = [
    ...todos,
    {
      id: nextId++,
      title,
      done: false,
    },
  ];
}

// 2. 할 일 목록 조회
function getTodos() {
  return todos;
}

// 3. 할 일 완료 토글
function toggleTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo,
  );
}

// 4. 할 일 삭제
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
}

// 5. 제목 수정
function updateTodo(id, newTitle) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, title: newTitle } : todo,
  );
}

// 6. 완료된 항목만 반환
function getCompletedTodos() {
  return todos.filter((todo) => todo.done);
}

// --- 실행 테스트 ---
addTodo("JS 공부하기");
addTodo("운동하기");
addTodo("책 읽기");

toggleTodo(1);
toggleTodo(3);

console.log(getTodos());
// id 1, 3번 done: true / id 2번 done: false

console.log(getCompletedTodos());
// [{ id: 1, ... }, { id: 3, ... }] 만 나와야 함

updateTodo(2, "수영하기");
deleteTodo(1);

console.log(getTodos());
console.log(getCompletedTodos()); // id 3번만 남아야 함
