import { StyleSheet, View, FlatList } from "react-native";

import { useState } from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const App = () => {
	const [courseGoals, setCourseGoals] = useState([]);

	const addGoalHandler = (enteredGoalText) => {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
	};
	const deleteGoalsHandler = (id) => {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => goal.id !== id);
		});
	};

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler} />
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => (
						<GoalItem
							text={itemData.item.text}
							onDeleteItem={deleteGoalsHandler}
							id={itemData.item.id}
						/>
					)}
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
	goalsContainer: { flex: 4 },
});
export default App;
