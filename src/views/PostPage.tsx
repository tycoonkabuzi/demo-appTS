import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";
import { PostListType } from "../types/typePosts";
import { useNavigate } from "react-router";
const Main = styled.div``;
const Header = styled.h1``;
const Back = styled.button`
  float: left;
`;
const PostPage = () => {
  const [dataPerPage, setDataPerPage] = useState([]);
  const [allData, setAllData] = useState([]);
  const [selectedPage, setSelectedPage] = useState(0);
  const navigation = useNavigate();
  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_start=${selectedPage}&_limit=10`
      )
      .then((response) => setDataPerPage(response.data))
      .catch((err) => console.error("There is an error ", err));
  }, [selectedPage]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setAllData(response.data));
  }, []);

  const numberPages = (
    rawData: PostListType[],
    numberPages: number
  ): number[] => {
    let newArray: number[] = [];
    for (let i = 1; i < rawData.length / numberPages; i++) {
      newArray.push(i);
    }
    return newArray;
  };
  const pagesNumber: number[] = numberPages(allData, 10);

  const getSelected = (value: number): void => {
    setSelectedPage(value);
  };
  return (
    <Main>
      <Back onClick={() => navigation("/")}>Back</Back>
      <Header> Post Lists</Header>
      <PostList data={dataPerPage} />
      <hr />
      <Pagination pagesNumber={pagesNumber} getSelectedPage={getSelected} />
    </Main>
  );
};
export default PostPage;
