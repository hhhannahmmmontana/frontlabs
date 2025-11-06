import "./components/promo-section-1.component.js";
import "./components/promo-section-2.component.js";
import "/src/components/get-in-touch/get-in-touch.component.js";
import "./components/promo-section-4.component.js";
import potter from "/src/img/promo/potter.jpg";

class PromoPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/`
            <section class="promo">
                <div class="container">
                    <img class="promo__section-1__potter-image" src=${potter} alt="potter" />
                    <div class="content">
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