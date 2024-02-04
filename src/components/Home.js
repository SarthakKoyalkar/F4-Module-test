import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <img src={`https://picsum.photos/200?random=${post.id}`} alt="Girl in a jacket" width="500" height="600"/>
            <Link to={`/item/${post.id}`}>
              <h3>{post.title.slice(0, 30)}...</h3>
            </Link>
            <p>{post.body.slice(0, 100)}...</p>
            <Link to={`/item/${post.id}`}>Read More...</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
