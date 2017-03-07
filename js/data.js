/* ======================================================================

DO NOT CLICK PREVENT THIS PAGE FROM CREATING ADDITIONAL DIALOGUES

====================================================================== */


/* ======================================================================

Functions - DisplayEmail and Instructions 

====================================================================== */

function message(){
    var emailMessage =  document.createElement('p');
    var finderMessage = document.createElement('p'); 
    


     var email = prompt("Please enter your email");   
    var formatEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if (email==null || email=="")
      {
          alert("Please fill in the box");
          location.reload(true);
      }
    else if (!email.match("@"))
      {
          alert("you require the @ symbol")
          location.reload(true);
      } 
  
       
    
    document.getElementById("main-nav").appendChild(emailMessage);    
    emailMessage.innerHTML = "Your email is: " + email;
    document.getElementById("instructions").appendChild(finderMessage);
    finderMessage.innerHTML = "Thank you for using Happy Hotel Hunting. To get started adjust the Finder tools to what you want.";
}

/* ======================================================================

Functions - Constructs objects inside a array like OOP

====================================================================== */
function hotelDetails(name, rating, distance, wifi, pet, swimming, price, breakfast, image, uniqueID, wrapperOne, wrapperTwo)
{
    var newHotel =
    {
        name: name,
        rating: rating,
        distance :distance,
        wifi: wifi,
        pet: pet,
        swimming: swimming,
        price : price,
        breakfast: breakfast,
        image: image,
        uniqueID: uniqueID,
        wrapperOne: wrapperOne,
        wrapperTwo :wrapperTwo
    }    
    return newHotel;
}


/* ======================================================================

Array - details stored in a object inside an array

====================================================================== */

var hotelArray = [];

hotelArray.push(hotelDetails("The Grand", 5, 0.5, true, false, false, 190, 25, "<img src='images/theGrand.jpg'alt='the grand' />", "theGrand", "theGrandWrapperOne","theGrandWrapperTwo"));
hotelArray.push(hotelDetails("The Plaza", 4, 1, true, false, true, 70, 8, "<img src='images/thePlaza.jpg' alt='the Plaza' />","thePlaza", "thePlazaWrapperOne","thePlazaWrapperTwo"));
hotelArray.push(hotelDetails("The Lord Milburn", 4, 5, true, true, false, 65, 5, "<img src='images/theLordMilburn.jpg' alt='he lord milburn' />","theLordMilburn", "theLordMilburnWrapperOne","theLordMilburnWrapperTwo"));
hotelArray.push(hotelDetails("The Grange", 3, 1, true, false, false, 57, 0, "<img src='images/theGrange.jpg' alt='the Grange' />", "theGrange", "theGrangeWrapperOne","theGrangeWrapperTwo"));
hotelArray.push(hotelDetails("The Windmill", 1, 10, false, false, false, 5, 2, "<img src='images/theWindmill.jpg' alt='the windmill' />","theWindmill", "theWindmillWrapperOne","theWindmillWrapperTwo"));
hotelArray.push(hotelDetails("The Excel", 3, 0.5, true, true, false, 56, 6, "<img src='images/theExcel.jpg'alt='the excel' />","theExcel" , "theExcelWrapperOne","theExcelWrapperTwo"));
hotelArray.push(hotelDetails("The Ritz", 2, 5, true, false, false, 14, 5, "<img src='images/theRitz.jpg'alt='the Ritz' />","theRitz", "theRitzWrapperOne","theRitzWrapperTwo"));
hotelArray.push(hotelDetails("The Victoria", 4, 0.5, true, false, false, 80, 7, "<img src='images/theVictoria.jpg' alt='the victoria'/>","theVictoria", "theVictoriaWrapperOne","theVictoriaWrapperTwo"));
hotelArray.push(hotelDetails("Phoenix House", 4, 1, true, false, false, 72, 8, "<img src='images/thePhoenix.jpg' alt='the Pheonix' />","phoenixHouse", "phoenixHouseWrapperOne","phoenixHouseWrapperTwo"));
hotelArray.push(hotelDetails("The Lodge", 2, 1, false, false, false, 25, 5, "<img src='images/theLodge.jpg'alt='the lodge' />","theLodge", "theLodgeWrapperOne","theLodgeWrapperTwo"));
hotelArray.push(hotelDetails("The Sanctum", 5, 2, true, false, true, 180, 40, "<img src='images/theSanctum.jpg' alt='the Sanctum' />", "theSanctum", "theSanctumWrapperOne","theSanctumWrapperTwo"));


/* ======================================================================

array - placeholder conditions, which are triggered as soon as the controls are changed

====================================================================== */

var conditions = [0, 5, true, false, false, 190, 100];



/* ======================================================================

Functions - Displays the title inside a section element, with header one element
          - Add mainContent as a class for each section.
          - Add UniqueID param as an ID for each section.

====================================================================== */

function appendTitle(loop, uniqueID, wrapperOneID, wrapperTwoID) {    
    //Varaible Holder
    var section = document.createElement('section');
    var header = document.createElement('h2');
    var titleNode = document.createTextNode(hotelArray[loop].name);

    var wrapperOne = document.createElement('div');
    var wrapperTwo = document.createElement('div');   
    
    //append title
    section.appendChild(header);
    header.appendChild(titleNode);
    document.getElementById("hotelInfo").appendChild(section);
    
    //append ID and class   
    section.id =uniqueID;
    section.className = "mainContent";
    
    document.getElementById(uniqueID).appendChild(wrapperTwo);
    document.getElementById(uniqueID).appendChild(wrapperOne);
    
    wrapperOne.id = wrapperOneID;
    wrapperOne.className = "contentWrapper";
    
    wrapperTwo.id = wrapperTwoID;
    wrapperTwo.className = "contentWrapper";
     
}

/* ======================================================================

Functions - loop the remaining objects in the array

====================================================================== */
function appendInformation(title, htmlElement, arrayValue, UniqueID, wrapperOneID) {
    //varaible holders
    var content_info = document.createElement(htmlElement);
    var header = document.createElement('h3');
    var titleNode = document.createTextNode(title);
    var paragraph = document.createElement('p');
    var contentNode = document.createTextNode(arrayValue);
    
    //append Information
    content_info.appendChild(header);
    header.appendChild(titleNode);
    content_info.appendChild(paragraph);
    paragraph.appendChild(contentNode);
    
   
    document.getElementById(wrapperOneID).appendChild(content_info);
    
    
    content_info.appendChild(header);
    content_info.appendChild(paragraph);
    
    content_info.className = "content-information";

}

function appendImage(loop, uniqueID, wrapperTwoID){
    document.getElementById(wrapperTwoID).innerHTML = uniqueID;
}


/*
======================================================================

  Main Function: updateForm by Clearing Content.
  
======================================================================
*/


function updateForm() {
    //clear Content
    clearContent();
   
    //form update Controls
    formControl();
    
    //change the second array of condition
    changeRating(conditions[0], conditions[1], conditions[2], conditions[3], conditions[4], conditions[5], conditions[6]);  
     
    
}

/* ======================================================================

functions - Clear Content

====================================================================== */

function clearContent() {
    
    document.getElementById("hotelInfo").innerHTML = "";
    
}



/* ======================================================================

  functions -  control the form controls and array content-info.

====================================================================== */

function formControl() {

    if (
        document.getElementById("wifi").checked == true) {

        conditions[2] = true;

    } 
    else
    {
           conditions[2] = false;
    }
    
    if( document.getElementById("pet").checked == true){
         conditions[3] = true;
        
    } 
    else
    {
           conditions[3] = false;
    }
    
    
    if( document.getElementById("pool").checked == true){
         conditions[4] = true;
    } 
    else{
           conditions[4] = false;
    }
    
    if(document.getElementById("starRating")){
        conditions[0] = parseFloat(document.getElementById("starRating").value);
    }
    
    if(document.getElementById("distance")){
            conditions[1] = parseFloat(document.getElementById("distance").value);
    }
    
  if(document.getElementById("maxRoom")) {
        conditions[5] = parseFloat(document.getElementById("maxRoom").value);
    }
  
    if(document.getElementById("maxFood")){
         conditions[6] = parseFloat(document.getElementById("maxFood").value);
    }

}


function turnOffExtras(){

    
    if (document.getElementById("disableExtra").checked == false){
        
        
     	document.getElementById("wifi").disabled = false;
        document.getElementById("pet").disabled = false;
        document.getElementById("pool").disabled = false;
        
  } else if (document.getElementById("disableExtra").checked == true){
      
        document.getElementById("wifi").checked = false;
        document.getElementById("pet").checked = false;
        document.getElementById("pool").checked = false;
        document.getElementById("wifi").disabled = true;
        document.getElementById("pet").disabled = true;
        document.getElementById("pool").disabled = true;
  }
        clearContent()
        changeRating(conditions[0], conditions[1], conditions[2], conditions[3], conditions[4], conditions[5], conditions[6])
}

/* ======================================================================

  functions -  Filters the content-info, result array may be used later on

====================================================================== */
function changeRating(rating, distance, wifi, pets, swimmingPool,price , breakfast) {
   
  console.debug(conditions);

    for (var i = 0; i < hotelArray.length; i++) {
        
        if(document.getElementById("disableExtra").checked == false){
            if (
                hotelArray[i].rating >= rating && 
                hotelArray[i].distance <= distance && 
                hotelArray[i].wifi === wifi && 
                hotelArray[i].pet === pets && 
                hotelArray[i].swimming === swimmingPool &&
                hotelArray[i].price <=  price &&
                hotelArray[i].breakfast <= breakfast) 
            {
                    displaySet(i)
            }
        } else if (document.getElementById("disableExtra").checked == true){
            if (
                hotelArray[i].rating >= rating && 
                hotelArray[i].distance <= distance &&     
                hotelArray[i].price <= price &&
                hotelArray[i].breakfast <= breakfast)
            {         
                displaySet(i);
            }          
        }  
    }
}

function displaySet(loop){
    appendTitle(loop, hotelArray[loop].uniqueID, hotelArray[loop].wrapperOne, hotelArray[loop].wrapperTwo);
    
    appendInformation("Star Rating","div", hotelArray[loop].rating, hotelArray[loop].uniqueID, hotelArray[loop].wrapperOne);
    appendInformation("Distance","div", hotelArray[loop].distance, hotelArray[loop].uniqueID, hotelArray[loop].wrapperOne);
    appendInformation("Wifi?","div", hotelArray[loop].wifi, hotelArray[loop].uniqueID, hotelArray[loop].wrapperOne);
    appendInformation("Pets?","div", hotelArray[loop].pet, hotelArray[loop].uniqueID, hotelArray[loop].wrapperOne);
    appendInformation("Swimming?","div", hotelArray[loop].swimming, hotelArray[loop].uniqueID, hotelArray[loop].wrapperOne);
    appendInformation("Hotel Price","div", hotelArray[loop].price, hotelArray[loop].uniqueID, hotelArray[loop].wrapperOne);
    appendInformation("Breakfast Price","div", hotelArray[loop].breakfast, hotelArray[loop].uniqueID, hotelArray[loop].wrapperOne);
    
    appendImage(loop, hotelArray[loop].image, hotelArray[loop].wrapperTwo);
}


/* ======================================================================

  functions -  add event listeners 

====================================================================== */

function addEventListenerSet(){
  
    var distance = document.getElementById("distance");
    var wifi = document.getElementById("wifi");
    var pet = document.getElementById("pet");
    var pool = document.getElementById("pool");
    var disableExtra = document.getElementById("disableExtra");
    var starRating = document.getElementById("starRating");
    var maxFood = document.getElementById("maxFood");
    var maxRoom = document.getElementById("maxRoom");
    
    if(distance)
    {
        distance.addEventListener("change", updateForm, false);
    } 
    if(wifi)
    {
        wifi.addEventListener("click", updateForm, false);
    } 
    if(pet){
        pet.addEventListener("click", updateForm, false);
    }
    if(pool){
        pool.addEventListener("click", updateForm, false);
    }
    if(disableExtra){
        disableExtra.addEventListener("click", turnOffExtras, false);
    }
    if(starRating){
        starRating.addEventListener("click",updateForm, false);
    }
    if(maxFood){
        maxFood.addEventListener("change", updateForm,false);
    }
    if(maxRoom){
        maxRoom.addEventListener("change", updateForm, false);
    }
}


/* ======================================================================

   Autocalls functions on load

====================================================================== */

document.addEventListener("DOMContentLoaded", function(event) {
  addEventListenerSet();
  message();
  changeRating(conditions[0], conditions[1], conditions[2], conditions[3], conditions[4], conditions[5], conditions[6]);

});