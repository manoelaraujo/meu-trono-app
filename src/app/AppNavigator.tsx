import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddRestroomStackParamList,
  ExploreStackParamList,
  MainTabParamList,
} from './routes';
import {ExploreScreen} from '../features/explore/ExploreScreen';
import {RestroomDetailsScreen} from '../features/explore/RestroomDetailsScreen';
import {SelectLocationScreen} from '../features/add-restroom/SelectLocationScreen';
import {RestroomDetailsFormScreen} from '../features/add-restroom/RestroomDetailsFormScreen';
import {ReviewSubmissionScreen} from '../features/add-restroom/ReviewSubmissionScreen';
import {RankingScreen} from '../features/ranking/RankingScreen';
import {ProfileScreen} from '../features/profile/ProfileScreen';
import {colors} from '../theme';

const Tab = createBottomTabNavigator<MainTabParamList>();
const ExploreStack = createNativeStackNavigator<ExploreStackParamList>();
const AddRestroomStack = createNativeStackNavigator<AddRestroomStackParamList>();

function ExploreNavigator() {
  return (
    <ExploreStack.Navigator screenOptions={{headerShown: false}}>
      <ExploreStack.Screen name="ExploreHome" component={ExploreScreen} />
      <ExploreStack.Screen name="RestroomDetails" component={RestroomDetailsScreen} />
    </ExploreStack.Navigator>
  );
}

function AddRestroomNavigator() {
  return (
    <AddRestroomStack.Navigator screenOptions={{headerShown: false}}>
      <AddRestroomStack.Screen name="SelectLocation" component={SelectLocationScreen} />
      <AddRestroomStack.Screen
        name="RestroomDetailsForm"
        component={RestroomDetailsFormScreen}
      />
      <AddRestroomStack.Screen
        name="ReviewSubmission"
        component={ReviewSubmissionScreen}
      />
    </AddRestroomStack.Navigator>
  );
}

const tabIcons: Record<keyof MainTabParamList, string> = {
  Explore: '⌖',
  AddRestroom: '+',
  Ranking: '#',
  Profile: '●',
};

const tabLabels: Record<keyof MainTabParamList, string> = {
  Explore: 'Explorar',
  AddRestroom: 'Adicionar',
  Ranking: 'Ranking',
  Profile: 'Perfil',
};

function renderTabIcon(routeName: keyof MainTabParamList, color: string) {
  return (
    <Text style={[styles.tabIcon, {color}]}>
      {tabIcons[routeName]}
    </Text>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.onSurfaceVariant,
          tabBarLabel: tabLabels[route.name],
          tabBarIcon: ({color}) => renderTabIcon(route.name, color),
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabLabel,
        })}>
        <Tab.Screen name="Explore" component={ExploreNavigator} />
        <Tab.Screen name="AddRestroom" component={AddRestroomNavigator} />
        <Tab.Screen name="Ranking" component={RankingScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.surfaceLowest,
    borderTopWidth: 0,
    elevation: 16,
    height: 78,
    paddingBottom: 12,
    paddingTop: 8,
  },
  tabIcon: {
    fontSize: 22,
    fontWeight: '900',
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
});
