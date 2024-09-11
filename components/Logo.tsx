import { Image } from "react-native";

const Logo = () => {
  return (
    <Image
      style={{ width: 50, height: 50, borderRadius: 50 }}
      source={require("../assets/logo.png")}
    />
  );
};

export default Logo;
