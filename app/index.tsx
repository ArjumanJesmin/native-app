import DetailScreen from "@/components/DetailScreen";
import HomeScreen from "@/components/HomeScreen";
import Logo from "@/components/Logo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      {/* Stack.Navigator */}
      {/* <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // title: "My Home Page",
          headerTitle: () => <Logo />,

          headerStyle: {
            backgroundColor: "#185519",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 30,
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
        />
      </Stack.Navigator> */}

      {/* Tab.Navigator */}
      {/* <Tab.Navigator
        screenOptions={{
          // title: "My Home Page",
          headerTitle: () => <Logo />,

          headerStyle: {
            backgroundColor: "#185519",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 30,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Detail" component={DetailScreen} />
      </Tab.Navigator> */}

      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Detail" component={DetailScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
