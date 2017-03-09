
//define clues
var clues = []; // javascript array to manange clues instead of ajax

// QUESTION # 1
clues.push('What is your name?');

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
     if(!e.target.hasAttribute('disabled')){
      modal.style.display = "block";
      // e.taget is equal to getelementById in this case
      e.target.setAttribute('disabled','disabled');
      e.target.setAttribute('style','background-color:grey;');
      //  get the text inside any element including html + text
      points = e.target.innerHTML;
      var qno =e.target.getAttribute('qno');
      showQuestion(qno);
      // DO IT ONLY IF THE ANSWER IS RIGHT THIS IS JUST FOR TESTING PURPOSE
      addToScore(points);
      // removing html tags and extracting plain text. for reference
       // console.log(e.target.innerHTML.replace(/<[^>]*>/g, ""));
    }
    }
  }
}
findClassIndex();

// show question based on element clicked and extract it from clues array.
var showQuestion= function(qno){
 var question = clues[qno];
 document.getElementById('question').innerHTML = question;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function(e) {
// console.log(this);
//  modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


