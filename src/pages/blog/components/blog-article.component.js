
class BlogArticleComponent extends HTMLElement {
    render() {
        const imgSrc = this.getAttribute("imgsrc");
        const title = this.getAttribute("title");
        const description = this.getAttribute("description");

        debugger
        this.innerHTML = /*html*/`
            <div class="blog__article">
                <div class="blog__article__top">
                    <div class="blog__article__image-container">
                        <img class="blog__article__image" src="${imgSrc}" alt="${title}" />
                    </div>
                    <div class="blog__article__title-div">
                        <h3 class="h3-default blog__article__title">${title}</h3>
                        <button class="read-button blog__article__button">read</button>
                    </div>
                </div>
                <p class="blog__article__description">${description}</p>
            </div>
        `
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("blog-article", BlogArticleComponent);