export interface ArticleType  {
    title : string;
    description : string;
    date : string;
}


export const articles : ArticleType[] = [{
    title : "Crafting a design system for a multiplanetary future",
    description : "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
    date : 'Sept 2, 2022'
},{
    title : "Introducing Animaginary: High performance web animations",
    description : "When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.",
    date : 'July 12, 2022'
},{
    title : "Rewriting the cosmOS Kemel in Rust",
    description : "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
    date : 'July 14, 2023'
},

]