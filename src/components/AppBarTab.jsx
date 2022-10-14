import { Text, StyleSheet, Pressable } from "react-native";
import { Link } from "react-router-native";

import theme from "../theme";

const styles = StyleSheet.create({
  tabHeading: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
    marginRight: 10,
  },
});

const AppBarTab = (props) => {
  const { path, children } = props;
  return (
    <Pressable>
      <Link to={path}>
        <Text style={styles.tabHeading}>{children}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
