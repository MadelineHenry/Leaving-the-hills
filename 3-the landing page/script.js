/* ----défiler d'image en fond d'écran----*/ 
fetch('https://picsum.photos/v2/list')
.then(response => response.json())
.then(images => {
 console.log(images)
    
    function randomImg(){
        let i = Math.floor(Math.random() * images.length);
        document.body.style.backgroundImage = `url("${images[i].download_url}")`;
    console.log(images[i].download_url)
    }
    randomImg();
    setInterval(randomImg, 5000)
})

/* ----afficher l'heure dans l'horloge ---- */

const datetime = new Date();

const secondDiv = document.querySelector('.second-hand');
const minDiv = document.querySelector('.min-hand');
const hourDiv = document.querySelector('.hour-hand');

/* fonction qui permet d'actualisé l'heure et de faire bouger les aiguilles*/
function setDate() {
    const datetime = new Date();

    const seconds = datetime.getSeconds();
    const secDeg=((seconds/60)*360+90);
    secondDiv.style.transform = `rotate(${secDeg}deg)`;

    const mins = datetime.getMinutes();
    const minDeg = ((mins/60)*360) + ((seconds/60)*6) + 90;
    minDiv.style.transform = `rotate(${minDeg}deg)`;

    const hours = datetime.getHours();
    const hourDeg = ((hours/12)*360) + ((mins/60)*30) + 90;
    hourDiv.style.transform = `rotate(${hourDeg}deg)`;
}
setInterval(setDate, 1000);

/* afficher l'heure et la date créer une fonction qui raffraichi l'heure */

const year = dateTime.getFullYear();

document.getElementById("date").innerHTML = year;





/* click sur les liens */
/* créer des liens vers les autres exercises */