import x from "/src/icons/x.svg";

class HeaderMenuComponent extends HTMLElement {
    menuHiddenField = true;

    getMenu() {
        return this.querySelector('.header__menu');
    }

    get menuHidden() {
        const menu = this.getMenu();

        if (menu) {
            this.menuHiddenField = menu.classList.contains('hidden');
        }

        return this.menuHiddenField;
    }

    set menuHidden(value) {
        if (this.menuHidden == value) return;
        this.menuHiddenField = value;

        const menu = this.getMenu();

        if (!menu) return;

        if (value) {
            menu.classList.add('hidden');
        } else {
            menu.classList.remove('hidden');
        }
    }

    render() {
        const baseUrl = import.meta.env.BASE_URL;

        this.innerHTML = /*html*/`
            <div class="header__menu${ this.menuHidden ? " hidden" : "" }">
                <a class="header__menu-close">
                    <img src=${x} class="header__menu-close__icon" alt="close" />
                </a>
                <div class="header__menu__links">
                    <a href="${baseUrl}catalog" class="header__menu__link">catalog</a>
                    <a href="${baseUrl}blog" class="header__menu__link">blog</a>
                    <a href="${baseUrl}about" class="header__menu__link">about</a>
                </div>
            </div>
        `;
    }

    onInit() {
        window.addEventListener('open-menu', () => {
            this.menuHidden = false;
        });
        
        window.addEventListener('close-menu', () => {
            this.menuHidden = true;
        });

        const menuClose = this.querySelector('.header__menu-close');
        const links = this.querySelectorAll('.header__menu__link');

        menuClose?.addEventListener('click', () => {
            window.dispatchEvent(new CustomEvent('close-menu'));
        });

        links?.forEach(it => it.addEventListener('click', () => {
            window.dispatchEvent(new CustomEvent('close-menu'));
        }));
    }

    connectedCallback() {
        this.render();
        this.onInit();
    }
}

customElements.define('header-menu', HeaderMenuComponent);