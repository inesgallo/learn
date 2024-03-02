import { useState } from "react";
import Text2 from "./Text2";

const Text = () => {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <>
      <section className="content">
        <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>
        {show && <Text2 />}
      </section>
    </>
  );
};

export default Text;
