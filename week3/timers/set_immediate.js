console.log('before immediate function');
//This will execute after all runnable codes complete their execution
setImmediate((arg) => {
  console.log(`executing immediate: ${arg}`);
}, 'so immediate');

console.log('after immediate function');
