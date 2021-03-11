
import React from 'react'
import { useSelector } from 'react-redux'

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

  return (
    <div style={style}>
      {notification.value}
    </div>
  )
}

export { Notification }