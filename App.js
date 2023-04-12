import React, { useState } from 'react';
import { View, ScrollView,Text, StyleSheet, TouchableOpacity, Image, FlatList, StatusBar, SafeAreaView, TextInput } from 'react-native';
import { Ionicons, Entypo, MaterialIcons, MaterialCommunityIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const buttons = [
  { id: '1', title: 'Minha Saúde', icon: <MaterialCommunityIcons name="hospital" size={48} color='#FFFFFF' /> },
  { id: '2', title: 'Médico', icon: <Ionicons name="person" size={48} color='#FFFFFF' /> },
  { id: '3', title: 'Especialidade', icon: <Ionicons name="md-medical" size={48} color='#FFFFFF' /> },
  { id: '4', title: 'Agendamento', icon: <Ionicons name='calendar-outline' size={48} color='#FFFFFF' /> },
  { id: '5', title: 'Cartão SUS', icon: <FontAwesome5 name="id-card-alt" size={48} color='#FFFFFF' /> },
  { id: '6', title: 'Prontuário', icon: <Ionicons name="md-file-tray-full" size={48} color='#FFFFFF' /> },
  { id: '7', title: 'Remédios', icon: <MaterialCommunityIcons name="pill" size={48} color='#FFFFFF' /> },
  { id: '8', title: 'Exames', icon: <FontAwesome5 name="file-medical-alt" size={48} color='#FFFFFF' /> },
  { id: '9', title: 'Vacinação', icon: <FontAwesome5 name='syringe' size={30} color='#FFFFFF' /> },
 
];



function App() {

  const [searchText, setSearchText] = useState('');
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // adicione aqui a lógica de autenticação do usuário
      console.log(`Usuário: ${username}, Senha: ${password}`);
    };
  
    const handleSignUp = () => {
      // adicione aqui a lógica de criação de uma nova conta de usuário
      console.log(`Criando uma nova conta para o usuário: ${username}`);
    };

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['red', 'rgba(255,0,0,0.9)', 'white']}
        style={styles.background}
      />




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
      
      {/*autenticação com ScrollView*/}
      <ScrollView style={styles.loginContainer}>    
      <View style={styles.inputContainer}>
      <Ionicons style={styles.icon} name="person" size={24} color="darkred" />
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        placeholderTextColor="#777"
        value={username}
        onChangeText={setUsername}
      />
      </View>
      <View style={styles.inputContainer}>
      <Ionicons style={styles.icon} name="lock-closed" size={24} color="darkred" />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#777"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.signupButtonText}>Criar uma nova conta</Text>
      </TouchableOpacity>
      </ScrollView>



      {/* status bar */}
      <View style={styles.statusBar}>
      <TouchableOpacity style={styles.statusBarButton} onPress={() => console.log('Login')}>
          <MaterialIcons name="login" size={30} color="darkred" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusBarButton} onPress={() => console.log('Home')}>
          <FontAwesome name="home" size={50} color="darkred"/>
          </TouchableOpacity>
        <TouchableOpacity style={styles.statusBarButton} onPress={() => console.log('Whatsapp')}>
          <FontAwesome5 name="whatsapp" size={30} color="darkred" />
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
    paddingTop: 80,
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
    marginBottom:120,
    
  },

  item: {
    backgroundColor: '#FF000090',
    borderRadius: 60,
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  itemTitle: {
    color: 'white',
    fontSize: 12,
    fontWeight: 200,
    textAlign: 'center',
    marginTop: 5,
  },
  loginContainer: {
    paddingTop: 10,
    borderRadius: 15,
    margin: 10,
    
  },
  inputContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  input: {
    backgroundColor: '#FFF',
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },

  loginTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },

  button: {
  
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },

  buttonText: {
    color: 'darkred',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signupButton: {
    marginTop: 20,
    marginBottom:20,
  },
  signupButtonText: {
    color: 'darkred',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  statusBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    height: 80,
    width: '100%',
    padding: 10,
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