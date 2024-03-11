// JavaScript source code
//button linking codes
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('logoButton').addEventListener('click', function () {
        window.location.href = 'Landing page.html'; // Replace with your login page file name
    });
    document.getElementById('loginButton').addEventListener('click', function () {
        window.location.href = 'Login page.html'; // Replace with your login page file name
    });

    document.getElementById('signupButton').addEventListener('click', function () {
        window.location.href = 'Registeration.html'; // Replace with your registration page file name
    });
    document.getElementById('featuresButton').addEventListener('click', function () {
        window.location.href = 'Features.html'; // Replace with your login page file name
    });

    document.getElementById('tipsButton').addEventListener('click', function () {
        window.location.href = 'TIPS.html'; // Replace with your registration page file name
    });
    document.getElementById('recommendationsButton').addEventListener('click', function () {
        window.location.href = 'Recommendations.html'; // Replace with your registration page file name
    });
    document.getElementById('aboutusButton').addEventListener('click', function () {
        window.location.href = 'About Us.html'; // Replace with your registration page file name
    });

    document.getElementById('cfp_button').addEventListener('click', function () {
        window.location.href = 'CFP .html'; // Replace with your registration page file name
    });
    document.getElementById('sg_button').addEventListener('click', function () {
        window.location.href = 'Shopping Guide.html'; // Replace with your registration page file name
    });
    document.getElementById('recipe_button').addEventListener('click', function () {
        window.location.href = 'Eco friendly.html'; // Replace with your registration page file name
    });

    document.getElementById('EC_button').addEventListener('click', function () {
        window.location.href = 'ENERGY Tips.html'; // Replace with your registration page file name
    });
    document.getElementById('WR_button').addEventListener('click', function () {
        window.location.href = 'Water tips.html'; // Replace with your registration page file name
    });
    document.getElementById('WC_button').addEventListener('click', function () {
        window.location.href = 'Waste tips.html'; // Replace with your registration page file name
    });

    document.getElementById('PR_button').addEventListener('click', function () {
        window.location.href = 'Personalized Recommmendations.html'; // Replace with your registration page file name
    });
    document.getElementById('reports_button').addEventListener('click', function () {
        window.location.href = 'Reports.html'; // Replace with your registration page file name
    });
    document.getElementById('ff_button').addEventListener('click', function () {
        window.location.href = 'feedback.html'; // Replace with your registration page file name
    });
});

//Register button functioning
document.getElementById('registerButton').addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var designation = document.getElementById('designation').value;

    if (!name || !email || !password || !age || !gender || !designation) {
        alert("Error: Please fill all the fields.");
        return;
    }

    // Here, you can add code to handle the registration, like sending data to a server.
    // For now, just showing a success message.
    alert("Registration successful!");

    // Optionally, clear the form or redirect the user
    // document.getElementById('yourFormId').reset();
    // window.location.href = 'some-other-page.html';
});

//Login Button functioning
document.getElementById('loginButton').addEventListener('click', function () {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
   

    if (!email || !password) {
        alert("Error: Please fill all the fields.");
        return;
    }

    // Here, you can add code to handle the registration, like sending data to a server.
    // For now, just showing a success message.
    alert("Registration successful!");

    // Optionally, clear the form or redirect the user
    // document.getElementById('yourFormId').reset();
    // window.location.href = 'some-other-page.html';
});

