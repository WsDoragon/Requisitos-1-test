import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import axios from "axios";
import Etiquetas from "./Etiquetas";

function NewsUser(props) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3da128da75bb4e819bb876090635ca8f"
      );
      setNews(response.data.articles);
    };
    loadNews();
  }, []);

  console.log("news", news);

  return(<div className="all__news">
      
  {news &&
    news.map((item, index) => {
      return (
        <div className="news" key={index} style={{backgroundColor: 'orange'}}>
          <p id="my-image"><img src={item.urlToImage}/></p>
          <h1 className="news__title"> {item.title}</h1>
          <p className="news__desc">{item.description}</p>
          <span className="news__source">{item.source.name}</span> <br/>
          <a>
            <Button type="primary" style={{ marginTop: "10px" }} href={item.url}>
              Read More
           </Button>
          </a>
          
        </div>
        );
      })}
  </div>
);
}
export default NewsUser;