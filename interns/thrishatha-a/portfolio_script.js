function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}
const texts = ["Frontend Developer", "Java Developer", "UI Designer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingElement = document.querySelector(".typing");

function typeEffect() {
    if (isDeleting) {
        currentText = texts[index].substring(0, charIndex--);
    } else {
        currentText = texts[index].substring(0, charIndex++);
    }

    typingElement.textContent = currentText;

    if (!isDeleting && charIndex === texts[index].length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

function showStack(type) {
    const content = document.getElementById("stackContent");
    const box = document.getElementById("stackBox");

    const data = {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: ["Java", "OOP", "Collections", "Streams"],
        problem: ["Data Structures", "Algorithms", "Debugging", "Logic Building"]
    };

    content.innerHTML = data[type]
        .map(skill => `<div class="stack-tag">${skill}</div>`)
        .join("");

    box.classList.add("show");

    box.scrollIntoView({ behavior: "smooth", block: "center" });
}

function showProject(type) {
    const box = document.getElementById("projectBox");
    const content = document.getElementById("projectContent");

    const data = {
        dt: {
            title: "Digital Twin based Seizure Prediction",
            desc: "Personalised Digital Twin based Seizure Prediction system, which uses the EEG data from CHB-MIT dataset, creates digital twin, and applies federated learning and differential privacy to it, to predict the seizure intervals.",           
            stack: ["Python", "Machine Learning", "XAI"]
        },
        Blockchain: {
            title: "Blockchain based Product Authentication System",
            desc: "A Product Authentication System which makes use of Ethereum blockchain and Solidity contracts, to register the maufacturers, add products and verify the products, in a simulated blockchain environment.",            
            stack: ["Ethereum blockchain", "Solidity", "Truffle framework", "Ganache", "Metamask"]
        },
        Turret: {
            title: "Automated Gun turret System",
            desc: "An Automated Gun Turret System, which makes use of Arduino board to collect the coordinates of enemy, and shoots the target based on the YOLOv8 model which was trained with the help of Roboflow and openCV.",            
            stack: ["Arduino", "Roboflow", "YOLOv8", "openCV"]
        }
    };

    const p = data[type];

    content.innerHTML = `
        <h2 class="project-title">${p.title}</h2>
        <p class="project-desc">${p.desc}</p>
        <div class="project-stack">
            ${p.stack.map(t => `<div class="project-tag">${t}</div>`).join("")}
        </div>
    `;

    box.classList.add("show");
    box.scrollIntoView({ behavior: "smooth", block: "center" });
}


