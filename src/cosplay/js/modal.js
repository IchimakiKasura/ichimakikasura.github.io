const contactBtn = document.getElementById('contactBtn');
const donateBtn = document.getElementById('donateBtn');
const merchBtn = document.getElementById('merchBtn');
const dynamicModal = document.getElementById('dynamicModal');
const closeBtn = document.getElementById('closeBtn');
const closeSpan = document.querySelector('.close');
const modalImageContainer = document.getElementById('modalImageContainer');
const modalImage = document.getElementById('modalImage');
const modalText = document.getElementById('modalText');
const modalImages = ['images/woah.jpg', 'images/shopeepay.png', 'images/woah2.jpg'];

modalImages.forEach(src => {
    const img = new Image();
    img.src = src;
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
    modalText.innerHTML = text;
    dynamicModal.style.display = 'block';
}

function closeModal() {
    dynamicModal.style.display = 'none';
}

// Event listeners for modal buttons
contactBtn.addEventListener('click', function() {
    openModal(modalImages[0], `
        If you have any inquiries, please email <span style="color:black">ichimakikasura@gmail.com</span>
        <br><br>
        <span style="font-style:italic;font-size:14px;">Currently busy and not available for collab yet hehe</span>
    `, '50%', '120px');
});

donateBtn.addEventListener('click', function() {
    openModal(modalImages[1], 'Support my cosplay journey! Any donations are greatly appreciated! ❤️', '10px', '300px');
});

merchBtn.addEventListener('click', function() {
    openModal(modalImages[2], 'Coscards are on the way :>', '50%', '120px');
});

// Close modal events
closeBtn.addEventListener('click', closeModal);
closeSpan.addEventListener('click', closeModal);

window.addEventListener('click', function(event) {
    if (event.target === dynamicModal) {
        closeModal();
    }
});