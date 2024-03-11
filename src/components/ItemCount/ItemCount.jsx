import React from 'react'
import { useState } from 'react'

export const ItemCount = ({ initial, stock, onAdd }) => {

  const [count, setCount] = useState(initial)

  const decrease = () => {
    setCount(count - 1)
  }

  const increase = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={decrease} disabled={count <= 1}>-</button>
      <span>{count}</span>
      <button onClick={increase} disabled={count >= stock}>+</button>
      <button disabled={stock <= 0} onClick={() => onAdd(count)}>Add to Cart</button>
    </div>
  )
}

export default ItemCount