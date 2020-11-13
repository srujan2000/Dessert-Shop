// item1
let addtocart1 = document.getElementById('addtocart1');
let price1 = addtocart1.attributes.price.value;
let name1 = addtocart1.attributes.name.value
let image1 = addtocart1.attributes.image.value;
let cart1 = addtocart1.attributes.cartNo.value;

//item2
let addtocart2 = document.getElementById('addtocart2');
let price2 = addtocart2.attributes.price.value;
let name2 = addtocart2.attributes.name.value
let image2 = addtocart2.attributes.image.value;
let cart2 = addtocart2.attributes.cartNo.value;

//item3
let addtocart3 = document.getElementById('addtocart3');
let price3 = addtocart3.attributes.price.value;
let name3 = addtocart3.attributes.name.value
let image3 = addtocart3.attributes.image.value;
let cart3 = addtocart3.attributes.cartNo.value;

//item4
let addtocart4 = document.getElementById('addtocart4');
let price4 = addtocart4.attributes.price.value;
let name4 = addtocart4.attributes.name.value
let image4 = addtocart4.attributes.image.value;
let cart4 = addtocart4.attributes.cartNo.value;

//item5
let addtocart5 = document.getElementById('addtocart5');
let price5 = addtocart5.attributes.price.value;
let name5 = addtocart5.attributes.name.value
let image5 = addtocart5.attributes.image.value;
let cart5 = addtocart5.attributes.cartNo.value;

//item6
let addtocart6 = document.getElementById('addtocart6');
let price6 = addtocart6.attributes.price.value;
let name6 = addtocart6.attributes.name.value
let image6 = addtocart6.attributes.image.value;
let cart6 = addtocart6.attributes.cartNo.value;

//item7
let addtocart7 = document.getElementById('addtocart7');
let price7 = addtocart7.attributes.price.value;
let name7 = addtocart7.attributes.name.value
let image7 = addtocart7.attributes.image.value;
let cart7 = addtocart7.attributes.cartNo.value;

//item8
let addtocart8 = document.getElementById('addtocart8');
let price8 = addtocart8.attributes.price.value;
let name8 = addtocart8.attributes.name.value
let image8 = addtocart8.attributes.image.value;
let cart8 = addtocart8.attributes.cartNo.value;

var count = 0;

//array of items
let arr1 = [price1,name1,image1,cart1,1];
let arr2 = [price2,name2,image2,cart2,1];
let arr3 = [price3,name3,image3,cart3,1];
let arr4 = [price4,name4,image4,cart4,1];
let arr5 = [price5,name5,image5,cart5,1];
let arr6 = [price6,name6,image6,cart6,1];
let arr7 = [price7,name7,image7,cart7,1];
let arr8 = [price8,name8,image8,cart8,1];

//Local Storage
function getItems(){
    let addtocartdesert;
    if(localStorage.getItem('addtocartdesert') === null){
        addtocart = [] 
    }else{
        addtocart = JSON.parse(localStorage.getItem('addtocartdesert'));
    }
    return addtocart
}

const items = getItems();



//adding items to local storage
function addtols(arr){
    items.push(arr);
    localStorage.setItem('addtocartdesert',JSON.stringify(items));

}


//Checking if item is alread in the cart
function checkifitem(arr){
    for(item of items){
        if(item[1] === arr[1]){
            alert(`You Already Added "${arr[1]}" in the Cart`)
            return false;
        }
    }
    return true;
}

//Adding items to localStorage(if checkitem returns true)
addtocart1.addEventListener('click',function(){
          if(checkifitem(arr1)){
            var len = getItems().length   +1 ;
            document.getElementById("cartNum").innerHTML = ` ${len}`
            addtols(arr1);
          }
});

addtocart2.addEventListener('click',function(){
    if(checkifitem(arr2)){
        var len = getItems().length   +1 ;
        document.getElementById("cartNum").innerHTML = ` ${len}`
        addtols(arr2);
      }
});

addtocart3.addEventListener('click',function(){
    if(checkifitem(arr3)){
        var len = getItems().length   +1 ;
        document.getElementById("cartNum").innerHTML = ` ${len}`
        addtols(arr3);
      }
});

addtocart4.addEventListener('click',function(){
    if(checkifitem(arr4)){
        var len = getItems().length   +1 ;
        document.getElementById("cartNum").innerHTML = ` ${len}`
        addtols(arr4);
      }
});

addtocart5.addEventListener('click',function(){
    if(checkifitem(arr5)){
        var len = getItems().length   +1 ;
        document.getElementById("cartNum").innerHTML = ` ${len}`
        addtols(arr5);
      }
});

addtocart6.addEventListener('click',function(){
    if(checkifitem(arr6)){
        var len = getItems().length   +1 ;
        document.getElementById("cartNum").innerHTML = ` ${len}`
        addtols(arr6);
      }
});

addtocart7.addEventListener('click',function(){
    if(checkifitem(arr7)){
        var len = getItems().length   +1 ;
        document.getElementById("cartNum").innerHTML = ` ${len}`
        addtols(arr7);
      }
});

addtocart8.addEventListener('click',function(){
    if(checkifitem(arr8)){
        var len = getItems().length   +1 ;
        document.getElementById("cartNum").innerHTML = ` ${len}`
        addtols(arr8);
      }
});


var len = getItems().length  ;
if(len === 0){
    document.getElementById("cartNum").innerHTML = ``
}else{
    document.getElementById("cartNum").innerHTML = ` ${len}`
}


