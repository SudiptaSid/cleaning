// Smooth Scroll
$('.scroll')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex','-1');
                    $target.focus();
                };
            });
        }
    }
});
// Banner Slider
$('#banner_slider').owlCarousel({
    margin:0,
    items: 1,
    nav:false,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
    dots:true,
    loop:true,
    smartSpeed:2000,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass:true, 
    responsive: {
        300: {
        },
        700: {
            dots:true,
        }
    }
  });
  // Testimonial Slider
  $('#testi_slider').owlCarousel({ 
    dots:false, 
    nav:true, 
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
    loop:true, 
    margin:30, 
    smartSpeed:1000,
    autoplay:false, 
    autoplayHoverPause:true, 
    responsiveClass:true, 
    responsive:{ 
        320:{ 
            items:1,
        },
        500:{ 
            items:2, 
        },
        900:{ 
            items:3, 
        }, 
    } 
});
// Profile Image Upload
$(document).ready(function() {
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $(".file-upload").on('change', function(){
        readURL(this);
    });
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});
// Step Form
function showNext(f_id) {
    var form_no = f_id.split("_");
    var next_form = (parseInt(form_no['1'])+1);
    $('#'+f_id).hide();
    $('#fs_'+next_form).show();
    $('#tab_'+next_form).addClass('active');
}
function showPrev(f_id) {
    var form_no = f_id.split("_");
    var next_form = (parseInt(form_no['1'])-1);
    $('#'+f_id).hide();
    $('#fs_'+next_form).show();
    $('#tab_'+form_no['1']).removeClass('active');
}

