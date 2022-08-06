
function bgColor() {
    const friends = document.getElementsByClassName("friend");
    for (const i of friends) {
        i.style.backgroundColor = 'lightblue'
        i.style.paddingLeft = "15px"
    }
}

document.getElementById("add-border").addEventListener('click', function () {

    const container = document.getElementById("friend-Container");
    container.style.border = "3px solid red";
    container.style.paddingLeft = "15px"

})


document.getElementById("bg-color").addEventListener('click', function () {

    bgColor();

})
document.getElementById("add-friend").addEventListener('click', function () {
    const container = document.getElementById("friend-Container");
    const friendDiv = document.createElement('div')
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
<h3 class="friend-name">Friend</h3>
<p>Dolores, porro.</p>`;
    console.log(friendDiv);
    console.log(container);
    container.appendChild(friendDiv);




})
document.getElementById("friend").addEventListener('click', function () {

    const friend = document.getElementsByClassName('friend-name');
    for (const i of friend) {
        i.style.color = "white"
    }


})
document.getElementById("extra").addEventListener('click', function () {

    const container = document.getElementById("friend-Container");
    container.style.backgroundColor = '#4B0082'





})


