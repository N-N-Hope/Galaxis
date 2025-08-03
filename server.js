
// Create stars background
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 2000;  // Increased star count
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 3;
        const duration = 2 + Math.random() * 8;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${duration}s`;
        star.style.opacity = Math.random();
        
        starsContainer.appendChild(star);
    }
}

// Create speed lines for travel effect
function createSpeedLines() {
    const speedLines = document.getElementById('speedLines');
    const lineCount = 30;
    
    for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div');
        line.classList.add('speed-line');
        
        // Random position
        const x = Math.random() * 100;
        const height = 100 + Math.random() * 100;
        const delay = Math.random() * 2;
        
        line.style.left = `${x}%`;
        line.style.height = `${height}px`;
        line.style.animation = `speedLines ${1 + Math.random() * 2}s linear infinite`;
        line.style.animationDelay = `-${delay}s`;
        
        speedLines.appendChild(line);
    }
}

// Planet data with real-world values
const planetsData = {
    mercury: {
        name: "Mercury",
        overview: "The smallest planet in our solar system and closest to the Sun. Mercury is only slightly larger than Earth's Moon.",
        diameter: "4,879 km",
        distance: "57.9 million km",
        moons: "0",
        temperature: "430°C (day), -180°C (night)",
        gravity: "3.7 m/s²",
        atmosphere: "Thin exosphere",
        orbitSpeed: "47.4 km/s",
        orbitPeriod: "88 days",
        fact: "A day on Mercury lasts 59 Earth days, but a year is only 88 Earth days!",
        color: 0xA9A9A9,
        icon: '<i class="fas fa-fire"></i>',
        moonsData: []
    },
    venus: {
        name: "Venus",
        overview: "Similar in size to Earth, Venus is the hottest planet with a toxic atmosphere. It spins backwards compared to other planets.",
        diameter: "12,104 km",
        distance: "108.2 million km",
        moons: "0",
        temperature: "471°C",
        gravity: "8.87 m/s²",
        atmosphere: "96.5% CO₂",
        orbitSpeed: "35.0 km/s",
        orbitPeriod: "225 days",
        fact: "Venus rotates so slowly that a day there is longer than a year!",
        color: 0xE39E1C,
        icon: '<i class="fas fa-temperature-high"></i>',
        moonsData: []
    },
    earth: {
        name: "Earth",
        overview: "Our home planet is the only place we know of so far that's inhabited by living things. It's also the only planet with liquid water on the surface.",
        diameter: "12,742 km",
        distance: "149.6 million km",
        moons: "1",
        temperature: "15°C",
        gravity: "9.8 m/s²",
        atmosphere: "78% N₂, 21% O₂",
        orbitSpeed: "29.8 km/s",
        orbitPeriod: "365.25 days",
        fact: "Earth is the only planet not named after a god. Its name comes from Old English and Germanic words.",
        color: 0x2980B9,
        icon: '<i class="fas fa-globe-americas"></i>',
        moonsData: [
            { name: "Moon", radius: 1.7, distance: 10, speed: 0.01, color: 0xCCCCCC }
        ]
    },
    mars: {
        name: "Mars",
        overview: "The Red Planet is a cold desert world. It has seasons, polar ice caps, and more, including evidence of ancient floods.",
        diameter: "6,779 km",
        distance: "227.9 million km",
        moons: "2",
        temperature: "-65°C",
        gravity: "3.71 m/s²",
        atmosphere: "95% CO₂",
        orbitSpeed: "24.1 km/s",
        orbitPeriod: "687 days",
        fact: "Mars has the tallest volcano in the solar system - Olympus Mons, which is about 13.6 miles (22 km) high.",
        color: 0xE74C3C,
        icon: '<i class="fas fa-mountain"></i>',
        moonsData: [
            { name: "Phobos", radius: 0.7, distance: 7, speed: 0.03, color: 0x999999 },
            { name: "Deimos", radius: 0.5, distance: 9, speed: 0.02, color: 0x777777 }
        ]
    },
    jupiter: {
        name: "Jupiter",
        overview: "The largest planet in our solar system. Jupiter is a gas giant with a Great Red Spot - a giant storm bigger than Earth.",
        diameter: "139,820 km",
        distance: "778.5 million km",
        moons: "79",
        temperature: "-145°C",
        gravity: "24.79 m/s²",
        atmosphere: "90% H₂, 10% He",
        orbitSpeed: "13.1 km/s",
        orbitPeriod: "11.9 years",
        fact: "Jupiter's Great Red Spot is a storm that has been raging for at least 400 years. It's so big that three Earths could fit inside it!",
        color: 0xF39C12,
        icon: '<i class="fas fa-wind"></i>',
        moonsData: [
            { name: "Io", radius: 1.8, distance: 20, speed: 0.04, color: 0xFFD700 },
            { name: "Europa", radius: 1.6, distance: 25, speed: 0.035, color: 0xADD8E6 },
            { name: "Ganymede", radius: 2.4, distance: 30, speed: 0.03, color: 0x708090 },
            { name: "Callisto", radius: 2.2, distance: 35, speed: 0.025, color: 0x808080 }
        ]
    },
    saturn: {
        name: "Saturn",
        overview: "Adorned with thousands of beautiful ringlets, Saturn is not the only planet to have rings, but it has the most spectacular ones.",
        diameter: "116,460 km",
        distance: "1.4 billion km",
        moons: "82",
        temperature: "-178°C",
        gravity: "10.44 m/s²",
        atmosphere: "96% H₂, 3% He",
        orbitSpeed: "9.7 km/s",
        orbitPeriod: "29.5 years",
        fact: "Saturn is the least dense planet in our solar system. It would float if placed in a giant bathtub filled with water!",
        color: 0xF1C40F,
        icon: '<i class="fas fa-ring"></i>',
        moonsData: [
            { name: "Titan", radius: 2.6, distance: 25, speed: 0.03, color: 0xFFA500 },
            { name: "Rhea", radius: 1.5, distance: 30, speed: 0.025, color: 0xD3D3D3 },
            { name: "Iapetus", radius: 1.4, distance: 35, speed: 0.02, color: 0xA9A9A9 },
            { name: "Dione", radius: 1.1, distance: 40, speed: 0.015, color: 0xC0C0C0 }
        ]
    },
    uranus: {
        name: "Uranus",
        overview: "Uranus rotates at a nearly 90-degree angle from the plane of its orbit, making it appear to spin on its side.",
        diameter: "50,724 km",
        distance: "2.9 billion km",
        moons: "27",
        temperature: "-224°C",
        gravity: "8.69 m/s²",
        atmosphere: "83% H₂, 15% He, 2% CH₄",
        orbitSpeed: "6.8 km/s",
        orbitPeriod: "84 years",
        fact: "Uranus was the first planet discovered with a telescope. It was discovered by William Herschel in 1781.",
        color: 0x3498DB,
        icon: '<i class="fas fa-sync"></i>',
        moonsData: [
            { name: "Titania", radius: 1.6, distance: 15, speed: 0.03, color: 0x87CEEB },
            { name: "Oberon", radius: 1.5, distance: 20, speed: 0.025, color: 0x778899 },
            { name: "Umbriel", radius: 1.2, distance: 25, speed: 0.02, color: 0x708090 },
            { name: "Ariel", radius: 1.1, distance: 30, speed: 0.015, color: 0xADD8E6 }
        ]
    },
    neptune: {
        name: "Neptune",
        overview: "Neptune is dark, cold, and whipped by supersonic winds. It was the first planet located through mathematical calculations.",
        diameter: "49,244 km",
        distance: "4.5 billion km",
        moons: "14",
        temperature: "-218°C",
        gravity: "11.15 m/s²",
        atmosphere: "80% H₂, 19% He, 1% CH₄",
        orbitSpeed: "5.4 km/s",
        orbitPeriod: "165 years",
        fact: "Neptune has the strongest winds in the solar system, reaching speeds of up to 1,300 mph (2,100 km/h).",
        color: 0x2980B9,
        icon: '<i class="fas fa-water"></i>',
        moonsData: [
            { name: "Triton", radius: 1.7, distance: 15, speed: 0.03, color: 0x40E0D0 },
            { name: "Proteus", radius: 1.0, distance: 20, speed: 0.025, color: 0x4682B4 },
            { name: "Nereid", radius: 0.8, distance: 25, speed: 0.02, color: 0x5F9EA0 }
        ]
    },
    asteroidbelt: {
        name: "Asteroid Belt",
        overview: "The asteroid belt is a region of space between Mars and Jupiter where millions of rocky bodies orbit the Sun. These remnants from the early solar system never formed into a planet.",
        diameter: "Varies greatly",
        distance: "329 - 478 million km from Sun",
        moons: "0",
        temperature: "-73°C average",
        gravity: "Negligible",
        atmosphere: "None",
        orbitSpeed: "Varies",
        orbitPeriod: "3-6 years",
        fact: "The largest asteroid in the belt is Ceres, which is also classified as a dwarf planet and makes up about 25% of the belt's total mass!",
        color: 0x8a6d3b,
        icon: '<i class="fas fa-asterisk"></i>',
        moonsData: []
    }
};

// Planet quiz questions
const planetQuizzes = {
    mercury: {
        question: "What is the surface temperature of Mercury during the day?",
        options: ["100°C", "350°C", "430°C", "600°C"],
        answer: 2
    },
    venus: {
        question: "What is the main component of Venus' atmosphere?",
        options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Methane"],
        answer: 2
    },
    earth: {
        question: "What percentage of Earth's atmosphere is nitrogen?",
        options: ["21%", "50%", "78%", "95%"],
        answer: 2
    },
    mars: {
        question: "What is the name of the largest volcano on Mars?",
        options: ["Mount Everest", "Olympus Mons", "Mauna Kea", "Elysium Mons"],
        answer: 1
    },
    jupiter: {
        question: "How many Earths could fit inside Jupiter?",
        options: ["100", "500", "1,000", "1,300"],
        answer: 3
    },
    saturn: {
        question: "What are Saturn's rings primarily made of?",
        options: ["Rock", "Metal", "Ice particles", "Dust"],
        answer: 2
    },
    uranus: {
        question: "What gives Uranus its blue-green color?",
        options: ["Water", "Oxygen", "Methane", "Helium"],
        answer: 2
    },
    neptune: {
        question: "What is special about Neptune's discovery?",
        options: ["First planet with rings", "First planet discovered by telescope", "First mathematically predicted planet", "First planet with moons"],
        answer: 2
    },
    asteroidbelt: {
        question: "What is the largest object in the asteroid belt?",
        options: ["Vesta", "Pallas", "Ceres", "Hygiea"],
        answer: 2
    }
};

// Space facts for floating bubbles
const spaceFacts = [
    "The solar system is about 4.6 billion years old!",
    "Jupiter's Great Red Spot is a storm that has been raging for at least 400 years.",
    "Saturn's rings are made of billions of ice particles, some as large as mountains.",
    "Venus is the hottest planet in our solar system with surface temperatures hot enough to melt lead.",
    "Mars has the tallest volcano in the solar system, Olympus Mons, which is about 22 km high.",
    "Neptune has the strongest winds in the solar system, reaching speeds of 2,100 km/h.",
    "The Sun makes up 99.86% of the mass in our solar system.",
    "A day on Mercury lasts 59 Earth days, but a year is only 88 Earth days!"
];

// Three.js variables
let scene, camera, renderer, controls;
let sun, planets = {}, asteroidBelt, moons = {};
let currentPlanet = 'solar-system';
let travelInterval = null;
let narrationEnabled = true;
let musicEnabled = true;
let planetScale = 1;
let orbitSpeed = 5;
let missionProgress = 0;
let missionActive = false;
let beltVisible = true;
let moonsVisible = true;
let visitedPlanets = 0;
let quizScore = 0;
let missionStartTime = null;
let factInterval;
let planetLabels = {};
let hoveredPlanet = null;
let travelAnimation = null;
let engineSound, warpSound;
let started = false;

// Initialize Three.js
function init() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x05071f);
    
    // Add stars
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ 
        color: 0xFFFFFF,
        size: 0.7,
        sizeAttenuation: false
    });
    
    const starVertices = [];
    for (let i = 0; i < 15000; i++) {
        const x = (Math.random() - 0.5) * 2500;
        const y = (Math.random() - 0.5) * 2500;
        const z = (Math.random() - 0.5) * 2500;
        starVertices.push(x, y, z);
    }
    
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
    
    // Create camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 50, 200);
    
    // Create renderer
    renderer = new THREE.WebGLRenderer({ 
        canvas: document.getElementById('spaceCanvas'),
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Add orbit controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);
    
    const sunLight = new THREE.PointLight(0xFFFFFF, 1.5, 1000);
    scene.add(sunLight);
    
    // Create sun
    const sunGeometry = new THREE.SphereGeometry(10, 64, 64);
    const sunMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xFFD700,
        emissive: 0xFF4500,
        emissiveIntensity: 0.8
    });
    
    sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);
    sunLight.position.copy(sun.position);
    
    // Create corona effect for sun
    const coronaGeometry = new THREE.SphereGeometry(10.5, 32, 32);
    const coronaMaterial = new THREE.MeshBasicMaterial({
        color: 0xFFA500,
        transparent: true,
        opacity: 0.3,
        side: THREE.BackSide
    });
    const corona = new THREE.Mesh(coronaGeometry, coronaMaterial);
    sun.add(corona);
    
    // Create planets
    const planetData = [
        { name: 'mercury', radius: 3.5, distance: 30, speed: 0.01 },
        { name: 'venus', radius: 6, distance: 50, speed: 0.007 },
        { name: 'earth', radius: 6.5, distance: 70, speed: 0.005 },
        { name: 'mars', radius: 4, distance: 90, speed: 0.004 },
        { name: 'jupiter', radius: 15, distance: 120, speed: 0.002 },
        { name: 'saturn', radius: 12, distance: 160, speed: 0.0015 },
        { name: 'uranus', radius: 8, distance: 190, speed: 0.001 },
        { name: 'neptune', radius: 7.5, distance: 220, speed: 0.0008 }
    ];
    
    planetData.forEach(planet => {
        const geometry = new THREE.SphereGeometry(planet.radius, 64, 64);
        const material = new THREE.MeshPhongMaterial({ 
            color: planetsData[planet.name].color,
            shininess: 30,
            specular: 0x222222,
            emissive: 0x111111,
            emissiveIntensity: 0.1
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = planet.distance;
        
        // Add orbit ring
        const ringGeometry = new THREE.RingGeometry(planet.distance - 0.2, planet.distance + 0.2, 128);
        const ringMaterial = new THREE.LineDashedMaterial({ 
            color: 0x444488, 
            dashSize: 0.5,
            gapSize: 0.5,
            opacity: 0.3,
            transparent: true
        });
        const ring = new THREE.Line(ringGeometry, ringMaterial);
        ring.computeLineDistances();
        ring.rotation.x = Math.PI / 2;
        scene.add(ring);
        
        // Add planet to scene
        scene.add(mesh);
        
        // Create planet label
        const label = document.createElement('div');
        label.className = 'planet-label';
        label.textContent = planetsData[planet.name].name;
        document.getElementById('planetLabels').appendChild(label);
        planetLabels[planet.name] = label;
        
        // Store planet reference
        planets[planet.name] = {
            mesh: mesh,
            distance: planet.distance,
            speed: planet.speed,
            angle: Math.random() * Math.PI * 2,
            baseRadius: planet.radius,
            ring: ring,
            label: label
        };
    });
    
    // Add Saturn's ring
    const saturnRingGeometry = new THREE.RingGeometry(12, 20, 64);
    const saturnRingMaterial = new THREE.MeshBasicMaterial({
        color: 0xF1C40F,
        side: THREE.DoubleSide,
        opacity: 0.7,
        transparent: true
    });
    const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
    saturnRing.rotation.x = Math.PI / 3;
    planets.saturn.mesh.add(saturnRing);
    
    // Create asteroid belt between Mars and Jupiter
    createAsteroidBelt();
    
    // Create moons for planets
    createMoons();
    
    // Create speed lines
    createSpeedLines();
    
    // Start animation
    animate();
    
    // Event listeners
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('mousemove', onMouseMove);
    
    // Set up planet selection
    document.querySelectorAll('.mission-planet').forEach(planet => {
        planet.addEventListener('click', () => {
            if (!started) return;
            playClickSound();
            const planetName = planet.dataset.planet;
            travelToPlanet(planetName);
        });
    });
    
    // Set up modal close
    document.getElementById('closeModal').addEventListener('click', closePlanetModal);
    document.getElementById('overlay').addEventListener('click', closePlanetModal);
    
    // Set up controls
    document.getElementById('musicToggle').addEventListener('click', toggleMusic);
    document.getElementById('narrationToggle').addEventListener('click', toggleNarration);
    document.getElementById('resetBtn').addEventListener('click', resetView);
    
    // Set up sliders
    document.getElementById('speedSlider').addEventListener('input', updateOrbitSpeed);
    document.getElementById('scaleSlider').addEventListener('input', updatePlanetScale);
    
    // Set up mission button
    document.getElementById('missionBtn').addEventListener('click', startMission);
    
    // Set up asteroid belt toggle
    document.getElementById('beltToggle').addEventListener('change', toggleAsteroidBelt);
    
    // Set up moon toggle
    document.getElementById('moonToggle').addEventListener('change', toggleMoons);
    
    // Set up start button
    document.getElementById('startButton').addEventListener('click', startExperience);
    
    // Initialize engine sound
    engineSound = document.getElementById('engineSound');
    engineSound.volume = 0.3;
    
    // Initialize warp sound
    warpSound = document.getElementById('warpSound');
    warpSound.volume = 0.5;
    
    // Update system time
    updateSystemTime();
    setInterval(updateSystemTime, 1000);
    
    // Start with Earth view
    resetView();
}

// Start the experience
function startExperience() {
    const welcomeOverlay = document.getElementById('welcomeOverlay');
    welcomeOverlay.style.opacity = '0';
    setTimeout(() => {
        welcomeOverlay.style.display = 'none';
    }, 1000);
    
    started = true;
    
    // Start music
    const music = document.getElementById('spaceMusic');
    music.volume = 0.3;
    music.play();
    
    // Travel to Earth after starting
    setTimeout(() => {
        travelToPlanet('earth');
    }, 500);
}

// Handle mouse movement for planet labels
function onMouseMove(event) {
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    
    // Reset previous hovered planet
    if (hoveredPlanet) {
        hoveredPlanet.label.classList.remove('active');
        hoveredPlanet = null;
    }
    
    // Check for planet intersections
    const planetMeshes = Object.values(planets).map(p => p.mesh);
    const intersects = raycaster.intersectObjects(planetMeshes);
    
    if (intersects.length > 0) {
        const planetMesh = intersects[0].object;
        // Find which planet this mesh belongs to
        for (let name in planets) {
            if (planets[name].mesh === planetMesh) {
                hoveredPlanet = planets[name];
                break;
            }
        }
        
        if (hoveredPlanet) {
            // Update label position
            const vector = hoveredPlanet.mesh.position.clone();
            vector.project(camera);
            
            const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
            const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;
            
            hoveredPlanet.label.style.left = `${x}px`;
            hoveredPlanet.label.style.top = `${y}px`;
            hoveredPlanet.label.classList.add('active');
        }
    }
}

// Create asteroid belt with particle system
function createAsteroidBelt() {
    const asteroidCount = 8000;
    const beltGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(asteroidCount * 3);
    const colors = new Float32Array(asteroidCount * 3);
    const sizes = new Float32Array(asteroidCount);
    
    const innerRadius = 100; // Distance between Mars and Jupiter
    const outerRadius = 140;
    const height = 20;
    
    // Color palette for asteroids
    const colorsPalette = [
        new THREE.Color(0x8a6d3b), // brown
        new THREE.Color(0x7d6608), // dark brown
        new THREE.Color(0x9c9c9c), // gray
        new THREE.Color(0x7f8c8d), // dark gray
        new THREE.Color(0x5d4037), // deep brown
        new THREE.Color(0x795548)  // light brown
    ];
    
    for (let i = 0; i < asteroidCount; i++) {
        const i3 = i * 3;
        
        // Position in a flat ring between Mars and Jupiter
        const radius = innerRadius + Math.random() * (outerRadius - innerRadius);
        const angle = Math.random() * Math.PI * 2;
        const heightOffset = (Math.random() - 0.5) * height;
        
        positions[i3] = Math.cos(angle) * radius;
        positions[i3 + 1] = heightOffset;
        positions[i3 + 2] = Math.sin(angle) * radius;
        
        // Random size
        sizes[i] = Math.random() * 1.5 + 0.5;
        
        // Random color
        const color = colorsPalette[Math.floor(Math.random() * colorsPalette.length)];
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
    }
    
    beltGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    beltGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    beltGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const beltMaterial = new THREE.PointsMaterial({
        size: 1,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: true
    });
    
    asteroidBelt = new THREE.Points(beltGeometry, beltMaterial);
    scene.add(asteroidBelt);
}

// Create moons with improved orbits
function createMoons() {
    Object.keys(planets).forEach(planetName => {
        const planet = planets[planetName];
        const planetData = planetsData[planetName];
        
        if (planetData.moonsData && planetData.moonsData.length > 0) {
            moons[planetName] = [];
            
            planetData.moonsData.forEach(moonData => {
                const geometry = new THREE.SphereGeometry(moonData.radius, 32, 32);
                const material = new THREE.MeshPhongMaterial({ 
                    color: moonData.color,
                    shininess: 20
                });
                
                const mesh = new THREE.Mesh(geometry, material);
                
                // Create orbit ring for moon with dashed lines
                const ringGeometry = new THREE.RingGeometry(moonData.distance - 0.1, moonData.distance + 0.1, 64);
                const ringMaterial = new THREE.LineDashedMaterial({ 
                    color: 0x444488, 
                    dashSize: 0.1,
                    gapSize: 0.1,
                    opacity: 0.2,
                    transparent: true
                });
                const ring = new THREE.Line(ringGeometry, ringMaterial);
                ring.computeLineDistances();
                ring.rotation.x = Math.PI / 2;
                planet.mesh.add(ring);
                
                // Add moon to planet
                planet.mesh.add(mesh);
                
                // Store moon reference
                moons[planetName].push({
                    mesh: mesh,
                    distance: moonData.distance,
                    speed: moonData.speed,
                    angle: Math.random() * Math.PI * 2,
                    ring: ring
                });
            });
        }
    });
}

// Show asteroid belt info
function showAsteroidBeltInfo() {
    const planet = planetsData['asteroidbelt'];
    document.getElementById('modalTitle').textContent = planet.name;
    document.getElementById('modalIcon').innerHTML = planet.icon;
    document.getElementById('planetOverview').textContent = planet.overview;
    document.getElementById('planetDiameter').textContent = planet.diameter;
    document.getElementById('planetDistance').textContent = planet.distance;
    document.getElementById('planetMoons').textContent = planet.moons;
    document.getElementById('planetTemp').textContent = planet.temperature;
    document.getElementById('planetGravity').textContent = planet.gravity;
    document.getElementById('planetAtmosphere').textContent = planet.atmosphere;
    document.getElementById('planetOrbitSpeed').textContent = planet.orbitSpeed;
    document.getElementById('planetOrbitPeriod').textContent = planet.orbitPeriod;
    document.getElementById('planetFact').textContent = planet.fact;
    
    // Set planet image background
    const planetImage = document.getElementById('planetImage');
    planetImage.innerHTML = '<i class="fas fa-asterisk"></i>';
    planetImage.style.background = `radial-gradient(circle, ${getComputedStyle(document.documentElement).getPropertyValue('--asteroid-color')}, ${getComputedStyle(document.documentElement).getPropertyValue('--deep-space')})`;
    
    // Add quiz
    const quiz = planetQuizzes['asteroidbelt'];
    if (quiz) {
        document.getElementById('quizQuestion').textContent = quiz.question;
        const optionsContainer = document.getElementById('quizOptions');
        optionsContainer.innerHTML = '';
        
        quiz.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'mission-btn';
            button.style.margin = '5px';
            button.style.width = '100%';
            button.textContent = option;
            button.onclick = () => checkAnswer(index, quiz.answer, 'asteroidbelt');
            optionsContainer.appendChild(button);
        });
    }
    
    // Show modal and overlay
    document.getElementById('planetModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    
    // Move camera to asteroid belt
    camera.position.set(120, 15, 0);
    controls.target.set(0, 0, 0);
}

// Toggle asteroid belt visibility
function toggleAsteroidBelt() {
    if (!started) return;
    beltVisible = !beltVisible;
    asteroidBelt.visible = beltVisible;
    playClickSound();
}

// Toggle moons visibility
function toggleMoons() {
    if (!started) return;
    moonsVisible = !moonsVisible;
    Object.keys(moons).forEach(planetName => {
        moons[planetName].forEach(moon => {
            moon.mesh.visible = moonsVisible;
            moon.ring.visible = moonsVisible;
        });
    });
    playClickSound();
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate planets
    Object.keys(planets).forEach(name => {
        const planet = planets[name];
        planet.angle += planet.speed * (orbitSpeed / 5);
        planet.mesh.position.x = Math.cos(planet.angle) * planet.distance;
        planet.mesh.position.z = Math.sin(planet.angle) * planet.distance;
        planet.mesh.rotation.y += 0.01;
        
        // Update label position
        if (planet.label.classList.contains('active')) {
            const vector = planet.mesh.position.clone();
            vector.project(camera);
            
            const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
            const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;
            
            planet.label.style.left = `${x}px`;
            planet.label.style.top = `${y}px`;
        }
        
        // Rotate moons
        if (moons[name] && moonsVisible) {
            moons[name].forEach(moon => {
                moon.angle += moon.speed * (orbitSpeed / 5);
                moon.mesh.position.x = Math.cos(moon.angle) * moon.distance;
                moon.mesh.position.z = Math.sin(moon.angle) * moon.distance;
            });
        }
    });
    
    // Rotate asteroid belt
    if (asteroidBelt && beltVisible) {
        asteroidBelt.rotation.y += 0.0005 * (orbitSpeed / 5);
    }
    
    // Rotate sun
    sun.rotation.y += 0.001;
    
    // Update controls
    controls.update();
    
    // Render scene
    renderer.render(scene, camera);
}

// Window resize handler
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Travel to a planet with immersive effects
function travelToPlanet(planetName) {
    if (!started) return;
    
    if (travelInterval) {
        clearInterval(travelInterval);
    }
    
    // Show mission progress
    const missionProgress = document.getElementById('missionProgress');
    const progressFill = document.getElementById('progressFill');
    const missionTarget = document.getElementById('missionTarget');
    
    missionTarget.textContent = planetsData[planetName].name;
    missionProgress.classList.add('active');
    progressFill.style.width = '0%';
    
    // Update mission status
    document.getElementById('missionStatus').textContent = 'Traveling';
    
    // Update HUD with planet data
    updateHUD(planetName);
    
    // Start travel effects
    document.getElementById('travelEffects').style.display = 'block';
    document.getElementById('speedLines').style.opacity = '0.7';
    
    // Play engine sound
    engineSound.currentTime = 0;
    engineSound.play();
    
    // Start narration
    if (narrationEnabled) {
        speak(`Commencing travel to ${planetsData[planetName].name}. Approximate travel time 10 seconds.`);
    }
    
    // Simulate travel with immersive effects
    let progress = 0;
    let speed = 0;
    let maxSpeed = 500000; // km/s for warp effect
    
    travelInterval = setInterval(() => {
        progress += 1;
        progressFill.style.width = `${progress}%`;
        
        // Calculate and display travel speed
        speed = Math.min(maxSpeed, 10000 + progress * 5000);
        document.getElementById('travelSpeed').textContent = `at ${Math.round(speed).toLocaleString()} km/s`;
        
        // Intensify travel effects as speed increases
        const intensity = progress / 100;
        document.getElementById('speedLines').style.opacity = 0.3 + (intensity * 0.7);
        
        // Show warp tunnel effect at high speed
        if (progress > 70) {
            const warpTunnel = document.getElementById('warpTunnel');
            warpTunnel.style.display = 'block';
            warpTunnel.style.opacity = '0.7';
            warpTunnel.style.animation = 'warpTunnel 0.5s linear forwards';
            
            if (progress > 90 && !warpSound.played) {
                warpSound.currentTime = 0;
                warpSound.play();
                warpSound.played = true;
            }
        }
        
        if (progress >= 100) {
            clearInterval(travelInterval);
            travelInterval = null;
            
            // Arrived at planet
            setTimeout(() => {
                missionProgress.classList.remove('active');
                showPlanetModal(planetName);
                currentPlanet = planetName;
                document.getElementById('currentPlanet').textContent = planetsData[planetName].name;
                document.getElementById('missionStatus').textContent = 'Planet Arrived';
                
                // Hide travel effects
                document.getElementById('travelEffects').style.display = 'none';
                document.getElementById('warpTunnel').style.display = 'none';
                
                // Stop engine sound
                engineSound.pause();
                
                // Update mission progress
                if (missionActive) {
                    missionProgress += 12.5;
                    document.getElementById('missionProgressFill').style.width = `${missionProgress}%`;
                    document.getElementById('progressValue').textContent = `${Math.round(missionProgress)}%`;
                    
                    if (missionProgress >= 100) {
                        missionComplete();
                    }
                }
                
                // Update visited planets
                visitedPlanets++;
                document.getElementById('visitedPlanets').textContent = visitedPlanets;
                
                // Move camera to planet
                const planet = planets[planetName];
                camera.position.set(
                    planet.mesh.position.x + 30,
                    15,
                    planet.mesh.position.z
                );
                controls.target.copy(planet.mesh.position);
                
                // Play arrival narration
                if (narrationEnabled) {
                    setTimeout(() => {
                        speak(`Now arriving at ${planetsData[planetName].name}. ${planetsData[planetName].overview}`);
                    }, 1000);
                }
            }, 500);
        }
    }, 100);
}

// Update HUD with planet data
function updateHUD(planetName) {
    const planet = planetsData[planetName];
    document.getElementById('hudOrbitSpeed').textContent = planet.orbitSpeed;
    document.getElementById('hudTemperature').textContent = planet.temperature;
    document.getElementById('hudGravity').textContent = planet.gravity;
}

// Show planet modal
function showPlanetModal(planetName) {
    const planet = planetsData[planetName];
    document.getElementById('modalTitle').textContent = planet.name;
    document.getElementById('modalIcon').innerHTML = planet.icon;
    document.getElementById('planetOverview').textContent = planet.overview;
    document.getElementById('planetDiameter').textContent = planet.diameter;
    document.getElementById('planetDistance').textContent = planet.distance;
    document.getElementById('planetMoons').textContent = planet.moons;
    document.getElementById('planetTemp').textContent = planet.temperature;
    document.getElementById('planetGravity').textContent = planet.gravity;
    document.getElementById('planetAtmosphere').textContent = planet.atmosphere;
    document.getElementById('planetOrbitSpeed').textContent = planet.orbitSpeed;
    document.getElementById('planetOrbitPeriod').textContent = planet.orbitPeriod;
    document.getElementById('planetFact').textContent = planet.fact;
    
    // Set planet image background
    const planetImage = document.getElementById('planetImage');
    planetImage.style.background = `radial-gradient(circle, ${getComputedStyle(document.documentElement).getPropertyValue('--neon-blue')}, ${getComputedStyle(document.documentElement).getPropertyValue('--deep-space')})`;
    
    // Add quiz
    const quiz = planetQuizzes[planetName];
    if (quiz) {
        document.getElementById('quizQuestion').textContent = quiz.question;
        const optionsContainer = document.getElementById('quizOptions');
        optionsContainer.innerHTML = '';
        
        quiz.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'mission-btn';
            button.style.margin = '5px';
            button.style.width = '100%';
            button.textContent = option;
            button.onclick = () => checkAnswer(index, quiz.answer, planetName);
            optionsContainer.appendChild(button);
        });
    }
    
    // Show modal and overlay
    document.getElementById('planetModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

// Check quiz answer
function checkAnswer(selected, correct, planet) {
    const feedback = document.getElementById('quizFeedback');
    feedback.style.display = 'block';
    
    if (selected === correct) {
        feedback.textContent = "Correct! Well done, explorer!";
        feedback.className = "quiz-feedback quiz-correct";
        playClickSound();
        
        // Update quiz score
        quizScore += 10;
        document.getElementById('quizScore').textContent = quizScore;
        
        if (missionActive) {
            missionProgress += 5;
            document.getElementById('missionProgressFill').style.width = `${missionProgress}%`;
            document.getElementById('progressValue').textContent = `${Math.round(missionProgress)}%`;
            
            if (missionProgress >= 100) {
                missionComplete();
            }
        }
    } else {
        feedback.textContent = "Incorrect. Try again!";
        feedback.className = "quiz-feedback quiz-incorrect";
    }
}

// Close planet modal
function closePlanetModal() {
    playClickSound();
    document.getElementById('planetModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.getElementById('quizFeedback').style.display = 'none';
}

// Text to speech
function speak(text) {
    if (!started) return;
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(text);
        speech.rate = 0.9;
        speech.pitch = 1.2;
        speech.volume = 1;
        window.speechSynthesis.speak(speech);
    }
}

// Play click sound
function playClickSound() {
    if (!started) return;
    const clickSound = document.getElementById('clickSound');
    clickSound.currentTime = 0;
    clickSound.play();
}

// Toggle music
function toggleMusic() {
    if (!started) return;
    playClickSound();
    const music = document.getElementById('spaceMusic');
    const btn = document.getElementById('musicToggle');
    
    if (musicEnabled) {
        music.pause();
        btn.innerHTML = '<i class="fas fa-music"></i> Music: OFF';
    } else {
        music.play();
        btn.innerHTML = '<i class="fas fa-music"></i> Music: ON';
    }
    
    musicEnabled = !musicEnabled;
}

// Toggle narration
function toggleNarration() {
    if (!started) return;
    playClickSound();
    const btn = document.getElementById('narrationToggle');
    
    if (narrationEnabled) {
        btn.innerHTML = '<i class="fas fa-microphone"></i> Narration: OFF';
    } else {
        btn.innerHTML = '<i class="fas fa-microphone"></i> Narration: ON';
    }
    
    narrationEnabled = !narrationEnabled;
}

// Update orbit speed
function updateOrbitSpeed() {
    if (!started) return;
    const slider = document.getElementById('speedSlider');
    const value = parseFloat(slider.value);
    orbitSpeed = value;
    document.getElementById('speedValue').textContent = `${value.toFixed(1)}x`;
}

// Update planet scale
function updatePlanetScale() {
    if (!started) return;
    const slider = document.getElementById('scaleSlider');
    const value = parseFloat(slider.value);
    planetScale = value;
    document.getElementById('scaleValue').textContent = `${value.toFixed(1)}x`;
    
    // Update planet sizes
    Object.keys(planets).forEach(name => {
        const planet = planets[name];
        planet.mesh.scale.set(value, value, value);
    });
}

// Start exploration mission
function startMission() {
    if (!started) return;
    playClickSound();
    missionActive = true;
    missionProgress = 0;
    visitedPlanets = 0;
    quizScore = 0;
    missionStartTime = new Date();
    document.getElementById('missionProgressFill').style.width = '0%';
    document.getElementById('progressValue').textContent = '0%';
    document.getElementById('missionStatus').textContent = 'Mission Active';
    document.getElementById('visitedPlanets').textContent = '0';
    document.getElementById('quizScore').textContent = '0';
    
    // Start mission timer
    updateMissionTimer();
    const timerInterval = setInterval(updateMissionTimer, 1000);
    
    if (narrationEnabled) {
        speak("Mission initiated! Explore all planets to complete your mission. Good luck, explorer!");
    }
}

// Update mission timer
function updateMissionTimer() {
    if (!missionStartTime) return;
    
    const now = new Date();
    const diff = Math.floor((now - missionStartTime) / 1000);
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;
    
    document.getElementById('timeElapsed').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Mission complete
function missionComplete() {
    missionActive = false;
    document.getElementById('missionStatus').textContent = 'Mission Complete!';
    
    if (narrationEnabled) {
        speak("Congratulations! You've successfully explored all planets in our solar system. Well done, explorer!");
    }
    
    // Show celebration
    document.getElementById('missionBtn').textContent = 'Mission Complete!';
    document.getElementById('missionBtn').style.background = 'linear-gradient(135deg, #4CAF50, #2E7D32)';
    
    // Show confetti
    createConfetti();
}

// Reset view
function resetView() {
    playClickSound();
    camera.position.set(0, 50, 200);
    controls.target.set(0, 0, 0);
    document.getElementById('missionStatus').textContent = 'Standby';
    document.getElementById('currentPlanet').textContent = 'Solar System';
    if (travelInterval) clearInterval(travelInterval);
    closePlanetModal();
    missionActive = false;
    missionProgress = 0;
    visitedPlanets = 0;
    quizScore = 0;
    missionStartTime = null;
    document.getElementById('missionProgressFill').style.width = '0%';
    document.getElementById('progressValue').textContent = '0%';
    document.getElementById('visitedPlanets').textContent = '0';
    document.getElementById('quizScore').textContent = '0';
    document.getElementById('timeElapsed').textContent = '00:00';
    document.getElementById('missionBtn').textContent = 'Start Exploration Mission';
    document.getElementById('missionBtn').style.background = 'linear-gradient(135deg, var(--neon-blue), #0097a7)';
    
    // Hide travel effects
    document.getElementById('travelEffects').style.display = 'none';
    document.getElementById('warpTunnel').style.display = 'none';
    
    // Stop engine sound
    engineSound.pause();
    
    // Reset HUD values
    document.getElementById('hudOrbitSpeed').textContent = '-';
    document.getElementById('hudTemperature').textContent = '-';
    document.getElementById('hudGravity').textContent = '-';
}

// Update system time
function updateSystemTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour12: false });
    document.getElementById('systemTime').textContent = timeString;
}

// Show random space fact
function showRandomFact() {
    if (!started) return;
    const factBubble = document.getElementById('factBubble');
    const factText = document.getElementById('factText');
    
    // Get a random fact
    const randomFact = spaceFacts[Math.floor(Math.random() * spaceFacts.length)];
    factText.textContent = randomFact;
    
    // Position randomly on screen
    const x = Math.random() * (window.innerWidth - 300) + 50;
    const y = Math.random() * (window.innerHeight - 100) + 50;
    
    factBubble.style.left = `${x}px`;
    factBubble.style.top = `${y}px`;
    factBubble.style.display = 'block';
    
    // Hide after some time
    setTimeout(() => {
        factBubble.style.display = 'none';
    }, 8000);
}

// Create confetti effect for mission completion
function createConfetti() {
    const confettiCount = 200;
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'particle';
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = '0';
        confetti.style.position = 'fixed';
        confetti.style.zIndex = '1000';
        document.body.appendChild(confetti);
        
        // Animate confetti
        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
        });
        
        // Remove after animation
        animation.onfinish = () => {
            confetti.remove();
        };
    }
}

// Initialize everything
window.onload = function() {
    createStars();
    init();
};
