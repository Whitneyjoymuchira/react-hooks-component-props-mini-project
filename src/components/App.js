import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ ArticleList.js"

console.log(blogData);

 export default function App() {
  return (
    <div className="App">
    
      <Header title={blogData.name}/>
      <About image={blogData.image} name={blogData.name} />
      <ArticleList articles={blogData.posts}/>
    </div>
  );
}