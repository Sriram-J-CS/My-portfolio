// 1. CUSTOM CURSOR LOGIC
const cursor = document.querySelector('.cursor');
const trail = document.querySelector('.cursor-trail');

document.addEventListener('mousemove', (e) => {
    if(window.innerWidth > 768) { // Only show custom cursor on Desktop
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
    }
});

// 2. LOADING SYSTEM (FAST SPEED)
let progress = 0;
const bar = document.querySelector('.loading-bar');
const loadInterval = setInterval(() => {
    progress += Math.random() * 25; 
    if (progress >= 100) {
        progress = 100;
        clearInterval(loadInterval);
        document.getElementById('enter-btn').classList.remove('hidden');
    }
    bar.style.width = progress + "%";
}, 80);

function enterNexus() {
    document.getElementById('portal').style.display = "none";
    handleReveal(); // Trigger initial animations
}

// 3. SKILL DECODER SYSTEM
const skillData = {
    Python: "> [DECRYPTED]: Proficient in C, Python, Java, JavaScript, HTML, CSS.",
    Tech: "> [DECRYPTED]: CTF, Cyber Security Fundamentals, UI/UX Design.",
    Frontend: "> [DECRYPTED]: Expert in Building Modern & Secure Web Architectures.",
    Soft: "> [DECRYPTED]: Advanced Communication and Teamwork Protocols."
};

function showSkill(id) {
    const term = document.getElementById('skill-terminal');
    const body = document.getElementById('terminal-content');
    term.classList.remove('hidden');
    body.innerText = skillData[id];
    
    // Auto-scroll to terminal so user sees the text
    term.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function closeTerminal() {
    document.getElementById('skill-terminal').classList.add('hidden');
}

// 4. SCROLL REVEAL & SNAP LOGIC
const handleReveal = () => {
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('active');
        }
    });
};

// Listen for scrolls inside the snap container
document.querySelector('.snap-container').addEventListener('scroll', handleReveal);

// 5. MATRIX DIGITAL RAIN EFFECT
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drops = Array(Math.floor(canvas.width / 20)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#00ffcc";
    ctx.font = "15px monospace";
    
    drops.forEach((y, i) => {
        const text = Math.random() > 0.5 ? "1" : "0";
        ctx.fillText(text, i * 20, y * 20);
        
        if (y * 20 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    });
}

setInterval(drawMatrix, 50);

// Handle window resize for matrix
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});