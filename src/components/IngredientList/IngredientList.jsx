import React from 'react';
import '../../App.css';
import '../../index.css';

const IngredientList = ({ ingredients, onAdd }) => {
  return (
    <div className="ingredient-list">
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} className="ingredient-item" style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => onAdd({ index })}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
