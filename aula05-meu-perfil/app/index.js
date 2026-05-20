import { router } from 'expo-router';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>P</Text>
        </View>

        <Text style={styles.nome}>
          Pamella Ferreira
        </Text>

        <Text style={styles.subtitulo}>
          Mobile Developer Student
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push('/perfil')}
        >
          <Text style={styles.botaoTexto}>
            Ver Perfil
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  card: {
    width: '100%',
    backgroundColor: '#0F172A',
    borderRadius: 28,
    padding: 35,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1E293B',
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 58,
    fontWeight: 'bold',
  },

  nome: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  subtitulo: {
    color: '#94A3B8',
    fontSize: 18,
    marginBottom: 35,
  },

  botao: {
    backgroundColor: '#2563EB',
    width: '100%',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});