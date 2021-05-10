import * as React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  .pagination {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    .page-item {
      width: 25px;
      height: 20px;
      border: 1px solid darkblue;
      margin: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.2s;
      cursor: pointer;
      &:hover {
        background: lightgray;
      }
      .page-link {
        text-decoration: none;
        color: gray;
        width: 100%;
        text-align: center;
      }
    }
  }
`;
export interface PaginationProps {}

const Pagination: React.SFC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </PaginationContainer>
  );
};

export default Pagination;
