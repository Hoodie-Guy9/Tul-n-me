// Function to open the lightbox with the selected image
document.querySelectorAll('.profile-pic, .gallery img, .chat-screenshots img').forEach(image => {
    image.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = image.src;  // Set the image source
        lightbox.style.display = 'flex';  // Show the lightbox
    });
});

// Function to close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
