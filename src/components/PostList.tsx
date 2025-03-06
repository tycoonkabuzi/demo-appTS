import styled from "styled-components";
import { PropType } from "../types/typePosts";
import { Link } from "react-router";
const Main = styled.div``;

const ListContainer = styled.ol`
  text-align: left;
`;

const PostList = ({ data }: PropType) => {
  return (
    <Main>
      <ListContainer>
        {data ? (
          data.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}> {post.title}</Link>
            </li>
          ))
        ) : (
          <p> Loading... </p>
        )}
      </ListContainer>
    </Main>
  );
};
export default PostList;
