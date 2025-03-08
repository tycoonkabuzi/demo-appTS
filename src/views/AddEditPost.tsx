import styled from "styled-components";
import PostForm from "../components/PostForm";
import axios from "axios";
import { useState } from "react";
import { NewData } from "../types/addEditPost";

const Main = styled.div``;

const AddEditPost = () => {
  const [data, setData] = useState<NewData>();
  const getNewData = (newData: NewData): void => {
    setData(newData);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: data?.title,
        body: data?.body,
        id: Date.now(),
      })
      .then((response) => {
        alert(`Post added ${response.data.id}`);
      })
      .catch((err) => console.error("Error creating the Post", err));
  };

  return (
    <Main>
      <PostForm getNewData={getNewData} />
    </Main>
  );
};

export default AddEditPost;
