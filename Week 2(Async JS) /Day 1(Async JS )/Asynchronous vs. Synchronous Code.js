function synchronousTask() {
  console.log('Starting  synchronous task...');
  for (let i = 0; i < 1000000; i++); // Simulate a time-consuming task
  console.log('Task completed.');
}

function asynchronousTask() {
  console.log('Starting async task...');
  setTimeout(() => {
    console.log('Async task completed.');
  }, 2000);
}

asynchronousTask();
synchronousTask();
