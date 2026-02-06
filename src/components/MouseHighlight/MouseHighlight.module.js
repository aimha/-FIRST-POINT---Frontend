
export default class MouseHighlightClass {
  constructor(mousecontainer, mousehighlight) {
    this.container = document.getElementsByClassName(mousecontainer)[0];
    this.highLight = document.getElementsByClassName(mousehighlight)[0];
  }

  init() {
    this.highLightManagement();
  }

  highLightManagement() {
    document.addEventListener('mousemove', (e) => {
      const containerScroll = document.querySelector('.app-container').scrollTop;

      const x = e.clientX - 20;
      const y = e.clientY - 20;

      this.highLight.style.transform = "translate(" + x + 'px,' + y + "px)";

      if (containerScroll >= 1080) {
        this.highLight.style.backgroundColor = "#000000";
      } else {
        this.highLight.style.backgroundColor = "#ffffff";
      }
    });
  }
}
