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


var choices = new Array; // javascript array to manange clues instead of ajax
var right_answer = 0;
// Clues tht are part of the array. .push sends each string to the array based on the index position
choices.push({'options' : ['A1 Choice 1','A1 Choice 2','A1 Choice 3','A1 Chioce 4'],'right_option' : 1});
choices.push({'options' : ['A2 Choice 1','A2 Choice 2','A2 Choice 3','A2 Chioce 4'],'right_option' : 4});
choices.push({'options' : ['A3 Choice 1','A3 Choice 2','A3 Choice 3','A3 Chioce 4'],'right_option' : 4});
choices.push({'options' : ['A4 Choice 1','B1 Choice 2','B1 Choice 3','B1 Chioce 4'],'right_option' : 4});
choices.push({'options' : ['B1 Choice 1','A2 Choice 2','A2 Choice 3','A2 Chioce 4'],'right_option' : 4});
choices.push({'options' : ['B2 Choice 1','B2 Choice 2','B2 Choice 3','B2 Chioce 4'],'right_option' : 4});
choices.push({'options' : ['B3 Choice 1','B3 Choice 2','B3 Choice 3','B3 Chioce 4'],'right_option' : 4});
choices.push({'options' : ['B4 Choice 1','B4 Choice 2','B4 Choice 3','B4 Chioce 4'],'right_option' : 4});
choices.push({'options' : ['C1 Choice 1','C1 Choice 2','C1 Choice 3','C1 Chioce 4'],'right_option' : 4});
choices.push({'options' : ['C2 Choice 1','C2 Choice 2','C2 Choice 3','C2 Chioce 4'],'right_option' : 4});
choices.push({'options' : ['C3 Choice 1','C3 Choice 2','C3 Choice 3','C3 Chioce 4'],'right_option' : 4});
choices.push({'options' : ['C4 Choice 1','C4 Choice 2','C4 Choice 3','C4 Chioce 4'],'right_option' : 4});
choices.push({'options' : ['D1 Choice 1','D1 Choice 2','D1 Choice 3','D1 Chioce 4'],'right_option' : 4});
choices.push({'options' : ['D2 Choice 1','D2 Choice 2','D2 Choice 3','D2 Chioce 4'],'right_option' : 4});
choices.push({'options' : ['D3 Choice 1','D3 Choice 2','D3 Choice 3','D3 Chioce 4'],'right_option' : 4});
choices.push({'options' : ['D4 Choice 1','D4 Choice 2','D4 Choice 3','D4 Chioce 4'],'right_option' : 4});


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
