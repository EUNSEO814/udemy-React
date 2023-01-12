import styled from "styled-components";
// import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";

const Card = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  max-width: 40rem;
  margin: 2rem auto;
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

const Headers = styled.header`
  background: #4f005f;
  padding: 1rem;
`;

const H2 = styled.h2`
  margin: 0;
  color: white;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Actions = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const Backdrop = (props) => {
  return <BackdropStyle onClick={props.onConfirm} />;
};
const Overlay = (props) => {
  return (
    <Card>
      <Headers>
        <H2>{props.title}</H2>
      </Headers>
      <Content>
        <p>{props.message}</p>
      </Content>
      <Actions>
        <Button type="button" text="Okey" onClick={props.onConfirm} />
      </Actions>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
