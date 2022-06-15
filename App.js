import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Button,
	ScrollView,
	FlatList,
} from "react-native";
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
			{ text: textFromInput, id: Math.random().toString() },
		]);
	};
	const deleteGoalsHandler = () => {
		setCourseGoals([]);
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
				<Button title="Reset" onPress={deleteGoalsHandler} />
			</View>
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return (
							<View style={styles.goalItem}>
								<Text style={styles.goalText}>
									{itemData.item.text}
								</Text>
							</View>
						);
					}}
					keyExtractor={(item) => item.id}
					alwaysBounceVertical={false}
				/>
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
		width: "50%",
		marginRight: 8,
		padding: 8,
	},
	goalsContainer: { flex: 4 },
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 5,
		backgroundColor: "blue",
	},
	goalText: {
		color: "white",
	},
});
export default App;
