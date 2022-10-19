// Import here 

// Initialize html element here 
const word_input = document.getElementById("word-input");
const submit = document.getElementById("submit");
const description = document.getElementById("description");
const examplehtml = document.getElementById("example");
// Code begins here

const submitWord = async () => {
    
    let word = word_input.value;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    let connect = await (await fetch(url));
    let response = await connect.json();

    let definition = response[0].meanings.flatMap(m => m.definitions).flatMap(d => d.definition);
    let example = response[0].meanings.flatMap(m => m.definitions).flatMap(d => d.example);
    console.log(definition, example);   
    
    for (let i=0; i<definition.length; i++) {
        if (definition[i] == undefined) {
            definition.splice(i, 1);


        }
        if (example[i] == undefined) {
            example.splice(i, 1);

        }
    }

    // To check the definition and meaning that is null of not if it's not select that
    
    description.innerHTML = definition.join(",");
    examplehtml.innerHTML = example.join(", ");
    

    
    
}

this.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        submitWord();
    }
})