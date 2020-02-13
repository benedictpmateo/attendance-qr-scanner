import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View, StyleSheet, Image, Alert } from 'react-native'
import { Button, InputItem, List, WhiteSpace, Modal, Provider } from '@ant-design/react-native'
import { connect } from 'react-redux'

const AddUser = ({
  loader,
  addNewUser,
  setError,
  error,
  success,
}) => {
  const [form, setForm] = useState({
    fullName: '',
    department: '',
    position: '',
    qrCode: ''
  })

  const onSubmitForm = () => {
    if (form.fullName && form.qrCode && form.department && form.qrCode) {
      addNewUser(form);
    } else {
      Alert.alert(
        'Error',
        'Please fill up all fields', [
        { text: 'OK' },
      ]);
    }
  }

  useEffect(() => {
    if (error) {
      Alert.alert(
        'Error',
        'QR Code already registered', [
        { text: 'OK', onPress: () => setError(null) },
      ]);
    }
  }, [error])

  useEffect(() => {
    if (success) {
      Alert.alert(
        'Successfully added',
        'User is successfully registered', [
        { text: 'OK', onPress: () => setError(null) },
      ]);
      setForm({
        fullName: '',
        department: '',
        position: '',
        qrCode: ''
      })
    }
  }, [success])



  return (
    <ScrollView
      style={{ flex: 1 }}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <List renderHeader={'Add User Form'}>
        <InputItem
          placeholder="John Doe"
          autoFocus
          value={form.fullName}
          onChange={(value) => setForm({ ...form, fullName: value })}
        >
          <Text>Fullname</Text>
        </InputItem>
        <InputItem
          placeholder="Oqulo"
          value={form.department}
          onChange={(value) => setForm({ ...form, department: value })}
        >
          <Text>Department</Text>
        </InputItem>
        <InputItem
          placeholder="Software Engineer"
          value={form.position}
          onChange={(value) => setForm({ ...form, position: value })}
        >
          <Text>Position</Text>
        </InputItem>
        <InputItem
          placeholder="ID-XXXXXX"
          value={form.qrCode}
          onChange={(value) => setForm({ ...form, qrCode: value })}
        >
          <Text>QR Number</Text>
        </InputItem>
        <WhiteSpace size="lg" />
        { form.qrCode ? (
          <List.Item>
            <View style={styles.flex}>
              <Text style={styles.column}>QR Code</Text>
              <Image
                style={{
                  width:200,
                  height:200,
                  flex: 0.5
                }}
                source={{
                  uri: `https://chart.googleapis.com/chart?chl=${form.qrCode}&cht=qr&chs=300x300`
                }
              } 
              />
            </View>
          </List.Item>
        ) : <Text></Text>}
        <WhiteSpace size="lg" />
        <List.Item>
          <Button
            type="primary"
            onPress={onSubmitForm}
            disabled={loader}
          >
            Submit
          </Button>
        </List.Item>
      </List>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  flex: {
    display: 'flex'
  },
  column: {
    flex: 0.5
  },
  danger: {
    fontWeight: 'bold',
    color: 'red'
  }
})

export default connect(
  (state) => ({
    loader: state.user.loader,
    error: state.user.error,
    success: state.user.success,
  }),
  {
    addNewUser: (payload) => ({ type: 'USER_ADD', payload }),
    setError: (payload) => ({ type: 'USER_ERROR', payload })
  }
)(AddUser)