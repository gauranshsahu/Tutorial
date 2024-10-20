document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('search-button').addEventListener('click', function () {
       var busNumber = document.getElementById('search-input').value.trim(); 
        if (busNumber) {
          
            window.location.href = 'home1.html?bus=' + encodeURIComponent(busNumber);
        } else {
            alert("Please enter a bus number."); 
        }
    });
});
