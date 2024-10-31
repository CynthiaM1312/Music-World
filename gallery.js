document.addEventListener("DOMContentLoaded", function () {
    const images = [
        { src: 'Image/Bollywood.jpg', caption: 'Bollywood' },
        { src: 'Image/Sufi-night.jpg', caption: 'Sufi Night' },
        { src: 'Image/Indian-classical.jpg', caption: 'Indian Classical' },
        { src: 'Image/Pop-music.jpg', caption: 'Pop Music' }
    ];

    const gallery = document.getElementById('gallery');

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;

        const captionElement = document.createElement('div');
        captionElement.className = 'caption';
        captionElement.innerText = image.caption;

        const item = document.createElement('div');
        item.appendChild(imgElement);
        item.appendChild(captionElement);

        gallery.appendChild(item);
    });
});
