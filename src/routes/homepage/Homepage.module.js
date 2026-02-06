// HOMEPAGE CLASS

// imports
import AnimationClass from "../../js/animation";
import cubicBezier from "../../js/cubicBezier";

export default class HomepageClass {
  constructor(_root, _styles) {
    this.styles = _styles;
    this.root = _root;
    this.title = this.root.querySelector(`.${this.styles.Title}`);
    this.paragraph = this.root.querySelectorAll(`.${this.styles.Paragraph}`);

    this.tl = new AnimationClass(
      {
        duration: 400,
        easing: cubicBezier.celebratoryEaseOut,
        stagger: 125,
        initialDelay: 250
      }
    );
  }

  init() {
    console.log('Homepage ok!');
  }
}
