import React from "react";
import PopupWithForm from './PopupWithForm';

function PopupDeleteCard({ onLoading, onClose, isOpen, onCardDelete, card }) {
    function handleSubmit(event) {
        event.preventDefault();
        onCardDelete(card);
      }

    return (
        <PopupWithForm 
          name='popupDeleteCard' 
          title='Вы уверены?' 
          buttonText={onLoading ? `Удаление` : `Да`}
          isOpen={isOpen} 
          onClose={onClose}
          onSubmit={handleSubmit}/>
    )
}

export default PopupDeleteCard;