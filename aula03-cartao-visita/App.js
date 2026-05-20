import {Image, Linking, StyleSheet, Text, TouchableOpacity,View} from 'react-native';

export default function App() {
    return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://i.ibb.co/nsdfjjpC/foto-5.png'
        }}
        style={styles.image}
      />

      <Text style={styles.nome}>Pamella Ferreira</Text>

      <Text style={styles.curso}>
        Ciência da Computação • 2CCPH
      </Text>

      <Text style={styles.frase}>
        “Transformando números em narrativas e dados em decisões. ☕”
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL('https://github.com/Pammps')}
      >
        <Text style={styles.buttonText}>GitHub</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.linkedin}
        onPress={() => Linking.openURL('https://www.linkedin.com/in/pamella-souza-9875392a5/?locale=pt')}
      >
        <Text style={styles.buttonText}>LinkedIn</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  image: {
    width: 170,
    height: 170,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#38BDF8',
  },

  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  curso: {
    fontSize: 18,
    color: '#CBD5E1',
    marginTop: 8,
  },

  frase: {
    fontSize: 16,
    color: '#94A3B8',
    textAlign: 'center',
    marginVertical: 25,
    lineHeight: 24,
  },

  button: {
    width: '100%',
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },

  linkedin: {
    width: '100%',
    backgroundColor: '#0EA5E9',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});