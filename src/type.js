'use strict';

new TypeIt('.home__title--strong', {
    loop: true,
    speed: 100,
})
.type('Technical Writer')  
.pause(1000)
.delete()
.type('Curriculum Developer') 
.pause(1000)
.delete()
.type('Software Development Enablement Expert')
.pause(1000)
.delete()
.go();
