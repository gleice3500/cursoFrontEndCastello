'use client';
import { useEffect, useState } from 'react';

export default function GarcomDashboard() {
  const [menuItems, setMenuItems] = useState([]);
  const [tableNumber, setTableNumber] = useState('');
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const res = await fetch('/api/menu');
    const data = await res.json();
    setMenuItems(data);
  };

  const addItemToOrder = (item) => {
    const exist = orderItems.find(i => i.itemId === item._id);
    if (exist) {
      setOrderItems(orderItems.map(i => i.itemId === item._id ? {...i, quantity: i.quantity + 1} : i));
    } else {
      setOrderItems([...orderItems, { itemId: item._id, name: item.name, quantity: 1 }]);
    }
  };

  const removeItemFromOrder = (itemId) => {
    setOrderItems(orderItems.filter(i => i.itemId !== itemId));
  };

  const changeQuantity = (itemId, quantity) => {
    if (quantity < 1) return;
    setOrderItems(orderItems.map(i => i.itemId === itemId ? {...i, quantity} : i));
  };

  const enviarPedido = async () => {
    if (!tableNumber) {
      alert('Informe o número da mesa');
      return;
    }
    if (orderItems.length === 0) {
      alert('Adicione pelo menos um item ao pedido');
      return;
    }

    const res = await fetch('/api/pedidos', {
      method: 'POST',
      body: JSON.stringify({ tableNumber: Number(tableNumber), items: orderItems }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      alert('Pedido enviado com sucesso!');
      setTableNumber('');
      setOrderItems([]);
    } else {
      alert('Erro ao enviar pedido');
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Garçom - Criar Pedido</h1>

      <label>
        Número da Mesa:
        <input
          type="number"
          value={tableNumber}
          onChange={e => setTableNumber(e.target.value)}
          min={1}
          required
        />
      </label>

      <h2>Itens do Cardápio</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item._id}>
            {item.name} - R$ {item.price.toFixed(2)} ({item.category})
            <button onClick={() => addItemToOrder(item)}>Adicionar</button>
          </li>
        ))}
      </ul>

      <h2>Itens no Pedido</h2>
      <ul>
        {orderItems.map(i => (
          <li key={i.itemId}>
            {i.name} - Quantidade:
            <input
              type="number"
              value={i.quantity}
              min={1}
              onChange={e => changeQuantity(i.itemId, Number(e.target.value))}
            />
            <button onClick={() => removeItemFromOrder(i.itemId)}>Remover</button>
          </li>
        ))}
      </ul>

      <button onClick={enviarPedido}>Enviar Pedido</button>
    </main>
  );
}
