
import React from 'react'
import { useSelector } from 'react-redux'
//Connect importataan käyttöön
import { connect } from 'react-redux'

/*
//Notificaatio joka renderöidään. Tähän viittaus "App.js" filessä
//"App.js" filessä ensin importattu käyttöön
const Notification = () => {

  const notification = useSelector(state => state.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  //Ks. notificationReducder.js filestä 
  //const initialState = { value: 'INITIAL NOTIFICATION' }
  //siksi alla tarvitaan "notification.value"
  console.log('MIKÄ ARVO NOTIFICAATIOLLA ', notification.value)
  //Jos on luotu uusi anecdote, notificaation tilan arvo ei ole null
  //ja viestin sisältö määräytyy "AnecdoteForm.js" ja "notificationReducder.js"
  //fileistä
  if (notification.value !== null) {
    return (
      <div style={style}>
        {notification.value}
      </div>
    )
  }
  //Jos ei ole lisätty uutta anecdotea tai votetettu tai 5sec kulunut
  //notificaation näyttämisestä, niin ei renderöidä mitään eli arvo on null
  //tai muutettu ohjelmallisesti null:ksi
  else if (notification.value === null) {
    return null
  }
}
*/

//------------TÄSSÄ KÄYTETÄÄN CONNECTIA ALKAA-------------------------------
const Notification = (props) => {

  //const notification = useSelector(state => state.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  //Ks. notificationReducder.js filestä 
  //const initialState = { value: 'INITIAL NOTIFICATION' }
  //siksi alla tarvitaan "notification.value"
  //console.log('MIKÄ ARVO NOTIFICAATIOLLA ', props.notification.value)
  //Jos on luotu uusi anecdote, notificaation tilan arvo ei ole null
  //ja viestin sisältö määräytyy "AnecdoteForm.js" ja "notificationReducder.js"
  //fileistä
  if (props.notification.value !== null) {
    return (
      <div style={style}>
        {props.notification.value}
      </div>
    )
  }
  //Jos ei ole lisätty uutta anecdotea tai votetettu tai 5sec kulunut
  //notificaation näyttämisestä, niin ei renderöidä mitään eli arvo on null
  //tai muutettu ohjelmallisesti null:ksi
  else if (props.notification.value === null) {
    return null
  }
}

//Tällä funktiolla välitetään komponentille tila/state propseina
const mapStateToProps = (state) => {
  return {
    notification: state.notification,

  }
}

//Moduuli eksporttaa nyt alkuperäisen komponentin sijaan 
//yhdistetyn komponentin.
//Tällä saadaan välitettyä Notification komponentille "mapStateToProps" -funktio
const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification

//------------TÄSSÄ KÄYTETÄÄN CONNECTIA LOPPUU-------------------------------

//----------Kun käytetään connect:a, kommentoidaan tämä pois------
//export { Notification }