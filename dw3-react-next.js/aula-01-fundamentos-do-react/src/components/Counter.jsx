//Importando o hook useState do React
import { useState } from "react";

const Counter = () => {
  // Variáveis não re-renderizam o componente
//   let x = 0;
//   console.log(x);

// [ consultar valor, alterar valor ]
const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <p>Contador: {x}</p>
        <button onClick={() => (x = x + 1)}>Aumentar</button>
      </div> */}

      <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
      </div>
    </>
  );
};

export default Counter;