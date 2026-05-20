import { createContext, useState } from 'react';

export const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarProduto(produto) {
    setCarrinho([...carrinho, produto]);
  }

  function removerProduto(index) {
    const lista = [...carrinho];

    lista.splice(index, 1);

    setCarrinho(lista);
  }

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarProduto,
        removerProduto,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}