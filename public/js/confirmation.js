
let currentURL = document.location.href;

// Use URLSearchParams to parse the query parameters
let urlParams = new URLSearchParams(currentURL);
console.log(urlParams);
// Get the values of movieId and selectedSeats
let movieId = urlParams.get('movieId');
let selectedSeats = urlParams.get('selectedSeats');

// If selectedSeats is in JSON format, you can parse it into an array
if (selectedSeats) {
    selectedSeats = JSON.parse(selectedSeats);
}

let data = {
    "movieId": movieId,
    "selectedSeats": selectedSeats,
    // "userId": req.session.user_id
}

console.log(data);

// Log the values to the console
console.log("movieId:", movieId);
console.log("selectedSeats:", selectedSeats);

QRCode.toString()



