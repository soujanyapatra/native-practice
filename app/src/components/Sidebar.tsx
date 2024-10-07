import Home from "../screens/Home";
import Contacts from "../screens/contact/Index";
import Products from "../screens/product/Index";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, Text, View } from "react-native";
import ContactDetails from "../screens/contact/ContactDetails";
import ProductDetails from "../screens/product/ProductDetails";
import ImagePicker from "../screens/ImagePicker";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Non-clickable title */}
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Native</Text>
      </View>

      {/* List of clickable screens */}
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate("Home")}
        icon={() => <Icon name="home" size={24} />}
        style={styles.drawerItem}
      />
      <DrawerItem
        label="Contact"
        onPress={() => props.navigation.navigate("Contact")}
        icon={() => <Icon name="contacts" size={24} />}
        style={styles.drawerItem}
      />
      <DrawerItem
        label="Products"
        onPress={() => props.navigation.navigate("Products")}
        icon={() => <Icon name="shopping-cart" size={24} />}
        style={styles.drawerItem}
      />
      <DrawerItem
        label="Image"
        onPress={() => props.navigation.navigate("ImagePicker")}
        icon={() => <Icon name="image" size={24} />}
        style={styles.drawerItem}
      />
    </DrawerContentScrollView>
  );
};

const Sidebar = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="menu" size={30} style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          ),
        })}
      >
        {/* Define your screens here */}
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Contact" component={Contacts} />
        <Drawer.Screen name="Products" component={Products} />
        <Drawer.Screen name="ContactDetails" component={ContactDetails} />
        <Drawer.Screen name="ProductDetails" component={ProductDetails} />
        <Drawer.Screen name="ImagePicker" component={ImagePicker} />
        {/* Add other screens as needed */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  drawerHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  drawerItem: {
    marginVertical: 3, // Add spacing between items
    paddingVertical: 3, // Increase touch area
  },
});

export default Sidebar;
