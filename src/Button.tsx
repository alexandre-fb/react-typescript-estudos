import React from "react";

//defininfo o children manualmente
// type ButtonProps = {
//   children?: React.ReactNode;
//   onClick?: () => void;
//   tamanho?: string;
// }

//definindo o children automaticamente
// type ButtonProps2 = React.PropsWithChildren<{
//   onClick?: () => void;
//   tamanho?: string;
// }>

//QUando tem um só elemeneto, pode usar essa propriedade, que pode passar qualquer propriedade da tag button direto para o componente Button, como onClick ou className, por exemplo
type ButtonProps = React.ComponentProps<"button"> & {
  tamanho?: string;
};

export const Button = ({ tamanho, children, ...props }: ButtonProps) => {
  return (
    <button
      style={{ fontSize: tamanho }}
      {...props}
    >
      {children}
    </button>
  );
};
