
export default class GridClass {
  constructor(_root, _styles) {
    this.root = _root;
    this.styles = _styles;
  }

  init() {
    addEventListener('keypress', (event) => {
      if (event.key === 'g') {
        this.root.classList.toggle(this.styles.Hidden);
      }
    });
  }
}
