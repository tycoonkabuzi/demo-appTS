import styled from "styled-components";
import { Link } from "react-router";
const Main = styled.div``;
const Title = styled.h1``;
const MenuLink = styled(Link)`
  color: #3a3a3a;
  &hover {
    color: purple;
    text-decoration: none;
  }
`;
const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;
const Home = () => {
  return (
    <Main>
      <Title> Menu</Title>
      <Container>
        <MenuLink to={"/posts"}> PostList</MenuLink>
        <MenuLink to={"create"}> Create Post </MenuLink>
      </Container>
    </Main>
  );
};
export default Home;
