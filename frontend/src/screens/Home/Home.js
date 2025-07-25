import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../Theme/Theme';

export default function Home() {
  const navigation = useNavigation();
  const handleProfilePress = () => {
   navigation.navigate('Profile');
  };
    const { theme } = useTheme();

  return (
    <View style={[styles.container,{ backgroundColor: theme.background}] }>
      {/* Profile Icon with Tarbush */}
      <TouchableOpacity style={styles.profileIcon} onPress={handleProfilePress}>
        <EvilIcons name="user" size={70} color={theme.text} />
        <Image style={styles.tarbush} source={require('../../assets/images/miniTarbush.png')} />
      </TouchableOpacity>

      {/* Header Text */}
      <Text style={[styles.headerText,{color:theme.text}]}>Find Your Destination</Text>

      {/* Horizontal Scroll Section */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
        contentContainerStyle={styles.horizontalContent}
      >
        <OptionBox label="Nearby" image={require('../../assets/images/map.png')} />
        <OptionBox label="Popular Foods" image={require('../../assets/images/Hummus.png')} isBrown />
        <OptionBox label="Popular Places" image={require('../../assets/images/window1.png')} />
      </ScrollView>

      {/* Vertical Scroll Section */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.verticalScroll}>
        <DetailBox  label="Touristic Places" image={require('../../assets/images/touristicPlaces.png')} />
        <DetailBox label="Religious Places" image={require('../../assets/images/religious.png')} isBrown imageStyle={{width:200,height:200} } />
        <DetailBox label="Restaurants" image={require('../../assets/images/pizza.png')} />
        <DetailBox label="Activity " image={require('../../assets/images/activity.png')} isBrown imageStyle={{width:130,height:130,marginLeft:30} }/>
             <DetailBox label="Hotels" image={require('../../assets/images/hotel.png')} imageStyle={{width:130,height:130,marginLeft:30} } />
      </ScrollView>
    </View>
  );
}

// Small horizontal square box
const OptionBox = ({ label, image, isBrown }) => {
  const navigation = useNavigation();

  // map label → screen name
  const screenMap = {
    Nearby:        'Nearby',
    'Popular Foods':'PopularFoods',
    'Popular Places':'PopularPlaces',
  };

  return (
    <TouchableOpacity
      onPress={() => {
  const screen = screenMap[label];
  if (screen) navigation.navigate(screen);
  else console.warn(`No screen for ${label}`);
}}

      style={[styles.optionBox, isBrown && styles.brownBox]}
    >
      <Image source={image} style={styles.optionImage} />
      <Text style={styles.optionText}>{label}</Text>
    </TouchableOpacity>
  );
};


// Big vertical box
const DetailBox = ({ label, image, isBrown,imageStyle }) => {
  const navigation = useNavigation();
 const { theme } = useTheme();
  
  const screenMap = {
    'Touristic Places': 'TouristicPlaces',
    'Religious Places': 'ReligiousPlaces',
    'Restaurants': 'Restaurants',
        'Activity ': 'Activity',
            'Hotels': 'Hotels',
  };
  

  const screenName = screenMap[label];

  return (
    <TouchableOpacity
      onPress={() => {
        if (screenName) {
          navigation.navigate(screenName);
        } else {
          console.warn(`No screen found for label: ${label}`);
        }
      }}
      style={[styles.detailBox, isBrown && styles.brownBox]}
    >
      <Image source={image} style={[styles.detailImage,imageStyle]} />
      <Text style={[styles.detailText, label === 'Restaurants' && { marginLeft: 200 },{color:theme.subtitle1}]}>
        {label}
      </Text>
      <EvilIcons name="chevron-right" size={30} color="#fff" style={styles.arrow} />
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  profileIcon: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 10,
    alignItems: 'center',
  },
  tarbush: {
    position: 'absolute',
    bottom: 30,
    right: 5,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  headerText: {
    fontFamily: 'RobotoBold',
    fontSize: 36,
    marginHorizontal: 30,
    // marginTop: 20,
    marginBottom: 15,
    padding:7,
    color: '#000',
  },
  horizontalScroll: {
    paddingLeft: 10,

  },
  horizontalContent: {
    paddingRight: 10,
     marginBottom: 40,
  },
  optionBox: {
    width: 100,
    height: 100,
    backgroundColor: '#fac75c',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    marginBottom:25,
    marginLeft:12,
    
  },
  optionImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  optionText: {
    fontSize: 10,
    color: '#fff',
    textAlign: 'center',
  },
  verticalScroll: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  detailBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 140,
    backgroundColor: '#fac75c',
    borderRadius: 30,
    marginVertical: 8,
    padding: 15,
    position: 'relative',
  },
  detailImage: {
    position: 'absolute',
    width: 220,
    height: 140,
    borderRadius: 30,
    left: -10,
  },
  detailText: {
    marginLeft: 170,
    fontSize: 17,
    fontWeight: '600',
    color: '#fff',
  },
  arrow: {
    position: 'absolute',
    left: 330,
    bottom: 60,
  },
  brownBox: {
    backgroundColor: '#9a370e',
  },
});
