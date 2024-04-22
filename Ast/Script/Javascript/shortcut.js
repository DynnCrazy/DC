document.addEventListener("keydown", function(event) {
    
    if (event.key === "d" || event.key === "D") {
        toggleMode();
    } else if (event.key === "c" || event.key === "C") {
        comingSoon();
    }

});