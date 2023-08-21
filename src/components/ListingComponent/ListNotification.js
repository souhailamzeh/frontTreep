import React, { useMemo } from 'react';
import { Text, TouchableOpacity, View, StatusBar, ScrollView, StyleSheet } from 'react-native';
import { Colors } from '../../utils';
import { FavouriteScreenStyle, HelpScreenStyles } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { Container } from '..';
import { Ionicons } from '@expo/vector-icons'; // Importer l'icône Ionicons
import moment from 'moment';
import { Avatar, Image } from 'react-native-elements';

const ListNotification = (props) => {
  const { t } = useTranslation();
  const { item, onPress, index } = props;
  const { Colors } = useTheme();
  const FavouriteScreenStyles = useMemo(() => FavouriteScreenStyle(Colors), [Colors]);
  const HelpScreenStyle = useMemo(() => HelpScreenStyles(Colors), [Colors]);

  const formattedDate = moment(item.dateCreation).format('HH:mm');

  return (
    <Container backgroundColor={Colors.background}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
      <ScrollView>
        <TouchableOpacity key={index} style={FavouriteScreenStyles.RecomandationBox}>
          <View style={styles.avatarContainer}>
            <Image source={{uri : 'https://support.palcs.org/hc/article_attachments/360000566168/notification-flat.png' } }style={styles.avatar} />
          </View>
          <View style={styles.notificationDetails}>
            <View style={styles.notificationText}>
              <Text style={styles.notificationTitle}>{item.titre}</Text>
              <Text style={HelpScreenStyle.TextParegraph}>{item.message}</Text>
            </View>
            <Text style={styles.notificationDate}>{formattedDate}</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  notificationDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  notificationText: {
    flex: 1,
    paddingRight: 10,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text_color,
  },
  notificationMessage: {
    fontSize: 14,
    color: Colors.gray_text_color,
  },
  notificationDate: {
    position: 'absolute',
    top: 10, // Adjust the vertical position as needed
    right: 10, // Adjust the horizontal position as needed
    color: Colors.gray_text_color, // Use the appropriate color for the date
  },
});

export default ListNotification;
