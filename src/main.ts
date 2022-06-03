import "./styles/index.scss";
import anime from "animejs";
import Header from "./header.animate";
import Letter from "./utils/Letter";
import { projects } from "./projects";

/**
 * For first section
 */
const title = document.getElementById("hero-title")!;
const subtitle = document.getElementById("hero-subtitle")!;

const word1 = new Letter(title);
const word2 = new Letter(subtitle);

const tl = anime.timeline({
  targets: word1.listAll,
  delay: function (_, i) {
    return i * 100;
  },
  easing: "easeOutExpo",
  complete: () => {
    tl2.play();
  },
});

tl.add({
  translateY: [50, 0],
  opacity: [0, 1],
});

const tl2 = anime.timeline({
  targets: word2.listAll,
  delay: anime.stagger(30),
  elasticity: 0,
});

tl2.add({ translateY: 10, opacity: 0 }).add({
  translateY: 0,
  opacity: 1,
});

/**
 * For other sections
 */

const holders = document.querySelectorAll(".holder");

holders.forEach((holder) => {
  new Header(holder).ob();
});

/**
 * Code for responsive navbar
 */
const menu = document.getElementById("menu-toggle")!;
const nav = document.getElementById("nav")!;
const navitems = document.getElementById("navitems")!;
const navitem = navitems.children;

function toggleNav() {
  menu.classList.toggle("opened");
  navitems.classList.toggle("expanded");
  document.body.classList.toggle("nav-open");
  nav.classList.toggle("nav-open");
}

menu?.addEventListener(
  "click",
  () => {
    toggleNav();
    // tl3.play();
    for (let i = 0; i < navitem?.length!; i++) {
      navitem?.item(i)!.addEventListener("click", () => {
        menu.classList.remove("opened");
        navitems.classList.remove("expanded");
        document.body.classList.remove("nav-open");
        nav.classList.remove("nav-open");
      });
    }
  },
  false
);

/**
 *  Code for projects section
 */

const project = document.getElementById("project-holder")!;

for (let i = 0; i < projects.length; i++) {
  const h6 = document.createElement("h6");
  const p = document.createElement("p");
  const a = document.createElement("a");
  const div = document.createElement("div");

  const technologies = document.createElement("div");

  if (projects[i].link) {
    a.href = projects[i].link!;
    a.target = "_blank";
  }

  const parent = projects[i].link ? a : div;

  parent.classList.add("card");
  h6.innerText = projects[i].name;
  p.innerText = projects[i].description;
  technologies.classList.add("technologies");

  let str = "";

  for (let j = 0; j < projects[i].technologies.length; j++) {
    str += String(projects[i].technologies[j] + " ");
  }

  console.log(str);

  technologies.innerText = str;

  parent.appendChild(h6);
  parent.appendChild(p);
  parent.appendChild(technologies);

  project.appendChild(parent);
}
