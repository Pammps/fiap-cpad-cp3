import { useContext } from 'react';

import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { CarrinhoContext } from '../context/CarrinhoContext';

export default function CarrinhoScreen() {
  const { carrinho } =
    useContext(CarrinhoContext);

  const total = carrinho.reduce(
    (soma, item) => soma + item.preco,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        🛒 Meu Carrinho
      </Text>

      <FlatList
        data={carrinho}
        keyExtractor={(item, index) =>
          index.toString()
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>
              {item.nome}
            </Text>

            <Text style={styles.preco}>
              R$ {item.preco}
            </Text>
          </View>
        )}
      />

      <View style={styles.totalCard}>
        <Text style={styles.total}>
          Total: R$ {total}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    padding: 20,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  item: {
    backgroundColor: '#0F172A',
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#1E293B',
  },

  nome: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 8,
  },

  preco: {
    color: '#38BDF8',
    fontSize: 16,
    fontWeight: 'bold',
  },

  totalCard: {
    backgroundColor: '#2563EB',
    padding: 22,
    borderRadius: 18,
    marginTop: 10,
  },

  total: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});