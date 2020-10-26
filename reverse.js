const args = process.argv;
for (let i = 2; i < args.length; i++) {
  let output = "";
  for (let j = args[i].length - 1; j >= 0; j--) {
    output += args[i][j];
  }
  console.log(output);
}