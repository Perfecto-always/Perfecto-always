import anime from "animejs";
import Letterize from "letterizejs";
import Header from "./header";

/**
 * For first section
 */
const title = document.getElementById("hero-title")!;
const subtitle = document.getElementById("hero-subtitle")!;

const word = new Letterize({ targets: title });
const word2 = new Letterize({ targets: subtitle, wrapper: "p" });

const tl = anime.timeline({
  targets: word.listAll,
  delay: anime.stagger(30),
  duration: 750,
  complete: () => {
    tl2.add({ opacity: 1 });
  },
});

tl.add({ translateY: 40, opacity: 0 }, "-=1000").add({
  translateY: 0,
  opacity: 1,
});

const tl2 = anime.timeline({
  targets: word2.listAll,
  delay: anime.stagger(10),
});

/**
 * For second section
 */

const second = document.getElementById("second-title")!;
const third = document.getElementById("third-title")!;
new Header(second).ob();
new Header(third).ob();

/**
 * Code for responsive navbar
 */
const menu = document.getElementById("menu-toggle");
const navitems = document.getElementById("navitems");
const navitem = navitems?.children;

menu?.addEventListener(
  "click",
  () => {
    menu.classList.toggle("opened");
    navitems?.classList.toggle("expanded");
    document.body.classList.toggle("hidden");
    anime({
      targets: navitems,
      delay: 200,
      translateX: [-100, 0],
      opacity: [0, 1],
    });

    for (let i = 0; i < navitem?.length!; i++) {
      navitem?.item(i)!.addEventListener("click", () => {
        menu.classList.remove("opened");
        navitems?.classList.remove("expanded");
        document.body.classList.remove("hidden");
      });
    }
  },
  false
);
