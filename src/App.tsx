import React from "react";
import { Button } from "./Button";

function App() {
  const [total, setTotal] = React.useState(0);

  function incrementar(event: React.MouseEvent<HTMLButtonElement>) {
    setTotal(total + 1);
  }

  return (
    <div>
      <p>{total}</p>
      <Button tamanho="1.5rem" onClick={ incrementar }>
        Incrementar
      </Button>
    </div>
  );
}

export default App;
