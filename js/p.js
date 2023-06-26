let nav = 0;
let clicked = null;
let events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [];

const calendar = document.getElementById("calendar");
const newEventModal = document.getElementById("newEventModal");
const deleteEventModal = document.getElementById("deleteEventModal");
const backDrop = document.getElementById("modalBackDrop");
const eventTitleInput = document.getElementById("eventTitleInput");

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function openModal(date) {
  clicked = date;

  const eventForDay = events.find((e) => e.date === clicked);

  if (eventForDay) {
    document.getElementById("eventText").innerText = eventForDay.title;
    deleteEventModal.style.display = "block";
  } else {
    newEventModal.style.display = "block";
  }

  backDrop.style.display = "block";
}

function load() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

  document.getElementById("monthDisplay").innerText = `${dt.toLocaleDateString(
    "es-us",
    { month: "long" }
  )} ${year}`;

  calendar.innerHTML = "";

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement("div");
    daySquare.classList.add("day");

    const dayString = `${month + 1}/${i - paddingDays}/${year}`;

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      const eventForDay = events.find((e) => e.date === dayString);

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = "currentDay";
      }

      if (eventForDay) {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event");
        eventDiv.innerText = eventForDay.title;
        daySquare.appendChild(eventDiv);
      }

      daySquare.addEventListener("click", () => openModal(dayString));
    } else {
      daySquare.classList.add("padding");
    }

    calendar.appendChild(daySquare);
  }
}

function closeModal() {
  eventTitleInput.classList.remove("error");
  newEventModal.style.display = "none";
  deleteEventModal.style.display = "none";
  backDrop.style.display = "none";
  eventTitleInput.value = "";
  clicked = null;
  load();
}



let reservaTimeCount = 0;
function saveEvent() {

    class Agenda {
        constructor(time, day, disponibility) {
          this.time = time;
          this.day = day;
          this.propietario = disponibility;
        }}


  if (eventTitleInput.value) {
    eventTitleInput.classList.remove("error");

    events.push({
      date: clicked,
      title: eventTitleInput.value,
    });

    available(time); {
        return (hora >= 8 && hora <= 12) || (hora >= 15 && hora <= 19);
      }
    }

    const agenda1 = new Agenda();

  for (let index = 1; index <= 1; index++) {
    let entry = parseInt(
      prompt(
        "Ingresa un horario en el que te gustaría entrenar con nosotros y te diremos si tenemos disponibilidad horaria. Horario Militar, ejemplo 16"
      )
    );
    if (agenda1.available(entry)) {
      alert("Este horario está disponible: " + entry);
    } else {
      alert("Este horario no está disponible: " + entry);
    }
  }

  reserveTimeCount++;
  if (reservaHorariaCount >= 3) {
    alert("Ya has realizado el máximo de reservas horarias permitidas");
  } else {
    events.push({
        date: clicked,
        title: eventTitleInput.value,
      });
    alert("Reserva: " + newTime.reserve);
  }
  
  localStorage.setItem("events", JSON.stringify(events));
    closeModal();
  


    


function deleteEvent() {
  events = events.filter((e) => e.date !== clicked);
  Swal.fire({
    title: "¿Que pasó?",
    text: "Recuerda que entrenar no te beneficia sólo a nivel físico, es un espacio de tiempo para ti que dedicas para liberar estrés, malos rollos y ganar en salud física y mental",
    imageUrl: "../img/h.webp",
    imageWidth: "25%",
    showCloseButton: "true",
  });
  localStorage.setItem("events", JSON.stringify(events));
  closeModal();
}

function initButtons() {
  document.getElementById("nextButton").addEventListener("click", () => {
    nav++;
    load();
  });

  document.getElementById("backButton").addEventListener("click", () => {
    nav--;
    load();
  });

  document.getElementById("saveButton").addEventListener("click", saveEvent);
  document.getElementById("cancelButton").addEventListener("click", closeModal);
  document
    .getElementById("deleteButton")
    .addEventListener("click", deleteEvent);
  document.getElementById("closeButton").addEventListener("click", closeModal);
}

initButtons();
load();














