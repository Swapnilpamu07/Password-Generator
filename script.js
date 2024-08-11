let weak = document.getElementById("weak");
let strong = document.getElementById("strong");
let supers = document.getElementById("super");
let out = document.getElementById("out");
let submit = document.getElementById("bt");
let input = document.getElementById("input");

let alpha = "abcdefghijklmnopqrstuvwxyz";
let capalpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num = "0123456789";
let sym = '~!`@#$%^&*()_-+=?>,<.:;"{}[]|';

let all1 = alpha + capalpha + num;
let all2 = alpha + capalpha + num + sym;

class Password {
  constructor(alpha, capalpha, num, sym) {
    this.alpha = alpha;
    this.capalpha = capalpha;
    this.num = num;
    this.sym = sym;
    console.log("This is pass");
  }
  pass() {
    let str = [];
    if (weak.checked) {
      for (let i = 1; i <= input.value; i++) {
        str[i] = alpha.charAt(Math.floor(Math.random() * alpha.length));
      }

      out.innerHTML = str.join("");
    }
    if (strong.checked) {
      for (let i = 1; i <= input.value; i++) {
        str[i] = all1.charAt(Math.floor(Math.random() * all1.length));
      }
      out.innerHTML = str.join("");
    }
    if (supers.checked) {
      for (let i = 1; i <= input.value; i++) {
        str[i] = all2.charAt(Math.floor(Math.random() * all2.length));
      }
      out.innerHTML = str.join("");
    }
  }
}
let a = new Password(alpha, capalpha, num, sym);

submit.addEventListener("click", a.pass);
weak.addEventListener("change", () => {
  strong.checked = false;
  supers.checked = false;
});

strong.addEventListener("change", () => {
  weak.checked = false;
  supers.checked = false;
});

supers.addEventListener("change", () => {
  weak.checked = false;
  strong.checked = false;
});
