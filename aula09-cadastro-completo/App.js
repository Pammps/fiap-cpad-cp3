import { useRef, useState } from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

export default function App() {
  const emailRef = useRef(null);
  const cpfRef = useRef(null);
  const telefoneRef = useRef(null);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] =
    useState('');

  const [perfil, setPerfil] =
    useState('');

  const [aceito, setAceito] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [erros, setErros] =
    useState({});

  const [tela, setTela] =
    useState('inicio');

  const [cadastros, setCadastros] =
    useState([]);

  function validar() {
    let novosErros = {};

    if (!nome.trim()) {
      novosErros.nome =
        'Digite seu nome';
    }

    if (!email.includes('@')) {
      novosErros.email =
        'Digite um e-mail válido';
    }

    if (cpf.length < 14) {
      novosErros.cpf =
        'CPF inválido';
    }

    if (telefone.length < 15) {
      novosErros.telefone =
        'Telefone inválido';
    }

    if (!perfil) {
      novosErros.perfil =
        'Selecione um perfil';
    }

    if (!aceito) {
      novosErros.aceito =
        'Aceite os termos';
    }

    setErros(novosErros);

    return Object.keys(novosErros)
      .length === 0;
  }

  function enviar() {
    if (!validar()) return;

    setLoading(true);

    setTimeout(() => {
      const novoCadastro = {
        nome,
        email,
        cpf,
        telefone,
        perfil,
      };

      setCadastros([
        ...cadastros,
        novoCadastro,
      ]);

      setLoading(false);

      setNome('');
      setEmail('');
      setCpf('');
      setTelefone('');
      setPerfil('');
      setAceito(false);

      setTela('cadastros');
    }, 2000);
  }

  if (tela === 'inicio') {
    return (
      <View style={styles.inicioContainer}>
        <Text style={styles.logo}>
          📋
        </Text>

        <Text style={styles.inicioTitulo}>
          Cadastro App
        </Text>

        <Text style={styles.inicioSubtitulo}>
          Sistema moderno de cadastro
          de usuários
        </Text>

        <TouchableOpacity
          style={styles.botaoComecar}
          onPress={() =>
            setTela('cadastro')
          }
        >
          <Text style={styles.botaoTexto}>
            Começar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (tela === 'cadastros') {
    return (
      <ScrollView
        style={styles.listaContainer}
      >
        <Text style={styles.listaTitulo}>
          👥 Meus Cadastros
        </Text>

        {cadastros.map((item, index) => (
          <View
            key={index}
            style={styles.cardCadastro}
          >
            <Text style={styles.cardNome}>
              {item.nome}
            </Text>

            <Text style={styles.cardTexto}>
              📧 {item.email}
            </Text>

            <Text style={styles.cardTexto}>
              📱 {item.telefone}
            </Text>

            <Text style={styles.cardTexto}>
              🪪 {item.cpf}
            </Text>

            <Text style={styles.cardPerfil}>
              {item.perfil}
            </Text>
          </View>
        ))}

        <TouchableOpacity
          style={styles.botao}
          onPress={() =>
            setTela('cadastro')
          }
        >
          <Text style={styles.botaoTexto}>
            Novo Cadastro
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={
        Platform.OS === 'ios'
          ? 'padding'
          : undefined
      }
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titulo}>
          Cadastro Completo
        </Text>

        <Text style={styles.subtitulo}>
          Preencha seus dados
        </Text>

        <Text style={styles.label}>
          Nome
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#94A3B8"
          value={nome}
          onChangeText={setNome}
          returnKeyType="next"
          onSubmitEditing={() =>
            emailRef.current.focus()
          }
        />

        {erros.nome && (
          <Text style={styles.erro}>
            {erros.nome}
          </Text>
        )}

        <Text style={styles.label}>
          E-mail
        </Text>

        <TextInput
          ref={emailRef}
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#94A3B8"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() =>
            cpfRef.current.focus()
          }
        />

        {erros.email && (
          <Text style={styles.erro}>
            {erros.email}
          </Text>
        )}

        <Text style={styles.label}>
          CPF
        </Text>

        <TextInputMask
          ref={cpfRef}
          type={'cpf'}
          value={cpf}
          onChangeText={setCpf}
          placeholder="000.000.000-00"
          placeholderTextColor="#94A3B8"
          style={styles.input}
          returnKeyType="next"
          onSubmitEditing={() =>
            telefoneRef.current.focus()
          }
        />

        {erros.cpf && (
          <Text style={styles.erro}>
            {erros.cpf}
          </Text>
        )}

        <Text style={styles.label}>
          Telefone
        </Text>

        <TextInputMask
          ref={telefoneRef}
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
          }}
          value={telefone}
          onChangeText={setTelefone}
          placeholder="(11) 99999-9999"
          placeholderTextColor="#94A3B8"
          style={styles.input}
        />

        {erros.telefone && (
          <Text style={styles.erro}>
            {erros.telefone}
          </Text>
        )}

        <Text style={styles.label}>
          Perfil
        </Text>

        <View style={styles.chipsContainer}>
          <TouchableOpacity
            style={[
              styles.chip,
              perfil === 'Estudante' &&
                styles.chipAtivo,
            ]}
            onPress={() =>
              setPerfil('Estudante')
            }
          >
            <Text style={styles.chipTexto}>
              🎓 Estudante
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.chip,
              perfil === 'Profissional' &&
                styles.chipAtivo,
            ]}
            onPress={() =>
              setPerfil('Profissional')
            }
          >
            <Text style={styles.chipTexto}>
              💼 Profissional
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.chip,
              perfil === 'Freelancer' &&
                styles.chipAtivo,
            ]}
            onPress={() =>
              setPerfil('Freelancer')
            }
          >
            <Text style={styles.chipTexto}>
              🚀 Freelancer
            </Text>
          </TouchableOpacity>
        </View>

        {erros.perfil && (
          <Text style={styles.erro}>
            {erros.perfil}
          </Text>
        )}

        <View style={styles.switchArea}>
          <Text style={styles.switchTexto}>
            Aceito os termos
          </Text>

          <Switch
            value={aceito}
            onValueChange={setAceito}
            trackColor={{
              false: '#64748B',
              true: '#2563EB',
            }}
          />
        </View>

        {erros.aceito && (
          <Text style={styles.erro}>
            {erros.aceito}
          </Text>
        )}

        <TouchableOpacity
          style={styles.botao}
          onPress={enviar}
          disabled={loading}
        >
          <Text style={styles.botaoTexto}>
            {loading
              ? 'Enviando...'
              : 'Cadastrar'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
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
    marginBottom: 30,
  },

  label: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    backgroundColor: '#0F172A',
    color: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#1E293B',
  },

  erro: {
    color: '#EF4444',
    marginTop: 6,
    marginBottom: 6,
  },

  chipsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },

  chip: {
    backgroundColor: '#1E293B',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 30,
  },

  chipAtivo: {
    backgroundColor: '#2563EB',
  },

  chipTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },

  switchArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },

  switchTexto: {
    color: '#FFFFFF',
    fontSize: 16,
  },

  botao: {
    backgroundColor: '#2563EB',
    padding: 20,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 30,
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  inicioContainer: {
    flex: 1,
    backgroundColor: '#020617',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  logo: {
    fontSize: 90,
    marginBottom: 20,
  },

  inicioTitulo: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  inicioSubtitulo: {
    color: '#94A3B8',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 40,
  },

  botaoComecar: {
    backgroundColor: '#2563EB',
    width: '100%',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },

  listaContainer: {
    flex: 1,
    backgroundColor: '#020617',
    paddingTop: 70,
    paddingHorizontal: 24,
  },

  listaTitulo: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  cardCadastro: {
    backgroundColor: '#0F172A',
    padding: 22,
    borderRadius: 24,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#1E293B',
  },

  cardNome: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 14,
  },

  cardTexto: {
    color: '#CBD5E1',
    fontSize: 15,
    marginBottom: 8,
  },

  cardPerfil: {
    color: '#38BDF8',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});