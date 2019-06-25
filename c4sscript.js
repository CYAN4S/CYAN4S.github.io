window.onscroll = function() {myFunction()};
function myFunction() {
    var nav = document.getElementById("nav");
    var ul = nav.children[0];
    var titles = document.getElementById("titles");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        ul.className = "scrolldown";
        titles.className = "titles invisible";
    } else {
        ul.className = "";
        titles.className = "titles";
    }
}