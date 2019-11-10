export class Topic {
    id: any;
    name: String;
    tags: String[];
    sentiment_score: number;
    bean_score: number;
    category: String;
    days_active: number;

    constructor(
        id: any,
        name: String,
        tags: String[],
        sentiment_score: number,
        bean_score: number,
        category: String,
        days_active: number,
    ){
        this.id = id;
        this.name = name;
        this.tags = tags;
        this.sentiment_score = sentiment_score;
        this.bean_score = bean_score;
        this.category = category;
        this.days_active = days_active;
    }
}