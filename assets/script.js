$(document).ready(function() {
    const typed = $('.typed');
    if (typed.length) {
      let typed_strings = typed.attr('data-typed-items');
      typed_strings = typed_strings.split(',');
  
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  });


  // Open Mail
  function openEmail() {
    window.location.href = "mailto:laxman.sharma1811@gmail.com";
  }



$(document).ready(function () {
  // Smooth scroll when clicking on navbar links
  $('a[href^="#"]').on('click', function (event) {
     var target = $(this.getAttribute('href'));
     if (target.length) {
        event.preventDefault();
        // Calculate the offset, subtracting the height of the navbar
        var offset = target.offset().top - $('.sticky').outerHeight(); // Adjust '.sticky' with the appropriate class of your navbar
        // Smoothly scroll to the target section with the adjusted offset
        $('html, body').stop().animate({
           scrollTop: offset
        }, 1000);
     }
  });
});



document.addEventListener("DOMContentLoaded", function() {
  // Smooth scroll to top when clicking on anchor tags with href="#"
  document.querySelectorAll('a[href="#"]').forEach(function(anchor) {
    anchor.addEventListener("click", function(event) {
      event.preventDefault();
      document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});