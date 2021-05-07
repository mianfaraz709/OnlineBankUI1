import {Provider, TextInput} from 'react-native-paper';
import {Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './Style';
import {SafeAreaView, StyleSheet} from 'react-native';

import DropDown from 'react-native-paper-dropdown';

const SelectBank = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const [bank, setBank] = useState();

  const SelectBank = [
    {label: 'UBL', value: 'UBL'},

    {label: 'HBL', value: 'HBL'},

    {label: 'Others', value: 'Others'},
  ];

  return (
    <Provider>
      <SafeAreaView style={styles.containerStyle}>
        <DropDown
          style={styles.Dropdown}
          label={'Select Bank'}
          mode={'outlined'}
          value={bank}
          setValue={setBank}
          list={SelectBank}
          style={{}}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          inputProps={{
            right: <TextInput.Icon name={'menu-down'} />,
          }}
        />

        <TextInput
          style={styles.TextInput}
          placeholder="Enter Information About Transfer"
        />

        <View style={styles.View1}>
          <TouchableOpacity
            style={styles.TouchableOpacity1}
            onPress={() => console.log('Proceed')}>
            <View>
              <Text style={styles.Text}> Proceed </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default SelectBank;
