import React from "react"

//img form
function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_img ${card.link ? "popup_opened" : ""}`}
    >
      <figure className="popup__container-img">
      <button
          className="popup__button-close popup__button-close_big-img"
          type="button"
          onClick={onClose}
        ></button>
        <img className="popup__img" src={card.link} alt={card.name} />
        <figcaption className="popup__title-img">{card.name}</figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup