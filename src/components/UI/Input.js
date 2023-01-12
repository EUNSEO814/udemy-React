import styled from "styled-components";

const InputStyle = styled.div`
  /* margin: auto; */
  padding: 0.5rem 1rem;
  width: 100%;
  max-width: 40rem;

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

const Input = ({ label, type, htmlFor, id, onChange, value }) => {
  return (
    <InputStyle>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} id={id} onChange={onChange} value={value} />
    </InputStyle>
  );
};

export default Input;
