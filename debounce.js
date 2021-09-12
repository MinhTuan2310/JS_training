

function log() {
  console.log('debouce me please');
}

function debounce(callback, await) {
  let timeoutId;

  return function() {
    if(timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(callback, await);
  }
}

const debounceLog = debounce(log, 2000);

debounceLog();

