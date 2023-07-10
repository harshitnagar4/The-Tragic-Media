import React from 'react'

 let NewsItem =(props)=>{

    let {title,description,imageurl,newsurl,publishedAt,author,source}= props;
    return (
      <>
 { <div className="card" >
    <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}} >
    {source}
  </span>
  <img src={imageurl==null ?"https://bsmedia.business-standard.com/_media/bs/img/article/2022-01/12/full/1641977259-5458.jpg":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {author==null?'author':author} On {new Date(publishedAt).toUTCString()}</small></p>
    <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
  </div>
</div>  }
        </>
    )
  
}
export default NewsItem
