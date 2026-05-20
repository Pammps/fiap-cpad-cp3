import { router } from 'expo-router';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Pamella Ferreira
      </Text>

      <View style={styles.infoCard}>
        <Text style={styles.info}>
          🎓 Ciência da Computação
        </Text>

        <Text style={styles.info}>
          👩‍💻 Turma 2CCPH
        </Text>

        <Text style={styles.info}>
          👩‍💻 Aprendizado contínuo
        </Text>
      </View>

      <Text style={styles.subtitulo}>
        Tecnologias Favoritas
      </Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.emoji}>⚛️</Text>
          <Text style={styles.cardText}>
            React Native
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>🗄️</Text>
          <Text style={styles.cardText}>
            SQL
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>📊</Text>
          <Text style={styles.cardText}>
            Data Science
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.back()}
      >
        <Text style={styles.botaoTexto}>
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    padding: 24,
    justifyContent: 'center',
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  infoCard: {
    backgroundColor: '#0F172A',
    borderRadius: 20,
    padding: 24,
    marginBottom: 35,
    borderWidth: 1,
    borderColor: '#1E293B',
  },

  info: {
    color: '#E2E8F0',
    fontSize: 18,
    marginBottom: 12,
  },

  subtitulo: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  card: {
    width: '31%',
    backgroundColor: '#1E293B',
    borderRadius: 18,
    paddingVertical: 24,
    paddingHorizontal: 10,
    alignItems: 'center',
  },

  emoji: {
    fontSize: 28,
    marginBottom: 10,
  },

  cardText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  },

  botao: {
    backgroundColor: '#2563EB',
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