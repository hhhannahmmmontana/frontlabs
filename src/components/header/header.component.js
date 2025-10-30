import "./header-menu.component";
import logo from "/src/logo/logo.png";

class HeaderComponent extends HTMLElement {
    render() {
        const baseUrl = import.meta.env.BASE_URL;
        this.innerHTML = /*html*/`
            <header class="header">
                <div class="burger"><span></span><span></span><span></span></div>
                <div class="header__logo-container">
                    <a href="${baseUrl}" class="header__logo">
                        <img src=${logo} alt="logo"/>
                    </a>
                    <div class="header__links">
                        <a href="${baseUrl}catalog" class="header__link">catalog</a>
                        <a href="${baseUrl}blog" class="header__link">blog</a>
                        <a href="${baseUrl}about" href="/catalog"a class="header__link">about</a>
                    </div>
                </div>
                <div class="header__icons">
                    <a class="header__icon" href="#"><span class="icon-search"></span></a>
                    <a class="header__icon" href="#"><span class="icon-shopping-bag"></span></a>
                </div>
            </header>

            <header-menu></header-menu>
        `;
    }

    initBurger() {
        const burger = this.querySelector('.burger');
        burger?.addEventListener('click', () => {
            window.dispatchEvent(new CustomEvent('open-menu'));
        });
    }

    connectedCallback() {
        this.render();
        this.initBurger();
    }
}

customElements.define('header-component', HeaderComponent);
