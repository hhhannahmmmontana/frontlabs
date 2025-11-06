import ceramicVase from "/src/img/promo/ceramic-vase.jpg";

class PromoSection1 extends HTMLElement {
    connectedCallback() {
        const baseUrl = import.meta.env.BASE_URL;
        this.innerHTML = /*html*/`
            <section class="promo__section-1">
                <div class="container">
                    <div class="content">
                        <header-component></header-component>
                    </div>
                </div>
                <content class="promo__section-1__content">
                    <div class="promo__section-1__img-title">
                        <h1 class="title-h1-italic promo__section-1__title">
                            Make your dream come true<br />or decorate your home
                        </h1>
                        <img
                            src=${ceramicVase}
                            alt="vase"
                            class="promo__img promo__section-1__img slided-in"
                        />
                    </div>
                    <a href="${baseUrl}catalog">
                        <button class="btn-default promo__section-1__btn slided-in">
                            shop now
                        </button>
                    </a>
                </content>
            </section>
        `
    }
}

customElements.define("promo-section-1", PromoSection1)