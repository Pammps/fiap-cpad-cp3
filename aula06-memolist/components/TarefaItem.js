import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function TarefaItem({
  tarefa,
  onRemover,
  onAlternar,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.textoArea}>
        <Text
          style={[
            styles.texto,
            tarefa.concluida && styles.concluida,
          ]}
        >
          {tarefa.texto}
        </Text>
      </View>

      <View style={styles.acoes}>
        <Switch
          value={tarefa.concluida}
          onValueChange={() =>
            onAlternar(tarefa.id)
          }
          trackColor={{
            false: '#64748B',
            true: '#22C55E',
          }}
        />

        <TouchableOpacity
          onPress={() => onRemover(tarefa.id)}
        >
          <Text style={styles.remover}>
            🗑️
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F172A',
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1E293B',
  },

  textoArea: {
    width: '65%',
  },

  texto: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 22,
  },

  concluida: {
    textDecorationLine: 'line-through',
    color: '#64748B',
  },

  acoes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  remover: {
    fontSize: 20,
  },
});