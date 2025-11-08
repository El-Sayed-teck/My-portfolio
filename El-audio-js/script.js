'use strict'

   // Declarations
const btn1 = document.getElementById('btn-Audio1');
let audio1= new Audio();
audio1.src='audio/melody1.wav';

const btn2 = document.getElementById('btn-Audio2');
let audio2= new Audio();
audio2.src='audio/melody2.wav';

const btn3 = document.getElementById('btn-Audio3');
let audio3= new Audio();
audio3.src='audio/melody3.wav';

const btn4 = document.getElementById('btn-Audio4');
let audio4= new Audio();
audio4.src='audio/melody4.wav';

const pause = document.getElementById('pause');


   //Buttons with eventListener
btn1.addEventListener('click', function(){
    audio1.play();

    // Pausing the melodys
    audio2.pause();
    audio2.currentTime = 0;

    audio3.pause();
    audio3.currentTime = 0;

    audio4.pause();
    audio4.currentTime = 0;

    // playing and ended events
    audio1.addEventListener('playing', function(){
        console.log('Audio 1 started playing!');
    });
    audio1.addEventListener('ended', function(){
        console.log('Audio 1 ENDED!');
    });

});


btn2.addEventListener('click', function(){
    audio2.play();

    // Pausing the melodys
    audio1.pause();
    audio1.currentTime = 0;

    audio3.pause();
    audio3.currentTime = 0;

    audio4.pause();
    audio4.currentTime = 0;

      // playing and ended events
    audio2.addEventListener('playing', function(){
        console.log('Audio 2 started playing!');
    });
    audio2.addEventListener('ended', function(){
        console.log('Audio 2 ENDED!');
    });

});

btn3.addEventListener('click', function(){
    audio3.play();

    // Pausing the melodys
    audio1.pause();
    audio1.currentTime = 0;

    audio2.pause();
    audio2.currentTime = 0;

    audio4.pause();
    audio4.currentTime = 0;

      // playing and ended events
    audio3.addEventListener('playing', function(){
        console.log('Audio 3 started playing!');
    });
    audio3.addEventListener('ended', function(){
        console.log('Audio 3 ENDED!');
    });

});

btn4.addEventListener('click', function(){
    audio4.play();

    // Pausing the melodys
    audio1.pause();
    audio1.currentTime = 0;

    audio2.pause();
    audio2.currentTime = 0;

    audio3.pause();
    audio3.currentTime = 0;

      // playing and ended events
    audio4.addEventListener('playing', function(){
        console.log('Audio 4 started playing!');
    });
    audio4.addEventListener('ended', function(){
        console.log('Audio 4 ENDED!');
    });

});

//Pause button
pause.addEventListener('click', function(){
    audio1.pause();
    audio1.currentTime = 0;

    audio2.pause();
    audio2.currentTime = 0;

    audio3.pause();
    audio3.currentTime = 0;

    audio4.pause();
    audio4.currentTime = 0;

})
