import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { useTranslation } from "react-i18next";
import { API_URL } from "../../../configure";
import { ListNotification } from "../../components/ListingComponent";

const NotificationListScreen = (props) => {
  const { t } = useTranslation();
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    try {
      const response = await fetch(`${API_URL}notification/notificationGetAll`);
      const data = await response.json();
      setNotifications(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const renderItem = ({ item, index }) => (
    <ListNotification item={item} notifData={notifications} index={index} />
  );

  const screenWidth = Dimensions.get("window").width;
  const numColumns = screenWidth > 600 ? 2 : 1;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("Notifications")}</Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  flatListContent: {
    justifyContent: "space-between",
  },
});

export default NotificationListScreen;
