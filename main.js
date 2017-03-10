//define question
var clues = []; // javascript array to manange clues instead of ajax

// Clues tht are part of the array. .push sends each string to the array based on the index position
clues.push('Getting the type of arguments passed to a function');
clues.push('A built-in method that reverses the order of the elements of an array');
clues.push('A jQuery method that sets the html contents of an element');
clues.push('A jQuery method that removes elements matching the specified selector from the set of matched elements');
clues.push('A preferred styling library than Bootstrap');
clues.push('The company that invented Bootstrap');
clues.push('Bootstrap style that is used to add text to .navbar');
clues.push('Class that indicates a dangerous or potentially negative action');
clues.push('Built-in method that calls a function for each element in the array');
clues.push('Type of variable that takes precedence over other if names are same');
clues.push('Function of Array object that removes the first element from an array and returns that element');
clues.push('Built-in method that returns the string representation of the numbers value');
clues.push('CSS rule that would capitalize every letter in your h1');
clues.push('The type of attribute used in src="/css/main.css"');
clues.push('Selector that matches a particular element only when it lies inside a particular element');
clues.push('property is used to set the background image of an element');


var choices = new Array; // javascript array to manange clues instead of ajax
var right_answer = 0;
// Clues tht are part of the array. .push sends each string to the array based on the index position
choices.push({'options' : ['typeof operator','getType function','Both 1 & 2','none above'],'right_option' : 1});
choices.push({'options' : ['changeOrder(order)','reverse()','sort(order)','direction()'],'right_option' : 2});
choices.push({'options' : ['html( val )','setHtml( val )','setInnerHtml( val )','setInsideHtml( val )'],'right_option' : 1});
choices.push({'options' : ['getNotEquals( selector )','isNotEquals( selector )','not(selector)','on(selector)'],'right_option' : 3});
choices.push({'options' : ['Chex Box','Hex Box','Flex Box','Lex Box'],'right_option' : 3});
choices.push({'options' : ['Google','Myspace','Instagram','Twitter'],'right_option' : 4});
choices.push({'options' : ['.navbar-text','.text','.form-text','.link-text'],'right_option' : 1});
choices.push({'options' : ['.active','.success','.warning','.danger'],'right_option' : 4});
choices.push({'options' : ['while()','loop()','forEach()','None of the above.'],'right_option' : 3});
choices.push({'options' : ['global variable','local variable','Both of the above','None of the above'],'right_option' : 2});
choices.push({'options' : ['reverse()','shift()','slice()','some()'],'right_option' : 2});
choices.push({'options' : ['toValue()','toNumber()','toString()','None of the above'],'right_option' : 3});
choices.push({'options' : ['h1 { text-transform: uppercase; }','h1 { text-decoration: capitals; }','h1 { text-transform: all-caps; }','h1 { font-size: uppercase; }'],'right_option' : 1});
choices.push({'options' : ['Absolute address','Proximal address','Relative address','Delivery address'],'right_option' : 3});
choices.push({'options' : ['The Type Selector','The Universal Selector','The Descendant Selector','The Class Selector'],'right_option' : 3});
choices.push({'options' : ['background-color','background-image','background-repeat','background-position'],'right_option' : 2});


/*
choices.push('Clue 1 Category 1 Choice B');
choices.push('Clue 1 Category 1 Choice C');
choices.push('Clue 1 Category 1 Choice D');
choices.push('Clue 2 Category 1 Choice A');
choices.push('Clue 3 Category 1');
choices.push('Clue 4 Category 1');
choices.push('Clue 1 Category 2');
choices.push('Clue 2 Category 2');
choices.push('Clue 3 Category 2');
choices.push('Clue 4 Category 2');
choices.push('Clue 1 Category 3');
choices.push('Clue 2 Category 3');
choices.push('Clue 3 Category 3');
choices.push('Clue 4 Category 3');
choices.push('Clue 1 Category 4');
choices.push('Clue 2 Category 4');
choices.push('Clue 3 Category 4');
choices.push('Clue 4 Category 4');
*/


// Get the modal
var modal = document.getElementById('myModal');

// Declares variable button equal an array of elements in the document that have the class "well."
var btn = document.getElementsByClassName("well");

// Declares variable score equal to element ID and pass the obejct 'score'
var score = document.getElementById('score');
// Declare variable addTo Score and passed the object "p" in the function


var addToScore = function (){
  // The object p contains the variable current_score and is equal to parsing the interger and defining it as a score
// from int inner Html of the element.  Inner html already has the amount included in the p tag.
  var current_score = parseInt(score.innerHTML);
// Declare variable new_score and set its to the current score + the score parsed from the html
  var new_score = parseInt(current_score + points);
// stores the value
  score.innerHTML = new_score;
}
// Declare variable subtractFromScore and passes the object "p" in the function
var subtractFromScore = function (){
  // The object p contains the variable current_score and is equal to parsing the interger and defining it as a score
// from int inner Html of the element.  Inner html already has the amount included in the p tag.
  var current_score = parseInt(score.innerHTML);
// Declare variable new_score and set its to the current score minus the score parsed from the html
  var new_score = parseInt(current_score - points);
// updates the property to equal the variable new_score.
  score.innerHTML = new_score;
}


var points = 0;


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
      points = parseInt(e.target.innerHTML);
      var qno = e.target.getAttribute('qno');
      showQuestion(qno);
      // DO IT ONLY IF THE ANSWER IS RIGHT THIS IS JUST FOR TESTING PURPOSE
      // addToScore(points);
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


// show question based on element clicked and extract it from clues array.
var showQuestion = function(index){
 var question = clues[index];
 document.getElementById('clue').innerHTML = question;
 addChoices(index);
}

var addChoices = function(index){
  // choices.push({'options' : ['Choice 1','Choice 2','Choice 3','Chioce 4'],'right_option' : 1});
  var object = choices[index];
  if(object !== undefined){
    var options = object.options;
    right_answer = object.right_option;
    for(i=0;i<options.length;i++){
      var choice_id = 'choice'+(i+1); // on 0 it'll be choice1
      document.getElementById(choice_id).innerHTML = options[i];
      document.getElementById(choice_id).setAttribute('choice_number',i+1);
    }
  }
}
var choice_btns = document.getElementsByClassName('btn-primary');
for(i=0;i<choice_btns.length;i++){
  choice_btns[i].onclick = function(e){
      var user_selected= e.target.getAttribute('choice_number');
      if(user_selected == right_answer){
        //alert('VOlla');
        result.innerHTML = "Correct";
        setTimeout('closeModal()',2000); // close after 2 secs;
        addToScore();
      }else{
        //alert('WRONG ANSWER');
        result.innerHTML = "Wrong";
        setTimeout('closeModal()',2000);
        subtractFromScore();
      }

  }
}

var closeModal = function(){
  modal.style.display = "none";
  result.innerHTML = "";
}

// var showResult = function(){


// }

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("btn-primary");


// When the user clicks on <span> (x), close the modal
// var closeButtonByIndex = function() {
// // for loop that loops throught the length of the array clases to the end
//   for (i = 0; i < span.length; i++) {
//    //assigns the interation of element clicked in the array to button and gives it an attribute of 'qno' and i

//      //when interation of a element class is clicked pass the event listener object.
// //      span[i].onclick = function() {
// //       // e.target provide  access to attributes of the clicked element.
// //       // https://developer.mozilla.org/en-US/docs/Web/API/Event/target
// //       console.log();
// //       modal.style.display = "none";

// // }
// }
// }
// setTimeout(closeButtonByIndex(), 3000)

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//reset page
// function resetPage() {
//     document.getelementById('resetPage');
//     location.reload();
// }
