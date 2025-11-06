import { Service } from "./service";

export class CatalogService extends Service {
    constructor(apiBase) {
        super(apiBase, "/api/products", "CatalogService");
    }

    async getItems() {
        let items = await super.getItems();
        items.forEach(item => {
            item.image = this.apiBase + item.image;
        });
        return items;
    }
}