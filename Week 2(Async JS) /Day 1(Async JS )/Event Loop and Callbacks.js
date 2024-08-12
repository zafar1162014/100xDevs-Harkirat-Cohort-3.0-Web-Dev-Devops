function task() {
  console.log('Task started');
  setTimeout(() => {
    console.log('Task finished');
  }, 1000);
}

console.log('Before task');
task();
console.log('After task');
