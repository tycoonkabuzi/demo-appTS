import styled from "styled-components";
import { PropType } from "../types/typePosts";
import { Link } from "react-router";
import axios from "axios";

const Main = styled.div``;

const ListContainer = styled.ol`
  text-align: left;
`;
const SinglePostLink = styled.li`
  width: 80%;
`;
const ContainerPost = styled.div`
  display: flex;
  gap: 20px;
`;
const PostList = ({ data }: PropType) => {
  return (
    <Main>
      <ListContainer>
        {data ? (
          data.map((post) => (
            <ContainerPost key={post.id}>
              <SinglePostLink>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>{" "}
              </SinglePostLink>
              <Link to={`/posts/edit/${post.id}`} state={post}>
                <button> Edit </button>
              </Link>

              <button
                onClick={() => {
                  try {
                    axios.delete(
                      `https://jsonplaceholder.typicode.com/posts/${post.id}`
                    );
                    alert(`Item ${post.id} was deleted successfully`);
                  } catch (err) {
                    console.error(
                      "Connection was not established to the api",
                      err
                    );
                  }
                }}
              >
                Delete
              </button>
            </ContainerPost>
          ))
        ) : (
          <p> Loading... </p>
        )}
      </ListContainer>
    </Main>
  );
};
export default PostList;
