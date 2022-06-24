const player = document.getElementById("player");
const wing1 = document.getElementById("wing1");
const wing2 = document.getElementById("wing2");
const screen = document.getElementById("screen");
var diff = 30,
    x = 0,
    width = 100,
    height = 50;

function BulletFire() {
    const screen = document.getElementById("screen");
    const bullet = document.createElement("span");
    bullet.setAttribute("class", "bullets");
    bullet.style.width = 25 + "px";
    bullet.style.height = 10 + "px";
    bullet.style.top = x + 10 + "px";
    bullet.style.left = 10 + "px";
    screen.appendChild(bullet);
    bullet.style.backgroundColor = "rgb(0, 0, 0)";
    bullet.style.boxShadow = "-3px 0px 2px 2px rgb(255, 0, 0, 0.5)";
    bullet.classList.add("fired");
    setTimeout(() => {
        bullet.remove();
    }, 3000);
}

const colors = ["rgb(0, 0, 255)",
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 200, 200)",
    "rgb(150, 20, 0)"
];

function CreateDrones() {
    const screen = document.getElementById("screen");
    const drones = document.createElement("span");
    drones.setAttribute("class", "drones");
    var drones_color = Math.floor(Math.random() * colors.length);
    drones.style.width = width + "px";
    console.log("Drones created !!");
    drones.style.height = height + "px";
    drones.style.backgroundColor = colors[drones_color];
    var top_place = Math.floor(Math.random() * 450);
    drones.style.top = top_place + "px";
    drones.style.left = 1000 + "px";
    const bulletfire = document.createElement("span");
    bulletfire.setAttribute("class", "bulletfire");
    bulletfire.style.width = 25 + "px";
    bulletfire.style.height = 10 + "px";
    bulletfire.style.top = top_place + "px";
    bulletfire.style.left = 1000 + "px";
    bulletfire.style.backgroundColor = colors[drones_color];
    bulletfire.style.boxShadow = "3px 0px 3px 3px rgba(0, 0, 0, 0.3)";
    screen.appendChild(drones);
    screen.appendChild(bulletfire);
    drones.classList.add("move");
    bulletfire.classList.add("enemy-fire");
    setTimeout(() => {
        drones.remove();
        bulletfire.remove();
    }, 12000);
}


function Start() {
    player.style.Position = "absolute";
    player.style.top = "0px";
    player.style.left = "10px";
    player.style.width = "70px";
    player.style.height = "30px";
    player.style.transitionDuration = "1s";
    wing1.style.Position = "absolute";
    wing1.style.top = "30px";
    wing1.style.left = "25px";
    wing1.style.width = "20px";
    wing1.style.height = "30px";
    wing1.style.transform = "skew(-60deg)";
    wing1.style.transitionDuration = "1s";
    wing2.style.Position = "absolute";
    wing2.style.top = "-30px";
    wing2.style.left = "25px";
    wing2.style.width = "20px";
    wing2.style.height = "30px";
    wing2.style.transform = "skew(60deg)";
    wing2.style.transitionDuration = "1s";
}

setInterval(CreateDrones, 4000);
// Important Message for Sprites Creation...
// Parenthesis is used to call a function once or by an event...
// Without parenthesis that function is called after that time interval every time...

window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case 'r':
            Start();
            break;
        case 'z':
            if (x <= 450) {
                console.log("Move Down !!");
                x = x + diff;
                player.style.top = x + "px";
                wing1.style.top = x + 30 + "px";
                wing2.style.top = x - 30 + "px";
                player.style.transitionDuration = "1s";
                wing1.style.transitionDuration = "1s";
                wing2.style.transitionDuration = "1s";
            }
            break;
        case 'a':
            if (x != 0) {
                console.log("Move Up !!");
                x = x - diff;
                player.style.top = x + "px";
                wing1.style.top = x + 30 + "px";
                wing2.style.top = x - 30 + "px";
                player.style.transitionDuration = "1s";
                wing1.style.transitionDuration = "1s";
                wing2.style.transitionDuration = "1s";
            }
            break;
        case 'x':
            console.log("Fired!!");
            setInterval(BulletFire(), 1000);
            break;
        default:
            console.log("Wrong Choice");
    }
});