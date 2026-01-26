const contactBtn = document.getElementById('contactBtn');
const donateBtn = document.getElementById('donateBtn');
const dynamicModal = document.getElementById('dynamicModal');
const closeBtn = document.getElementById('closeBtn');
const closeSpan = document.querySelector('.close');
const modalImageContainer = document.getElementById('modalImageContainer');
const modalImage = document.getElementById('modalImage');
const modalText = document.getElementById('modalText');
const imagePlaceholder = document.querySelector('.image-placeholder');
const modalImages = ['images/woah.jpg', 'images/gcash.png'];

modalImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

imagePlaceholder.addEventListener('mousemove', function(e) {
    const rect = imagePlaceholder.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    imagePlaceholder.style.setProperty('--mouse-x', `${x}%`);
    // imagePlaceholder.querySelector('::after').style.opacity = '1';
});

imagePlaceholder.addEventListener('mouseleave', function() {
    imagePlaceholder.style.setProperty('--mouse-x', '-100%');
});

imagePlaceholder.addEventListener('touchmove', function(e) {
    const rect = imagePlaceholder.getBoundingClientRect();
    const touch = e.touches[0];
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    imagePlaceholder.style.setProperty('--mouse-x', `${x}%`);
});

imagePlaceholder.addEventListener('touchend', function() {
    imagePlaceholder.style.setProperty('--mouse-x', '-100%');
});

function openModal(imageUrl, text, borderRadius = '50%', imageSize = '120px') {
    if (imageUrl) {
        modalImage.src = imageUrl;
        modalImageContainer.style.borderRadius = borderRadius;
        modalImage.style.borderRadius = borderRadius;
        modalImageContainer.style.width = imageSize;
        modalImageContainer.style.height = imageSize;
        modalImageContainer.style.display = 'flex';
    } else {
        modalImageContainer.style.display = 'none';
    }
    modalText.textContent = text;
    dynamicModal.style.display = 'block';
}

function closeModal() {
    dynamicModal.style.display = 'none';
}

contactBtn.addEventListener('click', function() {
    openModal(modalImages[0], 'Currently busy and not available for collab yet hehe', '50%', '120px');
});

donateBtn.addEventListener('click', function() {
    openModal(modalImages[1], 'Support my cosplay journey! Any donations are greatly appreciated! ❤️', '10px', '300px');
});

closeBtn.addEventListener('click', closeModal);
closeSpan.addEventListener('click', closeModal);

window.addEventListener('click', function(event) {
    if (event.target === dynamicModal) {
        closeModal();
    }
});