import anime from "animejs";

export default class header {
  constructor(public node: Element) {}

  _Header = new IntersectionObserver(([node]) => {
    if (node.isIntersecting) {
      anime({
        targets: node.target,
        delay: 200,
        duration: 700,
        scale: [1.3, 1],
        translateY: [50, 0],
        opacity: [0, 1],
        update: () => {
          // this._Header.unobserve(node.target);
        },
      });
    }
  });

  ob() {
    this._Header.observe(this.node);
  }
}
