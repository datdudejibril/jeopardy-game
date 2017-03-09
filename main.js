
//define question
var clues = []; // javascript array to manange clues instead of ajax

// Clues tht are part of the array. .push sends each string to the array based on the index position
clues.push('Clue 1 Category 1');
clues.push('Clue 2 Category 1');
clues.push('Clue 3 Category 1');
clues.push('Clue 4 Category 1');
clues.push('Clue 1 Category 2');
clues.push('Clue 2 Category 2');
clues.push('Clue 3 Category 2');
clues.push('Clue 4 Category 2');
clues.push('Clue 1 Category 3');
clues.push('Clue 2 Category 3');
clues.push('Clue 3 Category 3');
clues.push('Clue 4 Category 3');
clues.push('Clue 1 Category 4');
clues.push('Clue 2 Category 4');
clues.push('Clue 3 Category 4');
clues.push('Clue 4 Category 4');


var choices = []; // javascript array to manange clues instead of ajax

// Clues tht are part of the array. .push sends each string to the array based on the index position
choices.push('Clue 1 Category 1 Choice A');
choices.push('Clue 1 Category 1 Choice B');
choices.push('Clue 1 Category 1 Choice C');
choices.push('Clue 1 Category 1 Choice D');
choices.push('Clue 2 Category 1 Choice A');
choices.push('Clue 2 Category 1 Choice B');
choices.push('Clue 2 Category 1 Choice C');
choices.push('Clue 2 Category 1 Choice D');
choices.push('Clue 3 Category 1 Choice A');
choices.push('Clue 3 Category 1 Choice B');
choices.push('Clue 3 Category 1 Choice A');
choices.push('Clue 3 Category 1 Choice A');


choices.push('Clue 4 Category 1' Choice A);




choices.push('Clue 1 Category 2' Choice A);




choices.push('Clue 2 Category 2' Choice A);




choices.push('Clue 3 Category 2' Choice A);




choices.push('Clue 4 Category 2' Choice A);




choices.push('Clue 1 Category 3' Choice A);




choices.push('Clue 2 Category 3' Choice A);




choices.push('Clue 3 Category 3 Choice A');




choices.push('Clue 4 Category 3 Choice A');




choices.push('Clue 1 Category 4 Choice A');




choices.push('Clue 2 Category 4 Choice A');




choices.push('Clue 3 Category 4 Choice A');




choices.push('Clue 4 Category 4 Choice A');







// Get the modal
var modal = document.getElementById('myModal');

// Declares variable button equal an array of elements in the document that have the class "well."
var btn = document.getElementsByClassName("well");

// Declares variable score equal to element ID and pass the obejct 'score'
var score = document.getElementById('score');
// Declare variable addTo Score and passed the object "p" in the function


var addToScore= function (p){
  // The object p contains the variable current_score and is equal to parsing the interger and defining it as a score
// from int inner Html of the element.  Inner html already has the amount included in the p tag.
  var current_score= parseInt(score.innerHTML);
// Declare variable new_score and set its to the current score + the score parsed from the html
  var new_score = current_score+p;
// stores the value
  score.innerHTML = new_score;
}
// Declare variable subtractFromScore and passes the object "p" in the function
var subtractFromScore= function (p){
  // The object p contains the variable current_score and is equal to parsing the interger and defining it as a score
// from int inner Html of the element.  Inner html already has the amount included in the p tag.
  var current_score= parseInt(score.innerHTML);
// Declare variable new_score and set its to the current score minus the score parsed from the html
  var new_score = current_score-p;
// updates the property to equal the variable new_score.
  score.innerHTML = new_score;
}


var points;


//funcion to find index of a click class in array
var findClassIndex = function() {
// for loop that loops throught the length of the array to the end
  for (i = 0; i < btn.length; i++) {
   //assigns the interation of element clicked in the array to button and gives it an attribute of 'qno' and i
      btn[i].setAttribute('qno',i);

     //when interation of a element class is clicked pass the event listener object.
     btn[i].onclick = function(e) {
      // e.target provide  access to attributes of the clicked element.
      // https://developer.mozilla.org/en-US/docs/Web/API/Event/target
      console.log(e.target.id);
      // attributes are element properties like id,class,name etc...


        // check if element is already disabled by using function hasAttribute which is built in function.
        // // if element is does not have the attritribute disabled, then shows modal
     if(!e.target.hasAttribute('disabled')){
      modal.style.display = "block";
      // e.taget is equal to getelementById in this case
      e.target.setAttribute('disabled','disabled');
      e.target.setAttribute('style','background-color:grey;');
      //  get the text inside any element including html + text
      points = e.target.innerHTML;
      var qno =e.target.getAttribute('qno');
      showQuestion(qno);
      var qno =e.target.getAttribute('cno');
      showChoice(cno);
      // DO IT ONLY IF THE ANSWER IS RIGHT THIS IS JUST FOR TESTING PURPOSE
      addToScore(points);
      // removing html tags and extracting plain text. for reference
       // console.log(e.target.innerHTML.replace(/<[^>]*>/g, ""));
    }
    }
  }
}
findClassIndex();
// When the user clicks the button, open the modal
// btn.onclick = function(e) {
// console.log(this);
//  modal.style.display = "block";
// }


// show slues based on element clicked and extract it from clues array.
var showQuestion= function(qno){
 var question = clues[qno];
 document.getElementById('clue').innerHTML = question;
}

// show choices based on element clicked and extract it from choices array.
var showChoice= function(cno){
 var choice = choices[cno];
 document.getElementById('clue').innerHTML = question;
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("btn-primary");


// When the user clicks on <span> (x), close the modal
var closeButtonByIndex = function() {
// for loop that loops throught the length of the array clases to the end
  for (i = 0; i < span.length; i++) {
   //assigns the interation of element clicked in the array to button and gives it an attribute of 'cno' and i

     //when interation of a element class is clicked pass the event listener object.
     span[i].onclick = function() {
      // e.target provide  access to attributes of the clicked element.
      // https://developer.mozilla.org/en-US/docs/Web/API/Event/target
      console.log();
      modal.style.display = "none";

}
}
}
setTimeout(closeButtonByIndex(), 3000)

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


