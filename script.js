//alert();

//Cycles and iterations activity
//Idea: Request a word/number different to "ESC/esc" and these will be appear in a list.


let word = prompt("Enter a text to create a list of words. Use ESC to end the list.");
let num = 1;
while (word.toLowerCase() != "esc") {        
    console.log(num++ +") " + word);        
    word = prompt("Enter a text to create a list of words. Use ESC to end the list.");
}
