// import Swiper JS
import Swiper from 'swiper';

import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import tea1 from "/src/img/works/tea-1.jpg";
import tea2 from "/src/img/works/tea-2.jpg";
import tea3 from "/src/img/works/tea-3.jpg";
import tea4 from "/src/img/works/tea-4.jpg";

class PromoSection4 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/`
            <section class="promo__section-4">
                <h2 class="promo__section-4__title h2-default">check out our works</h2>
                <div class="promo__section-4__slider-container">
                    <div class="swiper promo__section-4__slider">
                        <div class="swiper-wrapper promo__section-4__slider__wrapper">
                            <div class="swiper-slide promo__section-4__slider__slide">
                                <img class="promo__section-4__slider__slide__image" src=${tea1} alt="Slide 1" />
                            </div>
                            <div class="swiper-slide promo__section-4__slider__slide">
                                <img class="promo__section-4__slider__slide__image" src=${tea2} alt="Slide 2" />
                            </div>
                            <div class="swiper-slide promo__section-4__slider__slide">
                                <img class="promo__section-4__slider__slide__image" src=${tea3} alt="Slide 3" />
                            </div>
                            <div class="swiper-slide promo__section-4__slider__slide">
                                <img class="promo__section-4__slider__slide__image" src=${tea4} alt="Slide 3" />
                            </div>
                        </div>
                    </div>
                    <div class="promo__section-4__slider__button prev">
                        <span class="icon-left-open"></span>
                    </div>
                    <div class="promo__section-4__slider__button next">
                        <span class="icon-right-open"></span>
                    </div>
                    <div class="promo__section-4__slider__pagination"></div>
                </div>
            </section>
        `;

        this.initSwiper();
    }

    initSwiper() {
        const slider = new Swiper(".promo__section-4__slider", {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            loop: true,
            loopAddBlankSlides: true,
            spaceBetween: 35,
            breakpoints: {
                1920: {
                    spaceBetween: 35,
                    slidesPerView: 3
                },
                1200: {
                    spaceBetween: 5,
                    slidesPerView: 3
                }
            },
            navigation: {
                prevEl: ".promo__section-4__slider__button.prev",
                nextEl: ".promo__section-4__slider__button.next"
            },
            pagination: {
                el: ".promo__section-4__slider__pagination",
                type: "bullets",
                clickable: true,
                bulletClass: "promo__section-4__slider__pagination__bullet",
                bulletActiveClass: "promo__section-4__slider__pagination__bullet--active"
            },
            autoplay: {
                delay: 5000
            }
        });
    }
}

customElements.define("promo-section-4", PromoSection4)

