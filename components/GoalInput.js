import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

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
				<TextInput
					value={textFromInput}
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add goal" onPress={addGoalHandler} />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={onCloseModal} />
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
		marginBottom: 24,
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "90%",
		marginBottom: 20,
		padding: 8,
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
