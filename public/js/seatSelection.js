const rows = [
  { label: 'A', seats: [...Array(10).keys()].map(number => ({ number: number + 1, reserved: false })) },
  { label: 'B', seats: [...Array(10).keys()].map(number => ({ number: number + 1, reserved: false })) },
  { label: 'C', seats: [...Array(10).keys()].map(number => ({ number: number + 1, reserved: false })) },
  { label: 'D', seats: [...Array(10).keys()].map(number => ({ number: number + 1, reserved: false })) },
  { label: 'E', seats: [...Array(10).keys()].map(number => ({ number: number + 1, reserved: false })) },
];

const seats = document.querySelectorAll('.seat');
const submitButton = document.getElementById('submit-seats');
const selectedSeats = [];

seats.forEach((seat, index) => {
  seat.addEventListener('click', () => {
    if (!seat.classList.contains('reserved')) {
      seat.classList.toggle('selected');
      if (seat.classList.contains('selected')) {
        selectedSeats.push(index + 1); 
      } else {
        const seatIndex = selectedSeats.indexOf(index + 1);
        if (seatIndex > -1) {
          selectedSeats.splice(seatIndex, 1);
        }
      }
    }
  });
});


function updateSelectedSeats() {
  const selectedSeatsContainer = document.getElementById('selected-seats-container');
  const selectedSeatsHtml = selectedSeats.map(seatNumber => `<div>Seat ${seatNumber}</div>`).join('');
  selectedSeatsContainer.innerHTML = `<h2>Selected Seats:</h2>${selectedSeatsHtml}`;
}


function saveSelectedSeats() {
  localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
}

submitButton.addEventListener('click', async () => {
  try {
    const response = await fetch('/api/seats', {
      method: 'POST',
      body: JSON.stringify({ seats: selectedSeats }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const movieId = document.location.href.split('').pop().toString();
    const data = await response.json();
    console.log('Seats saved successfully:', data);
    window.location.href = `/confirmation?&movieId=${movieId}&selectedSeats=${JSON.stringify(selectedSeats)}`;
  } catch (error) {
    console.error('Error:', error);
  }
});
