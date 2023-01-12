import styled from "styled-components";

const ButtonStyle = styled.button`
  font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;
  margin: 1rem;

  &:hover,
  &:active {
    background: #741188;
    border-color: #741188;
  }

  &:focus {
    outline: none;
  }
`;
const Button = ({ type, onClick, text }) => {
  return (
    <ButtonStyle type={type} onClick={onClick}>
      {text}
    </ButtonStyle>
  );
};

export default Button;
