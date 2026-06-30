/* ==========================
   TOPPER STUDY HUB
   JavaScript
========================== */

// Open Popup
function openPopup(id) {
    document.getElementById(id).style.display = "block";
    document.body.style.overflow = "hidden";
}

// Close Popup
function closePopup(id) {
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto";
}

// Close popup when clicking outside
window.onclick = function(event) {

    const popups = document.querySelectorAll(".popup");

    popups.forEach(function(popup){

        if(event.target === popup){

            popup.style.display = "none";
            document.body.style.overflow = "auto";

        }

    });

};

// Close popup using ESC key
document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){

        const popups = document.querySelectorAll(".popup");

        popups.forEach(function(popup){

            popup.style.display = "none";

        });

        document.body.style.overflow = "auto";

    }

});

// Optional Welcome Message
window.onload = function(){

    console.log("Topper Study Hub Loaded Successfully!");

};
