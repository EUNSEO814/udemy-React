// import React from "react";

// import classes from "./Card.module.css";

// const Card = (props) => {
//   return (
//     <div className={`${classes.card} ${props.className}`}>{props.children}</div>
//   );
// };

// export default Card;

import styled from "styled-components";

const CardStyle = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  max-width: 40rem;
  margin: 2rem auto;
`;
const Card = (props) => {
  return <CardStyle>{props.children}</CardStyle>;
};

export default Card;
