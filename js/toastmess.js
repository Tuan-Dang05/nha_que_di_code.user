
function showSuccess(game){
    var toast = document.getElementById('toast')
    var close = document.getElementById('close') 
    var tittle = document.querySelector('.toast__tittle')
    var msg = document.querySelector('.toast__msg')
    tittle.innerHTML = 'Tải về thành công!'
   msg.innerHTML =  `<span class="red-text">${game}</span> đã được tải về`
    if (toast.style.display == 'none'){
        toast.style.display = 'block'
        
    }else{
        toast.classList.remove('fade-out');
        toast.style.display = 'block'
    }
    close.onclick = () =>{
                toast.style.display = 'none';
    }
    setTimeout(function(){
        toast.classList.add('fade-out')
        // toast.style.display = 'none';    
    },3000)
    setTimeout(function(){
        toast.classList.remove('fade-out');
        toast.style.display = 'none';
    },4000)

    if(game == 'web nghe nhạc'){
    tittle.innerHTML = 'Đã thêm vào giỏ hàng!'
   msg.innerHTML =  `<span class="red-text">${game}</span> `
    }
}



