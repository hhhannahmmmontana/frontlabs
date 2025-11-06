import { Service } from "./service";

export class ArticlesService extends Service {
    constructor(apiBase) {
        super(apiBase, "/api/posts", "ArticlesService");
    }

    async getItems() {
        let items = await super.getItems();
        items.forEach(item => {
            item.image = this.apiBase + item.image;
        });
        return items;
    }
}