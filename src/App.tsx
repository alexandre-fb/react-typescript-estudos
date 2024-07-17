import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";

function App() {
  const [total, setTotal] = React.useState(0);
  const [data, setData] = React.useState('');

  function incrementar(event: React.MouseEvent<HTMLButtonElement>) {
    setTotal(total + 1);
  }

  return (
    <div>
      <p>{total}</p>
      <Button tamanho="1.5rem" onClick={ incrementar } className="teste">
        Incrementar
      </Button>

      <p>Início da viagem: { data }</p>
      <Input id="nome" label="Nome" type="text" />
      <Input id="email" label="Email" type="email"/>
      <Input id="data" label="Data" type="date" onChange={(event) => setData(event.currentTarget.value) } />
      <Input id="horario" label="Horário" type="time" />
    </div>
  );
}

export default App;
