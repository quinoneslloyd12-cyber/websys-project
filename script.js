window.onload = function() {
    const visitorName = prompt("Welcome! What is your name?");
    const welcomeMsg = document.getElementById("welcome-msg");
    if (visitorName) {
        welcomeMsg.style.opacity = "0";
        welcomeMsg.innerText = `Welcome, ${visitorName}!`;
        setTimeout(() => { welcomeMsg.style.opacity = "1"; welcomeMsg.style.transition = "2s"; }, 500);
    }
};

const toggleBtn = document.getElementById("toggle-bio");
const extraBio = document.getElementById("extra-bio");

toggleBtn.onclick = function() {
    if (extraBio.style.display === "none" || extraBio.style.display === "") {
        extraBio.style.display = "block";
        extraBio.style.animation = "fadeInUp 0.5s ease";
        toggleBtn.innerText = "Show Less";
    } else {
        extraBio.style.display = "none";
        toggleBtn.innerText = "View Core Values";
    }
};

document.getElementById("add-skill-btn").onclick = function() {
    const input = document.getElementById("new-skill");
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.innerText = input.value;
        li.style.color = "#004a99";
        document.getElementById("backend-list").appendChild(li);
        input.value = "";
    }
};

$(document).ready(function() {
    
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();

        $(this).fadeOut(500, function() {
            $('#form-feedback').text("Message Sent Successfully!").fadeIn().css("color", "green");
        });
    });

    $('#theme-switch-wrapper').append('<button id="theme-toggle">Switch to Dark Mode</button>');
        
        $('#theme-toggle').on('click', function() {
            $('body').toggleClass('dark-mode');
            
            if($('body').hasClass('dark-mode')) {
                $(this).text('Switch to Light Mode');
            } else {
                $(this).text('Switch to Dark Mode');
            }
    });
});