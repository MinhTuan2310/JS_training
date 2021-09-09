function creatQueue() {
  const queue = [];

  function getFront() {
    // return queue.length > 0 ? queue[0] : undefined;
    return queue[0];
  }

  function getBack() {
    // return queue.length > 0 ? queue[queue.length - 1] : undefined;
    return queue[queue.length - 1];
  }

  function getSize() {
    return queue.length;
  }

  function enqueue(data) {
    queue.push(data);
  }

  function dequeue() {
    return queue.shift();
  }

  function display() {
    return queue;
  }

  return {
    enqueue,
    dequeue,
    getFront,
    getBack,
    getSize,
    display,
  }
}

const queue = creatQueue();

