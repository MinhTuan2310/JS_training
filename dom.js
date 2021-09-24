
function createTodoElement(todo) {
  if(!todo) return null;

  const liElement = document.createElement('li');
  liElement.textContent = todo.title;
  liElement.id = todo.id;

  return liElement; 
}


function renderTodoList(todoList, ulElementId) {
  if(!Array.isArray(todoList) || todoList.length === 0) return [];

  const ulElement = document.querySelector(ulElementId);
  if(!ulElementId) return;

  todoList.forEach(todo => {
    const liElement = createTodoElement(todo);
    ulElement.appendChild(liElement);
  })
}



(() => {
  const todoList = [
    {id: 1, title: 'Tuan dep trai'},
    {id: 2, title: 'Trí bị trĩ'},
    {id: 3, title: 'Learn Reactjs'},
  ];

  renderTodoList(todoList, '#todoList');
})();



