let all = document.querySelectorAll("*");
let a = document.querySelectorAll("a");
for (var i = 0; i < all.length; i++) {
	all[i].setAttribute("style", " ");
}
for (var i = 0; i < a.length; i++) {
	a[i].setAttribute("style", "display:block");
}