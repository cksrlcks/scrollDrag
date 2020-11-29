class hScrollDrag {

    constructor(target, acc, scrollbar){
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
        this.slider.addEventListener('mousedown', this.mousedownHandler.bind(this))
        this.slider.addEventListener('mouseleave', this.mouseleaveHandler.bind(this))
        this.slider.addEventListener('mouseup', this.mouseupHandler.bind(this))
        this.slider.addEventListener('mousemove', this.mousemoveHandler.bind(this))

    }
    setStyle(){
        this.slider.classList.add('h-scroll-init');
    }
    
    setScrollbarStyle() {
        if(this.scrollbar == 'noScrollBar'){
            this.slider.classList.add('no-scroll-bar')
        }
    }

    createDragZone (){
        this.dragZone = document.createElement('div');
        this.dragZone.classList.add('drag-zone');

        this.dragZone.appendChild(this.item);
        this.slider.appendChild(this.dragZone);

    }

    preventClick (e){
        e.preventDefault();
        e.stopImmediatePropagation();
    }

    mousedownHandler (e) {
        this.isDown = true;
        this.slider.classList.add('is-dragging');
        this.startX = e.pageX - this.slider.offsetLeft;
        this.cal_scroll = this.slider.scrollLeft;
    }

    mouseleaveHandler () {
        this.isDown = false;
        this.slider.classList.remove('is-dragging');
    }

    mouseupHandler (e) {
        this.isDown = false;
        this.event = e

        if(this.isDragged){
            this.item.addEventListener('click', this.preventClick.bind(this))
        }else{
            this.item.removeEventListener('click', this.preventClick.bind(this))
        }

        this.slider.classList.remove('is-dragging');
        this.isDragged = false;
    }

    mousemoveHandler (e) {
        if (!this.isDown) return;
        e.preventDefault();
        this.isDragged = true;

        const x = e.pageX - this.slider.offsetLeft;
        const walk = (x - this.startX) * this.acc;

        this.slider.scrollLeft = this.cal_scroll - walk;
    }


}