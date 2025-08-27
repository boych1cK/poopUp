class PoopUp {
    constructor() {
        this.active = false;
        this.popUpContainer = null;
        this.init();
    }

    init(){
        if (!document.getElementById('message')) {
            this.createPopUpContainer();
        } else {
            this.popUpContainer = document.getElementById('message');
        }
    }

    createPopUpContainer() {
        this.popUpContainer = document.createElement('div');
        this.popUpContainer.id = 'message';
        document.body.appendChild(this.popUpContainer);
    }

    showMessage(text, type) {
        if(this.active === false){
            this.active=true;
            $(this.popUpContainer).attr('class', '').addClass(type).text(text).fadeIn();
            setTimeout(() => {
                $(this.popUpContainer).fadeOut();
                this.active = false
            }, 3000);
        }

    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.poopUp = new PoopUp();

});
