	//scrollup
   const scrollUp = () => {
      const scrollUp = document.getElementById('scroll-up')
      this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
   };
   window.addEventListener('scroll', scrollUp);


      //scroll reveal animation
      const sr = ScrollReveal({
         origin: 'top',
         distance: '60px',
         duration: 2500,
         delay: 400,
         //reset: true //Animation repeat
      })
      sr.reveal(`.page-block__sudtitle, .page-block__title, .page-block__text, .enjoy-block__title, .enjoy-block__text`);
      sr.reveal(`.header-block__button, .subscribe__block, .footer-block`, {origin: 'bottom'});
      sr.reveal(`.discover-block__info, .skills__data, .chance-block-content`, {origin: 'left'});
      sr.reveal(`.discover-bloc__images, .different-block__title-block, .chance-block-images`, {origin: 'right'});
      sr.reveal(`.card, .different-block__cards`, {interval: 100});
