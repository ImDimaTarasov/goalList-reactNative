import {
	StyleSheet,
	TextInput,
	View,
	Button,
	Modal,
	Image,
} from "react-native";

import { useState } from "react";

const GoalInput = ({ onAddGoal, visible, onCloseModal }) => {
	const [textFromInput, setTextFromInput] = useState("");

	const goalInputHandler = (enteredText) => {
		setTextFromInput(enteredText);
	};

	const addGoalHandler = () => {
		onAddGoal(textFromInput);
		setTextFromInput("");
	};
	return (
		<Modal visible={visible} animationType="fade">
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/goal.png")}
				/>
				<TextInput
					value={textFromInput}
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="Cancel"
							onPress={onCloseModal}
							color={"#f31282"}
						/>
					</View>
					<View style={styles.button}>
						<Button
							title="Add goal"
							onPress={addGoalHandler}
							color={"#5e0acc"}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#311b6b",
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		color: "#120438",
		borderRadius: 6,
		width: "90%",
		marginBottom: 20,
		padding: 16,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "80%",
	},
	button: {
		width: 100,
	},
});

export default GoalInput;
