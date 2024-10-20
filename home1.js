document.addEventListener('DOMContentLoaded', function() {
    
    var busData = {
        81: { detail: "Official bus no. - MP.09.CZ.8822<br>Driver name - Rajesh Kumar<br>Bus route - Khandwa road - school" },
        82: { detail: "Official bus no. - MP.09.CZ.8823<br>Driver name - Brijesh Rathore<br>Bus route - Khandwa road - school" },
        83: { detail: "Official bus no. - MP.09.CZ.8824<br>Driver name - Suresh Sharma<br>Bus route - AB road - school" },
        84: { detail: "Official bus no. - MP.09.CZ.8825<br>Driver name - Anil Mehta<br>Bus route - Vijay Nagar - school" },
    };

    function getQueryParam(param) {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    
    var busNumber = getQueryParam('bus');
    var busDetailsDiv = document.getElementById('bus-details');

    
    if (busData[busNumber]) {
        busDetailsDiv.innerHTML = busData[busNumber].detail; // Display corresponding details
    } else {
        busDetailsDiv.innerHTML = "No details found for bus number: " + busNumber; 
    }
});
