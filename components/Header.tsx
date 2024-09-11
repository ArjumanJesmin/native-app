import { StyleSheet, Text, View } from "react-native";

const Header = ({ title }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFE5CF",
    marginVertical: 10,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
  },
});
