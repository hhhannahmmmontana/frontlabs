
export class CatalogMockService {
    async getItems() {
        return [
            {
                imgsrc: "/src/img/mock-catalog/1.jpg",
                categories: ["For Tea", "For Kitchen", "For Plants"],
                name: "Terracotta Whisper",
                price: 19.99
            },
            {
                imgsrc: "/src/img/mock-catalog/2.jpg",
                categories: ["For Tea", "For Plants"],
                name: "Clay Bloom",
                price: 24.99
            },
            {
                imgsrc: "/src/img/mock-catalog/3.jpg",
                categories: ["For Tea", "For Kitchen"],
                name: "Eathen Grace",
                price: 16.99
            },
            {
                imgsrc: "/src/img/mock-catalog/4.jpg",
                categories: ["For Tea"],
                name: "Moss & Moon",
                price: 21.99
            },
            {
                imgsrc: "/src/img/mock-catalog/5.jpg",
                categories: ["For Tea", "For Plants"],
                name: "Solace Set",
                price: 29.99
            },
        ];
    }
}