// Modal form Đăng Nhập đăng Ký
let btn = document.getElementsByClassName("btn-arthur");
let modal_arthur = document.getElementsByClassName("modal_arthur");
let btnCloseModal = document.getElementsByClassName("fa-xmark");

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    let ndModal = this.getAttribute("data-modalHienLen");
    let modalHienLen = document.getElementById(ndModal);

    modalHienLen.classList.toggle("d-none");

    for (let i = 0; i < btnCloseModal.length; i++) {
      btnCloseModal[i].onclick = function () {
        modal_arthur[i].classList.toggle("d-none");
      };
    }

    window.onclick = function (e) {
      if (e.target === modal_arthur[i]) {
        modal_arthur[i].classList.toggle("d-none");
      }
    };
  };
}

// Modal Form tab-item (Sản phẩm chính)
let tab_item = document.getElementsByClassName("tab-item");
let modal__item = document.getElementsByClassName("modal__item");
let btnCloseModalItem = document.getElementsByClassName("btnCloseModalItem");

for (let i = 0; i < tab_item.length; i++) {
  tab_item[i].onclick = function () {
    let ndModalItemHienRa = this.getAttribute("data-tabItem");
    let ptModalItemHienRa = document.getElementById(ndModalItemHienRa);

    ptModalItemHienRa.classList.toggle("d-none");

    for (let j = 0; j < btnCloseModalItem.length; j++) {
      btnCloseModalItem[j].onclick = function () {
        ptModalItemHienRa.classList.toggle("d-none");
      };
    }
    window.onclick = function (e) {
      if (e.target === ptModalItemHienRa) {
        ptModalItemHienRa.classList.toggle("d-none");
      }
    };
  };
}

// Nút Go to top
let gototop = document.getElementsByClassName("gototop");
window.onscroll = function () {
  if (
    document.documentElement.scrollTop > 100 ||
    document.body.scrollTop > 100
  ) {
    gototop[0].classList.remove("d-none");
  } else {
    gototop[0].classList.add("d-none");
  }
};

function goToTop() {
  let timer = setInterval(function () {
    document.documentElement.scrollTop--;

    if (document.documentElement.scrollTop <= 0) {
      clearInterval(timer);
    }
  }, 100);
}
/*
 *
 *
 *
 */
// Xử lý giỏ hàng

// Modal Giỏ hàng hiện lên
let cart = document.getElementsByClassName("fa-cart-arrow-down");
let btnCLoseCartModal = document.getElementsByClassName("btnCLoseCartModal");
let cartModal = document.getElementsByClassName("cartModal");

cart[0].onclick = function () {
  cartModal[0].classList.toggle("d-none");
};
btnCLoseCartModal[0].onclick = function () {
  cartModal[0].classList.toggle("d-none");
};
window.onclick = function (e) {
  if (e.target === cartModal[0]) {
    cartModal[0].classList.toggle("d-none");
  }
};

// Xoá cart
let cartModal_Item = document.getElementsByClassName("cartModal_Item");
let deleteCartItem = document.getElementsByClassName("deleteCartItem");

for (let i = 0; i < deleteCartItem.length; i++) {
  deleteCartItem[i].onclick = function () {
    for (let j = 0; j < cartModal_Item.length; j++) {}
    cartModal_Item[i].classList.add("d-none");
  };
}

// Update cart
function updateCart() {
  let updateCartItem = document.getElementsByClassName("tab-item");
  let total = 0;

  for (let i = 0; i < updateCartItem[i].length; i++) {
    let updateCartItem = updateCartItem[i];
    let price_item = updateCartItem.getElementsByClassName("price")[0];
    let quantity_item = updateCartItem.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    let price = parseFloat(price_item.innerText);
    let quantity = quantity_item.value;
    total = total + price * quantity;
  }
  document.getElementsByClassName("cart-total-price")[0].innerText =
    total + "VNĐ";
}

// Thay đổi số lượng sản phẩm
let quantity_input = document.getElementsByClassName("cart-quantity-input");
for (let i = 0; i < quantity_input.length; i++) {
  let input = quantity_input[i];
  input.addEventListener("change", function (e) {
    let input = e.target;
    if (isNan(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updateCart();
  });
}
// Thêm vào giỏ hàng
let add_cart = document.getElementsByClassName("btn-cart");
for (let i = 0; i < add_cart.length; i++) {
  add_cart[i].onclick = function (e) {
    let button = e.target;
    let product = button.parentElement.parentElement;
    let img = product.getElementsByClassName("img-prd")[0].src;
    let title =
      product.getElementsByClassName("content-product-h2")[0].innerText;
    addItemToCart(title, price, img);
    // khi thêm vào giỏ hàng thì sẽ hiển thị Modal
    cartModal[0].classList.add("d-block");

    updateCart();
  };
}

function addItemToCart(title, price, img) {
  let cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
}

// Update Giỏ hàng
let btnUpdateCart = document.getElementsByClassName("btn-cart");
for (let i = 0; i < btnUpdateCart.length; i++) {
  btnUpdateCart[i].onclick = function () {
    cartModal[0].classList.toggle("d-none");
  };
}
for (let i = 0; i < modal__item.length; i++) {
  modal__item[i].classList.remove("d-block");
  console.log(modal__item[i])
}
