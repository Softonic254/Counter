var count = 0;

var value = document.querySelector("#value");
var buttons = document.querySelectorAll(".button");
console.log(buttons);

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        var style = (e.currentTarget.classList);

        if (style.contains("decrease")) {
            count--;
        } else if (style.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        value.textContent=count;
    })
});