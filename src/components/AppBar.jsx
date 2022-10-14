import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";

import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight + 30,
    paddingBottom: 25,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.dark,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab path="/">Repositories</AppBarTab>
      <AppBarTab path="/sign-in">Sign in</AppBarTab>
    </View>
  );
};

export default AppBar;
