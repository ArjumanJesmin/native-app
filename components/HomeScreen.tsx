import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";

type RootStackParamList = {
  Home: undefined;
  Detail: { userId: number; userObject: { name: string; age: number } };
};

// Define the type for the HomeScreen's navigation prop
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  const userId = 1;
  const dummyObject = {
    name: "Json",
    age: 25,
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HOME SCREEN</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Detail", { userId, userObject: dummyObject })
        }
      >
        <Text style={{ color: "blue", marginTop: 20 }}>Go To Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
