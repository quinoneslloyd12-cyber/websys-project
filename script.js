$(document).ready(function() {
    
    // 1. Custom Aesthetic Prompt Logic
    const $overlay = $('#custom-prompt-overlay');
    const $nameInput = $('#visitor-name-input');
    const $confirmBtn = $('#confirm-access-btn');

    $confirmBtn.on('click', function() {
        const userName = $nameInput.val().trim();
        
        if(userName !== "") {

            $('#visitor-greeting').text(`User: ${userName}`);
            $('#welcome-msg').text(userName);

            $overlay.css('opacity', '0');
            setTimeout(() => {
                $overlay.hide();
            }, 500);
        } else {

            $nameInput.css('border-color', 'red');
            setTimeout(() => { $nameInput.css('border-color', 'var(--accent)'); }, 500);
        }
    });

    $nameInput.on('keypress', function(e) {
        if(e.which === 13) $confirmBtn.click();
    });

});

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
