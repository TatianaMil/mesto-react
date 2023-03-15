import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false)

  const [selectedCard, setSelectedCard] = React.useState({})

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({})
  }
  return (
    <div>
      <div className="page">
        <div className="page__container">

          <Header/>

          <Main
            onEditProfile={setIsEditProfilePopupOpen}
            onAddPlace={setIsAddPlacePopupOpen}
            onEditAvatar={setIsEditAvatarPopupOpen}
            onCardClick={setSelectedCard}
            />
          <Footer/>

            {/* chanched profile (name, about) */}
          <PopupWithForm
            name='popupEditProfile'
            title='Редактировать профиль'
            buttonText='Сохранить'
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            >
            <input name="name" placeholder="Имя" minLength={2} maxLength={40} required type="text" className="popup__input popup__input_form-name" id="username" />
            <span className="username-error popup__input-error" />
            <input name="about" type="text" placeholder="О себе" minLength={2} maxLength={200} required className="popup__input popup__input_form-about" id="about" />
            <span className="about-error popup__input-error"/>
          </PopupWithForm>

            {/* popup add card (name, link)*/}
          <PopupWithForm
            name='popupAddCard'
            title='Новое место'
            buttonText='Создать'
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            >
            <input type="text" name="name" placeholder="Название" required className="popup__input popup__input_img-name" id="title" minLength={2} maxLength={30} />
            <span className="title-error popup__input-error" />
            <input name="link" type="url" placeholder="Ссылка на картинку" required className="popup__input popup__input_img-link" id="link" />
            <span className="link-error popup__input-error" />
          </PopupWithForm>

            {/* popup delete-card */}
          <PopupWithForm
            name='popupDeleteCard'
            titel='Вы уверены?'
            buttonText='Да'
            >
          </PopupWithForm>

            {/* popup update-avatar */}
          <PopupWithForm
            name='popupUpdateAvatar'
            title='Обновить аватар'
            buttonText='Сохранить'
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            >
            <input type="url" name="avatar" className="popup__input popup__input_update-avatar" id="avatarLink" />
            <span className="avatarLink-error popup__input-error" />
          </PopupWithForm>

            {/* open big img */}
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}/>

        </div>
      </div>
        
      <template className="template-new-img" id="template-new-img" />
    </div>
  );
}

export default App;
