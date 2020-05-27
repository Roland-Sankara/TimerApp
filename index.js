//Extract the DOM elements corresponding to the durationInput,startButton and the pauseButton
const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')

const circle = document.querySelector('circle')
const perimeter = circle.getAttribute('r')*Math.PI*2; // calculate the perimeter of the circle using (2*PI*radius-of-circle)
circle.setAttribute('stroke-dasharray',perimeter); //set the value of the stroke-dasharray to the perimeter of the circle

let duration;
//Create New instance of Timer
const timer = new Timer(durationInput,startButton,pauseButton,{
    onStart(totalDuration){
        /*capture the initial value of the Duration of the timer
        and then store that value in the duration variable
        */
        duration = totalDuration
    },
    onTick(timeRemaining){
        //set the stroke-dashoffset value to a new value for every tick of the timer
        circle.setAttribute('stroke-dashoffset',
        (perimeter * timeRemaining) / duration-perimeter
        //corelate between the stroke-dashoffset and the perimeter as the timer ticks
        );

    },
    onComplete(){
        console.log('Timer is Completed')
    }
})