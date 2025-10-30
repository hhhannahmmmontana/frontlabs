import "./components/promo-section-1.component.js";
import "./components/promo-section-2.component.js";
import "/src/components/get-in-touch/get-in-touch.component.js";
import "./components/promo-section-4.component.js";

class PromoPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/`
            <section class="promo">
                <div class="container">
                    <img class="promo__potter-image" src="/src/img/promo/potter.jpg" alt="potter">
                    <div class="content">
                        <header-component></header-component>
                        <promo-section-1></promo-section-1>
                        <promo-section-2></promo-section-2>
                        <get-in-touch-component></get-in-touch-component>
                        <promo-section-4></promo-section-4>
                    </div>
                </div>
            </section>
            <footer-component></footer-component>
        `;
    }
}

customElements.define("promo-page", PromoPage);