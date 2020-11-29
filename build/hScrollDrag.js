"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var hScrollDrag = /*#__PURE__*/function () {
  function hScrollDrag(target, acc, scrollbar) {
    _classCallCheck(this, hScrollDrag);

    this.isDown = false;
    this.startX;
    this.cal_scroll;
    this.isDragged = false;
    this.acc = acc || 1;
    this.scrollbar = scrollbar || '';
    this.slider = document.querySelector(target);
    this.item = this.slider.querySelector('.h-scroll-container');
    /* initializing h-scroll zone & set style  */

    this.createDragZone();
    this.setStyle();
    this.setScrollbarStyle();
    /* add event handler */

    this.slider.addEventListener('mousedown', this.mousedownHandler.bind(this));
    this.slider.addEventListener('mouseleave', this.mouseleaveHandler.bind(this));
    this.slider.addEventListener('mouseup', this.mouseupHandler.bind(this));
    this.slider.addEventListener('mousemove', this.mousemoveHandler.bind(this));
  }

  _createClass(hScrollDrag, [{
    key: "setStyle",
    value: function setStyle() {
      this.slider.classList.add('h-scroll-init');
    }
  }, {
    key: "setScrollbarStyle",
    value: function setScrollbarStyle() {
      if (this.scrollbar == 'noScrollBar') {
        this.slider.classList.add('no-scroll-bar');
      }
    }
  }, {
    key: "createDragZone",
    value: function createDragZone() {
      this.dragZone = document.createElement('div');
      this.dragZone.classList.add('drag-zone');
      this.dragZone.appendChild(this.item);
      this.slider.appendChild(this.dragZone);
    }
  }, {
    key: "preventClick",
    value: function preventClick(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, {
    key: "mousedownHandler",
    value: function mousedownHandler(e) {
      this.isDown = true;
      this.slider.classList.add('is-dragging');
      this.startX = e.pageX - this.slider.offsetLeft;
      this.cal_scroll = this.slider.scrollLeft;
    }
  }, {
    key: "mouseleaveHandler",
    value: function mouseleaveHandler() {
      this.isDown = false;
      this.slider.classList.remove('is-dragging');
    }
  }, {
    key: "mouseupHandler",
    value: function mouseupHandler(e) {
      this.isDown = false;
      this.event = e;

      if (this.isDragged) {
        this.item.addEventListener('click', this.preventClick.bind(this));
      } else {
        this.item.removeEventListener('click', this.preventClick.bind(this));
      }

      this.slider.classList.remove('is-dragging');
      this.isDragged = false;
    }
  }, {
    key: "mousemoveHandler",
    value: function mousemoveHandler(e) {
      if (!this.isDown) return;
      e.preventDefault();
      this.isDragged = true;
      var x = e.pageX - this.slider.offsetLeft;
      var walk = (x - this.startX) * this.acc;
      this.slider.scrollLeft = this.cal_scroll - walk;
    }
  }]);

  return hScrollDrag;
}();