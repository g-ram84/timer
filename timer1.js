let seconds = process.argv[2] * 1000;

setTimeout(() => {
  if (process.argv[2] === undefined || process.argv[2] < 0 || process.argv[2] === NaN) {
    console.log('\n');
  } else {
    process.stdout.write('. \n');
  }
 }, seconds);

