import { StyleSheet, TextInput, View, Button, FlatList } from "react-native";

import { useState } from "react";

const GoalInput = ({ onAddGoal, onDeleteGoals }) => {
	const [textFromInput, setTextFromInput] = useState("");

	const goalInputHandler = (enteredText) => {
		setTextFromInput(enteredText);
	};

	const addGoalHandler = () => {
		onAddGoal(textFromInput);
		setTextFromInput("");
	};
	return (
		<View style={styles.inputContainer}>
			<TextInput
				value={textFromInput}
				style={styles.textInput}
				placeholder="Your course goal!"
				onChangeText={goalInputHandler}
			/>
			<Button title="Add goal" onPress={addGoalHandler} />
			<Button title="Reset" onPress={onDeleteGoals} />
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "50%",
		marginRight: 8,
		padding: 8,
	},
});

export default GoalInput;
