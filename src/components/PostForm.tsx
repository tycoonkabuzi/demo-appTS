import React, { useState } from "react";
import styled from "styled-components";
import { NewData, PropNewData } from "../types/addEditPost";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

const Main = styled.div``;
const ContainerForm = styled.form`
  background-color: #d9d9d9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const InputTitle = styled.input`
  width: 500px;
  height: 40px;
`;
const InputContent = styled.textarea`
  height: 200px;
`;

const PostForm = ({ getNewData }: PropNewData) => {
  const location = useLocation();
  const [newData, setNewData] = useState<NewData>(location.state);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    setNewData((prev) => ({ ...prev, [name]: e.target.value }));
  };
  const navigate = useNavigate();
  return (
    <Main>
      <h1>Add Post</h1>
      <ContainerForm>
        <InputTitle
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="Title"
          value={newData?.title}
        />
        <InputContent
          name="body"
          onChange={handleChange}
          placeholder="Content"
          value={newData?.body}
        />
        {location.state ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              try {
                axios.put(
                  `https://jsonplaceholder.typicode.com/posts/${location.state?.id}`,
                  newData
                );
                alert("Successfully updated");
                navigate("/posts");
              } catch (err) {
                console.error(err);
              }
            }}
          >
            Edit
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              getNewData(newData);
              setNewData({ title: "", body: "" });
            }}
          >
            Submit
          </button>
        )}
      </ContainerForm>
    </Main>
  );
};

export default PostForm;
