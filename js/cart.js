
var button = document.getElementById("cart-button");
var button2 = document.getElementById("cart-button2");
var button3 = document.getElementById("cart-button3");
var button4 = document.getElementById("cart-button4");
var number = document.querySelector('.number');
var popup = document.querySelector(".popup");
var plus = document.querySelector(".add");
var minus = document.getElementById("bin1");
var background = document.querySelector(".background");
var counter = 0;
var counter1 = -1

button.addEventListener("click", function(event){
    if(counter1 == 0){
        number.classList.add("popup-open");
        popup.classList.add("popup-open");
        setTimeout(increment,140);
        console.log("COUNTER 0");
        minus.classList.add("minus-slide");
        plus.classList.add("add-slide");
    }
    if(counter1 > 0){
        setTimeout(increment,150);
        popup.classList.add("popup-open");
        popup.classList.add("popup-two");
        setTimeout(function(){
            background.classList.add("background-color");
            setTimeout(function(){
                background.classList.remove("background-color");
            },140); 
        },139); 
        setTimeout(function(){
            popup.classList.remove("popup-two");  
        },140); 
    }
})

button2.addEventListener("click", function(event){
    if(counter == 0){
        number.classList.add("popup-open");
        popup.classList.add("popup-open");
        setTimeout(increment,140);
        console.log("COUNTER 0");
        minus.classList.add("minus-slide");
        plus.classList.add("add-slide");
    }
    if(counter > 0){
        setTimeout(increment,150);
        popup.classList.add("popup-open");
        popup.classList.add("popup-two");
        setTimeout(function(){
            background.classList.add("background-color");
            setTimeout(function(){
                background.classList.remove("background-color");
            },140); 
        },139); 
        setTimeout(function(){
            popup.classList.remove("popup-two");  
        },140); 
    }
})

button3.addEventListener("click", function(event){
    if(counter == 0){
        number.classList.add("popup-open");
        popup.classList.add("popup-open");
        setTimeout(increment,140);
        console.log("COUNTER 0");
        minus.classList.add("minus-slide");
        plus.classList.add("add-slide");
    }
    if(counter > 0){
        setTimeout(increment,150);
        popup.classList.add("popup-open");
        popup.classList.add("popup-two");
        setTimeout(function(){
            background.classList.add("background-color");
            setTimeout(function(){
                background.classList.remove("background-color");
            },140); 
        },139); 
        setTimeout(function(){
            popup.classList.remove("popup-two");  
        },140); 
    }
})

button4.addEventListener("click", function(event){
    if(counter == 0){
        number.classList.add("popup-open");
        popup.classList.add("popup-open");
        setTimeout(increment,140);
        console.log("COUNTER 0");
        minus.classList.add("minus-slide");
        plus.classList.add("add-slide");
    }
    if(counter > 0){
        setTimeout(increment,150);
        popup.classList.add("popup-open");
        popup.classList.add("popup-two");
        setTimeout(function(){
            background.classList.add("background-color");
            setTimeout(function(){
                background.classList.remove("background-color");
            },140); 
        },139); 
        setTimeout(function(){
            popup.classList.remove("popup-two");  
        },140); 
    }
})


    minus.addEventListener("click",function(){
        counter--;
        if(counter == 0 ){
        number.innerHTML = null;
        number.classList.remove("popup-open");
        popup.classList.remove("popup-open");
        popup.classList.remove("popup-two");
        background.classList.remove("background-color");
        minus.classList.remove("minus-slide");
        plus.classList.remove("add-slide");
    }
    else{
        popup.classList.add("popup-open");
        popup.classList.add("popup-two");
        setTimeout(function(){
            background.classList.add("background-color");
            setTimeout(function(){
                background.classList.remove("background-color");
            },140); 
        },139); 
        setTimeout(function(){
            popup.classList.remove("popup-two");  
        },140); 
        setTimeout(function(){
            number.innerHTML = counter;
        },150);
        
    }
    
})

plus.addEventListener("click",function(){
    
    if(counter == 0){
        number.classList.add("popup-open");
        popup.classList.add("popup-open");
        setTimeout(increment,640);
        console.log("COUNTER 0");
        minus.classList.add("minus-slide");
        plus.classList.add("add-slide");
    }
    if(counter > 0){
        setTimeout(increment,150);
        
        popup.classList.add("popup-open");
        popup.classList.add("popup-two");
        setTimeout(function(){
            background.classList.add("background-color");
            setTimeout(function(){
                background.classList.remove("background-color");
            },140); 
        },139); 
        setTimeout(function(){
            popup.classList.remove("popup-two");  
        },140); 
    }
    
})

function increment(){
    counter = isNaN(counter) ? 0 : counter;
    counter++;
    number.innerHTML = counter;
}

function showCart(){
    var showCart = document.querySelector(".cart");
    if(showCart.classList.contains("d-none")){
        showCart.classList.remove("d-none");
        showCart.classList.add("d-block");
    }else{
        showCart.classList.remove("d-block");
        showCart.classList.add("d-none")
    }
  
    console.log("showCart" , showCart.classList.contains("d-none"));
}

