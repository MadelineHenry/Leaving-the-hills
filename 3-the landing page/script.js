/* défiler d'image en fond d'e*/ 
fetch('https://picsum.photos/v2/list')
.then(response => response.json())
.then(images => {
    // console.log(images)
    
    function randomImg(){
        let i = Math.floor(Math.random() * images.length);
        document.body.style.backgroundImage = `url("${images[i].download_url}")`;
        // console.log(images[i].download_url)
    }
    randomImg();
    setInterval(randomImg, 5000)
})
