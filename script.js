document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider");
    const images = slider.querySelectorAll("img");
    let currentImageIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    setInterval(nextImage, 5000); // Change image every 5 seconds
});
