import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Vibration, Platform } from "react-native";
import { ProgressBar, Colors } from "react-native-paper";
import { colors } from "../../utils/colors.";
import { font, spacing } from "../../utils/size";

const toSeconds = (time) => Math.ceil(time * 60);
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes, isStarted, onEnd }) => {
  
  const [time, settime] = useState(toSeconds(minutes));
	const [progress, setprogress] = useState(1);
  
	const min = Math.floor(time / 60);
	const sec = Math.floor(time % 60);
	const x = useRef(null);
  
  const countdown = () => {
    settime((time) => {
      if (time === 0) {
        if (Platform.OS === "android") {
          Vibration.vibrate([10,10,1]);
        } else {
          const interval = setInterval(() => Vibration.vibrate(), 1000);
          setTimeout(() => clearInterval(interval), 10000);
        }
        return time;
      }
      const timeLeft = time - 1;
      return timeLeft;
    });
  };

  useEffect(() => {
    settime(toSeconds(minutes))
  }, [minutes])
  
	useEffect(() => {
    setprogress(time / toSeconds(minutes))
		if (time === 0) onEnd()
  }, [time])

	useEffect(() => {
		if (isStarted) {
			x.current = setInterval(countdown, 1000);
      return () => clearInterval(x.current);
		}
	}, [isStarted]);

	return (
		<View style={styles.container}>
			<Text style={styles.timerText}>
				{formatTime(min)}: {formatTime(sec)}
			</Text>
			<ProgressBar
				color={Colors.white}
				progress={progress}
				style={{ width: 400, margin: spacing.md }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "space-between",
	},
	timerText: {
		width: "80%",
		backgroundColor: colors.fieldBackground,
		borderWidth: 2,
		borderColor: "crimson",
		borderRadius: 30,
		padding: spacing.xl,
		margin: spacing.md,
		fontWeight: "bold",
		fontSize: font.xl,
		textAlign: "center",
	},
});
