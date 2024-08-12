function fetchData(callback) {
  // Simulating an asynchronous operation with setTimeout
  setTimeout(() => {
    const data = 'Data from server';
    callback(data); // Calling the callback function with the data
  }, 2000);
}

function processData(data) {
  console.log('Processing:', data);
}

fetchData(processData); // Pass processData as a callback to fetchData
