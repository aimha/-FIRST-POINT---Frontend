// Image Parallax CLASS

export default class SnapScrollClass {
  constructor(SlidesArray, scroller) {
    this.slides = [...SlidesArray];
    this.idleTimeout = null;
    // if there is a custom scroller in the page
    this.scroller = scroller;
  }

  init() {
    // clear timer
    clearTimeout(this.idleTimeout);
    // start idle timer
    this.idleTimeout = setTimeout(() => {
      // snap to nearest slide on idle
      this.snapToNearestSlide();
    }, 500);
  }

  snapToNearestSlide() {
    const scrollPosition = window.pageYOffset;
    let nearestSlide = null;
    let minDistance = Infinity;

    // check nearest slide
    this.slides.forEach((slide) => {
      const slideOffset = slide.offsetTop;
      const distance = Math.abs(scrollPosition - slideOffset);

      if (distance < minDistance) {
        minDistance = distance;
        nearestSlide = slide;
      }
    });

    if (nearestSlide) {
      // scroll to slide if scroller or not
      if (!this.scroller) {
        window.scrollTo({
          top: nearestSlide.offsetTop,
          behavior: 'smooth'
        });
      } else {
        this.scroller.scrollTo({
          y: nearestSlide.offsetTop
        });
      }
    }
  }
}
