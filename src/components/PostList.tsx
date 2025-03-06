import styled from "styled-components";
import { PropType } from "../types/typePosts";
import { Link } from "react-router";
const Main = styled.div``;
const Title = styled.h2``;
const ListContainer = styled.ol`
  text-align: left;
`;
//const Content = styled.p``;
// const ContainerPosts = styled.div`
//   background-color: #f7f7f7;
//   padding: 20px;
//   margin-bottom: 20px;
//   border: 1px solid #ededed;
// `;
const PostList = ({ data }: PropType) => {
  return (
    <Main>
      <ListContainer>
        {data ? (
          data.map((post) => (
            <li key={post.id}>
              <Link to={"/post/1"}> {post.title}</Link>
            </li>
          ))
        ) : (
          <p> Loading </p>
        )}
      </ListContainer>
    </Main>
  );
};
export default PostList;
