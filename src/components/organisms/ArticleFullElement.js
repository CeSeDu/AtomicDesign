"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Article from "../molecules/Article";

const getPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

const ArticleFullElement = () => {
  const t = useTranslations("posts");
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPost();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === posts.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [posts]);

  return (
    <div className="relative my-12"> 
      {posts.length > 0 && (
        <div
          className="w-full h-full transition-opacity duration-700 ease-in-out"
          style={{
            opacity: currentIndex === posts.indexOf(posts[currentIndex]) ? 1 : 0,
            zIndex: 1,
          }}
        >
          <Article
            title={posts[currentIndex].title}
            body={posts[currentIndex].body}
            image={`https://picsum.photos/id/${posts[currentIndex].id}/2000/500`}
          />
        </div>
      )}
    </div>
  );
};

export default ArticleFullElement;
