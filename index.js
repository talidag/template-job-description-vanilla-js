import {data} from "./data.js"

const {
  title,
  employer,
  departament,
  location,
  workingHours,
  experience,
  jobType,
  postedAt,
  salary,
  jobDescription,
  responsabilities,
  demands,
  oferings,
  generalInfo,
  aboutEmployer,
} = data;

const links = [
  "Acasa",
  "Despre",
  "Servicii",
  "Produse",
  "Cariere",
  "Contact",
];

const info = [
  {
    icon: "./assets/map.svg",
    text: location
  },
  {
    icon:"./assets/briefcase.svg",
    text: workingHours
  },
  {
    icon:"./assets/building.svg",
    text: jobType
  },  
  {
    icon:"./assets/clipboard.svg",
    text: experience
  },  
  {
    icon:"./assets/clock.svg",
    text: `Postat la ${workingHours}`
  },  
  {
    icon:"./assets/money.svg",
    text: `Inverval salarizare neta: ${salary}`
  }
]

// take control of HTML elements and modals for future rendering

const menuIcon = document.querySelector(".menu__icon")
const menuImg = document.querySelector(".menu__img")
const navbarSelector = document.querySelector(".navbar")

const titleSel = document.querySelector(".title")
const employerSel = document.querySelector(".employer")
const departamentSel = document.querySelector(".departament")
const infoSel = document.querySelector(".info")

const descriptionHeader = document.querySelector(".description__header")
const jobParagraph = document.getElementById("jd")
const responsabilitiesSel = document.getElementById("responsabilities")
const demandsSel = document.getElementById("demands")
const offeringsSel = document.getElementById("offerings")
const generalInfoSel = document.getElementById("generalInfo")

const contactPerson = document.querySelector('.contact__person')
const contactRole = document.querySelector(".contact__role")
const contactList = document.getElementById("contat__list")

const phoneId = document.getElementById("phone")
const faxId = document.getElementById("fax")
const emailId = document.getElementById("email")
const addressId = document.getElementById("address")


const burgerMenuSrc = "./assets/burger.svg"
const closeMenuSrc = "./assets/close.svg"

// Initialize the click state
let click = false

// Function to toggle the menu image source

function toggleMenu() {
  click = !click;
  if (click) {
    menuImg.src = closeMenuSrc
  } else {
    menuImg.src = burgerMenuSrc;
  }
}

// Attach the click event listener to the menu icon

menuIcon.addEventListener("click", toggleMenu)

navbarSelector.classList.toggle("active", click)

links.forEach(link => {
  navbarSelector.innerHTML += 
  `<li class="link ${link==="Cariere" ? "link--orange" : ''}">
    <a href="${link.toLowerCase()}.html" class="anchor">
      ${link}
    </a>
  </li>`
})

info.forEach(element => {
    infoSel.innerHTML +=
`     <div class="item">
        <img src=${element.icon} />
        <p>${element.text}</p>
      </div>`
    
})

titleSel.innerHTML = title
employerSel.innerHTML += employer
departamentSel.innerHTML += departament
jobParagraph.innerHTML = jobDescription

responsabilities.forEach(resp => {
  responsabilitiesSel.innerHTML +=
    `<li>${resp}</li>`
  }
)

demands.forEach(resp => {
  demandsSel.innerHTML +=
    `<li>${resp}</li>`
  }
)

oferings.forEach(resp => {
  offeringsSel.innerHTML +=
    `<li>${resp}</li>`
  }
)

generalInfo.forEach(resp => {
  generalInfoSel.innerHTML +=
    `<li>${resp}</li>`
  }
)

contactPerson.innerHTML = aboutEmployer.name

contactRole.innerHTML =aboutEmployer.title
phoneId.innerHTML += aboutEmployer.phone
faxId.innerHTML += aboutEmployer.fax
emailId.innerHTML += aboutEmployer.email
addressId.innerHTML += aboutEmployer.address