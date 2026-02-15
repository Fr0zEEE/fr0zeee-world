const navToggle = document.getElementById("nav-toggle");
const navOverlay = document.getElementById("nav-overlay");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navOverlay.style.display = "flex";
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navOverlay.style.display = "none";
    });
}

document.querySelectorAll(".overlay-link").forEach(link => {
    link.addEventListener("click", () => {
        navOverlay.style.display = "none";
    });
});

// Theme Toggle
document.addEventListener("DOMContentLoaded", function() {
    const toggleMobile = document.getElementById("theme-toggle");
    const toggleDesktop = document.getElementById("theme-toggle-desktop");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        if (toggleMobile) toggleMobile.textContent = "☀️";
        if (toggleDesktop) toggleDesktop.textContent = "☀️";
    } else {
        if (toggleMobile) toggleMobile.textContent = "🌙";
        if (toggleDesktop) toggleDesktop.textContent = "🌙";
    }

    function toggleTheme() {
        document.documentElement.classList.toggle("dark");
        const isDark = document.documentElement.classList.contains("dark");

        localStorage.setItem("theme", isDark ? "dark" : "light");
        
        const icon = isDark ? "☀️" : "🌙";
        if (toggleMobile) toggleMobile.textContent = icon;
        if (toggleDesktop) toggleDesktop.textContent = icon;
    }

    if (toggleMobile) {
        toggleMobile.addEventListener("click", toggleTheme);
    }
    
    if (toggleDesktop) {
        toggleDesktop.addEventListener("click", toggleTheme);
    }
});