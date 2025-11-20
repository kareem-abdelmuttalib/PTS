/* PARTICLE SYSTEM */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particlesArray = [];

function initCanvas() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    
    particlesArray = [];
    for(let i = 0; i < 120; i++) {
        particlesArray.push(new Particle());
    }
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() * 0.4) - 0.2;
        this.speedY = (Math.random() * 0.4) - 0.2;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    
    draw() {
        ctx.fillStyle = "rgba(255,255,255,0.55)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

// Initialize and start animation
initCanvas();
animate();

window.addEventListener("resize", initCanvas);

// Password validation for index.html
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('form');
        form.addEventListener('submit', function(e) {
            const password = document.getElementById('password').value;
            
            // Check if password is correct or if user is using fallback
            if (password !== 'lolo' && password !== '') {
                e.preventDefault();
                alert('Incorrect password. Please try "lolo" or contact 01080096438 for assistance.');
            }
        });
    });
}
