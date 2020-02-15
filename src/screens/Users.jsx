import React, { useEffect } from 'react'
import { Dimensions, ScrollView, View, StyleSheet, Text } from 'react-native'
import { WhiteSpace, WingBlank, Button, List } from '@ant-design/react-native'
import { connect } from 'react-redux'

const { height, width } = Dimensions.get('window');

const Users = ({ navigation, users, getUsers }) => {
  useEffect(() => {
    getUsers()
  }, [getUsers]);

  return (
    <ScrollView>
      <List renderHeader="All Users">
        {
          users.map((user) => (
            <List.Item
              wrap
              extra={
                <Text style={styles.code}>{user.qrCode}</Text>
              }> 
              <Text style={styles.titleText}>{user.fullName}</Text>
              <Text>{user.department} | {user.position}</Text>
            </List.Item>
          ))
        }

      </List>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    height,
    width
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  code: {
    fontWeight: 'bold'
  },
  button: {
    marginBottom: 10
  }
});

export default connect(
  (state) => ({
    users: state.user.data,
  }),
  {
    getUsers: () => ({ type: 'USER_GET_ALL' })
  }
)(Users);