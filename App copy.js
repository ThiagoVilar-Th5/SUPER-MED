import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, StatusBar } from 'react-native';
import { Ionicons, Entypo, MaterialIcons, MaterialCommunityIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const buttons = [
  { id: '1', title: 'Minha Saúde', icon: <MaterialCommunityIcons name="hospital" size={48} color='#FFFFFF' /> },
  { id: '2', title: 'Médico', icon: <Ionicons name="person" size={48} color='#FFFFFF' /> },
  { id: '3', title: 'Especialidades', icon: <Ionicons name="md-medical" size={48} color='#FFFFFF' /> },
  { id: '4', title: 'Agendamento', icon: <Ionicons name='calendar-outline' size={48} color='#FFFFFF' /> },
  { id: '5', title: 'Cartão SUS', icon: <FontAwesome5 name="id-card-alt" size={48} color='#FFFFFF' /> },
  { id: '6', title: 'Prontuário', icon: <Ionicons name="md-file-tray-full" size={48} color='#FFFFFF' /> },
  { id: '7', title: 'Remédios', icon: <MaterialCommunityIcons name="pill" size={48} color='#FFFFFF' /> },
  { id: '8', title: 'Exames', icon: <FontAwesome5 name="file-medical-alt" size={48} color='#FFFFFF' /> },
  { id: '9', title: 'Vacinação', icon: <FontAwesome5 name='syringe' size={30} color='#FFFFFF' /> },
  { id: '10', title: 'Plano de Saúde', icon: <Entypo name="v-card" size={48} color='#FFFFFF' /> },
  { id: '11', title: 'Ambulância 24hs', icon: <FontAwesome5 name='ambulance' size={30} color='#FFFFFF' /> },
  { id: '12', title: 'Urgência 24hs', icon: <MaterialCommunityIcons name='hospital-box-outline' size={30} color='#FFFFFF' /> }
];


const App = () => {
  {/*} const [selectedButtonId, setSelectedButtonId] = useState(null);
  const handleButtonPress = (id) => {
    setSelectedButtonId(id);
  };*/}

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['red', 'red', 'red', 'rgba(255,0,0,0.9)', 'white']}
        style={styles.background}
      />


      {/* header */}
      {/*<Image
        style={styles.tinyLogo}
      source={require('./img/super-med-logo.png')}
      />*/}


      <View style={styles.header}>

        <Image
          source={require('./img/baby4.png')}
          style={styles.tinyLogo}

        />



        <Text style={styles.headerText}>SUPER-MED <MaterialCommunityIcons name="hospital-box" size={40} color="white" /></Text>
        <Text style={styles.headerText2}> Saúde em primeiro lugar!</Text>
      </View>

      {/*FlatList*/}

      <FlatList
        data={buttons}
        keyExtractor={item => item.title}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            {item.icon}
            <Text style={styles.itemTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}

        contentContainerStyle={styles.flatlist}
      />



      {/* status bar */}
      <View style={styles.statusBar}>
        <TouchableOpacity style={styles.statusBarButton} onPress={() => console.log('Login')}>
          <MaterialIcons name="login" size={30} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusBarButton} onPress={() => console.log('Home')}>
          <FontAwesome name="home" size={50} color="red"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusBarButton} onPress={() => console.log('Whatsapp')}>
          <FontAwesome5 name="whatsapp" size={30} color="red" />
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    //backgroundColor: '#0000FF',
    //backgroundImage: 'linear-gradient(to bottom,red, darkred)',

  },
  tinyLogo: {

    height: 100,
    width: 145,

  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },

  header: {

    height: 200,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    paddingTop: 10,
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 3,
    fontStyle: 'italic',
    textShadowColor: '#4F4F4F',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },

  headerText2: {
    color: 'white',
    fontSize: 20,
    fontWeight: 100,
    fontStyle: 'italic',
    textShadowColor: '#4F4F4F',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },

  flatlist: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },

  item: {
    backgroundColor: '#FF000090',
    borderRadius: 60,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },

  itemTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 300,
    textAlign: 'center',
    marginTop: 4,
  },

  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    height: 80,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 1,
  },

  statusBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  statusBarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#red',
  },
});

export default App;