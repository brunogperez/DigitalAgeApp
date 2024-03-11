import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList.jsx'


export const ItemListContainer = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.npoint.io/7687b93ad241b55816ab') // api for the get request
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <>
      <ItemList data={data} />
    </>
  )
}

export default ItemListContainer