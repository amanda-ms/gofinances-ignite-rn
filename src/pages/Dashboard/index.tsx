import React from 'react'
import { Text, StyleSheet } from 'react-native'

import {Container, Title} from './styles'

export function Dashboard(){
  return(
    <Container style={ styles.container}>
      <Title>Hello</Title>
    </Container>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})