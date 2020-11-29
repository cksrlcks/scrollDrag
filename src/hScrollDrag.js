class hScrollDrag {

    constructor(target, options){
        this.isDown = false;
        this.startX;
        this.cal_scroll;
        this.isDragged = false;
        this.acc = options && options.acc || 1;
        this.scrollbar = options && options.scrollBar;
        this.slider = document.querySelector(target);
        this.item = this.slider.querySelector('.h-scroll-container');

        /* initializing h-scroll zone & set style  */
        this.createDragZone();
        this.setStyle();
        this.setScrollbarStyle();

        /* add event handler */
        this.slider.addEventListener('mousedown', (e) => this.mousedownHandler(e))
        this.slider.addEventListener('mouseleave', (e) => this.mouseleaveHandler(e))
        this.slider.addEventListener('mouseup', (e) => this.mouseupHandler(e))
        this.slider.addEventListener('mousemove', (e) => this.mousemoveHandler(e))
    }
    setStyle(){
        this.slider.classList.add('h-scroll-init');
    }
    
    setScrollbarStyle() {
        if(this.scrollbar == 'undefined' || this.scrollbar == false){
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

        if(this.isDragged){
            this.item.addEventListener('click', this.preventClick)
        }else{
            this.item.removeEventListener('click', this.preventClick)
        }

        this.slider.classList.remove('is-dragging');
        this.isDragged = false;
    }

    mousemoveHandler (e) {
        if (!this.isDown) return;
       
        this.isDragged = true;
        e.preventDefault();

        const x = e.pageX - this.slider.offsetLeft;
        const walk = (x - this.startX) * this.acc;

        this.slider.scrollLeft = this.cal_scroll - walk;
    }

    moveTo(x){
        this.slider.scrollLeft = x;
    }


}