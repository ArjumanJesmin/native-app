import { StyleSheet, View, Text } from "react-native";

const BoxData = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}>
        <Text style={{ color: "white" }}>Box 1</Text>
      </View>
      <View style={[styles.box, styles.box2]}>
        <Text style={{ color: "white" }}>Box 2</Text>
      </View>
      <View style={[styles.box, styles.box3]}>
        <Text style={{ color: "white" }}>Box 3</Text>
      </View>
    </View>
  );
};

export default BoxData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    color: "white",
    margin: 5,
  },
  box: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  box1: {
    backgroundColor: "blue",
    flex: 1,
  },
  box2: {
    backgroundColor: "green",
    flex: 2,
  },
  box3: {
    backgroundColor: "purple",
    flex: 1,
  },
});
