import first from "/src/img/mock-catalog/1.jpg";
import second from "/src/img/mock-catalog/2.jpg";
import third from "/src/img/mock-catalog/3.jpg";
import fourth from "/src/img/mock-catalog/4.jpg";
import fifth from "/src/img/mock-catalog/5.jpg";

export class CatalogMockService {
    async getItems() {
        return [
            {
                imgsrc: first,
                categories: ["For Tea", "For Kitchen", "For Plants"],
                name: "Terracotta Whisper",
                price: 19.99
            },
            {
                imgsrc: second,
                categories: ["For Tea", "For Plants"],
                name: "Clay Bloom",
                price: 24.99
            },
            {
                imgsrc: third,
                categories: ["For Tea", "For Kitchen"],
                name: "Eathen Grace",
                price: 16.99
            },
            {
                imgsrc: fourth,
                categories: ["For Tea"],
                name: "Moss & Moon",
                price: 21.99
            },
            {
                imgsrc: fifth,
                categories: ["For Tea", "For Plants"],
                name: "Solace Set",
                price: 29.99
            },
        ];
    }
}