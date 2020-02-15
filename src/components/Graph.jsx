import React, { useState } from 'react'

import { StyleSheet, View, Image, Text } from 'react-native'
import { Carousel, WingBlank, Card } from '@ant-design/react-native'
import PureChart from 'react-native-pure-chart'
import { LinearGradient } from 'expo-linear-gradient';

const Graph = () => {
  const [items, setItems] = useState([
    {seriesName: 'series1', data: [30, 200, 170, 250, 10], color: '#1488cc'},
    {seriesName: 'series2', data: [20, 100, 150, 130, 15], color: '#fc6767'}
  ]);

  return (
    <View style={styles.view}>
      <LinearGradient
        colors={gradients.dirty}
        start={[0.1, 0.2]}
        style={styles.linearGradient}
      >
        <Text style={styles.titleText}>Attendance Report Summary</Text>
        <Text>Summary report of attendance this week</Text>
        <PureChart data={items} type='bar' height={200} backgroundColor="transparent" />
        <View>
          <Text style={{ fontWeight: 'bold' }}>Legend</Text>
          <Text>
            <View style={{ backgroundColor: '#1488cc', ...styles.legend }}></View>
            {' '}Dayshift
          </Text>
          <Text>
            <View style={{ backgroundColor: '#fc6767', ...styles.legend }}></View>
            {' '}Nightshift
          </Text>
        </View>
      </LinearGradient>
    </View>
  )
}

const gradients = {
  blue: ['#1488cc', '#2b32b2'],
  pink: ['#fc6767', '#ec008c'],
  brown: ['#b79891', '#94716b'],
  dirty: ['#FFFFFF', '#D4D3DD']
}

const styles = StyleSheet.create({
  view: {
    marginBottom: 20,
  },
  legend: {
    height: 10,
    width: 10,
  },
  linearGradient: {
    position: 'relative',
    width: '100%',
    borderRadius: 8,
    padding: 20,
  },
  labelText: {
    color: '#636363',
  },
  titleText: {
    color: '#636363',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 1
  },
})

export default Graph