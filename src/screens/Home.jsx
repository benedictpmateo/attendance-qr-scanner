import React from 'react'
import { Dimensions, Text, View, StyleSheet } from 'react-native'
import { WhiteSpace, WingBlank, Button } from '@ant-design/react-native'
import { connect } from 'react-redux'
import Carousel from '../components/Carousel'
import Graph from '../components/Graph'

const { height, width } = Dimensions.get('window');

const PlaceHolder = ({label, onPress}) => (
  <Button
    onPress={onPress}
  >
    <Text>{label}</Text>
  </Button>
);

const Home = ({ navigation }) => (
  <View
    style={styles.view}
  >
    <Carousel />

    <WhiteSpace size="lg"/>
    <WhiteSpace size="lg"/>

    <WingBlank>
      <Graph />
      <Button
        type="primary"
        onPress={() => navigation.navigate('Scanner')}
        style={styles.button}
      >
        QR Scanner
      </Button>
      <Button
        type="ghost"
        onPress={() => navigation.navigate('Register User')}
        style={styles.button}
      >
        Register User
      </Button>
      <Button
        type="ghost"
        onPress={() => navigation.navigate('Users')}
        style={styles.button}
      >
        View All Users
      </Button>
    </WingBlank>
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

export default connect()(Home);