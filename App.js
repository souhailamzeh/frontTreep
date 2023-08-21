import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import RootNavigator from './src/routes/RootNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Notifications from './src/components/commonComponents/Notifications';
import { API_URL } from './configure';
import moment from 'moment';

const App = () => {

  useEffect(() => {
    // Démarre l'intervalle pour vérifier les réservations et envoyer des notifications
    const interval = setInterval(checkAndSendNotifications, 50000000000); // Vérification toutes les 5 secondes

    // Nettoie l'intervalle lors du démontage du composant
    return () => {
      clearInterval(interval);
    };
  }, []);

  const getCurrentTimeISO = async () => {
    try {
      const response = await fetch(`${API_URL}resevationcentre/reservationcentreGetLastDate`);
      const data = await response.json();
      return data; // Assurez-vous que l'API renvoie le temps au format ISO
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'heure :', error);
      return null;
    }
  };

  const saveNotif = async (notif) => {
    try {
      const response = await fetch(`${API_URL}notification/notificationPost`, {
        method: 'POST', // Use POST method
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(notif),
      });
  
      //const data = await response.json();
      return response; // Make sure your API returns the time in ISO format
    } catch (error) {
      console.error('Error fetching time:', error);
      return null;
    }
  };
  const currentDate = Date.now()
  const formattedDateTime = moment(currentDate).format('YYYY-MM-DD HH:mm:ss'); 
 
  

  const checkAndSendNotifications = async () => {
    const currentTimeISO = await getCurrentTimeISO();
    if (currentTimeISO) {
      // Simule la récupération de la dernière date de réservation depuis la base de données

        const currentTime = new Date(Date.now()).getTime();
        const reservationTime = new Date(currentTimeISO).getTime();
        // Vérifie si la date de réservation est dans le passé et qu'aucune notification n'a été envoyée
        if (reservationTime > currentTime) {
          Notifications.schduleNotification(new Date(Date.now() + 5 * 1000));

          let notif ={
              titre: "Rappel de réservation",
              message:"N\'oubliez pas votre réservation de randonnée . Le départ à "+ moment(currentTime).format('MM-DD HH:mm:ss') ,
              dateCreation: formattedDateTime         
          }
          saveNotif(notif)

        }
      
    }
  };



  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};
export default App;