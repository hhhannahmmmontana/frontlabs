import "./components/catalog-element.component";
import {CatalogMockService} from "/src/services/mock.catalog.service.js";

class CatalogPage extends HTMLElement {
    items = [];
    categories = [];
    categoriedItems = {};
    currentCategory = "";

    getElements() {
        let service = new CatalogMockService();
        service.getItems().then(items => {
            this.items = items;
            this.categories = [...new Set(items.flatMap(item => item.categories))];
            this.categories.forEach(category => {
                this.categoriedItems[category] = items.filter(item =>
                    item.categories.includes(category)
                );
            });

            this.currentCategory = Object.keys(this.categoriedItems)[0];
            this.render();
        });
    }

    render() {
        let elementsHTML;
        let nav = "";

        if (this.categories.length != 0) {
            nav = /*html*/`
                <div class="catalog__nav">
                    ${
                        this.categories.map(el => /*html*/`
                            <a class="catalog__nav__link">${el}</a>
                        `).join('')
                    }
                </div>
            `;
        }
        if (this.currentCategory && this.categoriedItems[this.currentCategory]) {
            elementsHTML = /*html*/`
                ${
                    this.categoriedItems[this.currentCategory].map(el => /*html*/`
                        <catalog-element
                            imgsrc="${el.imgsrc}"
                            name="${el.name}"
                            price="${el.price}"
                        ></catalog-element>
                    `).join('')
                }
            `;
        } else {
            elementsHTML = "<p>No items available</p>";
        }

        this.innerHTML = /*html*/`
            <section class="catalog">
                <div class="container">
                    <div class="content">
                        <header-component></header-component>
                        <h2 class="h2-default catalog__title">our pottery</h2>
                        <div class="catalog__content">
                            ${nav}
                            <div class="catalog__elements">
                                ${elementsHTML}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer-component></footer-component>
        `;

        if (nav) {
            const nav = document.querySelectorAll('.catalog__nav__link');
            nav.forEach(el => {
                if (el.textContent == this.currentCategory) {
                    el.classList.add('catalog__nav__link--selected');
                } else {
                    el.classList.remove('catalog__nav__link--selected');
                }
                el.addEventListener('click', () => {
                    this.currentCategory = el.textContent;
                    this.render();
                });
            });
        }
    }

    connectedCallback() {
        this.render();
        this.getElements();
    }
}

customElements.define("catalog-page", CatalogPage);

