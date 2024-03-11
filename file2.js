// JavaScript source code

document.getElementById('featuresButton').addEventListener('click', function () {
    var dropdown = document.querySelector('#featuresButton .dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('tipsButton').addEventListener('click', function () {
    var dropdown = document.querySelector('#tipsButton .dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

