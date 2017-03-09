//$(document).ready(function(){
//    $("#myClue").click(function(){
//        $("#myModal").modal();
//    });
//});
//modal reference https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal2
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("well")[0];

//var x = document.getElementsByClassName("example");

//find index of class in array
//var findClassIndex = function() {
  //for (i = 0; i < btn.length; i++) {
 //   btn[i].onclick = function() {

// modal.style.display = "block";
//}
//}
//findClassIndex();

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function(e) {
console.log(this);
 modal.style.display = "block";
}

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

