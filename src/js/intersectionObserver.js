// INTERSECTION OBSERVER CLASS

export default class IntersectionObsClass {
  constructor(target = [], options = {}) {
    // get target elements
    this.target = target;
    // create intersection event
    this.event = new Event('intersect');

    // default options
    this.options = {
      ...{
        threshold: .5,
        rootMargin: '-100px',
      },
      ...options
    }

    // create new intersection observer
    this.observer = new IntersectionObserver( list => {
      list.forEach( (el) => {
        // if element is intersecting dispatch "intersect" event
        if (el.isIntersecting) {
          el.target.dispatchEvent(this.event);
          // remove element from observed list
          this.observer.unobserve(el.target);
        }
      });
    },
    this.options
    );

    this.target.forEach(el => {
      this.observer.observe(el);
    });
  }
}
