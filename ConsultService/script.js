const projects = [
    {
        title: "Energy Meter",
        description: "Real-time energy monitoring system that measures voltage, current, power, and energy consumption using ESP32 and sensor modules. Displays data through a simple interface for tracking and analysis of electrical usage in basic setups.",
        tags: ["ESP32", "Web UI", "Sensors", "IoT"]
    },
    {
        title: "Facial Integrated System Technology",
        description: "Face recognition-based attendance system that identifies students and records presence automatically using a local processing setup. Built for school use to simplify attendance tracking and improve verification efficiency without relying on cloud services.",
        tags: ["Machine Learning", "Raspberry Pi", "Database", "Web UI", "IoT"],
        link: "https://github.com/IchimakiKasura/prototype-faceapi-code"
    },
    {
        title: "Solar charging station w/ Piso Wifi",
        description: "Solar-powered charging station integrated with a basic Piso WiFi system for controlled internet access and device charging. Designed for low-cost, off-grid public use with simple power management and user access control.",
        tags: ["ESP8266", "Web UI","Sensors", "IoT"]
    },
    {
        title: "School Database RFID",
        description: "RFID-based school database system for student identification and record tracking using card scanning. Designed to simplify attendance and basic data retrieval in school environments.",
        tags: ["RFID", "Application", "IoT"],
        link: "https://github.com/IchimakiKasura/prototype"
    },
    {
        title: "Earthquake Detection and Automated Bell System",
        description: "Detects seismic vibrations and triggers an emergency alarm bell. Also functions as a scheduled school bell system for class changes, dismissal, and fixed-time events.",
        tags: ["Arduino", "Sensors", "Bell", "Speaker"]
    },
    {
        title: "Megu-Clock",
        description: "Arduino-based digital clock with RTC timekeeping, alarms, and customizable display features using ST7735 screen and button controls.",
        tags: ["Embedded System", "RTC", "Custom PCB"],
        link: "https://github.com/IchimakiKasura/MeguClock"
    },
];

const feedbacks = [
    {
        quote: "Thank you Po talaga sa help nyo kuya 🙏",
        author: "Junior HS Student"
    },
    {
        quote: "helluu poo tapos na po ung presentation namin and it turn out good, specially sa prototype kaya we would like to thank u sa service hehe",
        author: "PUP Student"
    },
    {
        quote: `ayoo ichii jwu HAHAHAHA thank you sa pag help. <br>
                Thank you ichi sa pag repair nung mga wires Hahahah`,
        author: "SHS Student"
    },
    {
        quote: `Thankyouusomuchh po <a href="https://github.com/IchimakiKasura" target="blank_" style="color:#38bdf8">@Ichimaki Kasura</a> sa help niyopo research defended po`,
        author: "SHS Student"
    }
];

const images = [
    "product_1_1.jpg",
    "product_1_2.jpg",
    "product_2.jpg",
    "product_3_first.jpg",
    "product_3_cleaned.jpg",
    "product_4.jpg",
    "product_5_1.jpg",
    "product_5_2.jpg",
    "product_6.png",
    "product_7_1.png",
    "product_7_2.jpg",
    "product_7_3.jpg",
]

const projectsContainer = document.getElementById("projectsContainer");
const feedbackContainer = document.getElementById("feedbackContainer");
const galleryContainer = document.getElementById("galleryContainer");

projects.forEach(project => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>

        <div class="tags">
            ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>

        ${project.link ? `
            <a class="icon-btn" href="${project.link}" target="_blank" title="Visit Repository">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
            </a>
        ` : ""}
    `;

    projectsContainer.appendChild(card);
});

feedbacks.forEach(feedback => {

    const card = document.createElement("div");
    card.className = "testimonial";

    card.innerHTML = `
        <div class="quote">${feedback.quote}</div>
        <div class="author">— ${feedback.author}</div>
    `;

    feedbackContainer.appendChild(card);
});

images.forEach(image => {
    galleryContainer.innerHTML += `<img src="img/gallery/${image}"/ onclick="picturePreview(this)">`;
});

function picturePreview(x) {
    document.querySelector(".image_preview").style.display = 'flex';
    document.querySelector("#preview_img_placeholder").src = x.src;
}

function closePreview() {
    document.querySelector(".image_preview").style.display = 'none';
}