import { Text, View } from "react-native";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined;
  Detail: { userId: number; userObject: { name: string; age: number } };
};
type DetailScreenRouteProp = RouteProp<RootStackParamList, "Detail">;

type Props = {
  route: DetailScreenRouteProp;
};

const DetailScreen = ({ route }: Props) => {
  const { userId, userObject } = route.params;
  return (
    <View>
      <Text>DETAIL SCREEN</Text>
      <Text>User ID: {userId}</Text>
      <Text>{userObject.name}</Text>
    </View>
  );
};

export default DetailScreen;
