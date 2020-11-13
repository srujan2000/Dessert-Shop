document.addEventListener('click',saysome);


function getItems(){
    let addtocartdesert;
    if(localStorage.getItem('addtocartdesert') === null){
        addtocart = [] 
    }else{
        addtocart = JSON.parse(localStorage.getItem('addtocartdesert'));
    }
    return addtocart
}

function saysome(e){
    let items = getItems();
    if(e.target.id === 'plus' || e.target.id === 'minus'){
        let priceItem = e.target.attributes.price.value;
        var price = parseInt(priceItem);
        let itemName = e.target.parentElement.parentElement.parentElement.previousElementSibling.querySelector('#itemName').innerHTML;
        let itemPriceDisplay = e.target.parentElement.parentElement.parentElement.nextElementSibling;
        let cartDisplay =e.target.parentElement.parentElement.querySelector('#num');

        console.log(itemPriceDisplay)

        items.forEach(function(item,index){
            if(item[1] === itemName){
                console.log(index)
                var cartNum = item[4];
        if(e.target.id === 'plus'){
            cartNum += 1;
            item[4] = cartNum;
            price = cartNum * parseInt(priceItem);
            cartDisplay.value = item[4];
            localStorage.setItem('addtocartdesert',JSON.stringify(items));
            itemPriceDisplay.innerHTML= `
            <div class="prices">
                <h2 id="itemPrice" value="${priceItem}">₹${price}</h2>
            </div>
            `
            location.reload();
            
        }

        if(e.target.id === 'minus'){
            cartNum = cartNum - 1;
            item[4] = cartNum;
            if(cartNum === 0){
                items.splice(index,1);
                localStorage.setItem('addtocartdesert',JSON.stringify(items));

                location.reload();
            }else{
            price = cartNum * parseInt(priceItem);
            cartDisplay.value = item[4];
            localStorage.setItem('addtocartdesert',JSON.stringify(items));
            itemPriceDisplay.innerHTML= `
            <div class="prices">
                <h2 id="itemPrice" value="${priceItem}">₹${price}</h2>
            </div>
            `
            location.reload();
            }
        }
    }
})
}  
}

var total =0;

items.forEach(function(item){
    total = total + (parseInt(item[0]) * parseInt(item[4]))
})

document.getElementById('disPrice').innerHTML = `Total Amount : ₹${total}`
