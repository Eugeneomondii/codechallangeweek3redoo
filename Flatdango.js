document.addEventListener("DOMContentLoaded", () => {
    const endpoint = "http://localhost:3000/films/1";

    fetch(endpoint)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            displayMovieDetails(data);
        })
        .catch((error) => console.error("Error fetching data:", error));

    function displayMovieDetails(movie) {
        const movieDetails = document.getElementById("movie-details");
        const availableTickets = movie.capacity - movie.tickets_sold;

        movieDetails.innerHTML = `
            <h2>${movie.title}</h2>
            <img src="${movie.poster}" alt="${movie.title}">
            <p><strong>Runtime:</strong> ${movie.runtime} minutes</p>
            <p><strong>Showtime:</strong> ${movie.showtime}</p>
            <p><strong>Available Tickets:</strong> ${availableTickets}</p>
            <p><strong>Description:</strong> ${movie.description}</p>
        `;
    }
});
