import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useEffect, useState } from 'react';

import TarefaItem from './components/TarefaItem';

export default function App() {

  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  useEffect(() => {
    salvarTarefas();
  }, [tarefas]);

  async function carregarTarefas() {
    const dados = await AsyncStorage.getItem(
      'tarefas'
    );

    if (dados) {
      setTarefas(JSON.parse(dados));
    }
  }

  async function salvarTarefas() {
    await AsyncStorage.setItem(
      'tarefas',
      JSON.stringify(tarefas)
    );
  }

  function adicionarTarefa() {
    if (!texto.trim()) return;

    const novaTarefa = {
      id: Date.now().toString(),
      texto,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);

    setTexto('');
  }

  function removerTarefa(id) {
    const listaAtualizada = tarefas.filter(
      (item) => item.id !== id
    );

    setTarefas(listaAtualizada);
  }

  function alternarConcluida(id) {
    const atualizadas = tarefas.map((item) =>
      item.id === id
        ? {
            ...item,
            concluida: !item.concluida,
          }
        : item
    );

    setTarefas(atualizadas);
  }

  async function limparTudo() {
    setTarefas([]);

    await AsyncStorage.removeItem('tarefas');
  }

  const pendentes = tarefas.filter(
    (item) => !item.concluida
  ).length;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        📝 MemoList
      </Text>

      <Text style={styles.subtitulo}>
        Organize suas tarefas
      </Text>

      <View style={styles.cardPendentes}>
        <Text style={styles.pendentes}>
          Pendentes: {pendentes}
        </Text>
      </View>

      <TextInput
        value={texto}
        onChangeText={setTexto}
        placeholder="Digite uma tarefa..."
        placeholderTextColor="#94A3B8"
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={adicionarTarefa}
      >
        <Text style={styles.botaoTexto}>
          Adicionar
        </Text>
      </TouchableOpacity>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TarefaItem
            tarefa={item}
            onRemover={removerTarefa}
            onAlternar={alternarConcluida}
          />
        )}
      />

      <TouchableOpacity
        style={styles.botaoLimpar}
        onPress={limparTudo}
      >
        <Text style={styles.botaoTexto}>
          Limpar Tudo
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    paddingTop: 70,
    paddingHorizontal: 24,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#94A3B8',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 24,
  },

  cardPendentes: {
    backgroundColor: '#0F172A',
    padding: 18,
    borderRadius: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#1E293B',
  },

  pendentes: {
    color: '#38BDF8',
    fontSize: 18,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#1E293B',
    color: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    fontSize: 16,
    marginBottom: 15,
  },

  botaoAdicionar: {
    backgroundColor: '#2563EB',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 25,
  },

  botaoLimpar: {
    backgroundColor: '#DC2626',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});