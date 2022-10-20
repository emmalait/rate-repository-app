import { View, StyleSheet, Image } from "react-native";

import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 15,
    backgroundColor: theme.colors.white,
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 20,
  },
  infoContainer: {
    display: "flex",
    width: 0,
    flexGrow: 1,
  },
  name: {
    marginBottom: 15,
  },
  description: {
    marginBottom: 15,
    flexWrap: "wrap",
    flexShrink: 1,
  },
  languageTagContainer: {
    borderRadius: 5,
    backgroundColor: theme.colors.blue,
    alignSelf: "flex-start",
    padding: 5,
    marginBottom: 20,
  },
  languageTagText: {
    color: theme.colors.white,
  },
  bottomContainer: {
    display: "flex",
    flexDirection: "row",
  },
  bottomContainerItem: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  stat: {
    marginBottom: 5,
  },
});

const getRoundedValue = (number) => {
  return Math.round(number / 100) / 10.0 + "k";
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.infoContainer}>
          <Text fontWeight="bold" fontSize="heading" style={styles.name}>
            {item.fullName}
          </Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.languageTagContainer}>
            <Text style={styles.languageTagText}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContainerItem}>
          <Text fontWeight="bold" style={styles.stat}>
            {getRoundedValue(item.stargazersCount)}
          </Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.bottomContainerItem}>
          <Text fontWeight="bold" style={styles.stat}>
            {getRoundedValue(item.forksCount)}
          </Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.bottomContainerItem}>
          <Text fontWeight="bold" style={styles.stat}>
            {item.reviewCount}
          </Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.bottomContainerItem}>
          <Text fontWeight="bold" style={styles.stat}>
            {item.ratingAverage}
          </Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
