import {Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import CustomDrawerContent from './CustomDrawerContent';
import CalendarHomeScreen from '@/screens/calendar/CalendarHomeScreen';
import MapStackNavigator, {MapStackParamList} from '../stack/MapStackNavigator';
import {colors, mainNavigations} from '@/constants';
import FeedTabNavigator, {FeedTabParamList} from '../tab/FeedTabNavigator';

export type MainDrawerParamList = {
  [mainNavigations.HOME]: NavigatorScreenParams<MapStackParamList>;
  [mainNavigations.FEED]: NavigatorScreenParams<FeedTabParamList>;
  [mainNavigations.CALENDAR]: undefined;
};

const Drawer = createDrawerNavigator<MainDrawerParamList>();

function DrawerIcons(route: RouteProp<MainDrawerParamList>, focused: boolean) {
  let iconName = '';

  switch (route.name) {
    case mainNavigations.HOME: {
      iconName = 'location-on';
      break;
    }
    case mainNavigations.FEED: {
      iconName = 'book';
      break;
    }
    case mainNavigations.CALENDAR: {
      iconName = 'event-note';
      break;
    }
  }

  return (
    <MaterialIcons
      name={iconName}
      color={focused ? colors.BLACK : colors.GRAY_500}
      size={18}
    />
  );
}

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={({route}) => ({
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: Dimensions.get('screen').width * 0.6,
          backgroundColor: colors.WHITE,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        },
        drawerActiveTintColor: colors.BLACK,
        drawerInactiveTintColor: colors.GRAY_500,
        drawerActiveBackgroundColor: colors.PINK_200,
        drawerInactiveBackgroundColor: colors.GRAY_100,
        drawerLabelStyle: {
          fontWeight: '600',
        },
        drawerItemStyle: {
          borderRadius: 5,
        },
        drawerIcon: ({focused}) => DrawerIcons(route, focused),
      })}>
      <Drawer.Screen
        name={mainNavigations.HOME}
        component={MapStackNavigator}
        options={{
          title: '홈',
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name={mainNavigations.FEED}
        component={FeedTabNavigator}
        options={{
          title: '피드',
        }}
      />
      <Drawer.Screen
        name={mainNavigations.CALENDAR}
        component={CalendarHomeScreen}
        options={{
          title: '캘린더',
        }}
      />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;
