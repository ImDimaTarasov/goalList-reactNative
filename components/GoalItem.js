import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ text, id, onDeleteItem }) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: "#7d6868" }}
				style={({ pressed }) => pressed && styles.pressedItem}
				onPress={() => onDeleteItem(id)}
			>
				<Text style={styles.goalText}>{text}</Text>
			</Pressable>
		</View>
	);
};

export default GoalItem;
const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 5,
		backgroundColor: "blue",
	},
	goalText: {
		color: "white",
		padding: 8,
	},
	pressedItem: {
		opacity: 0.5,
	},
});
