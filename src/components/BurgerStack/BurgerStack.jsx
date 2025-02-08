import React from 'react';
import '../../App.css';
import '../../index.css';

const BurgerStack = ({ stack, onRemove }) => {
  return (
    <div className="burger-stack">
      <ul>
        {stack.map((ingredient, index) => (
          <li key={index} className="stack-item" style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => onRemove({ index })}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;
