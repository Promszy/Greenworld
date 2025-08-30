document.addEventListener('DOMContentLoaded', () => {
    // --- Page Navigation ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.page-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            document.querySelector(targetId).classList.add('active');
        });
    });

    // --- Points Logic (Client-side simulation) ---
    const totalPointsDisplay = document.getElementById('total-points');
    const pointsChartCanvas = document.getElementById('pointsChart');
    let totalPoints = 0;
    let pointsHistory = [0, 0, 0, 0, 0, 0, 0]; // For a 7-day chart

    // Load points and history from local storage
    if (localStorage.getItem('totalPoints')) {
        totalPoints = parseInt(localStorage.getItem('totalPoints'));
    }
    if (localStorage.getItem('pointsHistory')) {
        pointsHistory = JSON.parse(localStorage.getItem('pointsHistory'));
    }
    totalPointsDisplay.textContent = totalPoints;

    const getPointsByPrice = (price) => {
        if (price >= 1 && price <= 3) return 1;
        if (price > 3 && price <= 7) return 2;
        if (price > 7 && price <= 12) return 3;
        // You can add more rules here
        return 0;
    };

    const purchaseButtons = document.querySelectorAll('.purchase-btn');
    purchaseButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const price = parseFloat(productCard.dataset.price);
            const pointsToAdd = getPointsByPrice(price);
            
            totalPoints += pointsToAdd;
            totalPointsDisplay.textContent = totalPoints;
            localStorage.setItem('totalPoints', totalPoints);
            alert(`You purchased a product and earned ${pointsToAdd} points!`);
            
            // For a real app, this would be a server-side transaction
        });
    });

    // --- Daily Point Timer ---
    const timerDisplay = document.getElementById('timer');
    const collectDailyPointsBtn = document.getElementById('collect-daily-points-btn');
    let lastCollectionTime = localStorage.getItem('lastCollectionTime');

    const updateTimer = () => {
        const now = new Date();
        const nextDayUTC = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1, 1, 0, 0));
        const timeRemaining = nextDayUTC - now;

        if (timeRemaining <= 0) {
            timerDisplay.textContent = "Ready to Collect!";
            collectDailyPointsBtn.disabled = false;
        } else {
            const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            timerDisplay.textContent = `${hours}h ${minutes}m ${seconds}s`;
            collectDailyPointsBtn.disabled = true;
        }
    };

    setInterval(updateTimer, 1000);

    // --- Daily Point Collection ---
    collectDailyPointsBtn.addEventListener('click', () => {
        totalPoints += 1;
        totalPointsDisplay.textContent = totalPoints;
        localStorage.setItem('totalPoints', totalPoints);
        localStorage.setItem('lastCollectionTime', new Date().toISOString());
        alert('Daily point collected!');
        updateTimer();
    });

    // --- Point Conversion ---
    const convertBtn = document.getElementById('convert-btn');
    const pointsToConvertInput = document.getElementById('points-to-convert');
    const conversionResult = document.getElementById('conversion-result');

    convertBtn.addEventListener('click', () => {
        const points = parseInt(pointsToConvertInput.value);
        if (isNaN(points) || points <= 0) {
            conversionResult.textContent = 'Please enter a valid number of points.';
            return;
        }
        if (points > totalPoints) {
            conversionResult.textContent = 'You do not have enough points.';
            return;
        }
        
        // This is where you'd have your conversion logic
        // For example, 10 points = $1 USD
        const convertedValue = points / 10;
        totalPoints -= points;
        totalPointsDisplay.textContent = totalPoints;
        localStorage.setItem('totalPoints', totalPoints);
        conversionResult.textContent = `Successfully converted ${points} points to $${convertedValue.toFixed(2)}.`;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // --- Sidebar Menu Logic ---
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const navLinks = document.querySelectorAll('.sidebar-menu a');
    const contentWrapper = document.querySelector('.content-wrapper');

    menuIcon.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close the sidebar when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    });

    // --- Logout Logic ---
    const logoutBtn = document.getElementById('logout-btn');

    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Here you would add a backend call to log the user out
        alert('You have been logged out.');
        // For a real site, you'd redirect to a login page
        window.location.href = '#home';
    });
});
￼Enterdocument.addEventListener('DOMContentLoaded', () => {
    // --- Page Navigation ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.page-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
      
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            document.querySelector(targetId).classList.add('active');
        });
    });

    // --- Points Logic (Client-side simulation) ---
    const totalPointsDisplay = document.getElementById('total-points');
    const pointsChartCanvas = document.getElementById('pointsChart');
    let totalPoints = 0;
    let pointsHistory = [0, 0, 0, 0, 0, 0, 0]; // For a 7-day chart

    // Load points and history from local storage
    if (localStorage.getItem('totalPoints')) {
        totalPoints = parseInt(localStorage.getItem('totalPoints'));
    }
    if (localStorage.getItem('pointsHistory')) {
        pointsHistory = JSON.parse(localStorage.getItem('pointsHistory'));
    }
    totalPointsDisplay.textContent = totalPoints;

    const getPointsByPrice = (price) => {
        if (price >= 1 && price <= 3) return 1;
        if (price > 3 && price <= 7) return 2;
        if (price > 7 && price <= 12) return 3;
        // You can add more rules here
        return 0;
    };

    const purchaseButtons = document.querySelectorAll('.purchase-btn');
    purchaseButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const price = parseFloat(productCard.dataset.price);
            const pointsToAdd = getPointsByPrice(price);
            
            totalPoints += pointsToAdd;
            totalPointsDisplay.textContent = totalPoints;
            localStorage.setItem('totalPoints', totalPoints);
            alert(`You purchased a product and earned ${pointsToAdd} points!`);
            
            // For a real app, this would be a server-side transaction
        });
    });

    // --- Daily Point Timer ---
    const timerDisplay = document.getElementById('timer');
    const collectDailyPointsBtn = document.getElementById('collect-daily-points-btn');
    let lastCollectionTime = localStorage.getItem('lastCollectionTime');

    const updateTimer = () => {
        const now = new Date();
        const nextDayUTC = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1, 1, 0, 0));
        const timeRemaining = nextDayUTC - now;

        if (timeRemaining <= 0) {
            timerDisplay.textContent = "Ready to Collect!";
            collectDailyPointsBtn.disabled = false;
        } else {
            const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            timerDisplay.textContent = `${hours}h ${minutes}m ${seconds}s`;
            collectDailyPointsBtn.disabled = true;
        }
