const sentence = "hello there from lighthouse labs";
let counter = 0;
for (const char of sentence) {
  //let counter = 0;
    setTimeout(() => {
    process.stdout.write(char); // print the char here
   },counter * 100) // <= 1s delay to make it noticeable. Can dial it down later.
   counter ++;
}

