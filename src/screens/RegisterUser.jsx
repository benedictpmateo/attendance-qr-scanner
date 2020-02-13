import React from 'react'
import { Dimensions, Text, View, StyleSheet } from 'react-native'
import { WhiteSpace, WingBlank, Button } from '@ant-design/react-native'
import { connect } from 'react-redux'
import AddUser from '../forms/AddUser'

const { height, width } = Dimensions.get('window');

const RegisterUser = ({ navigation }) => (
  <View
    style={styles.view}
  >
    <AddUser />

  </View>
)


const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    height,
    width
  },
  titleText: {
    fontSize: 16,
  },
  button: {
    marginBottom: 10
  }
});

export default connect()(RegisterUser);