import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { size } from '../../utils/size'

export const Button = ({
  style = {}, 
  textStyle = {},
  size = 60,
  ...props}) => {
  
    return (
      <TouchableOpacity style = {[styles(size).radius, style]} {...props}>
        <Text style = {[styles(size).text, textStyle]}>{props.title}</Text>
      </TouchableOpacity>
  )
}


const styles = size =>  StyleSheet.create({
  radius : {
    width : size,
    height : size,
    borderRadius : size / 2,
    justifyContent : 'center',
    alignItems : 'center',
    borderColor : "#eee",
    borderWidth : 2,
  },
  text : {
    color : '#333',
    fontSize : 30
  }
})