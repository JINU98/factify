// import React from 'react';
import React, { useState, useEffect } from 'react';

const Posts = ({ posts, loading, photos ,q}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  var count = 0;


  const ro={float:"right",display:"inline"}
  var count=0;

 

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
      <>
        <li key={post.id} className='list-group-item'>
          <p>Claim Image</p>
       <img  style={ro} height="250" width="250" src={post["claim_image"]} alt="" />
       <p style={{float:"right"}}>Document Image</p>

      <img  style={{float:"left",display:"inline"}} height="250" width="250" src={post["document_image"]} alt="" />
        
        {count=count+1}
        <div>  <strong>id:</strong> {post.Id}</div>
      <div> <strong>Category:</strong>  {post.Category}</div>
         <div> <strong>Claim:</strong>  {post.claim}</div>
      <div> <strong>Claim Ocr:</strong>  {post.claim_ocr}</div>
      {/* <div> <strong>Document:</strong>  {post.document}</div> */}
      {/* <div> <strong> Document Image:</strong> {post.document_image}</div> */}
      <div><strong>Document :</strong> {post.document} </div>

      <div> <strong>Document Ocr :</strong>  {post.document_ocr}</div>

        </li>
        </>
      ))}
    </ul>
  );
};

export default Posts;