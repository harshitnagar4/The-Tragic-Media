
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import React, {useEffect,useState } from 'react';


const News=(props)=>{

const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(false);
const [page, setPage] = useState(1);
const [totalResults, setTotalResults] = useState(0);

const capitalword = (string)=> {
    return string
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };
  document.title = `${capitalword(props.category)} - The Tragic Media`;

const updateNews = async()=>{
  props.setProgress(10)
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.perPage}`;
  setLoading(true)
  let data = await fetch(url);
  let parsedData = await data.json();
  props.setProgress(50)
  setArticles(parsedData.articles);
  setLoading(false)
  setTotalResults(0)
  props.setProgress(100)
}
useEffect(()=>{
updateNews();
},[])

 const fetchMoreData = async()=>{
  setPage(page +1)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page +1}&pageSize=${props.perPage}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }
    return (
      <>
          <h1 className="text-center" style={{marginTop: "70px"}}>The Tragic Media-<span style={{color:"#b71a97"}}>Top Headings</span></h1>
          { loading &&<Spinner/>}
          
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    publishedAt={element.publishedAt}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>
              );
            })}
            ;
          </div>
          </div>
          </InfiniteScroll>
        

       
      </>
    );

}
News.defaultProps = {
  category: "general",
  perPage: 6,
};
News.propTypes = {
  category: PropTypes.string,
  perPage: PropTypes.number,
};

export default News;
