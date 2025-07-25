import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Fontisto from 'react-native-vector-icons/Fontisto';

import Home from '../Home/Home';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';
import Shops from '../Shops/Shops';
import AiSupport from '../AiSupport/aiSupport';
import { useTheme } from '../Theme/Theme';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const { theme,isLightMode } =useTheme();
    const activeColor =  isLightMode ?'#9A370E':  '#FAC75C' ;
  const inactiveColor = isLightMode ? '#888' : '#999';
 return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: theme.background,
        borderTopWidth: 1,
        borderColor: '#ddd',
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let icon;
        const color = isFocused ? activeColor : inactiveColor;

        switch (route.name) {
          case 'Home':
            icon = <Ionicons name="home-outline" size={24} color={color} />;
            break;
          case 'Search':
            icon = <Ionicons name="search-outline" size={24} color={color} />;
            break;
          case 'Favorites':
            icon = <Ionicons name="heart-outline" size={24} color={color} />;
            break;
          case 'Shops':
            icon = <Fontisto name="shopping-store" size={24} color={color} />;
            break;
          case 'AI Support':
            icon = <MaterialDesignIcons name="robot-outline" size={24} color={color} />;
            break;
          default:
            icon = <Ionicons name="ellipse" size={24} color={color} />;
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={{ alignItems: 'center' }}
          >
            {icon}
            <Text
              style={{
                color,
                fontSize: 12,
                marginTop: 4,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
      
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Shops" component={Shops} />
      <Tab.Screen name="AI Support" component={AiSupport} />
    </Tab.Navigator>
  );
}



