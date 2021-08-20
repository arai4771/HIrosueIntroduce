// window.addEventListener('scroll', ()=> {
//   let scrollY = window.pageYOffset;
//   let fixed = document.getElementById('scrollfixed');
//   let navheigh = fixed.getBoundingClientRect();
//   let py = scrollY + navheigh.top ;

//   if(scrollY > py) {
//     fixed.classList.add('fixed');
//   };
// });

window.onload = function() {
  Particles.init({
    selector: '.background',
    sizeVariations: 30,
    color: [
      '#0bd', 'rgba(0,187,221,.5)', 'rgba(0,187,221,.2)'
    ]
  });
};

