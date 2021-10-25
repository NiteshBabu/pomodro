import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { colors } from "../../utils/colors.";

import { font, spacing } from "../../utils/size";
import { Button } from "../buttons/Button";

export const Focus = ({setFocusSubject}) => {

	const [subject, setsubject] = useState(null)

	return (
		<View style={styles.container}>
			<TextInput
				placeholder='What You Wanna Focus On...'
				// onSubmitEditing={({ nativeEvent }) => setsubject(nativeEvent.text)}
				onChangeText={text => setsubject(text)}
				style={styles.inputBox}
			/>
			<Button title='+' style={{ backgroundColor: "#fff" }} onPress={() =>{ 
				setFocusSubject({subject, completed : false})
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
    flexDirection : "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	title: {
		fontWeight: "bold",
		fontSize: font.lg,
	},
	inputBox: {
		width: "50%",
		height: 40,
		padding: spacing.sm,
		textAlign: "center",
		borderBottomWidth: 1,
		borderBottomColor: "skyblue",
		margin: spacing.xl,
		backgroundColor: colors.fieldBackground
	},  
});
