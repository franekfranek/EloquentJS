// https://medium.com/javascript-in-plain-english/5-tricky-javascript-problems-to-check-before-your-next-interview-part-1-60fdecaa59d6
// setTimeout is called 5 times
// all calls go to the stack 
// and are released at once with i = 5 
// so cl is 5X5
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}