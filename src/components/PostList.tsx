import styled from "styled-components";

const Main = styled.div`
  text-align: left;
  width: 60%;
  margin: auto;
`;
const Title = styled.h2``;
const Content = styled.p``;
const ContainerPosts = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ededed;
`;
const PostList = ({ data }) => {
  return (
    <Main>
      {data ? (
        data.map((post) => (
          <ContainerPosts>
            <Title> {post.title}</Title>
            <Content> {post.body}</Content>
          </ContainerPosts>
        ))
      ) : (
        <p> Loading </p>
      )}
    </Main>
  );
};
export default PostList;
