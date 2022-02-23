import anime from "animejs";

export default class header {
  done = false;

  constructor(public node: Element) {
    console.log(node);
  }

  _Header = new IntersectionObserver(([node]) => {
    if (this.done === true) return;
    if (node.isIntersecting) {
      anime({
        targets: node.target,
        delay: 300,
        duration: 1000,
        translateY: [50, 0],
        opacity: [0, 1],
        update: () => {
          this.done = true;
        },
      });
    }
  });

  ob() {
    this._Header.observe(this.node);
  }
}
