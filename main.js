class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
}

const max = 200;
const min = 40;
let circleList = []

document.addEventListener("click", (event) => {

    if (circleList.length < 2) {
        drawCircle(event);
        if (circleList.length === 2) {
            setTimeout(isIntersecting, 100)
        }

    } else {
        const circles = document.querySelectorAll("div");
        console.log(`Number of circles to remove ${circles.length}`);
        for (const circle of circles) {
            circle.remove();
        }
        circleList.length = 0;
        drawCircle(event);
    }
});

function drawCircle(event) {
    const x = event.pageX;
    const y = event.pageY;
    const newCircle = document.createElement("div");
    newCircle.style.borderRadius = "50%";
    const hue = Math.floor(Math.random() * 360);
    newCircle.style.background = `hsl(${hue}, 100%, 50%)`;
    newCircle.style.position = "absolute"
    const diameter = Math.floor(Math.random() * (max - min + 1)) + min;
    newCircle.style.width = newCircle.style.height = `${diameter}px`;

    // Assign positions
    const top = y - diameter/2;
    const left = x - diameter/2;
    newCircle.style.top = `${top}px`;
    newCircle.style.left = `${left}px`;
    circleList.push(new Circle(x, y, (diameter/2)))
    document.body.append(newCircle);
}

function isIntersecting() {
    const { x:x1, y:y1, radius:rad1 } = circleList[0];
    const { x:x2, y:y2, radius:rad2 } = circleList[1];
    console.log(`Circle 1:`);
    console.log(circleList[0]);
    console.log(`Circle 2:`);
    console.log(circleList[1]);
    const distance = Math.pow((((x2 - x1) ** 2 )+ ((y2 - y1) ** 2)), 0.5);
    console.log(distance);
    console.log(`Radius 1 = ${rad1}`);
    console.log(`Radius 2 = ${rad2}`);
    if(distance < (rad1 + rad2)) {
        alert("The circles are intersecting");
    }
}

