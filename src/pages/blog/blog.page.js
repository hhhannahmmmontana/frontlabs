import "./components/blog-article.component"
import {ArticlesMockService} from "/src/services/mock.articles.service.js";

class BlogPage extends HTMLElement {
    elements = []

    render() {
        const articlesHTML = this.elements.length > 0
            ? this.elements.map(el => {
                return /*html*/`
                    <blog-article
                        imgsrc="${el.imgsrc}"
                        title="${el.title}"
                        description="${el.description}"
                    ></blog-article>
                `;
            }).join('') : /*html*/`<p>Nothing found</p>`;
        
        this.innerHTML = /*html*/`
            <section class="blog">
                <div class="container">
                    <div class="content">
                        <header-component></header-component>
                        <div class="blog__content">
                            <h2 class="h2-default blog__title">our digital notes</h2>
                            <div class="blog__articles">
                                ${articlesHTML}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer-component></footer-component>
        `;
    }

    getElements() {
        let service = new ArticlesMockService();
        service.getItems().then(elements => {
            this.elements = elements;
            this.render();
        });
    }

    connectedCallback() {
        this.render();
        this.getElements();
    }
}

customElements.define("blog-page", BlogPage);

