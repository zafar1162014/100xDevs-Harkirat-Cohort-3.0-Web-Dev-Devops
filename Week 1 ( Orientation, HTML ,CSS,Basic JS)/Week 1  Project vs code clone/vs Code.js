document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    // Define image paths for light mode and dark mode
    const images = [
        { id: "themeToggle", light: "https://code.visualstudio.com/assets/icons/theme-dark.svg", dark: "https://code.visualstudio.com/assets/icons/theme-light.svg" },
        { id: "SearchIcon", light: "https://code.visualstudio.com/assets/icons/search.svg", dark: "https://code.visualstudio.com/assets/icons/search-dark.svg" },
        { id: "Vs_code_1", light: "https://code.visualstudio.com/assets/home/home-screenshot-mac-2x-v2-light.png", dark: "https://code.visualstudio.com/assets/home/home-screenshot-mac-2x-v2.png" },
        { id: "Vs_code_2", light: "https://code.visualstudio.com/assets/home/swimlane-copilot-light.png", dark: "https://code.visualstudio.com/assets/home/swimlane-copilot.png" },
        { id: "Vs_code_3", light: "https://code.visualstudio.com/assets/home/swimlane-customized-light.png", dark: "https://code.visualstudio.com/assets/home/swimlane-customized.png" },
        { id: "Vs_code_4", light: "https://code.visualstudio.com/assets/home/swimlane-anywhere-light.png", dark: "https://code.visualstudio.com/assets/home/swimlane-anywhere.png" },
    ];

    themeToggle.addEventListener("click", function() {
        body.classList.toggle("light-theme");

        if (body.classList.contains("light-theme")) {
            images.forEach(image => {
                document.getElementById(image.id).src = image.light;
            });
        } else {
            images.forEach(image => {
                document.getElementById(image.id).src = image.dark;
            });
        }
    });
});
