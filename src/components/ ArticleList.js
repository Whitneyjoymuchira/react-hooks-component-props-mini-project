import React from "react";
import Article from './Article'


 export default function ArticleList({articles}) {
    console.log(articles)
    const articleItems = articles.map((article)=>{
        return(
            <Article key ={article.id} title= {article.title} date= {article.date} preview={article.preview}></Article>
        )
    })
  return (
<main>
<div>{articleItems}</div>
</main>
  );
}
