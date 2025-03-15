import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { CircularProgress } from '@/components/CircularProgressBar';

export default function HomeScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-gray-100"
    >
      <LinearGradient
        colors={['#4CAF50', '#2E7D32']}
        style={{
          paddingTop: 50,
          paddingBottom: 25,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <View className="items-center px-5">
          <View className="flex flex-row items-center w-full mb-5 justify-between">
            <Text className="text-lg font-semibold text-white opacity-90">
              Daily Progress
            </Text>
            <TouchableOpacity className="relative p-2 bg-white/15 rounded-md ml-2">
              <Ionicons name="notifications-outline" size={24} color="white" />
              {
                <View className="absolute top-[-4px] right-[-4px] bg-red-500 min-w-[20px] h-[20px] rounded-full flex items-center justify-center px-1">
                  <Text className="text-white text-xs font-bold">1</Text>
                </View>
              }
            </TouchableOpacity>
          </View>
          {/* Circular Progress Bar */}
          <CircularProgress
            progress={50}
            totalDosage={10}
            completedDosage={5}
          />
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
