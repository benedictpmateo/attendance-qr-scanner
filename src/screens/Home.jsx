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
      <Text
        style={styles.titleText}
      >
        Attendance
      </Text>

      <WhiteSpace
        size="lg"
      />
      <Graph />
      <PlaceHolder
        label="Attendance Scanner"
        onPress={() => navigation.navigate('Scanner')}
      />
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
    fontSize: 20,
  }
});

export default connect()(Home);