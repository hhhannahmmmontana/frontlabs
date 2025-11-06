
export class Service {
    constructor(apiBase, apiPath, name) {
        this.name = name;
        this.apiBase = apiBase;
        this.apiPath = apiPath;
    }

    async getItems() {
        try {
            const response = await fetch(this.apiBase + this.apiPath);
            if (!response.ok) {
                throw new Error(`"${this.name}" error, status code: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`Error in "${this.name}": ${error}`);
        }
    }
}