class PromoSection2 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/`
            <section class="promo__section-2">
                <h2 class="promo__section-2__title h2-default">create or buy</h2>
                <div class="promo__section-2__articles">
                    <div class="promo__section-2__article">
                    <h3 class="h3-default promo__section-2__article__title">our store</h3>
                        <div class="promo__section-2__article__content">
                            <div class="promo__section-2__article__img-container">
                                <img class="promo__section-2__article__img" src="/src/img/about/store.jpg" alt="Vases"/>
                            </div>
                            <p class="promo__section-2__article__text">
                                Welcome to <span class="promo__section-2__article__text--emphesize">Ceramic Soul</span>, where each piece tells a story of craftsmanship and creativity. Our handmade ceramics are thoughtfully designed and carefully crafted, blending traditional techniques with modern aesthetics. Whether you're looking for a unique gift or a special addition to your home, our collection offers timeless pieces that bring warmth and authenticity to any space.
                            </p>
                        </div>
                    </div>
                    <div class="promo__section-2__article">
                        <h3 class="h3-default promo__section-2__article__title">our workshop</h3>
                        <div class="promo__section-2__article__img-container">
                            <img class="promo__section-2__article__img" src="/src/img/about/ceramic.jpg" alt="Ceramic"/>
                        </div>
                        <p class="promo__section-2__article__text">
                            At <span class="promo__section-2__article__text--emphesize">Ceramic Soul</span> workshop, we don’t just craft ceramics—we invite you to get hands-on and create your own unique pieces. Through our engaging masterclasses, you’ll learn traditional techniques, work with natural materials, and experience the joy of shaping clay into something truly personal.
                        </p>
                    </div>
                </div>
            </section>
        `
    }
}

customElements.define("promo-section-2", PromoSection2)