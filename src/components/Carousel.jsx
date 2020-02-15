import React, { useState } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { Carousel, WingBlank, Card } from '@ant-design/react-native'
import { LinearGradient } from 'expo-linear-gradient';

const CarouselContainer = () => {
  const [data, setData] = useState([
    {
      title: 'Announcement',
      message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      gradient: 'brown'
    }, {
      title: 'Holidays',
      message: 'January 1, 2021',
      gradient: 'blue'
    }, {
      title: 'Upcoming GA',
      message: 'Hello there fellow mates',
      gradient: 'pink'
    }])
  const [imgHeight, setHeight] = useState(176)
  const [slideIndex, setIndex] = useState(0)

  return (
    <View>
      <Carousel
        autoplay
        infinite
        autoplayInterval={5000}
        afterChange={index => setIndex(index)}
      >
        {data.map((val, index) => (
          <View
            key={index}
            style={styles.carouselCard}
          >
            <LinearGradient
              colors={gradients[val.gradient]}
              start={[0.1, 0.2]}
              style={styles.linearGradient}
            >
              <Text style={styles.titleText}>{val.title}</Text>
              <Text style={styles.baseText}>{val.message}</Text>
            </LinearGradient>
          </View>
        ))}
      </Carousel>
    </View>
  )
}
const gradients = {
  blue: ['#1488cc', '#2b32b2'],
  pink: ['#fc6767', '#ec008c'],
  brown: ['#b79891', '#94716b']
}

const styles = StyleSheet.create({
  carouselCard: {
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  linearGradient: {
    position: 'relative',
    width: '100%',
    height: 100,
    borderRadius: 8,
    padding: 20,
  },
  baseText: {
    color: '#FFFFFF'
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 1
  },
})

export default CarouselContainer