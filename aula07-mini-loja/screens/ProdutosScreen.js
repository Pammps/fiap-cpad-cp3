import { useContext } from 'react';

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { produtos } from '../data/produtos';

import { CarrinhoContext } from '../context/CarrinhoContext';

export default function ProdutosScreen({
  navigation,
}) {
  const { carrinho, adicionarProduto } =
    useContext(CarrinhoContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.carrinhoBotao}
        onPress={() =>
          navigation.navigate('Carrinho')
        }
      >
        <Text style={styles.carrinhoTexto}>
          🛒 Carrinho ({carrinho.length})
        </Text>
      </TouchableOpacity>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate(
                'Detalhes',
                {
                  produto: item,
                }
              )
            }
          >
            <Text style={styles.emoji}>
              {item.emoji}
            </Text>

            <Text style={styles.nome}>
              {item.nome}
            </Text>

            <Text style={styles.categoria}>
              {item.categoria}
            </Text>

            <Text style={styles.preco}>
              R$ {item.preco}
            </Text>

            <TouchableOpacity
              style={styles.botao}
              onPress={() =>
                adicionarProduto(item)
              }
            >
              <Text style={styles.botaoTexto}>
                Adicionar ao Carrinho
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    padding: 20,
  },

  carrinhoBotao: {
    backgroundColor: '#2563EB',
    padding: 18,
    borderRadius: 18,
    marginBottom: 20,
    alignItems: 'center',
  },

  carrinhoTexto: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#0F172A',
    borderRadius: 24,
    padding: 22,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#1E293B',
  },

  emoji: {
    fontSize: 50,
    marginBottom: 10,
  },

  nome: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  categoria: {
    color: '#94A3B8',
    marginBottom: 12,
  },

  preco: {
    color: '#38BDF8',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 18,
  },

  botao: {
    backgroundColor: '#22C55E',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});