const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("./src/tunes/tunes/a.wav");

/**
 * 
 * HANDLING PLAYING/CLICKING KEYS LOGIC 
 */

const playTune = (key) => {
    audio.src = `./src/tunes/tunes/${key}.wav`
    audio.play();
    
    //console.log(mapedKeys);
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

// PLAYING THE KEYS (CLICKING AND PRESSING KEYS)
pianoKeys.forEach((key) => {
    //CLICKING
    key.addEventListener("click", () => {
        playTune(key.dataset.key);
    });
    //MAP ALL (PRESSABLE) KEYS TO LIST 
    mapedKeys.push(key.dataset.key);
});

//IF KEY IS MAPPED ON THE "PRESSABLE" LIST OF KEYS, PLAY AUDIO
document.addEventListener("keydown", (e) => {
    if(mapedKeys.includes(e.key)){
        playTune(e.key);
    }
});

/*********  HANDLING    ************
**********  VOLUME AND  ************
**********  SHOW KEYS   ************/

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach((key) => {
        key.classList.toggle("hide");
    })
}

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);