
class FooterComponent extends HTMLElement {
    connectedCallback() {
        const baseUrl = import.meta.env.BASE_URL;
        this.innerHTML = /*html*/`
            <footer class="footer">
                <div class="container">
                    <div class="content">
                        <div class="footer__blocks">
                            <div class="footer__block newsletter">
                                <h3 class="footer__block__title">newsletter</h3>
                                <p class="footer__block__description">Keep up to date with news and promotions</p>
                                <form action="javascript:void(0);" class="footer__form">
                                    <input class="footer-text-input footer__form__element" type="email" placeholder="Enter your e-mail" />
                                    <div class="default-checkbox-input-container footer__form__element">
                                        <input class="footer-checkbox-input" type="checkbox" />
                                        <label>I agree with the <a href="#" class="terms-link">terms</a></label>
                                    </div>
                                    <button class="submit-button footer__form__element">submit</button>
                                </form>
                            </div>
                            <div class="footer__block links">
                                <div class="footer__subblock">
                                    <h3 class="footer__block__title">discover</h3>
                                    <a href="${baseUrl}about" class="footer__block__link">About Us</a>
                                    <a href="${baseUrl}blog" class="footer__block__link">Blog</a>
                                </div>
                                <div class="footer__subblock">
                                    <h3 class="footer__block__title">shopping</h3>
                                    <a href="${baseUrl}catalog" class="footer__block__link">Catalog</a>
                                </div>
                                <div class="footer__subblock">
                                    <h3 class="footer__block__title">information</h3>
                                    <a href="#" class="footer__block__link">Terms and Conditions</a>
                                </div>
                            </div>
                            <div class="footer__block follow-us">
                                <h3 class="footer__block__title">follow us</h3>
                                <div class="footer__socials">
                                    <a href="#" class="footer__social"><span class="icon-facebook"></span></a>
                                    <a href="#" class="footer__social"><span class="footer__social icon-instagram"></span></a>
                                    <a href="#" class="footer__social"><span class="footer__social icon-pinterest-circled"></span></a>
                                </div>
                            </div>
                        </div>
                        <h3 class="footer__copyright">© Copyright ${ new Date().getFullYear() }, Ceramic soul</h3>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);

