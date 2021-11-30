
const $ = function(selector){
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector){
    if(!selector){
        return this; //{}
    }

    if(selector.tagName){ // если это Html элемент
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this,document.querySelectorAll(selector)); //копирование полей методов селекторов
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;