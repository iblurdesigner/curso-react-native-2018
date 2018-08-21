import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

function Category(props) {
  if(!props.genres){
    return null
  }
  return(
    <ImageBackground
      style={styles.wrapper}
      source = {{
        uri: props.background_image
      }}
      >
      <Text style={styles.genre}>{props.genres[0]}</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,.75)',
    textShadowOffset: {
        height:2,
        width:2,
    },
    textShadowRadius: 10,
    elevation: 2,
  }
})

export default Category
