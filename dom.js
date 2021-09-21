// const app = document.querySelector("#app");


// if(app) {
//   const h1 = document.createElement("h1");

//   h1.textContent= "tuandeptraigioitaicuagai";

//   console.dir(app);

//   app.appendChild(h1);
// }

// function createTodoElement(todo) {
//   if(!todo) return null;

//   const liElement = document.createElement('li');
//   liElement.textContent = todo.title;
//   liElement.dataset.id = todo.id;

//   return liElement;
// }

// function renderTodoList(todoList, ulElementId) {
//   if(!Array.isArray(todoList) || todoList.length === 0) return;

//   const ulElement = document.getElementById(ulElementId);
//   if(!ulElement) return;

//   for (const todo of todoList) {
//     const liElement = createTodoElement(todo);
//     ulElement.appendChild(liElement);
//   }
// }


// (() => {
//   const todoList = [
//     {id: 1, title: 'Learn Js'},
//     {id: 2, title: 'Learn ReactJs'},
//     {id: 3, title: 'Learn NextJs'},
//   ];

//   renderTodoList(todoList, 'todoList');
// })();





