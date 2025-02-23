import { useRouter } from 'expo-router';
import { useColorScheme } from 'react-native';
import { TouchableOpacity, View, SafeAreaView } from 'react-native';
import { ThemeProvider } from '@react-navigation/native';
import { lightTheme, darkTheme } from '../constants/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Bookmark, Calendar, MessageCircle, ShoppingCart } from 'react-native-feather';
import HomeScreen from '../screens/HomeScreen';
import MealPlanScreen from '../screens/MealPlanScreen';
import SavedRecipesScreen from '../screens/SavedRecipesScreen';
import ShoppingListScreen from '../screens/ShoppingListScreen';
import ChatScreen from '@/app/(tabs)/chat';

const Tab = createBottomTabNavigator<RootTabParamList>();

type RootTabParamList = {
  Home: undefined;
  'Meal Plan': undefined;
  Saved: undefined;
  Shopping: undefined;
  Chat: undefined;
  [key: string]: undefined | object;
};

type TabIconProps = {
  color: string;
  size: number;
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? darkTheme : lightTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }: TabIconProps) => {
              let IconComponent;
              switch (route.name) {
                case 'Home':
                  IconComponent = Home;
                  break;
                case 'Saved':
                  IconComponent = Bookmark;
                  break;
                case 'Meal Plan':
                  IconComponent = Calendar;
                  break;
                case 'Shopping':
                  IconComponent = ShoppingCart;
                  break;
                case 'Chat':
                  IconComponent = MessageCircle;
                  break;
                default:
                  IconComponent = Home;
              }
              return IconComponent ? <IconComponent width={size} height={size} color={color} /> : null;
            },
            tabBarActiveTintColor: '#FF6B6B',
            tabBarInactiveTintColor: '#999',
            tabBarStyle: {
              paddingBottom: 8,
              height: 60,
              backgroundColor: colorScheme === 'dark' ? '#1A1A1A' : '#FFFFFF',
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '500',
            },
            headerStyle: {
              backgroundColor: '#FF6B6B',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Recipe Master',
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => router.push('/chat')}
                  style={{ marginRight: 15 }}
                >
                  <MessageCircle width={24} height={24} color="#FFF" />
                </TouchableOpacity>
              ),
            }}
          />
          <Tab.Screen name="Meal Plan" component={MealPlanScreen} />
          <Tab.Screen name="Saved" component={SavedRecipesScreen} />
          <Tab.Screen name="Shopping" component={ShoppingListScreen} />
          <Tab.Screen
            name="Chat"
            component={ChatScreen}
            options={{
              tabBarButton: () => null,
              title: 'Chef AI Assistant',
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </ThemeProvider>
  );
}
