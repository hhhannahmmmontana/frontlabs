import map from "/src/img/mock-map/map.png";

class AboutFindUsComponent extends HTMLElement {
    render() {
        this.innerHTML = /*html*/`
            <section class="about__find-us">
                <h2 class="h2-default about__find-us__title">find us</h2>
                <div class="about__find-us__map-container">
                    <img class="about__find-us__map" src=${map} alt="275 Calyer St, Brooklyn, NY 11222, United States" />
                </div>
            </section>
        `;
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("about-find-us", AboutFindUsComponent);