export class Article {
    provider_code: String;
    summary: String;
    link: String;

    constructor(
        provider_code: String,
        summary: String,
        link: String
    ){
        this.provider_code = provider_code;
        this.summary = summary;
        this.link = link;
    }
}