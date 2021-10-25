import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import {Focus} from "./src/components/focus/Focus"
import { FocusHistory } from './src/components/focus/FocusHistory';
import {Timer} from "./src/components/timer/Timer"
import { colors } from './src/utils/colors.';
import { font, spacing } from './src/utils/size';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null)
	const [focusSubjectHistory, setFocusSubjectHistory] = useState([
		{subject : "Study", completed : true},
		{subject : "Playing", completed : true},
	]);

  useEffect(() => {
    focusSubject && setFocusSubjectHistory([...focusSubjectHistory, focusSubject])
  }, [focusSubject])

  
  const onEnd = () =>{
    setFocusSubjectHistory([...focusSubjectHistory.slice(0,-1), {...focusSubject, completed : true}])
    setFocusSubject(null)
  }

  const onClear = () =>{
    setFocusSubject(null)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus On Me</Text>
      {
        focusSubject ?
        <Timer focusSubject={focusSubject} onClear={onClear} onEnd={onEnd} /> :
        <>
          <Focus setFocusSubject={setFocusSubject}/>
          {
            focusSubjectHistory.length > 0 && <FocusHistory focusSubjectHistory={focusSubjectHistory} />
          }
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    paddingTop : StatusBar.currentHeight,
    backgroundColor : colors.background,
    justifyContent : "center",
    alignItems : "center",
  },
  title : {
    fontWeight : "bold",
    fontSize : font.lg,
    margin : spacing.xl,
  }
})