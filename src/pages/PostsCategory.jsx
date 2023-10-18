import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PostsCategory = () => {
  const { categoryName } = useParams();
  const [categoryPosts, setCategoryPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        `/api/api/v1/categories/category/${categoryName}`
      );
      const newData = await res.json();
      setCategoryPosts(newData);
    };

    fetchPosts();
  }, [categoryName]);

  return (
    <div>
      {categoryPosts?.map((post) => (
        <Heading textAlign="center" mx={40} my={5} key={post.id}>
          {post.title}
        </Heading>
      ))}
    </div>
  );
};

export default PostsCategory;
