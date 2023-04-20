// Write your code here
const bulbsList = document.querySelectorAll(".lightbulb");
const subtitle = document.querySelector(".subtitle");
let count = 0;

function clickHandler(e) {
    count++;
    if(count === 1){
        return subtitle.innerHTML = `You've clicked the lightbulbs ${count} time`;
    };
    subtitle.innerHTML = `You've clicked the lightbulbs ${count} times`;
    e.currentTarget.classList.toggle("active");
};

bulbsList.forEach(function(bulb) {
    bulb.addEventListener('click', clickHandler);
});