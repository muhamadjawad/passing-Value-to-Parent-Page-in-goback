import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

// navigation.goBack();
// navigation.state.params.onSelect({ selected: true })

export default function Detail(props) {
  const GoBack = num => {
    props.navigation.goBack();
    console.log('Props', props);
    props.route.params.onSelect(num);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'cyan'}}>
      <Text>Detail</Text>
      <TouchableOpacity onPress={() => GoBack(1)} style={styles.button}>
        <Text>1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => GoBack(2)} style={styles.button}>
        <Text>2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => GoBack(3)} style={styles.button}>
        <Text>3</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 200,
    backgroundColor: 'pink',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
