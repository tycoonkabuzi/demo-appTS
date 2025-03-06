import { useSearchParams } from "react-router";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin: auto;
`;

const Page = styled.button`
  border: 1px solid #ededed;
`;
const Pagination = ({
  pagesNumber,
  getSelectedPage,
}: {
  pagesNumber: number[];
  getSelectedPage: (value: number) => void;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedPage = searchParams.get("_start");
  return (
    <Main>
      {pagesNumber.map((number) => (
        <Page
          onClick={() => {
            setSearchParams({
              _start: `${number}`,
              limit: `${pagesNumber.length}`,
            });
            getSelectedPage(selectedPage);
          }}
          key={number}
        >
          {" "}
          {number}
        </Page>
      ))}
    </Main>
  );
};
export default Pagination;
