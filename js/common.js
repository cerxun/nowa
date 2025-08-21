$(document).ready(function() {
    $('.minus').click(function () {
				var $input = $(this).parent().find('input');
				var count = parseInt($input.val()) - 1;
				count = count < 1 ? 1 : count;
				$input.val(count);
				$input.change();
				return false;
			});
			$('.plus').click(function () {
				var $input = $(this).parent().find('input');
				$input.val(parseInt($input.val()) + 1);
				$input.change();
				return false;
			});
    $('.mobile__button').click(function() {
        $('.header-menu__list').toggleClass('active');
    });
  var owl = $('.reviews__list');
    owl.owlCarousel({
        items: 3,
        nav: true,
        dots:false,
        margin:20,
        responsive:{
            0:{
                items:1.1,
                nav:false,
                margin:10
            },
            680:{
                items:2
            },
            1220:{
                items:3
            }
          }
    });
      new WOW().init();
   $('.faq-item__title').click(function() {
        $(this).toggleClass('active');
        $(this).parent().children('.faq-item__info').slideToggle('active');
        $(this).parent().toggleClass('active');
        return false;
    });
    $(".popup__header button").submit(function(e) {
        e.preventDefault();
    });
    $('.popup__header').delegate('button:not(.active)', 'click', function() {
        act(this);
    })
    function act(Obj) {
        $(Obj).addClass('active').siblings().removeClass('active')
        .parents('.popup__content').find('.popup__form').eq($(Obj).index())
        .show().siblings('.popup__form').hide();
    };
    $('.popup').click(function(e) {
		if ($(e.target).closest('.popup__content').length == 0) {
			$(this).removeClass('active');;					
		}
	})
    $('.personal__edit').click(function() {
        $('.popup-edit').toggleClass('active');
    });
    $('.personal__call').click(function() {
        $('.popup-call').toggleClass('active');
    });
    $('.personal__complaint').click(function() {
        $('.popup-complaint').toggleClass('active');
    });
})
