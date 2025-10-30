
class AboutStoryComponent extends HTMLElement {
    render() {
        this.innerHTML = /*html*/`
            <section class="about__story">
                <h2 class="h2-default about__story__title">where it all began</h2>
                <div class="about__story__content">
                    <img class="about__story__image" src="/src/img/about/crafts.jpg" alt="Crafts" />
                    <div class="about__story__text">
                        <p>Our small pottery workshop began as a simple passion project, rooted in a love for handmade artistry and traditional craftsmanship. What started with a single wheel and a few lumps of clay has grown into a cozy creative space where ideas take shape and stories are told through every piece. Inspired by timeless techniques and the beauty of natural materials, we’ve built a place where both beginners and experienced artists can come together, share their skills, and celebrate the art of pottery. Each creation reflects our journey—shaped by hand, fired with care, and made to be cherished.</p>
                        <p>Over the years, our workshop has become more than just a place to create—it’s a community. Friends, families, and curious visitors gather here to learn, connect, and experience the joy of working with clay. From intimate masterclasses to collaborative projects, we believe in the power of handmade art to bring people together and spark creativity in unexpected ways.</p>
                        <p>Every piece that leaves our studio carries a bit of our story, blending tradition with personal expression. Whether it’s a simple cup or an intricate vase, our ceramics are crafted to be both beautiful and functional, adding warmth and authenticity to any space.</p>
                    </div>
                </div>
            </section>
        `;
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("about-story", AboutStoryComponent);