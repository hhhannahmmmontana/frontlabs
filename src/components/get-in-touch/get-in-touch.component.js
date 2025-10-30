import vase from "/src/img/form/vase.png";
import tea from "/src/img/form/tea.jpg";

class GetInTouchComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/`
            <section class="get-in-touch">
                <h2 class="get-in-touch__title h2-default">get in touch</h2>
                <content class="get-in-touch__content">
                    <div class="get-in-touch__content__image-container">
                        <img class="get-in-touch__content__image" src=${tea} alt="Tea" />
                    </div>
                    <form action="javascript:void(0);" class="get-in-touch__content__form">
                        <div class="default-input-container text-container">
                            <label for="nameInput" class="default-label">Name</label>
                            <input id="nameInput" class="default-text-input get-in-touch__content__form__text-input" type="text" placeholder="Name" />
                        </div>
                        <div class="default-input-container text-container">
                            <label for="emailInput" class="default-label">Email</label>
                            <input id="emailInput" class="default-text-input get-in-touch__content__form__text-input" type="email" placeholder="Email" />
                        </div>
                        <div class="default-input-container textarea-container">
                            <label for="questionInput" class="default-label">Your question</label>
                            <textarea id="questionInput" class="default-textarea get-in-touch__content__form__text-input" type="text" placeholder="Question"></textarea>
                        </div>
                        <div class="get-in-touch__content__form__last-row">
                            <div class="get-in-touch__content__form__last-row__inputs">
                                <div class="default-checkbox-input-container">
                                    <input id="termsInput" class="default-checkbox-input" type="checkbox"></input>
                                    <label class="default-label">I agree with the <a href="#" class="terms-link">terms</a></label>
                                </div>
                                <button class="send-request-button">send request</button>
                            </div>
                            <img class="get-in-touch__content__form__last-row__corner-img" src=${vase} alt="Vase" />
                        </div>
                    </form>
                </content>
            </section>
        `
    }
}

customElements.define("get-in-touch-component", GetInTouchComponent)