"use strict"
let ellipse1 = document.querySelector('.ellipse1');
let ellipse2 = document.querySelector('.ellipse2');
let ellipse3 = document.querySelector('.ellipse3');
let ellipse4 = document.querySelector('.ellipse4');
let ellipse5 = document.querySelector('.ellipse5');
let ellipse6 = document.querySelector('.ellipse6');

ellipse1.setAttribute('fill','white');

ellipse1.addEventListener('click', function(){
    ellipse1.setAttribute('fill','white');
    ellipse2.setAttribute('fill', 'none');
    ellipse3.setAttribute('fill', 'none');
    ellipse4.setAttribute('fill', 'none');
    ellipse5.setAttribute('fill', 'none');
    ellipse6.setAttribute('fill', 'none');
});

ellipse2.addEventListener('click', function(){
    ellipse2.setAttribute('fill','white');
    ellipse1.setAttribute('fill','none');
    ellipse3.setAttribute('fill','none');
    ellipse4.setAttribute('fill','none');
    ellipse5.setAttribute('fill','none');
    ellipse6.setAttribute('fill','none');
});
ellipse3.addEventListener('click', function(){
    ellipse3.setAttribute('fill','white');
    ellipse1.setAttribute('fill','none');
    ellipse2.setAttribute('fill','none');
    ellipse4.setAttribute('fill','none');
    ellipse5.setAttribute('fill','none');
    ellipse6.setAttribute('fill','none');
});
ellipse4.addEventListener('click', function(){
    ellipse4.setAttribute('fill','white');
    ellipse1.setAttribute('fill','none');
    ellipse2.setAttribute('fill','none');
    ellipse3.setAttribute('fill','none');
    ellipse5.setAttribute('fill','none');
    ellipse6.setAttribute('fill','none');
});
ellipse5.addEventListener('click', function(){
    ellipse5.setAttribute('fill','white');
    ellipse1.setAttribute('fill','none');
    ellipse2.setAttribute('fill','none');
    ellipse3.setAttribute('fill','none');
    ellipse4.setAttribute('fill','none');
    ellipse6.setAttribute('fill','none');
});
ellipse6.addEventListener('click', function(){
    ellipse6.setAttribute('fill','white');
    ellipse1.setAttribute('fill','none');
    ellipse2.setAttribute('fill','none');
    ellipse3.setAttribute('fill','none');
    ellipse4.setAttribute('fill','none');
    ellipse5.setAttribute('fill','none');
});