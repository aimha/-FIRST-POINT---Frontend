// Image Parallax CLASS

export default class ParallaxClass {
  constructor(imgsArray) {
    this.imgs = [...imgsArray];
  }

  init() {
    this.imgs.forEach((el) => {
      const scrollPosition = window.pageYOffset;
      const parentOffset = el.parentElement.offsetTop;
      const elementOffset = el.offsetTop + parentOffset;
      const speed = 0.25;
  
      const translateY = (scrollPosition - elementOffset) * speed;
      el.style.transform = `translateY(${translateY}px)`;
    });
  }
}
