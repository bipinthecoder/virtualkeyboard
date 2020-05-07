var buttonsArray =document.querySelectorAll("button");
var displayLocation = document.getElementById("displayPara");
var spaceBar = document.getElementById("spaceBar");
var str = "";
var shiftStatus = false;
var capsStatus = false;
var passwordStatus = false;
var checkFlag = true;
for(var i = 0; i < 10; i ++){
    buttonsArray[i].addEventListener("click",addNumbers);
}
function addNumbers(){
    if(shiftStatus == false){
        var previousText = displayLocation.textContent;
        var buttonText = event.target.textContent;
        previousText+= buttonText;
        displayLocation.textContent = previousText;
    }
  
}


for(var i = 11; i <= 37; i ++){
    buttonsArray[i].addEventListener("click",addAlphabets);
}
function addAlphabets(){
    if(capsStatus == false){
        var oldText = displayLocation.textContent;
        var textAlpha = event.target.textContent;
        oldText += textAlpha;
        displayLocation.textContent = oldText;
    }
    

}

//eventListener for Delete Button

buttonsArray[10].addEventListener("click",deleteItem);
function deleteItem(){
    
    var temp_array = [];
    var deletedText = "";
    var text = displayLocation.textContent;
    //console.log(text);
    for(var j = 0; j < text.length; j ++){
        temp_array.push(text[j]);
    }
    for(var k = 0; k < temp_array.length - 1; k ++){
        deletedText += temp_array[k];
    }
    displayLocation.textContent = deletedText;
}

//Event Listner for space

spaceBar.addEventListener("click",giveSpace);
//var temp_array = [];
function giveSpace(){
    console.log(displayLocation.textContent);
    console.log(displayLocation.textContent.length);
    //var spaceValue = "&nbsp"; 
    displayLocation.innerHTML += "&nbsp";
    
    
}


//LowerCaseToUpperCase Function Using ASCII

var obj = { };
for(var i = 65; i <= 90; i ++){
  obj[i] = i + 32 ;
}
function lowerCaseToUpperCase(stringSample){
  
    var x;
    var array = [];
    var outputString = "" ;
    array = stringSample.split("");

    for(x in obj){
        for(var i = 0; i < array.length; i ++){
            if(stringSample.charCodeAt(i) == obj[x]){
                array[i] = String.fromCharCode(x);
            }
        }
    }
   // return array;
   for(var i = 0; i < array.length; i ++){
       outputString += array[i];
   }
   return outputString;
}
//Caps Button Functionality
buttonsArray[38].addEventListener("click",capsFunction);
var capsCount = 0;
function capsFunction(){
    capsStatus = true;
    console.log("Inside Caps");
    capsCount ++;
   
    
    if(capsCount % 2 != 0){
        event.target.parentNode.style.backgroundColor = "green";
        console.log( event.target.parentNode.style.backgroundColor);
        for(var i = 0; i < 10; i ++){
            buttonsArray[i].addEventListener("click",addNumbers);
        }

        for(var c = 11; c <= 37; c ++){
            buttonsArray[c].addEventListener("click",addCapsAlphabets);
        }
        
    }
    if(capsCount % 2 == 0){
        event.target.parentNode.style.backgroundColor = "black";
        capsStatus = false;
        for(var i = 0; i < 10; i ++){
            buttonsArray[i].addEventListener("click",addNumbers);
        }
        
        for(var a = 11; a <= 37; a ++){
            buttonsArray[a].addEventListener("click",addAlphabets);
        }
    
    }
    


}
function addCapsAlphabets(){
    if(capsStatus == true){
        var existingData = displayLocation.textContent;
        var textFromButton = event.target.textContent;
        console.log(lowerCaseToUpperCase(textFromButton));
        existingData += lowerCaseToUpperCase(textFromButton);
        displayLocation.textContent = existingData;
    }
    

}
//Creating Shift Objects for NUmbers
var shiftObject = {
    1 : '!',
    2 : '@',
    3 : '#',
    4 : '$',
    5 : '%',
    6 : '^',
    7 : '&',
    8 : '*',
    9 : '(',
    0 : ')'
};
//Shift Function 
var shiftCount = 0;
buttonsArray[39].addEventListener("click",shiftNumbers);
function shiftNumbers(){
    shiftStatus = true ;
    shiftCount ++;
        
    event.target.parentNode.style.backgroundColor = "green";
    console.log("Inside Shift");
    
    for(var i = 0; i < 10; i ++){
        buttonsArray[i].addEventListener("click",addShiftNumbers);
    }  
    for(var i = 0; i < 10; i ++){
        buttonsArray[i].addEventListener("click",addNumbers);
    }
    
    
   
}
function addShiftNumbers(){
   // event.target.parentNode.style.backgroundColor = "black";
    if(shiftStatus != false){
        var newShiftVar;
        //console.log(event.target.textContent);
        var ancientData = displayLocation.textContent;
        for(x in shiftObject){
            if(event.target.textContent == x){
                    newShiftVar = shiftObject[x];
            }
        }
        ancientData += newShiftVar ;
        displayLocation.textContent = ancientData;
        shiftStatus = false;
        buttonsArray[39].style.background = "black";
        
    }  
}

var countPassword = 0;
var testVariable = "";
buttonsArray[40].addEventListener("click",passwordFunction);

var original_input;
function passwordFunction(){
    if( passwordStatus == false) {
        original_input = displayLocation.textContent;
        passwordStatus = true;
    }
    
    var plainPassword = displayLocation.textContent;
    console.log(plainPassword);
    
    if(countPassword % 2 == 0){
       
        event.target.parentNode.style.backgroundColor = "green";
        var passwordLength = plainPassword.length;
        
        var starredPassword = "";
        for(var i = 0; i < passwordLength - 1;i ++){
            starredPassword += "*";
        }
        starredPassword += plainPassword[passwordLength - 1];
        //console.log(starredPassword);
        displayLocation.textContent = starredPassword;
        
    }
    else {
        buttonsArray[40].style.backgroundColor = "black";
        displayLocation.textContent = original_input;
        console.log("plain Text is ",original_input);
    }
   
    countPassword ++;
}

//Reverse Function

buttonsArray[42].addEventListener("click",reverseData);
var reverseCount = 0;
function reverseData(){
    reverseCount ++;
    if(reverseCount % 2 != 0){
        event.target.parentNode.style.backgroundColor = "green";
        var straightData = displayLocation.textContent;
        var input_array = [];
        var reversedString = "" ;
        for(var i = 0; i < straightData.length; i ++){
            input_array[i] = straightData[i];
        }
        for(var k = input_array.length - 1; k >= 0; k --){
            reversedString += input_array[k];
        }
        console.log(reversedString);
        displayLocation.textContent = reversedString;
    }
    else{
        reverseData();
        event.target.parentNode.style.backgroundColor = "black";
    }
    
}

buttonsArray[41].addEventListener("click",cleanEntry);
function cleanEntry(){
    var badWords = ["beaner","bullshit","busty","circlejerk","darkie","ecchi","escort","faggot","frotting","grope"];
    
}


