import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, FlatList} from 'react-native'
import { font, spacing } from '../../utils/size'


export const FocusHistory = ({focusSubjectHistory}) =>{

  const renderItem = ({item, id}) =>{
    return <Text key={id} style={historyItem(item.completed)}>{item.subject}</Text>
  }
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Focus History</Text>
        <FlatList 
          data = {focusSubjectHistory}
          renderItem={renderItem}
          keyExtractor={item => item.subject}
        />
      </SafeAreaView>
  )
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      fontSize: font.lg,
      fontWeight: "bold",
    },
  }); 
  
const historyItem =  completed =>({	
  fontSize: font.md,
  textAlign : "center",
  margin : spacing.sm,
  color : completed ? "green" : "crimson",
  // textDecoration : completed ? "line-through" : "none"
})