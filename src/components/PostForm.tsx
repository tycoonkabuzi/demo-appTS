import { useState } from "react";
import styled from "styled-components";

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
const PostForm = ({ getNewData }) => {
  const [newData, setNewData] = useState({ title: "", content: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    setNewData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  return (
    <Main>
      <h1>Add Post</h1>
      <ContainerForm>
        <InputTitle
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="Title"
          value={newData.title}
        />
        <InputContent
          name="content"
          onChange={handleChange}
          placeholder="Content"
          value={newData.content}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            getNewData(newData);
            setNewData({ title: "", content: "" });
          }}
        >
          Submit
        </button>
      </ContainerForm>
    </Main>
  );
};
export default PostForm;
