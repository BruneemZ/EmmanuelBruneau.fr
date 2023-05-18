window.addEventListener ('click', () => {
    let url = window.location.pathname;
    let oldIndex = -1; 

    if (url=="/Privee") {
        //****************************************************** Gestion de la galery d'images *******************************************/
        /* let imgGalery = document.querySelectorAll("img.imgGalery");

        // ajoute un écouteur d'événement aux images de la galey lorsqu'il est cliqué
        imgGalery.forEach((element, currentIndex) => {
        element.addEventListener('click', () => {
            setClassImage(currentIndex);
            oldIndex = currentIndex; 
        });
        });
        // fonction pour changer la class de l'image cliquée
        function setClassImage(index) {
            if (index==oldIndex) { 
                imgGalery[index].classList.remove('imgGaleryClick');
                imgGalery[index].classList.add('imgGalery');
                oldIndex = -1;
            } else { 
                imgGalery[index].classList.remove('imgGalery');
                imgGalery[index].classList.add('imgGaleryClick');
            }
        } */
        //****************************************************** Fin - Gestion de la galery d'images *******************************************/

        // ajoute un écouteur d'événement aux contrôles du carrousel pour passer à l'élément correspondant lorsqu'il est cliqué
        /* 

        let carouselItems = document.querySelectorAll("div.carousel-item");
        let carouselControls = document.querySelectorAll("div.carousel-control");
        let timeoutId;
        let currentIndex = 0;


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
        } */
    }

}); 