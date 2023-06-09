const trenInferior = document.getElementById("trenInferior");
trenInferior.addEventListener("click", function (e) {
  Swal.fire({
    title: "Tren Inferior",
    text: "El tren inferior es la parte de abajo de nuestro cuerpo. Los entrenamientos del tren inferior se utilizan para fortalecer piernas, muslos y glúteos",
    imageUrl: "../img/lower.png",
    imageWidth: "25%",
    showCloseButton: true,
  });
});

const trenSuperior = document.getElementById("trenSuperior");
trenSuperior.addEventListener("click", function (e) {
  Swal.fire({
    title: "Tren Superior",
    text: "El tren superior es la parte de arriba de nuestro cuerpo, es decir desde los abdominales para arriba. Estos entrenamientos te trabajan los tríceps, bíceps, Pectorales, abdominales, deltoides, dorsales, oblicuos entre otros",
    imageUrl: "../img/up.png",
    imageWidth: "25%",
    showCloseButton: true,
  });
});

const zonaMedia = document.getElementById("zonaMedia");
zonaMedia.addEventListener("click", function (e) {
  Swal.fire({
    title: "Zona Media",
    text: "Core también conocido como zona media, incluye todos los musculos de la región central del cuerpo. Recto del abdomen, transverso del abdomen",
    imageUrl: "../img/zonamedia.png",
    imageWidth: "25%",
    showCloseButton: true,
  });
});

const fullbody = document.getElementById("fullbody");
fullbody.addEventListener("click", function (e) {
  Swal.fire({
    title: "Full body",
    text: "Es un entrenamiento que te trabaja todo el cuerpo, tren inferior, tren superior y zona media",
    imageUrl: "../img/fullbody.png",
    imageWidth: "25%",
    showCloseButton: true,
  });
});

const aerobico = document.getElementById("aerobico");
aerobico.addEventListener("click", function (e) {
  Swal.fire({
    title: "Aerobico",
    text: "Incrementa el consumo de oxígeno y aumenta el ritmo de la respiración y de la frecuencia cardíaca. Este tipo de entrenamiento es importante para ayudar a mantener nuestro corazón, pulmones y sistema circulatorio sano.",
    imageUrl: "../img/fullbody.png",
    imageWidth: "25%",
    showCloseButton: true,
  });
});

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

async function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove("error");

    events.push({
      date: clicked,
      title: eventTitleInput.value,
    });

    localStorage.setItem("events", JSON.stringify(events));
    closeModal();
    let { value: horario } = await Swal.fire({
      title: "¡Muy buena opción!",
      text: "Ahora elige un horario",
      showCloseButton: "true",
      input: "select",
      inputPlaceholder: "horario",
      inputValue: "",
      inputOptions: {
        seven: "07:00am",
        eight: "08:00am",
        nine: "09:00am",
        ten: "10:00am",
        eleven: "11:00am",
        twelve: "12:00pm",
        thirteen: "01:00pm",
        fourteen: "02:00pm",
        fifteen: "03:00pm",
        sixteen: "04:00pm",
        seventeen: "05:00pm",
        eighteen: "06:00pm",
        nineteen: "07:00pm",
        twenty: "08:00pm",
      },
    });

    await Swal.fire({
      position: "center",
      imageUrl: "../img/a.webp",
      imageWidth: "25%",
      title: "Felicitaciónes",
      text: "¡Clase agendada!",
    });
  } else {
    eventTitleInput.classList.add("error");
  }
}

function deleteEvent() {
  events = events.filter((e) => e.date !== clicked);
  Swal.fire({
    title: "¿Qué pasó?",
    text: "Recuerda que entrenar no solo te hace sentir bien fisicamente. Entrenar es tiempo para ti, que dedicas para liberar estrés, malos rollos y ganar salud física, mental y espiritual",
    imageUrl: "../img/h.webp",
    imageWidth: "25%",
    showCloseButton: true,
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
}

initButtons();
load();
