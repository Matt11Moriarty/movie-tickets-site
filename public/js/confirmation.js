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
    // if (response.ok) {
    //     document.location.replace(`/confirmation/?&movieId=${movie_id}&selectedSeats=[${selectedSeats}]`)
    // } else {
    //     alert('Failed to post seats')
    // }
 
}

const showTickets = async (event) => {
    
    const response = await fetch(`/api/ticket`)
}

document.querySelector('.ticket-button').addEventListener('click', showTickets);

postSeatdata();