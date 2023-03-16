import React from "react"

function Card(card) {
  function handleCardClick() {
    card.onCardClick(card)
  }

  return (
    //add marking up cards
    <article className="gallery__item"> 
      <div className="gallery__img-block">
        <img
          className="gallery__img"
          src={card.link}
          alt={card.name}
          onClick={handleCardClick}
        />
        <button className="gallery__del" type="button"></button>
      </div>
      <div className="gallery__text-block">
        <h2 className="gallery__title">{card.name}</h2>
        <div className="gallery__wrapper-like">
          <button className="gallery__like" type="button"></button>
          <p className="gallery__count-like">{card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card