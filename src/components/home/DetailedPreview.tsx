import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../constants/GlobalStyleSheet'

export default function DetailedPreview() {
  return (
	<View style={styles.mainWrapper}>
	  <Text>DetailedPreview</Text>
	</View>
  )
}

const styles = StyleSheet.create({
	mainWrapper: {
		flex: 0.8,
		borderLeftWidth: 0.75,
		borderColor: colors.GRAY10
	}
})