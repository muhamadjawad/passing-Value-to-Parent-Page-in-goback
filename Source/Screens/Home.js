import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function Home(props) {
  const [number, setNumber] = useState(0);

  const onSelect = data => {
    setNumber(data);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
      <Text style={{fontSize: 20}}>{number}</Text>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          backgroundColor: 'cyan',
          alignSelf: 'center',
        }}
        onPress={() => {
          props.navigation.navigate('Detail', {onSelect: onSelect});
        }}>
        <Text>Go To Detail</Text>
      </TouchableOpacity>
    </View>
  );
}
