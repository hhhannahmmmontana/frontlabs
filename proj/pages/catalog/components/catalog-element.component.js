class CatalogElement extends HTMLElement {
    static get observedAttributes() {
        return ["imgsrc", "name", "price"];
    }

    render() {
        const imgSrc = this.getAttribute("imgsrc");
        const name = this.getAttribute("name");
        const price = this.getAttribute("price");

        this.innerHTML = /*html*/`
            <div class="catalog__element">
                <div class="catalog__element__image-container">
                    <img class="catalog__element__image" src="${imgSrc}" alt="${name || 'Undefined'}" />
                </div>
                <h3 class="catalog__element__name">${name || 'Undefined'}</h3>
                <p class="catalog__element__price">${price + " €" || 'Undefined'}</p>
            </div>
        `;
    }

    connectedCallback() {
        this.render();
    }

}

customElements.define("catalog-element", CatalogElement);
