import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === parseInt(id))
  );

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <h1>Detail Page </h1>
    <h2>Post No. {post.id}</h2>
    <img src={`https://picsum.photos/200?random=${post.id}`} alt="Girl in a jacket" width="500" height="600"/>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>User ID: {post.userId}</p>
    </div>
  );
};

export default Detail;
