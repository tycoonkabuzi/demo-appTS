import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import PostList from "../components/PostList";
type PostListType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Main = styled.div``;
const Header = styled.h1``;
const PostPage = () => {
  const [data, setData] = useState<PostListType[] | null>([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10`)
      .then((response) => setData(response.data))
      .catch((err) => console.error("There is an error ", err));
  }, []);

  return (
    <Main>
      <Header> Post Lists</Header>
      <PostList data={data} />
    </Main>
  );
};
export default PostPage;
