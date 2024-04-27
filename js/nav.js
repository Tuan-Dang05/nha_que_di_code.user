document.addEventListener("DOMContentLoaded", function () {
    var scrollDown = document.getElementById("scroll_down");
    var arrowIcon = document.getElementById("arrow_down");
    var tableNav = document.getElementById("table_navbar");
    scrollDown.addEventListener("click", function () {
        // Toggle class 'fa-chevron-down' và 'fa-chevron-up'
        arrowIcon.classList.toggle("fa-chevron-down");
        arrowIcon.classList.toggle("fa-chevron-up");
        if (tableNav.style.display === "block") {
            tableNav.style.display = "none";
        } else {
            tableNav.style.display = "block";
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var list = document.querySelectorAll('.nft');
    var nftCards = []; 
    var tongGiaTien = 0; // Khởi tạo biến tổng giá tiền

    var nftCardContainer = document.querySelector('.listCard');
    var tongSP = document.getElementById('tong_san_pham');

    // Lấy dữ liệu từ localStorage nếu có
    var savedNftCards = JSON.parse(localStorage.getItem('nftCards'));
    if (savedNftCards) {
        savedNftCards.forEach(function(card) {
            var cardElement = document.createElement('div');
            cardElement.innerHTML = card;
            nftCardContainer.appendChild(cardElement);
        });
    }

    list.forEach((item) => {
        const giaSanPham = item.querySelectorAll('span#gia_san_pham');
        const qr_money = document.getElementById('qr_money');
        var innerTextArray = [];

        giaSanPham.forEach((element) => {
            innerTextArray.push(element.innerText);
        });

        var convert = innerTextArray.join('');
        var numberString = convert;
        var numberInteger = parseInt(numberString.replace('.', ''), 10);
        
        item.addEventListener('click', function(event) {
            if (event.target.classList.contains('add')) {
                var itemNew = item.cloneNode(true);
                nftCards.push(itemNew.outerHTML);
                nftCardContainer.appendChild(itemNew);
                // localStorage.setItem('nftCards', JSON.stringify(nftCards));
                function formatNumberWithCommas(number) {
                    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }
                tongGiaTien += numberInteger; // Cộng giá tiền vào tổng giá tiền
                // Cập nhật tổng giá tiền trên giao diện
                var formattedNumber = formatNumberWithCommas(tongGiaTien);
                tongSP.innerHTML = formattedNumber + " VNĐ";
                qr_money.innerHTML = formattedNumber + ' VNĐ'
                console.log('Sản phẩm đã được lưu vào localStorage');
            }
        });
    });
});


function remove($key){
    let listCard = document.querySelectorAll('.listCard .nft');
    // var tongSP2 = document.getElementById('tong_san_pham');
    listCard.forEach(item => {
        if(item.getAttribute('data-key') == $key) {
            item.remove();

           
            // var tongGiaTien2 = 0;
            // // Trích xuất giá tiền của sản phẩm được xoá
            // const giaSanPham = item.querySelector('span#gia_san_pham');
            // var numberString2 = giaSanPham.innerText;
            // var numberInteger2 = parseInt(numberString2.replace('.', ''), 10);

            // // Trừ giá tiền của sản phẩm khỏi tổng giá tiền
            // tongGiaTien2 -= numberInteger2;
            // function formatNumberWithCommas2(number) {
            //     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            // }
            // // Cập nhật tổng giá tiền trên giao diện
            // var formattedNumber2 = formatNumberWithCommas2(tongGiaTien2);
            // tongSP2.innerHTML = formattedNumber2 + " VNĐ";

            // console.log('Sản phẩm đã được xoá khỏi giỏ hàng và tổng giá tiền đã được cập nhật');
            return;
        }
    })
}








// console.log("giasanpham",giaSanPham)

