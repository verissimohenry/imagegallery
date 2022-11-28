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
        selectedImage.src ='/images/cover__episode-${i}.jpg';
    })

    gallery.appendChild(image);
});