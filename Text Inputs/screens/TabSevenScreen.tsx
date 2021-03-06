import { StyleSheet, Image, ImageBackground } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabSevenScreen() {
  const style = require('./styles');
  
  return (
    <View style={style.container}>
      <View style={style.galeria}>  

          <Text style={{ fontSize: 20 }}>
           Wygenerowane liczby:7777777
          </Text>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
