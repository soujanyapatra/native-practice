import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Details = ({ route }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: contact.image }} style={styles.image} />
      <Text style={styles.title}>Contact Details</Text>
      <Text>Name: {contact.name}</Text>
      <Text>Phone: {contact.phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 60, // Adjust size as needed
    height: 60, // Adjust size as needed
    borderRadius: 5, // Optional: rounded corners for the image
    marginRight: 10, // Space between image and text
  },
});

export default Details;
