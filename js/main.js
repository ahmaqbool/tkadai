$(document).ready(function(){

	$('.hamburger-button,.sliding-panel-fade-screen,.sliding-panel-close,.close-menu').on('click touchstart',function (e) {
		$('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
		$('body').toggleClass('disableScroll');
		e.preventDefault();
	});

	$('#location-inp').on('click touchstart',function (e) {
		popLocationPrompt()
		e.preventDefault();
	});

	$('.overlay-panel').on('click touchstart',function (e) {
		$('#location-inp').removeClass('highlight');
		$('.location-modal').toggleClass('is-visible');
		$('.overlay-panel').toggleClass('is-visible');
		e.preventDefault();
	});

	$('.static-menu .more-link > a').on('click touchstart',function (e) {
		if($(this).parent().hasClass('single-parent')){
			window.open("blog.html","_self");
		}
	});

	$('.static-menu .more-link > a').on('click touchstart',function (e) {
		if($(this).parent().hasClass('active-item'))
		{
			$('.static-menu .more-link').removeClass('active-item');
			$(this).parent().find('.submenu').slideUp();
		}
		else
		{
			$('.static-menu .more-link').removeClass('active-item');
			$('.static-menu .more-link .submenu').hide();
			$(this).parent().addClass('active-item');
			$(this).parent().find('.submenu').slideDown();
		}
		e.preventDefault();
	});
	$('.mob-menu-button').on('click touchstart',function (e) {
		$('.products-menu').toggleClass('is-visible');
		if($('.products-menu').hasClass('is-visible'))
		{
			$('#location-inp').hide();
		}
		else
		{
			$('#location-inp').show();
		}
		if($('.location-modal').hasClass('is-visible'))
		{
			$('.location-modal,.overlay-panel').removeClass('is-visible');
		}
		e.preventDefault();
	});

	$('#recent-locations2 li a').on('click touchstart',function (e) {
		$('#location-text').val($(this).html());
		$('#location-top-text').text($(this).html());
		$('.modal-fade-screen').trigger('click');
		e.preventDefault();
	});


	/*
	$('.address .action-block .del').on('click touchstart',function (e) {
		$(this).parents('.address').remove();
		e.preventDefault();
	});*/

	/*
	$('.add-new-address,.address .action-block .edit').on('click touchstart',function (e) {
		$(this).parents('.delivery-address-wrapper-block').hide();
		$(this).parents().find('.add-edit-new-address-block').fadeIn();
		$(this).parents().find('.delivery-address-wrapper').prev().html('Add Delivery Address');
		e.preventDefault();
	});
	*/
	$(document).on('click','.add-new-address',function(e){
		$('.delivery-address-wrapper').data('new-address', true);
		$(this).parents('.delivery-address-wrapper-block').hide();
		$(this).parents().find('.add-edit-new-address-block').data('edit', false).fadeIn();
		$(this).closest('.delivery-wrapper').find('.add-address-header').html('Add Delivery Address');
		$(this).closest('.delivery-wrapper').addClass('new-address');
		e.preventDefault();
	})

	$(document).on('click', '.close-delivery-address', function(){
		$('.delivery-address-wrapper').data('new-address', false);
		$(this).closest('.delivery-wrapper').find('.delivery-address-wrapper-block').show();
		$(this).closest('.delivery-wrapper').find('.add-edit-new-address-block').data('edit', true).hide();
		$(this).closest('.delivery-wrapper').find('.add-address-header').html('Delivery Address');
		$(this).closest('.delivery-wrapper').removeClass('new-address');
		e.preventDefault();
	})

	/*
	$('#changeAddress').on('click touchstart',function (e) {
		$(this).parents().find('.add-edit-new-address-block').hide();
		$(this).parents().find('.delivery-address-wrapper-block').fadeIn();
		$(this).parents().find('.delivery-address-wrapper').find('.add-address-header').html('Delivery Address');
		e.preventDefault();
	});


	$(document).on('click touchstart', '.add-to-cart',function (e) {
		if($(this).parents('.item').find('.dropdown').length > 0)
		{
			if($(this).parents('.item').find('.dropdown-button').html() != "Select Size")
			{
				$(this).hide();
				$(this).parent().find('.quantity-wrapper').show();
			}
			else
			{
				$(this).parents('.details').find('.dropdown-menu').addClass('show-menu');
			}
			 //&& $(this).parents('.item').find('.dropdown-button').html() != "Select Size"
		}
		else
		{
			$(this).hide();
			$(this).parent().find('.quantity-wrapper').show();
		}
		e.preventDefault();
	});
	*/
	$('#verify-phone-trigger').on('click touchstart',function (e) {
		$('#phone-verify-modal').trigger('click');
		$('#verify-code-modal').trigger('click');
		e.preventDefault();
	});

/*
	$('.quantity-wrapper .minus').on('click touchstart',function (e) {
		var quantityElem = $(this).parent().find('.quantity');
		var quantityVal = parseInt(quantityElem.val());
		if(quantityVal > 0)
		{
			quantityVal = quantityVal - 1;
			quantityElem.val(quantityVal);
		}
		else
		{
			$(this).parents('.add-to-cart-wrapper').find('.quantity-wrapper').hide();
			$(this).parents('.add-to-cart-wrapper').find('.add-to-cart').show();
		}
		e.preventDefault();
	});

*/

	$('.am-pm-item .minus,.am-pm-item .plus').on('click touchstart',function (e) {
		var quantityElem = $(this).parent().find('#am-pm');
		var quantityVal = quantityElem.val();
		if(quantityVal == "AM")
		{
			quantityElem.val("PM");
		}
		else
		{
			quantityElem.val("AM");
		}
		e.preventDefault();
	});

	$('.min-item .plus').on('click touchstart',function (e) {
		var quantityElem = $(this).parent().find('#min');
		var quantityVal = parseInt(quantityElem.val());
		quantityVal = quantityVal + 15;
		if(quantityVal == 60)
		{
			quantityVal = 0;
		}
		quantityElem.val(quantityVal);
		e.preventDefault();
	});

	$('.min-item .minus').on('click touchstart',function (e) {
		var quantityElem = $(this).parent().find('#min');
		var quantityVal = parseInt(quantityElem.val());

		if(quantityVal == 0)
		{
			quantityVal = 60;
		}
		quantityVal = quantityVal - 15;
		quantityElem.val(quantityVal);
		e.preventDefault();
	});

	$('.hrs-item .plus').on('click touchstart',function (e) {
		var quantityElem = $(this).parent().find('#hrs');
		var quantityVal = parseInt(quantityElem.val());
		quantityVal = quantityVal + 1;
		if(quantityVal >= 13)
		{
			quantityVal = 1;
		}
		quantityElem.val(quantityVal);
		e.preventDefault();
	});

	$('.hrs-item .minus').on('click touchstart',function (e) {
		var quantityElem = $(this).parent().find('#hrs');
		var quantityVal = parseInt(quantityElem.val());
		quantityVal = quantityVal - 1;
		if(quantityVal <= 0)
		{
			quantityVal = 12;
		}
		quantityElem.val(quantityVal);
		e.preventDefault();
	});

	$('.promo-edit').on('click touchstart',function (e) {
		$('.promo-applied-block').hide();
		$('.promo-code-content').slideDown();
		e.preventDefault();
	});

	$('.promo-code-text').on('click touchstart',function (e) {
		$(this).hide();
		$('.promo-code-content').slideDown();
		e.preventDefault();
	});

	/*$('.location-input').on('click touchstart',function (e) {
		$('.location-list').slideDown();
		e.preventDefault();
	});*/

	$('.location-list li').on('click touchstart',function (e) {
		$('.location-input').val($(this).text());
		$('.location-list').slideUp();
		e.preventDefault();
	});

	$(document).on('click' ,".dropdown-button", function() {
		var $button, $menu;
		$button = $(this);
		$menu = $button.siblings(".dropdown-menu");

		if($menu.hasClass("show-menu"))
		{
    		$(".dropdown-menu").removeClass("show-menu");

		}
		else
		{
    		$(".dropdown-menu").removeClass("show-menu");

			$menu.toggleClass("show-menu");
		}
	});

	$(document).on( "click", ".dropdown-menu li", function() {
		//$(this).find('input[type="radio"]').prop('checked', true);
		$(this).closest('.dropdown-menu').find('li').removeClass('selected');
		$(this).addClass('selected');
		$button = $(this).parents('.dropdown').find('.dropdown-button');
		$(this).parent().removeClass("show-menu");
		$button.html($(this).html());
		$(this).closest('.item').data('option-id' , $(this).data('option-id'));
		var price = $(this).data('price') //+ parseFloat($(this).closest('.item').find('.price').text());
		$(this).closest('.item').find('.price').html(price);

		var item_id = parseInt($(this).closest('.item').data('item-id'));
		var option_id = parseInt($(this).data('option-id'));

		//not correct way to do it
		var temp_sig = item_id+'_'+option_id;
		var inCart = UP_VARS.CART.items;
		var isAdded =  false;
		for(var y in inCart){
			if(temp_sig == inCart[y].sig){
				isAdded = true
				break;
			}
		}

		var cc_items = _.filter(UP_VARS.CART.items, function(e) {
			return e.sig  == temp_sig;
		});

		var quant = _.reduce(cc_items, function(s, entry) {
			return s + entry.quantity;
		}, 0);

		if(isAdded){
			$(this).closest('.item').find('.add-to-cart').hide();
			$(this).closest('.item').find('.quantity-wrapper').show();
			$(this).closest('.item').find('.quantity').val(quant);
		}else{
			$(this).closest('.item').find('.add-to-cart').show();
			$(this).closest('.item').find('.quantity-wrapper').hide();
		}



		console.log(temp_sig)
		//renderAddButton()
		if($(this).html()!="Select Time") {
			$('.delivery-time').removeAttr('checked');
		}
	});

	$(document).mouseup(function (e)
	{
		var dropdown = $(".dropdown-menu");
		var dropdownButton = $(".dropdown-button");
		var inpLocation = $(".location-input");

		if ((!dropdown.is(e.target) && dropdown.has(e.target).length === 0) && (!dropdownButton.is(e.target) && dropdownButton.has(e.target).length === 0))
		{
		  dropdown.removeClass("show-menu");
		}


		if (!inpLocation.is(e.target) && inpLocation.has(e.target).length === 0)
		{
		  $('.location-list').slideUp();
		}

	});

	$(window).scroll(function() {

		if ($(this).scrollTop() > 152){
		    $('.top-menu').addClass("sticky");
		    $('.top-menu').css("max-height","78px");
		    $('.cart-location-wrapper').addClass("sticky");
		    $('.location-wrapper').addClass("sticky");
		    $('.hamburger-button').addClass("sticky");
		    $('.mob-menu-button').addClass("sticky");
		    $('.mob-menu-button1').addClass("sticky");

		  }
		  else{
		    $('.top-menu').removeClass("sticky");
		    $('.top-menu').css("max-height","63px");
		    $('.cart-location-wrapper').removeClass("sticky");
		    $('.location-wrapper').removeClass("sticky");
		    $('.hamburger-button').removeClass("sticky");
		    $('.mob-menu-button').removeClass("sticky");
		    $('.mob-menu-button1').removeClass("sticky");
		  }
	});


	$(window).scroll(function() {

		var headerHeight = $('.navigation,.header-v3').outerHeight();

		if ($(this).scrollTop() > 86){
		    $('.navigation,.header-v3').addClass("sticky");
		  }
		  else{
		    $('.navigation,.header-v3').removeClass("sticky");
		  }
	});

	$(".modal-trigger").on("click", function() {
		var modalId = $(this).attr("data-modal-id");
		$(modalId).prop("checked", true).change();
		$('#main,.top-menu,.header').addClass('blur');
		 return false;
	});

	$(".modal-fade-screen:not('.login-modal-fade'), .modal-close").on("click", function() {
		$('body').css({'overflow':'auto'})
		$(".modal-state:checked").prop("checked", false).change();
		$('#main,.top-menu,.header').removeClass('blur');
	});

	$(".modal-inner").on("click", function(e) {
		e.stopPropagation();
	});

	$(".payment-wrapper .radio-wrapper").on("click", function() {
		$(this).find('input[type="radio"]').prop("checked", true).change();
		$(".payment-wrapper .radio-wrapper").removeClass('active');
		$(this).addClass('active');
	});

	$(".delivery-address-wrapper .address").on("click", function() {
		$(this).find('input[type="radio"]').prop("checked", true).change();
	});

	var tabHeaderHeight = $('.vertical-tabs.tab-header').outerHeight()+4;
	var tabContentHeight = $('.vertical-tab-content').outerHeight();
	if(tabHeaderHeight > tabContentHeight){
		$('.vertical-tab-content-container').css('height',tabHeaderHeight);
	}else{
		$('.vertical-tab-content-container').css('height',tabContentHeight);
	}

/* if in tab mode */
$(document).on('click',".js-vertical-tab",function(event) {
  event.preventDefault();

  //$(".js-vertical-tab-content").hide();
  var activeTab = $(this).data("rel");
  //$("#"+activeTab).show();

  $(".js-vertical-tab").removeClass("is-active");
  $(this).addClass("is-active");

  	$(".js-vertical-tab-accordion-heading").removeClass("is-active");
 	$(".js-vertical-tab-accordion-heading[data-rel^='"+activeTab+"']").addClass("is-active");

  	$(".js-vertical-tab-content").removeClass("is-active");
	$(".js-vertical-tab-content#"+activeTab).removeClass("is-active");

	tabContentHeight = $('#'+activeTab).outerHeight();
	if(tabHeaderHeight > tabContentHeight)
	{
		$('.vertical-tab-content-container').css('height',tabHeaderHeight);
	}
	else
	{
		$('.vertical-tab-content-container').css('height',tabContentHeight);
	}

  $("#"+activeTab).addClass("is-active");

});

	/* if in accordion mode */
	$(document).on("click",".js-vertical-tab-accordion-heading",function(event) {
		event.preventDefault();
		if (!$(this).hasClass('is-active')) {
			$(".js-vertical-tab-content").removeClass('is-active');
			var accordion_activeTab = $(this).data("rel");

			$(".js-vertical-tab-accordion-heading").removeClass("is-active");
			$(this).addClass("is-active");

			$(".js-vertical-tab").removeClass("is-active");
			$(".js-vertical-tab[data-rel^='"+accordion_activeTab+"']").addClass("is-active");
			$("#"+accordion_activeTab).addClass("is-active");
		}
		else{
			$(this).removeClass("is-active");
			$(this).next().removeClass("is-active");
		}
	});

	$('.accordion-tabs').each(function(index) {
		$(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
		});
	$('.accordion-tabs').on('click', 'li > a.tab-link', function(event) {
		if (!$(this).hasClass('is-active')) {
		  event.preventDefault();
		  var accordionTabs = $(this).closest('.accordion-tabs');
		  accordionTabs.find('.is-open').removeClass('is-open').hide();

		  $(this).next().toggleClass('is-open').slideDown();
		  accordionTabs.find('.is-active').removeClass('is-active');
		  $(this).addClass('is-active');

		} else {
		  event.preventDefault();
		}
	});

	sideFooterMenu();

	$(window).on("load",function(){

		/*$(".sliding-panel-content,.store-block").mCustomScrollbar({
			theme:"minimal"
		});*/

	});

	$(window).resize(function(){
	    sideFooterMenu();
	});


	function sideFooterMenu(){
		var sideMenuFooterHeight = $('.side-menu-footer').outerHeight();
		var sideMenuProfileHeight = $('.profile-block').outerHeight();
		var sideMenuHeight = parseInt($('#menu1').outerHeight()) + parseInt($('#menu2').outerHeight());
		var windowHeight = $(window).height();
		if(windowHeight - (sideMenuProfileHeight + sideMenuHeight) >= sideMenuFooterHeight)
		{
			$('.side-menu-footer').addClass('fixed');
		}
	}

	var timelineBlocks = $('.timeline-content'),
		offset = 0.9;

	hideBlocks(timelineBlocks, offset);

	$(window).on('scroll', function(){
		(!window.requestAnimationFrame)
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).hasClass('is-hidden') ) && $(this).removeClass('is-hidden').removeClass('delay-1').removeClass('delay-2').removeClass('delay-3').addClass('fadeInUp');
		});
	}

	$(".timeline-block .tab-default-link").click(function(event) {
		event.preventDefault();
		var activeTab = $(this).data("rel");
		$("#" + activeTab +" .timeline-content:first-child").addClass('delay-1');
		$("#" + activeTab +" .timeline-content:nth-child(2)").addClass('delay-2');
		$("#" + activeTab +" .timeline-content:nth-child(3)").addClass('delay-3');
		$("#" + activeTab +" .timeline-content").removeClass('fadeInUp').addClass('is-hidden');
		showBlocks(timelineBlocks, offset);
	})

  $('.login-block .tab-items').on('click', 'li > a.tab-item-link', function(event) {
	  UP_VARS.SOCIAL_LOGIN.state = false;
	  UP_VARS.SOCIAL_LOGIN.otp = false;
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var tabContent = $(this).attr('href');
      $('.login-block .tab-item-content > div').removeClass('is-open');

      $('#'+tabContent).toggleClass('is-open');
      $('.login-block .tab-items li > a').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });


    $('.delivery-tab-block .tab-items').on('click', 'li > a.tab-item-link', function(event) {

      if (!$(this).hasClass('is-active')) {
		  UP_VARS.__DELIVERY_NOW_LATER = $(this).text();
        event.preventDefault();
        var tabContent = $(this).attr('href');
        $('.delivery-tab-block .tab-item-content > div').removeClass('is-open');

        $('#'+tabContent).toggleClass('is-open');
        $('.delivery-tab-block .tab-items li > a').removeClass('is-active');
        $(this).addClass('is-active');
      } else {
        event.preventDefault();
      }
    });

$(document).on('click','.email-button',function(e){
	$('.tab-item-block.login-tab-block .tab-item-content> div').removeClass('is-open');
	e.preventDefault()
	if($(this).data('state') == 'signin'){
		$(this).data('state','signup');
		$(this).find('.text').text('Login with your account');
		$('#tab-guest').addClass('is-open');
		if(!$('#switch-to-signup').is(':checked')){
			$('#switch-to-signup').trigger('click');
		}
	}else{
		$(this).data('state','signin');
		$(this).find('.text').text('Create account');
		$('#tab-login').addClass('is-open');
	}
})
	$(".copy-sel").on("click", function() {

		var aux = document.createElement("input");

		aux.setAttribute("value",$('#share-text').text() );
		document.body.appendChild(aux);
		aux.select();
		document.execCommand("copy");
		document.body.removeChild(aux);

		$('.copy-success-message').show().delay(500).fadeOut();

	});

	$('input').focus(function(){
		$(this).removeClass('required');
	})

	$('.header.navigation').find('.js-navigation-more').each(function(d,i){
		if($($(i).find('a')[0]).text() == 'PRODUCTS / MENU'){
			$($(i).find('a')[0]).remove()
		};

		if($($(i).find('a')[0]).text() == 'CHAI ON CALL'){
			var a = $(i).find('.submenu');
			a.find('li').each(function(d,i){
				if($(i).find('a').text() == 'Subscribe Chai'){
					$(i).remove();
				}
			});
		};

		if($($(i).find('a')[0]).text() == 'STORES'){
			var a = $(i).find('.submenu');
			a.find('li').each(function(d,i){
				if($(i).find('a').text() == 'Our Stores'){
					$(i).remove();
				}
			});
		};
	})

});

function popLocationPrompt(){
	$('body').css({'overflow':'hidden'})
	$('#location2-modal').prop("checked", true).change();
	$('#main,.top-menu,.header').addClass('blur');
	$('#google_location').focus();
}

function popLoginPrompt(){
	$('body').css({'overflow':'hidden'})
	$('#login-modal').prop("checked", true).change();
	$('#main,.top-menu,.header').addClass('blur');
	$('.sliding-panel-content,.sliding-panel-fade-screen').removeClass('is-visible');
	$('body').toggleClass('disableScroll');
}
