const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let atoms = [];

/*canvas.addEventListener('mousemove', function(e){
    for (let i = 0; i < 20; i++) {
        atoms.push(new Atom(e.x, e.y));
        
    }
});*/

const animate = () => {
    atoms.forEach((atom, index) => {
        atom.draw();
        atom.updateSpeed();
        atom.updateSize();

        if (atom.radius < 0.3) {
            atoms.splice(index, 1);
       }
    });
    ctx.save();
    ctx.fillStyle = 'rgb(0, 0, 0, 0.2)'//fill the canvas with white with opacity of 0.2
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    requestAnimationFrame(animate);
}

animate();

class Atom{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 6 + 2;
        this.speedX = Math.random() * 4 - 2; //to left use -2
        this.speedY = Math.random() * 4 - 2; //to left use -2
    }
    updateSpeed(){
        this.x += this.speedX *2;
        this.y += this.speedY *2;
        
    }
    updateSize() {
        this.radius -= 0.1
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fill();
        //ctx.fillArc(20, 20, 150, 100);
        ctx.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}
const generateAtoms = () => {
    atoms.push(new Atom(Math.random() * canvas.width, Math.random() * canvas.height))
     requestAnimationFrame(generateAtoms);
}
generateAtoms();