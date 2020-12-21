$(document).ready(function () {
    $('#menuToggle').click(function () {
        $('#menuToggle').toggleClass('active');
    });
});

$(document).ready(function () {
    $('#menuToggle').click(function () {
        $('.titleBox').toggleClass('hide');
    });
});

$(document).ready(function () {
    $('.imgListBoard a').mouseover(function (e) {
        e.preventDefault();
        $('.mainBoard img').attr("src", $(this).attr("href"));
    });
});


$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
});

$(document).ready(function () {
    $('.icon2').click(function () {
        $('.icon2').toggleClass('open');
    });
});

$(document).ready(function () {
    $('.icon2').click(function () {
        $('.aboutText').toggleClass('open2');
    });
});

$(document).ready(function () {
    $('.icon2').click(function () {
        $('.upTo15').toggleClass('open3');
    });
});

$(document).ready(function () {
    $('#serferImg').ripples({
        dropRadius: 12,
        perturbance: 0.05,
    });
});

$(document).ready(function () {
    $('.icon4').click(function () {
        $('.icon4').toggleClass('open');
    });
});

$(document).ready(function () {
    $('.icon4').click(function () {
        $('.updateWrap').toggleClass('open4');
    });
});


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 0,
    slidesPerGroup: 8,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


VanillaTilt.init(document.querySelectorAll(".updatesBox"), {
    max: 25,
    speed: 4000
});



$('.carousel').carousel({
    interval: 10000
});


function emailValidation() {
    var e_mail = document.getElementById('e_mail');
    var e_mailValue = e_mail.value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var sendEmail = document.getElementById('sendEmail');

    if (e_mailValue.match(pattern)) {
        e_mail.style.borderColor = '#359e50'
        sendEmail.style.backgroundColor = '#359e50'
    }
    else {
        e_mail.style.borderColor = '#ea1f45'
        sendEmail.style.backgroundColor = '#ea1f45'
    }
    if (e_mailValue == '') {
        e_mail.style.borderColor = '#4d4d4d'
        sendEmail.style.backgroundColor = '#00b0ff'
    }
}

$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('.main-menu').addClass('wave_menu ');
	}
	else{
		$('.main-menu').removeClass('wave_menu ');
	}
})