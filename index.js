// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let count = 0 ;
let attempt = 1;
let saved_counts = [] ;

function increment(){
    count++;
    document.getElementById('count-el').innerText = count ;
}

function save(){
    let saved_nbr=count ;
    count=0;
    document.getElementById('count-el').innerText = count;
    let save_it ={
        attempt : attempt++ ,
        people : saved_nbr 
    };
    saved_counts.push(save_it);
    updateResultsList();
    console.log(saved_counts);
}
function updateResultsList() {
    //the last-result element
    const resultsList = document.getElementById('last-result');
    
    // Create a new list item
    const listItem = document.createElement('li');
    

    listItem.textContent = `Attempt ${saved_counts[saved_counts.length - 1].attempt}: ${saved_counts[saved_counts.length - 1].people} people`;
    
    // Append the list item to the results list
    resultsList.appendChild(listItem);
}
function resetCounter() {
    count = 0;
    document.getElementById('count-el').innerText = count;
    saved_counts = [];
    document.getElementById('last-result').innerHTML = '';
}



