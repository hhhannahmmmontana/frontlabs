import "./components/about-story.component";
import "/src/components/get-in-touch/get-in-touch.component";
import "./components/about-find-us.component";

class AboutPage extends HTMLElement {
    render() {
        this.innerHTML = /*html*/`
            <section class="about">
                <div class="container">
                    <div class="content">
                        <header-component></header-component>
                        <about-story></about-story>
                        <get-in-touch-component></get-in-touch-component>
                        <about-find-us></about-find-us>
                    </div>
                </div>
            </section>
            <footer-component></footer-component>
        `;
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("about-page", AboutPage);