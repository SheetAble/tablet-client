import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Text, View, StyleSheet } from 'react-native';
import DetailedPreview from '../components/home/DetailedPreview';
import HomeFeedOverview from '../components/home/HomeFeedOverview';
import { colors } from '../constants/GlobalStyleSheet';
import { RootStackParamList } from './RootStackParams';


type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <View style={styles.mainWrapper}>
      <HomeFeedOverview />
      <DetailedPreview />
    </View>
  )
}


const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.WHITESMOKE
  }

})