import { View, Text, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SplashScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-green-500">
      <Animated.View>
        <Ionicons name="medical" size={100} color="white" />
      </Animated.View>
      <Text className="text-white text-4xl font-bold mt-5 tracking-wider">
        Pills Reminder
      </Text>
    </View>
  );
}
