function Wolf() {
    this.htmlElement = null;
    this.id = "";
    this.left = 0;
    this.top = 0;

    this.move = function(dx, dy) {
        this.left += dx;
        this.top += dy;
        this.fitBounds();
        this.display();
    };
    this.display = function() {
        this.htmlElement.style.left = this.left + "px";
        this.htmlElement.style.top = this.top + "px";
    };
    this.fitBounds = function() {
        let parent = this.htmlElement.parentElement;
        let l = parent.offsetLeft;
        let t = parent.offsetTop;
        let w = parent.offsetWidth;
        let h = parent.offsetHight;
        if (this.left < l) this.left = l;
        if (this.left > l + w) this.left = l + w;
        if (this.top < t) this.top = t;
        if (this.top > t + h) this.top = t + h;

    }

}

function WolfConstructor(element, left, top) {
    this.htmlElement = element;
    this.id = element.id;
    this.left = left;
    this.top = top;

    this.move = function(dx, dy) {
        this.left += dx;
        this.top += dy;
        this.fitBounds();
        this.display();
    };

    this.display = function() {
        this.htmlElement.style.left = this.left + "px";
        this.htmlElement.style.top = this.top + "px";
    };

    this.fitBounds = function() {
        let parent = this.htmlElement.parentElement;
        let l = parent.offsetLeft;
        let t = parent.offsetTop;
        let w = parent.offsetWidth;
        let h = parent.offsetHight;
        if (this.left < l) this.left = l;
        if (this.left > l + w) this.left = l + w;
        if (this.top < t) this.top = t;
        if (this.top > t + h) this.top = t + h;

    }

}

function moveWolves() {
    wolves.forEach(element => {
        let dx = getRandomInt(200) - 100;
        let dy = getRandomInt(200) - 100;
        element.move(dx, dy);
    });
}