let circularProgress = document.querySelector(".circular-progress"),
progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
progressEndValue = 100,    
speed = 100;

// let progress = setInterval(() => {
// progressStartValue++;

// progressValue.textContent = `${progressStartValue}%`
// circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

// if(progressStartValue == progressEndValue){
//     clearInterval(progress);
// }    
// }, speed);

const getBatteryLevel = function() {
    navigator.getBattery().then(function(battery) {
        var level = parseInt(battery.level * 100)

        progressEndValue = level   

        if (progressStartValue !== level) {
            progressStartValue++
        }

        speed = 100;
        progressValue.textContent = `${progressStartValue}%`
        circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

        if (level > 90 && battery.charging) {
            alert('Charger band krde bhai...!')
        } else if (level < 25 && !battery.charging) {
            alert('Charger on krde bhai...!')
        }
    })
}

setInterval(getBatteryLevel, 10);