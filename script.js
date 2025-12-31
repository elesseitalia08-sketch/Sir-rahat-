// Canvas setup
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// Particles for subtle premium glow
const particlesArray = [];
const particleCount = 120; // subtle, not overwhelming

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x < 0 || this.x > width) this.speedX = -this.speedX;
    if(this.y < 0 || this.y > height) this.speedY = -this.speedY;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fill();
  }
}

// Initialize particles
for(let i=0;i<particleCount;i++){
  particlesArray.push(new Particle());
}

// Animate particles
function animateParticles() {
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.fillRect(0,0,width,height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Statistical symbols floating
const symbolsContainer = document.getElementById('stats-symbols');
const statsSymbols = ['Σ','μ','σ','π','θ','λ','Ω','x̄','p','χ²','ρ'];
const symbolCount = 25; // professional look
const symbolObjects = [];

class StatSymbol {
  constructor() {
    this.el = document.createElement('div');
    this.el.classList.add('stat-symbol');
    this.el.innerText = statsSymbols[Math.floor(Math.random()*statsSymbols.length)];
    symbolsContainer.appendChild(this.el);
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.size = Math.random()*24 + 16;
    this.speedX = Math.random()*0.6 - 0.3;
    this.speedY = Math.random()*0.6 - 0.3;
    this.angle = Math.random()*360;
    this.rotationSpeed = Math.random()*0.4 - 0.2;
    this.el.style.fontSize = this.size + 'px';
    this.el.style.color = `hsl(${Math.random()*360},80%,60%)`;
    this.update();
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.angle += this.rotationSpeed;
    if(this.x < 0) this.x = window.innerWidth;
    if(this.x > window.innerWidth) this.x = 0;
    if(this.y < 0) this.y = window.innerHeight;
    if(this.y > window.innerHeight) this.y = 0;
    this.el.style.transform = `translate(${this.x}px, ${this.y}px) rotate(${this.angle}deg)`;
  }
}

// Initialize symbols
for(let i=0;i<symbolCount;i++){
  symbolObjects.push(new StatSymbol());
}

// Animate symbols
function animateSymbols() {
  symbolObjects.forEach(s => s.update());
  requestAnimationFrame(animateSymbols);
}
animateSymbols();

// Handle resize
window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
