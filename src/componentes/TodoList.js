import React from 'react';

function TodoList({ lista, deletarItem }) {
  return (
    <ul>
      {lista.map((todo, index) => (
        <li key={index}>
          <span
            style={{
              textDecoration: todo.concluida ? 'line-through' : 'none',
            }}
          >
            {todo.texto}
          </span>
          <button id='deletar' onClick={() => deletarItem(index)}>Deletar</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
