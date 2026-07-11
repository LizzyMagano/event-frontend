document.addEventListener("DOMContentLoaded", () => {
  const events = [
    { name: "Tech Conference", date: "July 20, 2026" },
    { name: "Music Festival", date: "August 5, 2026" },
    { name: "Art Exhibition", date: "September 1, 2026" }
  ];

  const list = document.getElementById("event-list");

  events.forEach(event => {
    const li = document.createElement("li");
    li.textContent = `${event.name} - ${event.date}`;
    list.appendChild(li);
  });
});
