window.addEventListener("load", function() {
    const loader = document.getElementById("loader-wrapper");
    
    // Smooth fade out after 1 second
    setTimeout(() => {
        loader.classList.add("loader-hidden");
    }, 1000); 
});