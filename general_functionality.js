/* Clock */

const timeElement = document.getElementById("clock");
const dateElement = document.getElementById("date")

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    timeElement.innerText = clockStr;
}



/* Date */

function updateDate() {
    const now = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric'};
    const dateStr = now.toLocaleDateString('en-GB', options);

    dateElement.innerText = dateStr;
}


 setInterval(updateTime, 1000);

 updateTime();
 updateDate();

// Clock updated
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
// function startTime() {
//     const today = new Date();
//     let h = today.getHours();
//     let m = today.getMinutes();
//     let s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);

//     document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
//     setTimeout(startTime, 1000);
// }

// function checkTime(i) {
//     if (i < 10) {i = "0" + i};
//     return i;
// }


function toggleText() {
    const extraText = document.getElementById("extraText");
    const showMoreBtn = document.getElementById("showMoreBtn");


    if (extraText.style.display === "none" || extraText.style.display === "")
    {
        extraText.style.display = "inline";
        showMoreBtn.textContent = "-->Show Less<--";
    }
    else
    {
        extraText.style.display = "none";
        showMoreBtn.textContent = "-->Show More<--";
    }
}

function popup_submit() {
    // If fonksiyonu ile emial formatini kontrol et
    alert("You succesfully submitted your message!");

    // alert("Please enter a legit email address.")
}

// function validateForm() {
//     let name_check = document.forms["contact_with_me"]["name"].value;
//     let email_check = document.forms["contact_with_me"]["email"].value;
//     let msg_check = document.forms[contact_with_me]["message"].value;
    
//     if (name_check !== "" && email_check !== "" /* || formata uygun degilse */ && msg_check !== ""){
        
//     }

//     elseif (name_check == "") {
//         alert("Name must be filled out.")
//     }

//     elseif (email_check == "") {
//         alert("Email must be filled out");
//     }
//     //if else format check

//     elseif (msg_check == "") {
//         alert("Type something before you send!");
//     }
// }

// Modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
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