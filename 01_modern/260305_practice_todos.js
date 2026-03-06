// Todo CRUD 실습
// 아래 4개의 함수를 완성하세요.

let todos = [];
let nextId = 1;

// 1. 할 일 추가
function addTodo(title) {
  // todos 배열에 { id, title, done: false } 형태로 추가하세요.
  const addedTodo = {
    id: nextId++,
    title,
    done: false,
  };

  const addedTodos = [...todos, addedTodo];
  todos = addedTodos;
}

// 2. 할 일 목록 조회
function getTodos() {
  // todos 배열을 반환하세요.
  return todos;
}

// 3. 할 일 완료 토글 (done true/false 전환)
function toggleTodo(id) {
  // id에 해당하는 todo의 done을 반대로 바꾸세요.
  const toggledTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo,
  );
  todos = toggledTodos;
}

// 4. 할 일 삭제
function deleteTodo(id) {
  // id에 해당하는 todo를 배열에서 제거하세요.
  const deletedTodos = todos.filter((todo) => todo.id !== id);
  todos = deletedTodos;
}

// --- 실행 테스트 ---
addTodo("JS 공부하기");
addTodo("운동하기");
addTodo("책 읽기");
console.log(getTodos());

toggleTodo(2);
console.log(getTodos());

deleteTodo(1);
console.log(getTodos());
