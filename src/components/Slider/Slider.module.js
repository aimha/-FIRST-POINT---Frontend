// JS CLASS

// imports
import AnimationClass from "../../js/animation";
import cubicBezier from "../../js/cubicBezier";

export default class SliderClass {
	constructor(slider, slides, prev, next, start, end) {
		this.slider = document.querySelector(`.${slider}`);
		this.slides = document.querySelectorAll(`.${slides}`);

		this.navPrevClass = `.${prev}`;
		this.navNextClass = `.${next}`;
		this.navStartClass = `.${start}`;
		this.navEndClass = `.${end}`;

		this.sliderClass = `.${slider}`;
		this.slideClass = `.${slides}` + '>img';
		this.range = this.slides.length - 2;

		this.slideWidth = this.slides[0].offsetWidth;
		this.slideMargin = parseInt(window.getComputedStyle(this.slides[0]).marginRight, 10);
		this.step = this.slideWidth + this.slideMargin;

		this.status = {
      'index': 0,
      'offset': 0,
			'movedBy': 0,
			'touchStart': 0,
			'touchEnd': 0,
      'active': false,
      'disableClick': false
    }

		this.tl = new AnimationClass(
      {
        duration: 4000,
        easing: cubicBezier.celebratoryEaseOut,
        stagger: 0,
        initialDelay: 0,
				clearProps: true,
      }
    );

		// fn for event removal
		this.clickFunction = (e) => this.clickManagement(e);
		this.movementStartFunction = (e) => this.movementStart(e);
		this.movementEndFunction = (e) => this.movementEnd(e);
		this.movementMoveFunction = (e) => this.movementMove(e);

		this.init();
	}

	init () {
		// Click managment
		document.addEventListener('click', this.clickFunction , { capture: true });

		// gestures

		document.addEventListener('pointerdown', this.movementStartFunction);

		document.addEventListener('pointerup', this.movementEndFunction);

		document.addEventListener('pointermove', this.movementMoveFunction);
	}

	// click management

	clickManagement(e) {
		// normal nav
		if (e.target.matches(this.navPrevClass)) {
			this.retractSlider();
		} else
		if (e.target.matches(this.navNextClass)) {
			this.advanceSlider();
		} else 
		if (e.target.matches(this.navStartClass)) {
			this.goToStartSlider();
		} else
		if (e.target.matches(this.navEndClass)) {
			this.goToEndSlider();
		}

		// popup 
		if (this.slider.contains(e.target) && !this.status.disableClick) {
			// popup logic
			console.log('open popup')
		}
	}

	// Slider interaction

	movementStart(e) {
		if (this.slider.contains(e.target)) {
			this.status.active= true;
			this.status.touchStart = this.getPositionX(e);
		}
	}

	movementEnd() {
		this.status.offset += this.status.movedBy;

		this.status.active= false;
		this.status.touchStart = 0;
		this.status.touchEnd = 0;
		this.status.movedBy = 0;

		if (this.status.offset > 0) {
			this.status.index = 0;
			this.status.offset = 0;
		} else if (this.status.offset < -this.range * this.step) {
			this.status.index = this.range;
			this.status.offset = -this.range * this.step;
		} else {
			this.status.index = -Math.round(this.status.offset / this.step);
			this.status.offset = this.status.index * -this.step;
		}

		this.setPositionByIndex();
	}

	movementMove(e) {
		if (this.status.active) {
			this.status.disableClick = true;

			this.status.touchEnd = this.getPositionX(e);
			this.status.movedBy = this.status.touchEnd - this.status.touchStart;
			const delta = this.status.offset + this.status.movedBy;

			this.tl.animateElement(
				[this.slider],
				[
					{ transform: `translateX(${delta}px)` }
				]
			);
		}
	}

	// manual navigation

	goToStartSlider() {
		this.status.index = 0;
		this.setPositionByIndex();
	}

	goToEndSlider() {
		this.status.index = this.range;
		this.setPositionByIndex();
	}

	advanceSlider() {
		if (this.status.index < this.range) {
			this.status.index += 1;
			this.setPositionByIndex();
		}
	}

	retractSlider() {
		if (this.status.index > 0) {
			this.status.index -= 1;
			this.setPositionByIndex();
		}
	}

	// utility

	getPositionX(event) {
		return event.clientX;
  }

	setPositionByIndex() {
		this.status.offset = this.status.index * -this.step;
		this.tl.animateElement(
			[this.slider],
			[
				{ transform: `translateX(${this.status.offset + this.status.movedBy}px)` }
			],
			{
        duration: 500,
        easing: cubicBezier.celebratoryEaseInOut,
        initialDelay: 50,
				clearProps: true,
				callback: () => {
					this.status.disableClick = false;
				}
      }
		);
	}

	cleanUp() {
		document.removeEventListener('click', this.clickFunction, {capture: true});

		document.removeEventListener('pointerdown', this.movementStartFunction);

		document.removeEventListener('pointerup', this.movementEndFunction);

		document.removeEventListener('pointermove', this.movementMoveFunction);
	}

}
