
// function createTodoElement(todo) {
//   if(!todo) return null;

//   const todoTemplate = document.getElementById("todoTemplate");
//   if(!todoTemplate) return null;

  

//   const todoElement = todoTemplate.content.firstElementChild.cloneNode(true);
  
//   const todoTitleElement = todoElement.querySelector('.todo__title');
//   if(!todoTitleElement) return null;
//   todoTitleElement.textContent = todo.title;
  
//   return todoElement;
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
//     {id: 1, title: 'Tuan dep trai'},
//     {id: 2, title: 'Trí bị trĩ'},
//     {id: 3, title: 'Learn Reactjs'},
//   ];

//   renderTodoList(todoList, 'todoList');
// })();


function createTodoElement(todo) {
  if(!todo) return null;

  // get todoTemplate
  const todoTemplate = document.getElementById('todoTemplate');

  // clone liElement from todoTemplate
  const liElement = todoTemplate.content.firstElementChild.cloneNode(true);

  // updade liElement
  const liTitleElement = liElement.querySelector(".todo__title");
  liTitleElement.textContent = todo.title;
  liTitleElement.id = todo.id;
 
  // add event to liElement


  return liElement;
}


function renderTodoList(todoList, ulElementId) {
  if(!Array.isArray(todoList) || todoList.length === 0) return [];

  const ulElement = document.getElementById(ulElementId);
  if(!ulElement) return null;
  
  todoList.forEach(todo => {
    liElement = createTodoElement(todo);
    ulElement.appendChild(liElement);
  });
}



(() => {
  const todoList = [
    {id: 1, title: 'Tuan dep trai'},
    {id: 2, title: 'Trí bị trĩ'},
    {id: 3, title: 'Learn Reactjs'},
    {id: 4, title: 'Learn Everything'},
  ];

  renderTodoList(todoList, 'todoList');
})();
