import styled from "styled-components";
import { Link } from "react-router";
const Main = styled.div``;
const Title = styled.h1``;
const Home = () => {
  return (
    <Main>
      <Title> Menu</Title>
      <Link to={"#"}> PostList</Link>
      <Link to={"#"}> Create Post </Link>
    </Main>
  );
};
export default Home;
