function getFlights(){
    const url = "https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights";
    return fetch(url)
        .then(data => data.json())
        .then(flights => flights);
}

function loadCard(flight, index) {
    const card = document.createElement("li");
    card.innerHTML = cardTemplate(flight.destination, flight.outboundDate, flight.inboundDate, flight.thumb);
    document.getElementById(defineList(flight.outboundDate)).appendChild(card);
}

function cardTemplate(destination, outboundDate, inboundDate, thumb){
    return (
        `<div class="flight-card" style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${thumb})">
            <h3>${destination}</h3>
            <strong>${formatDate(outboundDate)} - ${formatDate(inboundDate)}</strong>
        </div>`
    );
}

function defineList(outboundDate){
    return new Date(outboundDate) > new Date() ? "upcoming-flights-list" : "past-flights-list";
}

function formatDate(unFormattedDate){
    const options = { day: 'numeric', month: 'short' };
    const formattedDate = new Date(unFormattedDate);
    return formattedDate.toLocaleDateString("en-GB", options);
}

async function init() {
    const flights = await getFlights();
    flights.forEach((flight, index) => loadCard(flight, index))
}

init();