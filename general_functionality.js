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