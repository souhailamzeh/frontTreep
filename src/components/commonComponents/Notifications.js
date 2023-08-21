import PushNotification from 'react-native-push-notification';
class Notifications {
  constructor() {
   /*  PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        // console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
        //notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      popInitialNotification: true,
      requestPermissions: true,
      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: false,
        sound: false,
      },
    });

    PushNotification.createChannel(
      {
        channelId: 'TravelWorld', // (required)
        channelName: 'Task reminder notifications', // (required)
        channelDescription: 'Reminder for any tasks',
      },
      () => {},
    );

    PushNotification.getScheduledLocalNotifications(rn => {
      console.log('SN --- ', rn);
    }); */
  }

  schduleNotification(date) {
    PushNotification.localNotificationSchedule({
      channelId: 'TravelWorld',
      title: '🔔 Rappel de réservation',
      message: 'N\'oubliez pas votre réservation de randonnée !',
      date,
    });
  }
}

export default new Notifications();