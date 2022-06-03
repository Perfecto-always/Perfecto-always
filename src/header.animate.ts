import anime from "animejs";

export default class header {
  node!: Element;
  constructor(node: Element) {
    this.node = node;
  }

  public _Header = new IntersectionObserver(
    ([node]) => {
      if (node.isIntersecting) {
        anime({
          targets: node.target,
          delay: 200,
          duration: 1000,
          translateY: [30, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          update: () => {
            this._Header.unobserve(node.target);
          },
        });
      }
    },
    { threshold: [0, 0.5, 1] }
  );

  ob() {
    this._Header.observe(this.node);
  }
}
