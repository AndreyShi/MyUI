import $ from '../core';


$.prototype.html = function(content){
    for(let i = 0 ; i < this.length;i++){
        if(content){
            this[i].innerHTML = content;
        }else{
            return this[i].innerHTML;
        }
    }


    return this;
}

$.prototype.eq = function(i){
    
    const swap = this[i];
    const objectLength = Object.keys(this).length;

    for(let i = 0; i < objectLength;i++){
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;  

    return this;
}

$.prototype.index = function(){
    const parent = this[0].parentNode;
    const childs = [...parent.children];

    const findMyIndex = (item) =>{
        return item == this[0];
    }
    return childs.findIndex(findMyIndex);  
}


$.prototype.index = function(selector){
    let numberofItems = 0;
    let counter = 0;

    const copyObj = Object.assign({},this);

    for(let i = 0 ; i < copyObj.length;i++){
        const arr = copyObj[i].querySelectorAll(selector);
        if(arr.length == 0){
            continue;
        }

        for(let j = 0; j < arr.length;j++){
            this[counter] = arr[j];
            counter++;
        }

        numberofItems +=arr.length;
    }

    this.length = numberofItems;

    for(;numberofItems < objectLength;numberofItems++){
        delete this[numberofItems];
    }
    return this;
}