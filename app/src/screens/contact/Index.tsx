import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const contacts = [
  {
    id: "1",
    name: "John Doe",
    phone: "123-456-7890",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "2",
    name: "Jane Smith",
    phone: "987-654-3210",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "3",
    name: "Bob Johnson",
    phone: "555-555-5555",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "4",
    name: "Alice Davis",
    phone: "777-777-7777",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: "5",
    name: "Tom Wilson",
    phone: "000-000-0000",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "6",
    name: "Sarah Brown",
    phone: "111-111-1111",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const ContactDetails = ({ name, phone, image }) => {
  return (
    <View style={styles.contactItem}>
      <Image source={{ uri: image }} style={styles.contactImage} />
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{name}</Text>
        <Text style={styles.contactNumber}>{phone}</Text>
      </View>
    </View>
  );
};

const Contacts = ({ navigation }) => {
  const handleContactPress = (contact) => {
    navigation.navigate("ContactDetails", { contact }); // Pass the selected contact to ContactDetails
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact List</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleContactPress(item)}>
            <ContactDetails
              name={item.name}
              phone={item.phone}
              image={item.image}
            />
          </TouchableOpacity>
        )}
      />
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
    marginBottom: 20,
  },
  contactItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row", // Align items in a row
    alignItems: "center", // Center items vertically
  },
  contactImage: {
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    borderRadius: 25, // Round image
    marginRight: 10, // Space between image and text
  },
  contactInfo: {
    flex: 1, // Allow text to take remaining space
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contactNumber: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
  },
});

export default Contacts;
