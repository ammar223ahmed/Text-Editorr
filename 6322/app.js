var text_screen = document.getElementById("text_screen");
var input = document.getElementById("inputt");
function bold(){
    //    alert("Bold Chal raha hain");
    text_screen.style.fontWeight = "bold";
}
function italic(){
    text_screen.style.fontStyle = "italic";
}
function underline(){
    text_screen.style.textDecoration = "underline";
}

function fontsize(){
   var inputfield = inputt.value;
//  console.log(inputfield);
 var text_screen_value = text_screen.value;
 var inputstyle = text_screen.style.fontSize = inputfield + "px";
// text_screen_value.style.fontsize = inputfield + "px";
}

// var size = prompt("Enter font size");
// text_screen.style.fontSize = size + "px";   

function textcolor(){
    var inputfields = color.value;
  console.log(inputfields);
  var inputstyle = text_screen.style.color = inputfields;
 }
 



 function fontfamily(){
    text_screen.style.fontStyle = "Arial, Helvetica, sans-serif";

}

function fontsize1(){
    text_screen.style.fontStyle = "'Courier New', Courier, monospace";

}


function fontsize2(){
    text_screen.style.fontStyle = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";

}

