export class Model {
    user;
    items;

    constructor() {
        this.user = "Erol";
        this.items = [
            new TodoItem("First", true),
            new TodoItem("Second", false),
            new TodoItem("Third", false),
            new TodoItem("FourSt", false),
            new TodoItem("FiveNd", false),
            new TodoItem("SixTh", true),

        ];

    }
}

export class TodoItem {
    description;
    action;
    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}