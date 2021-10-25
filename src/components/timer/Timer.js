import React, { useState, useEffect, useRef } from "react";
	import { View, Text, StyleSheet} from "react-native";

import { font, spacing } from "../../utils/size";
import { Button } from "../buttons/Button";
import { Countdown } from "../countdown/Countdown";

export const Timer = ({ focusSubject, onClear, onEnd }) => {
	const [minutes, setminutes] = useState(.1);
	const [isStarted, setisStarted] = useState(false);

	return (
		<View style={styles.container}>
			<Countdown
				minutes={minutes}
				isStarted={isStarted}
				setisStarted={setisStarted}
				onEnd = {onEnd}
			/>
			{focusSubject && (
				<Text style={styles.title}>
					Your'e Focusing On : {focusSubject.subject}</Text>
			)}

			<View style={styles.timeSlot}>
				<Button
					title={10}
					onPress={() => {
						setminutes(10);
						setisStarted(false);
					}}></Button>
				<Button
					title={15}
					onPress={() => {
						setminutes(15);
						setisStarted(false);
					}}>

					</Button>
				<Button
					title={20}
					onPress={() => {
						setminutes(20);
						setisStarted(false);
					}}></Button>
			</View>
			
				<Button
					title={isStarted ? "Pause" : "Start"}
					size={100}
					textStyle={{ fontWeight: "bold", fontSize: font.xl }}
					onPress={() => setisStarted(!isStarted)}>
				</Button>
				<Button
					title="-"
					size={60}
					style={{marginRight: "80%"}}
					textStyle={{ fontWeight: "bold", fontSize: font.xl }}
					onPress={() => onClear()}>
				</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		paddingTop : 30,
		paddingBottom : 30,
		alignItems: "center",
		justifyContent: "space-between",
	},
	title: {
		fontSize: font.lg,
		fontWeight: "bold",
	},
	timeSlot: {
		flex: 1,
		width: "80%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});
