'use strict';

new TypeIt('.home__title--strong', {
    loop: true,
    speed: 100,
}) 
.pause(1000)
.delete()
.type('curriculum developer') 
.pause(1000)
.delete()
.type('software development L&D expert')
.pause(1000)
.delete()
.go();
