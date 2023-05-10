import "src/assets/gsap-public/minified/gsap.min.js"; 

const loader = document.querySelector("div.loader");
const Unloader = document.querySelector("div.unloader");

window.addEventListener ('load', () => {
     loader.classList.add('fondu-out');
     Unloader.classList.add('fondu-in');

     let carouselItems = document.querySelectorAll("div.carousel-item");
     let carouselControls = document.querySelectorAll("div.carousel-control");
  
     let currentIndex = 0;
     let timeoutId;

     // Timeline  GSAP - Portfolio 
     let tl = gsap.timeline();
     tl.from('.textAnimated span',{
        duration:1, 
        opacity:0.2,
        stagger:0.05,
        filter: 'blur(10px)'
      });
      tl.from('.trait', { 
        width: 0
      });

  // ajoute un écouteur d'événement aux contrôles du carrousel pour passer à l'élément correspondant lorsqu'il est cliqué
     carouselControls.forEach((control, index) => {
     control.addEventListener('click', () => {
       setActive(index);
       clearTimeout(timeoutId);
       timeoutId = setTimeout(next, 5000);
     });
   });
   
   // démarre le carrousel
   timeoutId = setTimeout(next, 5000);
 
    // fonction pour changer l'élément de carrousel actif
    function setActive(index) {
      carouselItems[currentIndex].classList.remove('active');
      carouselControls[currentIndex].classList.remove('active');
      carouselItems[index].classList.add('active');
      carouselControls[index].classList.add('active');
      currentIndex = index;
    }
    
    // fonction pour passer à l'élément suivant
    function next() {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= carouselItems.length) {
        nextIndex = 0;
      }
      setActive(nextIndex);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(next, 5000); // déclenche la transition toutes les 5 secondes
    }


})



