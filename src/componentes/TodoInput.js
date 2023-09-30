import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [novoItem, setNovoItem] = useState('');
  const [concluida, setConcluida] = useState(false);

  const adicionarNovoItem = () => {
    if (novoItem.length <= 0) {
      alert("Por favor, digite algo no campo 'Tarefa'");
      return;
    }

    const todo = { texto: novoItem, concluida };
    addTodo(todo);
    setNovoItem('');
    setConcluida(false);
  };

  const handleConcluidaChange = () => {
    setConcluida(!concluida);
  };

  return (
    <div>
      <input id='entrada'
        placeholder='Tarefa'
        value={novoItem}
        onChange={(e) => setNovoItem(e.target.value)}
        type='text'
      />
      <label>
        <input
          type='checkbox'
          checked={concluida}
          onChange={handleConcluidaChange}
        />
        Concluída
      </label>
      <button onClick={adicionarNovoItem}>Adicionar</button>
    </div>
  );
}

export default TodoInput;