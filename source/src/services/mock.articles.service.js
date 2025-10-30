export class ArticlesMockService {
    async getItems() {
        return [
            {
                article_id: 1,
                imgsrc: "/src/img/mock-articles/1.jpg",
                title: "Pottery Secrets",
                description: "Discover the timeless art of pottery and unlock the secrets hidden in every curve and glaze. From mastering the perfect wheel technique to understanding how clay transforms in the kiln, each step reveals a blend of tradition and creativity. The true magic lies in the details—subtle textures, natural imperfections, and the unique touch of the artisan’s hand, turning simple earth into lasting beauty."
            },
            {
                article_id: 2,
                imgsrc: "/src/img/mock-articles/2.jpg",
                title: "The best materials for pottery",
                description: "The best material for pottery often depends on the desired look and function, but stoneware is a favorite for its durability and versatility. It’s strong, resistant to chipping, and perfect for both functional pieces like mugs and plates, as well as decorative art. Porcelain offers a delicate, refined finish, ideal for intricate designs"
            }
        ]
    }
}