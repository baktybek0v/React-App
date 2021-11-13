function carousel() {
    window.onload = function () {
        let currdeg  = 0;

        let prev = document.querySelector('.carousel-prev');
        let next = document.querySelector('.carousel-next');

        if (prev && next) {
            
            prev.onclick = function() {rotate(-1);}
            next.onclick = function() {rotate(+1);}

            function rotate(direct) {
                let carousel = document.querySelector(".carousel");

                if (direct < 0)  currdeg += 60;
                if (direct > 0 ) currdeg -= 60;

                carousel.style.transform = "rotateY("+currdeg+"deg)";
            }
        }

    }
}

carousel();
export {carousel};
