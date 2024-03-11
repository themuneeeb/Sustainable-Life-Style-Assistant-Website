
// Function to show the popup with the carbon footprint result
function showPopup(result) {
    document.getElementById('cfpResult').innerText = 'Your estimated carbon footprint is: ' + result.toFixed(2) + ' kg CO2e';
    document.getElementById('popupMessage').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popupMessage').style.display = 'none';
}

// Function to calculate carbon footprint based on the input values
function calculateCarbonFootprint() {
    // The logic here should be the actual calculation based on input values
    // Placeholder for demonstration
    var carbonFootprint = Math.random() * 100; // Random value for demonstration
    showPopup(carbonFootprint);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the calculate button click
    var calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateCarbonFootprint);
    }

    // Event listener for the close button on the popup
    var closeBtn = document.getElementById('closePopup');
    if (closeBtn) {
        closeBtn.addEventListener('click', closePopup);
    }
});
