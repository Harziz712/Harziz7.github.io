let toggleBtn 
let headerLinks
let body
body=  document.querySelector("#hero")
toggleBtn = document.querySelector("#navlink-toggle")
headerLinks = document.querySelector( "#navlink")

toggleBtn.onclick = () => { 
    if( headerLinks.style.display === "none" ){ 
        headerLinks.style.display = "block"
    } else{ headerLinks.style.display = "none"}
 }

 body.onclick = () => { 
    if( headerLinks.style.display === "block" ){ 
        headerLinks.style.display = "none"
    }
 }

 function addRecommendation() {
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
    // If the user has left a recommendation, display a pop-up
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");
      //Call showPopup here
  
   
    showPopup(true);
  }
  else{
    alert("invalid input");
  }
}
  

 function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible'
    } else {
      document.getElementById('popup').style.visibility = 'hidden'
    }
    
  }