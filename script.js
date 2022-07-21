// incrementation btn

var plus = document.getElementsByClassName("plus-btn");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].previousElementSibling.value++;
    total();
  });
}

//decrementation btn
var minus = document.getElementsByClassName("minus-btn");

for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    if (minus[i].nextElementSibling.value > 1) {
      minus[i].nextElementSibling.value--;
      total();
    }
  });
}

// like btn

var likes = document.getElementsByClassName("like");

for (let i = 0; i < likes.length; i++) {
  likes[i].addEventListener("click", function () {
    if (likes[i].style.color == "red") {
      likes[i].style.color = "black";
    } else likes[i].style.color = "red";
  });
}


var deletes = document.getElementsByClassName("delete");

for (let i = 0; i < deletes.length; i++) {
  let delt = deletes[i];

  delt.addEventListener("click", function () {
    delt.parentElement.remove();
    total()
  });
}

var el = document.getElementsByClassName("Item");
var final = document.getElementById("finalPrice");

function total() {
  let somme = 0;
  for (let i = 0; i < el.length; i++) {
    somme =
      somme +
      el[i].querySelector(".price").innerText *
        el[i].querySelector(".Quant").value;
  }
  return (final.value = somme);
}