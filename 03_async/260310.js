const result1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
console.log(result1);

const fetchData = async () => {
  const result2 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(result2);
};

fetchData();
