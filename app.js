const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('seclectedImage');
const imageIndexes = [1,2,3,4,5,6,7,8,9,10];
const selectedIndex = null;

imageIndexes.forEach((i) => {
    const image = document.createElement('img');
    image.src = '/images/cover__episode-${i}.jpg';
    image.alt = 'Cover for Episode ${i} of the Compressed.fm Podcast';
    image.classList.add('galleryImg'); 

    image.addEventListener('click', () =>{
        //popup staff
        popup.style.transform = 'translateY(0)';
        selectedImage.src = '/images/cover__episode-${i}.jpg';
        selectedImage.alt = 'Cover for Episode ${i} of the Compressed.fm Podcast';
    })

    gallery.appendChild(image);
});

popup.addEventListener('click', () =>{
    popup.style.transform = 'translateY(100%)';
    popup.src = '';
    popup.alt = '';
});