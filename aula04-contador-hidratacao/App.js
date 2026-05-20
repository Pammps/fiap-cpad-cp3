import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [copos, setCopos] = useState(0);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    if (copos >= 8) {
      setMensagem('🏆 Meta do dia atingida!');
    } else {
      setMensagem('');
    }
  }, [copos]);

  function adicionarCopo() {
    setCopos(copos + 1);
  }

  function resetar() {
    setCopos(0);
  }

  const progresso = (copos / 8) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        💧 Hidratação Diária
      </Text>

      <View style={styles.card}>
        <Text style={styles.icone}>🥤</Text>

        <Text style={styles.contador}>
          {copos}
        </Text>

        <Text style={styles.subtitulo}>
          copos de água
        </Text>

        <View style={styles.barraFundo}>
          <View
            style={[
              styles.barraProgresso,
              { width: `${Math.min(progresso, 100)}%` },
            ]}
          />
        </View>

        <Text style={styles.metaTexto}>
          Meta: 8 copos
        </Text>

        {mensagem !== '' && (
          <Text style={styles.meta}>
            {mensagem}
          </Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={adicionarCopo}
      >
        <Text style={styles.botaoTexto}>
          + Adicionar Copo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoReset}
        onPress={resetar}
      >
        <Text style={styles.botaoTexto}>
          Resetar Dia
        </Text>
      </TouchableOpacity>
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

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
  },

  card: {
    width: '100%',
    backgroundColor: '#0F172A',
    borderRadius: 24,
    padding: 30,
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#1E293B',
  },

  icone: {
    fontSize: 50,
    marginBottom: 10,
  },

  contador: {
    fontSize: 90,
    fontWeight: 'bold',
    color: '#38BDF8',
  },

  subtitulo: {
    fontSize: 20,
    color: '#CBD5E1',
    marginBottom: 25,
  },

  barraFundo: {
    width: '100%',
    height: 14,
    backgroundColor: '#1E293B',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
  },

  barraProgresso: {
    height: '100%',
    backgroundColor: '#38BDF8',
    borderRadius: 20,
  },

  metaTexto: {
    color: '#94A3B8',
    marginBottom: 15,
  },

  meta: {
    color: '#22C55E',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  botaoAdicionar: {
    width: '100%',
    backgroundColor: '#2563EB',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 15,
  },

  botaoReset: {
    width: '100%',
    backgroundColor: '#DC2626',
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