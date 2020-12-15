let output ='';

function getItems(){
    let addtocartdesert;
    if(localStorage.getItem('addtocartdesert') === null){
        addtocart = [] 
    }else{
        addtocart = JSON.parse(localStorage.getItem('addtocartdesert'));
    }
    return addtocart
}

var len = getItems().length  ;
if(len === 0){
    document.getElementById("cartNum").innerHTML = ` `
}else{
    document.getElementById("cartNum").innerHTML = ` ${len}`
}




const items = getItems();
if(items.length === 0 || items === null){
    document.querySelector('.container').style.display = `none`
    document.querySelector('.conhead').style.display = `none`
    document.querySelector('.totalPrice').style.display = `none`
    document.getElementById('cart').innerHTML =`
    <h1 >No Items in the Cart</h1>
     <button id="backhome"><a href="index.html" class="backtohome">Back to Home</a></button>
    `
}else{
    items.forEach(function(item){
    ShowCartItems(item)
    })
}

function ShowCartItems(item){
   var price = parseInt(item[0]) * parseInt(item[4])
   
   output +=`
   <div class="images">
   <div class="items">
      ${item[2]}
   </div>
   <div >
       <h2 id="itemName">${item[1]}</h2>
   </div>
</div>
<div class="quantity">
   <div class="quantities">
       <div class="incdec"><button id="minus" class="${item[3]}" price=${item[0]}>&#8722;</div>
       <div><input id="num"  value="${item[4]}" disabled style="font-size: 16px;"></div>
       <div  class="incdec"><button id="plus" class="${item[3]}"  price=${item[0]}>&#43;</div>
   </div>
</div>
<div class="price">
   <div class="prices">
       <h2  value="${item[0]}">₹${price}</h2>
   </div>
</div> 
   `

}

document.querySelector('.container').innerHTML = output;