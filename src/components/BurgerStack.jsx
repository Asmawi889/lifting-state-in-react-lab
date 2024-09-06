import React from 'react';

const BurgerStack = ({ stack, onRemove }) => {
  return (
    <div>
      <h2>Your Burger</h2>
      <ul>
        {stack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => onRemove(ingredient)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;
