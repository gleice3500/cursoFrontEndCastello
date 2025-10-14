'use client';
import { useEffect, useState } from 'react';

export default function GerenteDashboard() {
  const [itens, setItens] = useState([]);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    fetchItens();
  }, []);

  const fetchItens = async () => {
    const res = await fetch('/api/menu');
    const data = await res.json();
    setItens(data);
  };

  const cadastrarItem = async (e) => {
    e.preventDefault();
    await fetch('/api/menu', {
      method: 'POST',
      body: JSON.stringify({ name: nome, price: parseFloat(preco), category: categoria }),
      headers: { 'Content-Type': 'application/json' },
    });
    setNome('');
    setPreco('');
    setCategoria('');
    fetchItens();
  };

  const deletarItem = async (id) => {
    await fetch(`/api/menu/${id}`, {
      method: 'DELETE',
    });
    fetchItens();
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Gerente - Cardápio</h1>

      <form onSubmit={cadastrarItem}>
        <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" required />
        <input value={preco} onChange={e => setPreco(e.target.value)} placeholder="Preço" type="number" required />
        <input value={categoria} onChange={e => setCategoria(e.target.value)} placeholder="Categoria" required />
        <button type="submit">Cadastrar</button>
      </form>

      <h2>Itens do Cardápio</h2>
      <ul>
        {itens.map((item) => (
          <li key={item._id}>
            {item.name} - R$ {item.price} ({item.category})
            <button onClick={() => deletarItem(item._id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
