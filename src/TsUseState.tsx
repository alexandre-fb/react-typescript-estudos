import React from 'react'

export const TsUseEffect = () => {
  type User = {
    nome: string,
    profissao: string
  }

  // Se for null, tem que anotar no que vai se transformar,
  // se for sempre do mesmo WebTransportBidirectionalStream, nao precisa anotar
  const [data, setData] = React.useState<null | User>(null);
  const [total, setTotal] = React.useState<number>(0);

  function user() {
    return {
      nome: 'Fulano',
      profissao: 'Desenvolvedor'
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      console.log('useEffect');
      setData(user());
    }, 1000);
  }, []);

  return (
    <div>{data !== null && (
      <div>{data.nome}: {data.profissao}</div>)}
      </div>
  )
}
