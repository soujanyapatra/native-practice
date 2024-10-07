import { View, Text, Image, Button } from "react-native";
import { useState } from "react";
import {
  launchImageLibrary as _launchImageLibrary,
  launchCamera as _launchCamera,
} from "react-native-image-picker";

let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;

const ImagePicker = () => {
  const [image, setImage] = useState(null);

  const options = {
    mediaType: "photo",
    includeBase64: false,
    maxHeight: 2000,
    maxWidth: 2000,
  };

  const openImagePicker = () => {
    const options = {
      mediaType: "photo",
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options as any, handleResponse);
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: "photo",
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options as any, handleResponse);
  };

  const handleResponse = (response) => {
    if (response.didCancel) {
      console.log("User cancelled image picker");
    } else if (response.error) {
      console.log("Image picker error: ", response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      setImage(imageUri);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Image Picker</Text>
      <Image source={{ uri: image }} style={{ flex: 1 }} resizeMode="contain" />

      <View style={{ marginTop: 20 }}>
        <Button title="Choose from Device" onPress={openImagePicker} />
      </View>

      <View style={{ marginTop: 20, marginBottom: 50 }}>
        <Button title="Open Camera" onPress={handleCameraLaunch} />
      </View>
    </View>
  );
};

export default ImagePicker;
