function showWelcome() {
    alert("Welcome to Smart City Transport Portal");
    console.log("Portal Loaded Successfully");
}

function showDateTime() {
    var now = new Date();
    document.getElementById("datetime").innerHTML = now;
}

function showRoutes() {
    document.getElementById("routes").innerHTML =
        "<ul>" +
        "<li>Route 1 - Colaba Depot to Opera House</li>" +
        "<li>Route 2 - Airport T2 to Andheri(E)</li>" +
        "<li>Route 3 - Dharavi Depot to CST</li>" +
        "</ul>";
}

function calculateFare() {
    var stops = document.getElementById("stops").value;
    var fare = stops * 5;
    document.getElementById("fareResult").innerHTML =
        "Total Fare: ₹" + fare;
}

function checkAvailability() {
    var hour = new Date().getHours();

    if (hour >= 5 && hour <= 23) {
        document.getElementById("availability").innerHTML =
            "Bus Service Available";
    } else {
        document.getElementById("availability").innerHTML =
            "Service Closed (5 AM – 11 PM)";
    }
}

var stopsArray = [
    "Colaba Depot", "CSMT", "Andheri(E)", "Marine Lines",
    "Charni Road", "Opera House", "Airport T2",
    "Marol", "Dharavi Depot", "Sion", "Parel", "Byculla", "CST"
];

var list = "";
for (var i = 0; i < stopsArray.length; i++) {
    list += "<li>" + stopsArray[i] + "</li>";
}
document.getElementById("stopList").innerHTML = list;

function searchStop() {
    var input = document.getElementById("searchStop").value;
    var found = false;

    for (var i = 0; i < stopsArray.length; i++) {
        if (stopsArray[i].toLowerCase() === input.toLowerCase()) {
            found = true;
            break;
        }
    }

    if (found) {
        document.getElementById("searchResult").innerHTML = "Stop Found";
    } else {
        document.getElementById("searchResult").innerHTML = "Stop Not Found";
    }
}

function showRoute() {
    var route = document.getElementById("routeNumber").value;
    var result = "Route Not Found";

    if (route == "1") result = "Colaba Depot → CSMT → Marine Lines → Charni Road → Opera House";
    else if (route == "2") result = "Airport T2 → Marol → Andheri(E)";
    else if (route == "3") result = "Dharavi Depot → Sion → Parel → Byculla → CST";

    document.getElementById("routeResult").innerHTML = result;
}

function showDelay() {
    document.getElementById("delayMessage").innerHTML =
        "Bus delayed by 15 minutes due to traffic.";
}

var schedule = [
    { route: "1", departure: "8:00 AM", arrival: "11:00 am" },
    { route: "2", departure: "6:30 AM", arrival: "8:00 AM" },
    { route: "3", departure: "4:00 PM", arrival: "10:00 PM" },
];

var table = document.getElementById("scheduleTable");

for (var i = 0; i < schedule.length; i++) {
    var row = table.insertRow();
    row.insertCell(0).innerHTML = schedule[i].route;
    row.insertCell(1).innerHTML = schedule[i].departure;
    row.insertCell(2).innerHTML = schedule[i].arrival;
}