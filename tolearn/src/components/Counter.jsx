import { useState } from "react";
import "./styles.css";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const sumar = () => {
    setNumber(number + 1);
  };

  const restar = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <section className="content">
        <h2>{number}</h2>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={() => setNumber(number * 2)}>Duplicar</button>
        <button onClick={() => setNumber(number / 2)}>Dividir</button>
        <button onClick={() => setNumber(0)}>Reiniciar</button>
        <br/>
        <hr/>
      </section>
    </>
  );
};

export default Counter;
