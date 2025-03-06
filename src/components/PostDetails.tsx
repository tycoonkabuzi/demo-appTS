import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { SinglePost, User } from "../types/typesPostDetails";

const Main = styled.div`
  width: 100%;
`;
const Content = styled.p``;
const ContainerPosts = styled.div`
  background-color: #f7f7f7;
  width: 80%;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ededed;
  margin: auto;
`;
const Title = styled.h2``;
const Back = styled.button`
  float: left;
  margin-top: -100px;
`;
const AuthorInfo = styled.div`
  width: 80%;
  margin: auto;
`;
const Paragraph = styled.div`
  text-align: left;
`;
const Bold = styled.span`
  font-weight: 800;
`;
const PostDetails = () => {
  const [data, setData] = useState<SinglePost>();
  const [user, setUser] = useState<User>();

  const { id } = useParams();
  const navigation = useNavigate();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => setData(response.data));
  }, [id]);
  useEffect(() => {
    if (data?.userId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
        .then((response) => setUser(response.data));
    }
  }, [data]);

  return (
    <>
      <Back onClick={() => navigation("/posts")}>Back</Back>
      <Main>
        {data && user ? (
          <ContainerPosts>
            <Title>{data.title}</Title>
            <Content>{data.body}</Content>
            <AuthorInfo>
              <Paragraph>
                <Bold>Author</Bold>:{user.name}
              </Paragraph>
              <Paragraph>
                <Bold>Email</Bold>: {user.email}
              </Paragraph>
              <Paragraph>
                <Bold>Website</Bold>: {user.website}
              </Paragraph>
              <Paragraph>
                <Bold>PhoneNumber</Bold>: {user.phone}
              </Paragraph>
            </AuthorInfo>
          </ContainerPosts>
        ) : (
          <p> Loading... </p>
        )}
      </Main>
    </>
  );
};
export default PostDetails;
