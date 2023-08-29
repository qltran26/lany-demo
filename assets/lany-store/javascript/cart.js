// default settings
document.getElementById("showCart").style.display = "none";

var cart = new Array();

function addToCart(x) {
    var boxItems = x.parentElement.children;
    var image = boxItems[0].children[0].src;
    var name = boxItems[1].children[0].innerText;
    var quantity = parseInt(boxItems[2].value);
    var price = boxItems[3].children[0].innerText;
    var items = new Array(image, name, quantity, price);

    //check
    var quantCheck = 0;
    for (let i=0; i<cart.length; i++) {
        if(cart[i][1] == name) {
            quantCheck = 1;
            quantity += parseInt(cart[i][2]);
            cart[i][2] = quantity;
            break;
        }
    }
    if(quantCheck == 0) {
        //add new
        cart.push(items);
    }

    //console.log(cart);
    showCountItems();

    // save cart in sessionStorage
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

function showCountItems() {
    document.getElementById("countItems").innerHTML = cart.length;
}

function showMyCart() {
    var cartInfo = "";
    var total = 0;
    for (let i=0; i<cart.length; i++) {
        var totalPrice = parseFloat(cart[i][2]) * parseFloat(cart[i][3]); 
        total += totalPrice;
        cartInfo += '<tr>' +
                    '<td>' + (i+1) + '</td>' +
                    '<td><img src ="' + cart[i][0] + '"></td>' +
                    '<td>' + cart[i][1] + '</td>' +
                    '<td>' + cart[i][2] + '</td>' +
                    '<td>' + cart[i][3] + '</td>' +
                    '<td>' +
                        '<div>' + totalPrice + '</div>' +
                    '</td>' +
                    '<td>' +
                        '<button onclick = delete(this)>Delete</button>' +
                    '</td>' +
                    '</tr>';
    }

    cartInfo += '<tr>' +
                '<th colspan = "5">Tong don hang</th>' +
                '<th>' +
                    '<div>' + total + '</div>' + 
                '</th>' +
                '</tr>'; 
    document.getElementById("myCart").innerHTML = cartInfo;
}

function deleteItems(x) {
    //delete tr
    var tr = x.parentElement.parentElement;
    var name = tr.children[1].innerText;
    tr.remove();

    //delete array 
    for (let i=0; i<cart.length; i++) {
        if(cart[i][1] == name) {
            cart.splice(i, 1);
        }
    }
    showMyCart();
    showCountItems();
}

function deleteAll() {
    cart = [];
    showMyCart();
    showCountItems();
}

function showCart() {
    var show = document.getElementById("showCart");
    if(show.style.display == "block") {
        show.style.display = "none";
    } else {
        show.style.display = "block";
        showMyCart();
    }
}

function showCartPaying() {
    var myCart = sessionStorage.getItem("cart");
    var cart = JSON.parse(myCart);
    var cartInfo = "";
    var total = 0;
    for (let i=0; i<cart.length; i++) {
        var totalPrice = parseFloat(cart[i][2]) * parseFloat(cart[i][3]); 
        total += totalPrice;
        cartInfo += '<tr>' +
                    '<td>' + (i+1) + '</td>' +
                    '<td><img src ="' + cart[i][0] + '"></td>' +
                    '<td>' + cart[i][1] + '</td>' +
                    '<td>' + cart[i][2] + '</td>' +
                    '<td>' + cart[i][3] + '</td>' +
                    '<td>' +
                        '<div>' + totalPrice + '</div>' +
                    '</td>' +
                    '</tr>';
    }

    cartInfo += '<tr>' +
                '<th colspan = "5">Tong don hang</th>' +
                '<th>' +
                    '<div>' + total + '</div>' + 
                '</th>' +
                '</tr>'; 
    document.getElementById("myCart").innerHTML = cartInfo;
}

function Agree() {
    var payInfo = document.getElementById("info").children;
    var name = payInfo[0].children[1].children[0].value;
    var address = payInfo[1].children[1].children[0].value;
    var phone = payInfo[2].children[1].children[0].value;
    var email = payInfo[3].children[1].children[0].value;

    var customer = new Array(name, address, phone, email);

    sessionStorage.setItem("customer", JSON.stringify(customer));

    window.location.assign(".html");
}

function customerInfo() {
    var customer = sessionStorage.getItem("customer");
    var info = JSON.parse(customer);

    var customerInfo = 

    document.getElementById("").innerHTML = customerInfo;
}

