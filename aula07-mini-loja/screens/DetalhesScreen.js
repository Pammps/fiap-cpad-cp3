import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useContext } from 'react';

import { CarrinhoContext } from '../context/CarrinhoContext';

export default function DetalhesScreen({
  route,
}) {
  const { produto } = route.params;

  const { adicionarProduto } =
    useContext(CarrinhoContext);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>
          {produto.emoji}
        </Text>

        <Text style={styles.nome}>
          {produto.nome}
        </Text>

        <Text style={styles.categoria}>
          {produto.categoria}
        </Text>

        <Text style={styles.preco}>
          R$ {produto.preco}
        </Text>

        <Text style={styles.descricao}>
          {produto.descricao}
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() =>
            adicionarProduto(produto)
          }
        >
          <Text style={styles.botaoTexto}>
            Adicionar ao Carrinho
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
    padding: 24,
  },

  card: {
    backgroundColor: '#0F172A',
    borderRadius: 28,
    padding: 30,
    borderWidth: 1,
    borderColor: '#1E293B',
  },

  emoji: {
    fontSize: 80,
    textAlign: 'center',
    marginBottom: 20,
  },

  nome: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  categoria: {
    color: '#94A3B8',
    fontSize: 16,
    marginBottom: 20,
  },

  preco: {
    color: '#38BDF8',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  descricao: {
    color: '#CBD5E1',
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 35,
  },

  botao: {
    backgroundColor: '#22C55E',
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});