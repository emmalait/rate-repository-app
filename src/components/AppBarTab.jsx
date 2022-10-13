import { Text, StyleSheet, Pressable } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  tabHeading: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = (props) => {
  const { children } = props;
  return (
    <Pressable>
      <Text style={styles.tabHeading}>{children}</Text>
    </Pressable>
  );
};

export default AppBarTab;
