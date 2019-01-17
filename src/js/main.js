

$(document).ready(function () {
    "use strict";
    InitialisationGenerale();

});

/* Mise en place template*/
function getTemplate() {
    var header = $.get('../include/template/header.min.html');
    var pageTop;
    header.done(function (data) {
        pageTop = data;
    });
    $.when(header).done(function () {
        var prepend = $('body').prepend(pageTop);
        $.when(prepend).done(function () {
            Lancement();
        });

    });
}

function Lancement() {
    initHeader();
    multilangue();
    switch (getIdHtml()) {
        case 'parc': InitParc(); break;
        case 'reservation': InitReservation(); break;
        case 'faq': InitFaq(); break;
        case 'cgv': InitCgv(); break;
        case 'ml': InitMl(); break;
    }
}
/* Mise en place menu*/
function initHeader() {
    $('header').on('click', function () {
        if ($(this).hasClass("clicked")) {
            $(this).removeClass("clicked");
            $(this).addClass("closed");
        } else {
            $(this).addClass("clicked");
            $(this).removeClass("closed");
        }
    });
    initMenu();
}

function getIdHtml() {
    return $('html').attr('id');
}

function initMenu() {
    switch (getIdHtml()) {
        case 'parc': $('#parcMenu').addClass('active'); break;
        case 'reservation': $('#reservationMenu').addClass('active'); break;
        case 'faq': $('#faqMenu').addClass('active'); break;
        case 'cgv': $('#legalMenu').addClass('active'); break;
        case 'ml': $('#legalMenu').addClass('active'); break;
    }
}


function InitParc() {
    $('#pageParc').find('li').each(function () {
        $(this).find('a').attr('href', $(this).find('a').attr('href').split('html')[1]);
    });
    $('#slideParc').vegas({
        slides: [
            { src: "/images/blur.jpg" },
            { src: "/images/grey.jpg" },
            { src: "/images/red.jpg" },
        ],
        delay: 6000,
        timer: false,
        shuffle: true,
        firstTransition: 'fade',
        transition: 'fade',
        transitionDuration: 3000,
        animation: "random",
        walk: function (index, slideSettings) {
            $('.textSlide').animate({
                opacity: 0,
                top: 0
            }, 2000);

            $('#textSlide'+index).animate({
                opacity: 1,
                top: '50%'
            }, 2000);

        }
    });

}

function InitReservation() {

}

function InitFaq() {

}

function InitCgv() {

}

function InitMl() {

}

function InitialisationGenerale() {
    getTemplate();
}

function multilangue() {
    var data = {
        "LeParc": {
            en: "The Park"
        },
        "Univers": {
            en: "Universe"
        },
        "Attractions": {
            en: "Attractions"
        },
        "Tarif": {
            en: "Rate"
        },
        "Restauration": {
            en: "Restoration"
        },
        "Réservation": {
            en: "Reservation"
        },
        "Calendrierethoraire": {
            en: "Calendar and schedule"
        },
        "Vestiaires": {
            en: "Cloakrooms"
        },
        "Planduparc": {
            en: "Park plan"
        },
        "Itinéraire": {
            en: "Itinerary"
        },
        "Unequestion?": {
            en: "A question ?"
        },
        "Nouscontacter": {
            en: "Contact us"
        },
        "FAQ:Questionsfréquentes": {
            en: "FAQ: Frequently Asked Questions"
        },
        "Lesalentours": {
            en: "Area"
        },
        "Ápropos": {
            en: "About"
        },
        "Ensavoirplus": {
            en: "Learn more"
        },
        "Conditionsgénéralesdevente": {
            en: "Terms of sales"
        },
        "Mentionslégales": {
            en: "Legal notice"
        }
    }

    $('body').xtr({
        t: data,
        default: 'fr'
    });
    var userLang = navigator.language || navigator.userLanguage;
    switch (userLang.split('-')[0]) {
        case 'fr': $('body').data('plugin_xtr').lang('fr'); $('#langue').prop('checked', false); break;
        case 'en': $('body').data('plugin_xtr').lang('en'); $('#langue').prop('checked', true); break;
        default: $('body').data('plugin_xtr').lang('fr'); $('#langue').prop('checked', false); break;
    }
    $('language input').change(function () {
        var val;
        if ($(this).is(':checked')) {
            val = 'en';
        } else {
            val = 'fr';
        }
        $('body').data('plugin_xtr').lang(val);
    });
}
