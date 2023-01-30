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

let heart = document.querySelectorAll('.heart');
let p_c_h = document.querySelectorAll('.product__card__heart');
for(let i of p_c_h){
    i.addEventListener('click', function(){
        for(let elem of heart){
            elem.addEventListener('click', function(){
                elem.setAttribute('d','M12 3.43498C10.011 -1.96402 0 -1.16202 0 7.00298C0 11.071 3.06 16.484 12 22C20.94 16.484 24 11.071 24 7.00298C24 -1.11502 14 -1.99602 12 3.43498V3.43498Z');
                elem.setAttribute('fill','#1C62CD');
                console.log(elem)
            });
        } 
    });
}