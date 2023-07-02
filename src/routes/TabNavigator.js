import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExploreTab, FavouriteTab, HomeTab, NearByTab, Profile,IndexMaterial} from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { ColorPicker, CustomSidebarMenu, VectoreIcons, HeaderLeftMenuIcon, AppHeader } from '../components';
import RouteName from '../routes/RouteName';
import { Colors, SH, SF } from '../utils';
import { useTranslation } from "react-i18next";
import { Style } from '../styles';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HeaderArray = {
  headerShown: true,
  headerStyle: Style.headerStyle,
  headerShadowVisible: false,
};

function DrawerSidebarScreen(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
      <CustomSidebarMenu {...props} />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HomeScsreenTabAll" drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen name="HomeScsreenTabAll"
        options={{ headerShown: false }}
        component={HomeScsreenTabAll} />
    </Drawer.Navigator>
  );
}
function Root() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen name="Homese" component={HomeScsreenTabAll}
        options={{
          title: '',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
export default Root;

function HomeTabScreenStack(props) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Home_Text")} />,
          ...HeaderArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function NearByTabStack(props) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Camping">
      <Stack.Screen
        name="Camping"
        component={NearByTab}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Camping")} />,
          ...HeaderArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function ExploreTabStack(props) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Randonne">
      <Stack.Screen
        name="Randonne"
        component={ExploreTab}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Randonne")} />,
          ...HeaderArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function FavouriteTabStack(props) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="FavouriteTab">
      <Stack.Screen
        name="FavouriteTab"
        component={FavouriteTab}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Favourite_Tab")} />,
          ...HeaderArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function IndexMaterialStack(props) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="IndexMaterial">
      <Stack.Screen
        name="IndexMaterial"
        component={IndexMaterial}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("IndexMaterial")} />,
          ...HeaderArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function ProfileScreenStack(props) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Profile_Text")} />,
          ...HeaderArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export function HomeScsreenTabAll() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator initialRouteName="Homes"
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: Colors.theme_background,
        inactiveTintColor: Colors.black_text_color,
        labeled: true,
        labelStyle: {
        },
        tabStyle: {
          height: SH(49),
          backgroundColor: Colors.background,
          paddingTop: 0,
        },
      }}
    >
      <Tab.Screen
        name={RouteName.HOME_TAB}
        component={HomeTabScreenStack}
        options={{
          tabBarLabel: t("Home_Text"),
          tabBarIcon: ({ focused }) => (
            <VectoreIcons
              icon="Feather"
              size={SF(19)}
              name="home"
              color={focused ? Colors.theme_background : Colors.black_text_color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.Camping}
        component={NearByTabStack}
        options={{
          tabBarLabel: t("Camping"),
          tabBarIcon: ({ focused }) => (
            <View>
              <VectoreIcons icon="MaterialIcons" name="near-me" color={focused ? Colors.theme_background : Colors.black_text_color} size={SF(20)} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.Randonne}
        component={ExploreTabStack}
        options={{
          tabBarLabel: t("Randonne"),
          tabBarIcon: ({ focused }) => (
            <VectoreIcons icon="MaterialIcons" name="explore" color={focused ? Colors.theme_background : Colors.black_text_color} size={SF(23)} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.Favorite_TAB}
        component={FavouriteTabStack}
        options={{
          tabBarLabel: t("Favorite_label"),
          tabBarIcon: ({ focused }) => (
            <VectoreIcons
              icon="FontAwesome"
              size={SF(23)}
              name="bookmark"
              color={focused ? Colors.theme_background : Colors.black_text_color}
            />
          ),
        }}
      />
        <Tab.Screen
        name={RouteName.IndexMaterial}
        component={IndexMaterialStack}
        options={{
          tabBarLabel: t("Favorite_label"),
          tabBarIcon: ({ focused }) => (
            <VectoreIcons
              icon="FontAwesome"
              size={SF(23)}
              name="bookmark"
              color={focused ? Colors.theme_background : Colors.black_text_color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.PROFILE_TAB}
        component={ProfileScreenStack}
        options={{
          tabBarLabel: t("Profile_Text"),
          tabBarIcon: ({ focused }) => (
            <VectoreIcons
              icon="FontAwesome"
              size={SF(19)}
              name="user-circle"
              color={focused ? Colors.theme_background : Colors.black_text_color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
