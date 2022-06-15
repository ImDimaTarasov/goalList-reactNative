import { StyleSheet, Text, TextInput, View, Button } from "react-native";

import { useState } from "react";

const App = () => {
	const [textFromInput, setTextFromInput] = useState("");
	const [courseGoals, setCourseGoals] = useState([]);

	const goalInputHandler = (enteredText) => {
		setTextFromInput(enteredText);
	};
	const addGoalHandler = () => {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			textFromInput,
		]);
	};
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
				/>
				<Button title="Add goal" onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				{courseGoals.map((goal) => (
					<Text key={goal}>{goal}</Text>
				))}
			</View>
			<View></View>
		</View>
	);
};

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
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
		width: "70%",
		marginRight: 8,
		padding: 8,
	},
	goalsContainer: { flex: 4 },
});
export default App;
