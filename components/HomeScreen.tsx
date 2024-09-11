import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";

type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
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
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HOME SCREEN</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
        <Text style={{ color: "blue", marginTop: 20 }}>Go To Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
