import React from 'react';
import {Keyboard, StyleSheet, TextInput} from 'react-native';

function CustomBoxInput({
  placeholder,
  value,
  onChangeText,
  autoComplete,
  keyboardType,
  secureTextEntry,
  autoFocus,
}) {
  return (
    <TextInput
      style={styles.textBox}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      autoComplete={autoComplete}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      onSubmitEditing={() => {
        Keyboard.dismiss();
      }}
      autoCapitalize={'none'}
      autoCorrect={false}
      passwordRules={null}
      autoFocus={autoFocus}
      placeholderTextColor={'gray'}
    />
  );
}

const styles = StyleSheet.create({
  textBox: {
    width: 295,
    height: 49,
    borderRadius: 18,
    borderWidth: 3,
    backgroundColor: 'rgba(191, 195, 201, 0.53)',
    fontSize: 15,
    paddingHorizontal: 15,
  },
});

export default CustomBoxInput;
