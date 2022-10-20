import { StyleSheet, Pressable } from "react-native";
import { Link } from "react-router-native";

import Text from "./Text";

const styles = StyleSheet.create({
  tabHeading: {
    marginRight: 10,
  },
});

const AppBarTab = (props) => {
  const { path, children } = props;
  return (
    <Pressable>
      <Link to={path}>
        <Text
          color="textSecondary"
          fontWeight="bold"
          fontSize="heading"
          style={styles.tabHeading}
        >
          {children}
        </Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
