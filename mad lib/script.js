let adjective1 = prompt("Enter an adjective.");
let adjective2 = prompt("Enter an adjective.");
let place = prompt("Enter the name of a place");
let adjective3 = prompt("Enter an adjective.");
let noun = prompt("Enter an noun.");
let place2 = prompt("Enter the name of a place");



let story = 
`
Once upon a time on Halloween night, a group of ${adjective1} friends decided to explore an ${adjective2}
 ${place}. As they entered, they heard a ${adjective3} ${noun} echoing through the ${place2}. ` 


let madLibOutputDiv = document.getElementById("madLibOutput");

madLibOutputDiv.innerHTML = `<p>${story}</p>`;
