/*
smooth behavior = gsap + locomotive scroll + scroll trigger
*/

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

export default (context, inject) => {
    const changeLogoTextContent = text => {
        const logo = document.querySelector('.gsap-change-fullname-to-sign');
        logo.innerHTML = text;
    };

    inject('LocomotiveScroll', LocomotiveScroll);

    inject('registerLocomotiveScroll', () => {
        gsap.registerPlugin(ScrollTrigger);

        const scroll = new LocomotiveScroll({
            el: document.querySelector('.smooth-scroll'),
            smooth: true,
        });

        scroll.on('scroll', ScrollTrigger.update);

        // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy('.smooth-scroll', {
            scrollTop(value) {
                return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
            }, // we don't have to define a scrollLeft because we're only scrolling vertically.
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
            pinType: document.querySelector('.smooth-scroll').style.transform ? 'transform' : 'fixed',
        });

        // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
        ScrollTrigger.addEventListener('refresh', () => scroll.update());
        ScrollTrigger.defaults({ scroller: '.smooth-scroll' });
    });

    inject('changeJaroslawFilipiakToJF', () => {
        gsap.to('.gsap-change-fullname-to-sign', {
            immediateRender: false,
            scrollTrigger: {
                trigger: '.top-bar',
                scroller: '.smooth-scroll',
                scrub: true,
                start: 'top 0%',
                end: 'top -50%',
                markers: false,
                onEnter: () => changeLogoTextContent('JF'),
                onLeaveBack: () => changeLogoTextContent('Jarosław Filipiak'),
            },
        });
    });

    inject('showCTAlink', () => {
        console.log('show cta link');
        gsap.to('.gsap-cta-link', {
            opacity: 1,
            immediateRender: false,
            scrollTrigger: {
                trigger: '.top-bar',
                scroller: '.smooth-scroll',
                scrub: true,
                start: 'top 0%',
                end: 'top -50%',
                markers: false,
            },
        });
    });
};
