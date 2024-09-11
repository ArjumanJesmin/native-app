import { Text, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Define the navigation param list
type RootStackParamList = {
  Home: undefined;
  Detail: { userId: number; userObject: { name: string; age: number } };
};

// Define the navigation prop for the Detail screen
type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Detail"
>;

type DetailScreenRouteProp = RouteProp<RootStackParamList, "Detail">;

type Props = {
  navigation: DetailScreenNavigationProp; // Added navigation prop type
  route: DetailScreenRouteProp; // Existing route prop type
};

const DetailScreen = ({ navigation, route }: Props) => {
  const { userId, userObject } = route.params;

  return (
    <View>
      <Text>DETAIL SCREEN</Text>
      <Text>User ID: {userId}</Text>
      <Text>{userObject.name}</Text>
      <Text>{userObject.age}</Text>
    </View>
  );
};

export default DetailScreen;
