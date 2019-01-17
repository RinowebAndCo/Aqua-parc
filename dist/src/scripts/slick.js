(function (factory) {
    'use strict';
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

    'use strict';


                accessibility: true,
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                wheel: false,
                anchor: false,
                anchorSelector: '#anchor',
            };
                animating: false,
            };
                _.hidden = 'mozHidden';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
            }


        var _ = this;
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });


            addBefore = index;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }
            $(element).attr('data-slick-index', index);
        });

        var _ = this;
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
                height: targetHeight
            }, _.options.speed);
        }
    };

            targetLeft = -targetLeft;
        }
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }


                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                        now = Math.ceil(now);
                            animProps[_.animType] = 'translate(' +
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                        }
                    },
                        if (callback) {
                            callback.call();
                        }
                    }
                });


                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                    setTimeout(function () {

                    }, _.options.speed);
                }




            asNavFor = $(asNavFor).not(_.$slider);
        }


            asNavFor.each(function () {
                var target = $(this).slick('getSlick');
                    target.slideHandler(index, true);
                }
            });
        }


            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }


            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }


            clearInterval(_.autoPlayTimer);
        }




                    _.direction = 0;
                }

                        _.direction = 1;
                    }







                    _.$prevArrow.prependTo(_.options.appendArrows);
                }
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }
                    _.$prevArrow
                }


                        'aria-disabled': 'true',
                    });





                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }



            $(element)
        });
            _.options.slidesToScroll = 1;
        }
            _.$list.addClass('draggable');
        }



                var slide = document.createElement('div');
                    var row = document.createElement('div');
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                }
            }
                    'width': (100 / _.options.slidesPerRow) + '%',
                });



            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.currentSlide = _.options.initialSlide;
                            }
                        }
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.currentSlide = _.options.initialSlide;
                        }
                    }
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                        _.currentSlide = _.options.initialSlide;
                    }
                }
            }
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }


            event.preventDefault();
        }
            $target = $target.closest('li');
        }

                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
        }


            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                }
            }
        }
    };



            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
        }
            _.$list.off('keydown.slick', _.keyHandler);
        }
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }




            originalSlides = _.$slides.children().children();
        }


            event.stopImmediatePropagation();
        }


            _.$dots.remove();
        }

                _.$prevArrow.remove();
            }
        }

                _.$nextArrow.remove();
            }
        }

                    $(this).attr('style', $(this).data('originalStyling'));
                });
        }
            _.$slider.trigger('destroy', [_]);
        }


            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }



                zIndex: _.options.zIndex
            });
                opacity: 1
            }, _.options.speed, _.options.easing, callback);


                opacity: 1,
            });
                setTimeout(function () {

                }, _.options.speed);
            }




                opacity: 0,
            }, _.options.speed, _.options.easing);


                opacity: 0,
            });









                            _.focussed = $sf.is(':focus');
                        }


    };



            while (breakPoint < _.slideCount) {
                ++pagerQty;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
            }
        }


            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
            }
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
            }

        }
            _.slideOffset = 0;
        }
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
        }
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {

                targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
            } else {

                _.$slideTrack.css({ "display": "flex", "flex-direction": "column-reverse" });
                    targetLeft = (((_.slideCount * verticalHeight) * -1) + (slideIndex * -verticalOffset) / _.options.slidesToShow);
                } else {
                    targetLeft = (((_.slideCount * verticalHeight) * -1) + ((slideIndex + 1) * verticalHeight) + (slideIndex * -verticalOffset) / _.options.slidesToShow);
                }
            }


                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }
            }
        }




            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
        }
            indexes.push(breakPoint);
        }




            _.$slideTrack.find('.slick-slide').each(function (index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                }
            });

            return _.options.slidesToScroll;
        }


            data: {
                message: 'index',
            }
        }, dontAnimate);




            _.$slider.trigger('init', [_]);
        }
            _.initADA();
        }



        var _ = this;
            'aria-hidden': 'true',
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });
            $(this).attr('role', 'option');
                $(this).attr('aria-describedby', 'slick-slide' + _.instanceUid + describedBySlideId + '');
            }
        });
            _.$dots.attr('role', 'tablist').find('li').each(function (i) {
                $(this).attr({
                    'role': 'presentation',
                });
            })
        }


            _.$prevArrow
                   message: 'previous'
               }, _.changeSlide);
                   message: 'next'
               }, _.changeSlide);
        }


            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }








            action: 'start'
        }, _.swipeHandler);
            action: 'move'
        }, _.swipeHandler);
            action: 'end'
        }, _.swipeHandler);
            action: 'end'
        }, _.swipeHandler);
            _.$list.on('keydown.slick', _.keyHandler);
        }
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }


        if (_.options.wheel === true) {
            _.$list.on('wheel', function (e) {
                e.preventDefault();
                if (e.originalEvent.deltaY < 0) {
                    _.changeSlide({
                        data: {
                            message: 'previous'
                        }
                    });
                } else {
                    _.changeSlide({
                        data: {
                            message: 'next'
                        }
                    });
                }
            });
        }
            $(_.options.anchorSelector + ' [data-menuanchor="0"]').addClass('active');
            $(_.options.anchorSelector + ' [data-menuanchor]').on('click', function (e) {
                e.preventDefault();
                _.changeSlide({
                    data: {
                        message: 'index',
                    }
                });
            });
        }
    };







            if ((event.keyCode === 37 || event.keyCode === 40) && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' : 'previous'
                    }
                });
            } else if ((event.keyCode === 39 || event.keyCode === 38) && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }





                            opacity: 0
                        }, 100, function () {

                                image
                                    image
                                }
                            }
                                    opacity: 1
                                }, 200, function () {
                                    image
                                });
                        });





            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
                if (rangeStart > 0) rangeStart--;
            }
        }
            var prevSlide = rangeStart - 1,
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
            }
        }
            cloneRange = _.$slider.find('.slick-slide');
        } else
                cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            } else if (_.currentSlide === 0) {
                cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            }


            opacity: 1
        });
            _.progressiveLazyLoad();
        }


            data: {
                message: 'next'
            }
        });









                _.autoPlay();
            }
                _.initADA();
            }



            data: {
                message: 'previous'
            }
        });






                    image
                        image
                    }
                }
                    _.setPosition();
                }


                        _.progressiveLazyLoad(tryCount + 1);
                    }, 500);









            _.currentSlide = lastVisibleIndex;
        }
            _.currentSlide = 0;


                data: {
                    message: 'index',
                }
            }, false);





                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                    }


                return (_.options.mobileFirst) ? a - b : b - a;
            });



            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }
            _.currentSlide = 0;
        }
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }


            clearTimeout(_.windowDelay);
                _.windowWidth = $(window).width();
                    _.setPosition();
                }
            }, 50);
        }
    };

            removeBefore = index;
        } else {
            index = removeBefore === true ? --index : index;
        }
            return false;
        }
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }


            position = -position;
        }
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {
            };
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
            }
        }


            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);

            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
        }


            targetLeft = (_.slideWidth * index) * -1;
                $(element).css({
                    position: 'relative',
                });
            } else {
                $(element).css({
                    position: 'relative',
                });
            }
        });
            zIndex: _.options.zIndex - 1,
        });


            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
        }































            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }


            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }
            _.animType = 'OTransform';
        }
            _.animType = 'MozTransform';
        }
            _.animType = 'webkitTransform';
        }
            _.animType = 'msTransform';
        }
            _.animType = 'transform';
        }
    };
        var _ = this;
        if (_.options.anchor == true) {
            $(_.options.anchorSelector + ' [data-menuanchor]').removeClass('active');
                $(_.options.anchorSelector + ' [data-menuanchor="' + index + '"]').addClass('active');
            } else {
                var i = 1, execute = true;
                while (execute == true) {
                    if ($(_.options.anchorSelector + ' [data-menuanchor="' + (index - i) + '"]').length !== 0) {
                        $(_.options.anchorSelector + ' [data-menuanchor="' + (index - i) + '"]').addClass('active');
                        execute = false;
                    } else {
                        i++;
                    }

                }
            }
        }
    }

























            _.lazyLoad();
        }
    };

            _.options.centerMode = false;
        }


                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }
                    slideIndex = i - 1;
                }
                    slideIndex = i;
                }
                    $(this).attr('id', '');
                });




            _.autoPlay();
        }






            return;
        }
            return;
        }
            return;
        }
            _.asNavFor(index);
        }
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
        }
            clearInterval(_.autoPlayTimer);
        }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

                navTarget.setSlideClasses(_.currentSlide);
            }

            if (dontAnimate !== true) {

                    _.postSlide(animSlide);
                });

                _.postSlide(animSlide);
            }
        }
            _.animateSlide(targetLeft, function () {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }








            swipeAngle = 360 - Math.abs(swipeAngle);
        }
            return (_.options.rtl === false ? 'left' : 'right');
        }
            return (_.options.rtl === false ? 'left' : 'right');
        }
            return (_.options.rtl === false ? 'right' : 'left');
        }


                    return 'down';
                } else {
                    return 'up';
                }


                    return 'up';
                } else {
                    return 'down';
                }
            }
        }


            return false;
        }
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }




                };




                };




            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }
            _.touchObject.minSwipe = _.listHeight / _.options
        }




            return false;
        }
            _.touchObject.swipeLength = Math.round(Math.sqrt(
        }
            return;
        }
            event.preventDefault();
        }
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
            }
        }
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }
            return false;
        }
            _.swipeLeft = null;
        }


            _.touchObject = {
            };
        }
            touches = event.originalEvent.touches[0];
        }






            _.$dots.remove();
        }
            _.$prevArrow.remove();
        }
            _.$nextArrow.remove();
        }

























        var _ = this,
            if (typeof opt == 'object' || typeof opt == 'undefined')
        }
    };
