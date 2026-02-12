// Example using dummy data, replace with backend API call
const sportsContainer = document.getElementById("sportsContainer");

const dummyMatches = [
    {title: "Pakistan vs India", score: "210/3", status: "Live"},
    {title: "England vs Australia", score: "150/2", status: "Upcoming"}
];

dummyMatches.forEach(match => {
    const div = document.createElement("div");
    div.classList.add("match-card");
    div.innerHTML = `
        <h3>${match.title}</h3>
        <p>Score: ${match.score}</p>
        <p>Status: ${match.status}</p>
    `;
    sportsContainer.appendChild(div);
});
