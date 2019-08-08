import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

const CustomButton = props => {
  const { style, onPress, component } = props;
  return (
    <View style={{ ...style, ...styles.button }}>
      <TouchableOpacity onPress={onPress}>{component}</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 30,
    width: 30,
    backgroundColor: "#eeeeee"
  }
});

export default CustomButton;
