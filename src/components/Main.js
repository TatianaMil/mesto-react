import React, {useState, useEffect} from "react"
import profileEditAvatar from '../images/popup.svg'
import Card from './Card';
import api from '../utils/Api';

// обработчики
function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = useState("")
  const [userDescription, setUserDescription] = useState("")
  const [userAvatar, setUserAvatar] = useState("")
  const [cards, getInitialCards] = useState([])

  //prescribe api
  useEffect(() => {
    api
      .getRealUserInfo()
      .then((profileUserInfo) => {
        setUserName(profileUserInfo.name)
        setUserDescription(profileUserInfo.about)
        setUserAvatar(profileUserInfo.avatar)
      })
      .catch((error) => console.log(`Ошибка: ${error}`))

    api
      .getInitialCards()
      .then((cardsData) => {
        getInitialCards(
          cardsData.map((data) => ({
            likes: data.likes,
            name: data.name,
            link: data.link,
            cardId: data._id,
          }))
        )
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
  }, [])
  return (
    <>
        {/* основная разметка страницы */}
          <main>
            <section className="profile">
              <div className="profile__item">
                <div className="profile__wrapper-avatar">
                  <img src={userAvatar} alt="изображение владельца профиля" className="profile__img" />
                  <button 
                    className="profile__edit-avatar-button"
                    onClick={() => {
                      onEditAvatar(true)
                    }}
                    />
                </div>
                <div className="profile__form">
                  <div className="profile__text">
                    <h1 className="profile__title">{userName}</h1>
                    <p className="profile__info">{userDescription}</p>
                  </div>
                  <button 
                    type="button" 
                    className="profile__button"
                    onClick={() => {
                      onEditProfile(true)
                    }}
                    >
                  <img src={profileEditAvatar} className="profile__button-img" alt="кнопка для открытия формы редактирования" />
                  </button>
                </div>
              </div>
              <button type="button" className="profile__button-plus"
                onClick={() => {
                  onAddPlace(true)
                }}
                />
            </section>

            <section className="gallery">
              {cards.map((card) => (
                <Card
                  key={card.cardId}
                  likes={card.likes}
                  name={card.name}
                  link={card.link}
                 onCardClick={onCardClick}
                />
              ))}
            </section>
          </main>
    </>
  )
}

export default Main