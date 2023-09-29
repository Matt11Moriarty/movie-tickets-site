let qrCode = document.querySelector('#qr-code');

const postSeatdata = async () => {
    let currentURL = document.location.href;
    let urlParams = new URLSearchParams(currentURL);
    let movie_id = urlParams.get('movieId');
    let seats = urlParams.get('selectedSeats');
    if (seats) {
        seats = JSON.parse(seats).toString()
    }
    const response = await fetch('/api/confirmation', {
        method: 'POST',
        body: JSON.stringify({ movie_id, seats }),
        headers: {
            'Content-Type': 'application/json',
        }
    }); 
}

const showTickets = async (event) => {
    let currentURL = document.location.href;
    let urlParams = new URLSearchParams(currentURL);
    let movie_id = urlParams.get('movieId');
    let seats = urlParams.get('selectedSeats');
    if (seats) {
        seats = JSON.parse(seats).toString()
    }
    const response = await fetch(`/api/tickets`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (response.ok) {
        let responseData = await response.json();
        qrCode.innerHTML = `<img src=${responseData.qrTicket}>`;
    } else {
        alert('Failed to get ticket')
    }
}

document.querySelector('#ticket-button').addEventListener('click', showTickets);


postSeatdata();