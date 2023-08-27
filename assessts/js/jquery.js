$(document).ready(function () {
    // Create a GSAP timeline
    const tl = gsap.timeline();
   tl.from(".mainhead .left, .mainhead .ulclass li, .right",{
    delay:1,
    y:-200,
    stagger:.2,
   })
   tl.from(".con",{
    duration: .5,             // Animation duration in seconds
    opacity: 1,              // Fade in the heading
    y: 0,                    // Move it slightly down (optional)
    scale: 0,  
    ease: "power4.out", 

   })
   tl.from(".con .best",{
         delay:0,    // Animation duration in seconds
    opacity: 1,              // Fade in the heading
    y: -200,                    // Move it slightly down (optional)
    scale: 0,  
    ease: "power4.out",   // Scale to its original size (optional)
    
   })
   tl.from(".firstimg img", {
    duration: 1,      // Animation duration in seconds
         opacity: 0,       // Fade in the image
      ease: "power2.inOut"// Easing function for smooth animation
});
tl.from(".secondimg img", {
    duration: 1,      // Animation duration in seconds
         opacity: 0,       // Fade in the image
      ease: "power2.inOut" // Easing function for smooth animation
});
tl.from(".rightdivsecsection",{
    duration: 2,      // Animation duration in seconds
    x:-200,
    scale:0,        
    rotation: 1440,    // Rotate 360 degrees on the z-axis
            ease: "power2.inOut"
})
    // Add animations to the timeline
    tl.from(".circle", {
      delay: 1,
      duration: .2,
      rotate: 360,
      stagger: 0.2, // You can specify a time interval here (in seconds)
      z: 200,
      height: 100,
      scale:0, // Set the height value to what you need
    });
    tl.to(".circle", {
        duration: 1, // Rotate for 1 second (adjust for speed)
        rotate: 2880, // Rotate 720 degrees (adjust for the number of rotations)
        delay: .1, // Start the rotation after a 1-second delay
      });
     
      tl.from(".thirmainfirstfirstsechead",{
        y:50,
        scale:0
      })
      tl.from(".thirdmainfirst",{
        x:-200,
        opacity:0,
       
      })
      tl.from(".footer,.footer1",{
        x:-200,
        opacity:0,
        stagger:.5
       
      })
    //   tl.from(".thirdmainfirst",{
    //     x:-200,
    // opaticy:0,
    //     stagger:.5,
    //   })
    
  });
  