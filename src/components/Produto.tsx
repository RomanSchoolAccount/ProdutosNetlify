import { useState } from 'react';

interface Produto {
  id: number;
  descricao: string;
  preco: number;
  ativo: boolean;
}

export function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const getProdutos = () => {
    const dadosProdutos: Produto[] = [
      { id: 1, descricao: "Computador Lenovo", preco: 1745, ativo: true },
      { id: 2, descricao: "Computador Apple", preco: 987, ativo: false },
      { id: 3, descricao: "Computador HP", preco: 1190, ativo: true },
      { id: 4, descricao: "Computador Samsung", preco: 870, ativo: false }
    ];

    setProdutos(dadosProdutos);
  };

  return (
    <div className="container mt-4">
      <h2>Produtos</h2>
      <hr />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Descrição</th>
            <th scope="col">Preço</th>
            <th scope="col">Ativo</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id} className={!produto.ativo ? 'table-danger' : ''}>
              <td>{produto.id}</td>
              <td>{produto.descricao}</td>
              <td>{produto.preco} €</td>
              <td>{produto.ativo ? 'Sim' : 'Não'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="button" className="btn btn-primary" onClick={getProdutos}>Obter produtos</button>
    </div>
  );
}
