import React, { useState, useEffect } from 'react';
import { Dimensions, Text, ScrollView, View, StyleSheet } from 'react-native';
import { WhiteSpace, WingBlank, Button, List } from '@ant-design/react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

const Scanner = ({ getUserQR, user, loader, setUser }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false)
  const [type, setType] = useState('back');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    getUserQR(data)
    setTimeout(() => {
      setScanned(false)
      setUser(null)
    }, 3000);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ position: 'relative'}}>
      { loader && <View style={styles.loader}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Loading...</Text>
      </View>}
      <View
        style={styles.view}
      >
        <WingBlank>
          <WhiteSpace size="lg"/>
          <Button
            type="primary"
            onPress={() => setType(type === 'front' ? 'back' : 'front')}
          >
            Use {type === 'front' ? 'back' : 'front'} camera
          </Button>
          <WhiteSpace size="lg"/>
          <LinearGradient
            colors={gradients.sirius}
            start={[0.1, 0.2]}
            style={styles.linearGradient}
          >
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
            <View style={styles.box4}></View>
            <BarCodeScanner
              type={type}
              barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
              onBarCodeScanned={scanned || loader ? undefined : handleBarCodeScanned}
              style={styles.scanner}
            />
          </LinearGradient>
          <WhiteSpace size="lg"/>
          {
            user && (
              <List renderHeader="User Details">
                <List.Item
                  wrap
                  extra={
                    <Text style={styles.code}>{user.qrCode}</Text>
                  }> 
                  <Text style={styles.title}>{user.fullName}</Text>
                  <Text>{user.department} | {user.position}</Text>
                </List.Item>
                <List.Item
                  wrap
                > 
                  <Text style={styles.title}>Status</Text>
                  <Text style={{ color: 'red' }}>WIP: Attendance Log</Text>
                </List.Item>
              </List>
            )
          }
          {loader && <Text>Fetching user...</Text>}

        </WingBlank>
      </View>
    </View>
  );
}

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  loader: {
    height,
    width,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'black',
    zIndex: 10,
    color: 'white',
    opacity: 0.5,
    display: 'flex',
    justifyContent:  'center',
    alignItems: 'center',
  },
  view: {
    backgroundColor: 'white',
    height,
    width: '100%'
  },
  scanner: {
    borderRadius: 8,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  content: {
    
  },
  linearGradient: {
    position: 'relative',
    width: '100%',
    borderRadius: 8,
    padding: 20,
  },
  box1: {
    position: 'absolute',
    height: 50,
    width: 50,
    top: 10,
    left: 10,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderTopWidth: 8,
    borderLeftWidth: 8,
  },
  box2: {
    position: 'absolute',
    height: 50,
    width: 50,
    top: 10,
    right: 10,
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderTopWidth: 8,
    borderRightWidth: 8,
  },
  box3: {
    position: 'absolute',
    height: 50,
    width: 50,
    bottom: 10,
    left: 10,
    borderBottomColor: 'white',
    borderLeftColor: 'white',
    borderBottomWidth: 8,
    borderLeftWidth: 8,
  },
  box4: {
    position: 'absolute',
    height: 50,
    width: 50,
    bottom: 10,
    right: 10,
    borderBottomColor: 'white',
    borderRightColor: 'white',
    borderBottomWidth: 8,
    borderRightWidth: 8,
  }
})

const gradients = {
  blue: ['#1488cc', '#2b32b2'],
  pink: ['#fc6767', '#ec008c'],
  brown: ['#b79891', '#94716b'],
  dirty: ['#FFFFFF', '#D4D3DD'],
  dark: ['#000000', '#434343'],
  sirius: ['#232526', '#414345'],
}

export default connect(
  (state) => ({
    loader: state.user.loader,
    error: state.user.error,
    user: state.user.user,
  }),
  {
    getUserQR: (payload) => ({ type: 'USER_GET_QR', payload }),
    setUser: (payload) => ({ type: 'USER_SET', payload })
  }
)(Scanner);