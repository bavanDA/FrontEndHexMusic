import React from "react";
import { Pagination } from "semantic-ui-react";

const Pagination = (props) => (
  <Pagination
    activePage={props.activePage}
    defaultActivePage={props.defaultActivePage}
    firstItem={null}
    lastItem={null}
    pointing
    secondary
    totalPages={10}
  />
);

export default Pagination;
