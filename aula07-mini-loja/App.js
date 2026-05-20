import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CarrinhoProvider } from './context/CarrinhoContext';

import ProdutosScreen from './screens/ProdutosScreen';
import CarrinhoScreen from './screens/CarrinhoScreen';
import DetalhesScreen from './screens/DetalhesScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CarrinhoProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0F172A',
            },

            headerTintColor: '#FFFFFF',

            contentStyle: {
              backgroundColor: '#020617',
            },
          }}
        >
          <Stack.Screen
            name="Produtos"
            component={ProdutosScreen}
          />

          <Stack.Screen
            name="Carrinho"
            component={CarrinhoScreen}
          />

          <Stack.Screen
            name="Detalhes"
            component={DetalhesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CarrinhoProvider>
  );
}