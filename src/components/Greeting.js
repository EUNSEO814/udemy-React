import Output from "./Output";
import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changedTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changedTextHandler}>Change Text!</button>
    </div>
  );
};
export default Greeting;
