import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount/ItemCount.jsx'


export const Item = ({ info }) => {

  const addCart = (quantity) => {
    console.log(quantity)
  }

  return (
    <>
    <Card>
      <Card.Img src={info.pictureUrl} className="imgProd" />
      <Card.Body className="card-body text-center mx-auto">
        <Card.Title className="card-title font-weight-bold">
          {info.title}
        </Card.Title>
        <Card.Text className="card-text">${info.price}</Card.Text>

          < ItemCount initial={1} stock={5} onAdd={addCart} />
        </Card.Body>
      </Card>
    </>
  )
}

export default Item
