import { StyleSheet, View, Text } from "react-native";

const BoxDataTwo = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}>
        <Text style={styles.boxText}>Box 1</Text>
      </View>
      <View style={[styles.box, styles.box2]}>
        <Text style={styles.boxText}>Box 2</Text>
      </View>
      <View style={[styles.box, styles.box3]}>
        <Text style={styles.boxText}>Box 3</Text>
      </View>
    </View>
  );
};

export default BoxDataTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // margin: 5,
    gap: 3,
  },
  box: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
    alignSelf: "flex-end",
  },
  boxText: {
    color: "white",
    fontWeight: "bold",
  },
});
