import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';

const { width } = Dimensions.get('window');

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface CircularProgressProps {
  progress: number;
  totalDosage: number;
  completedDosage: number;
}

function CircularProgress({
  progress,
  totalDosage,
  completedDosage,
}: CircularProgressProps) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const size = width * 0.55;
  const strokeWidth = 15;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [progress]);

  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

  return (
    <View className="flex items-center justify-center my-2">
      <View className="absolute flex items-center justify-center z-10">
        <Text className="text-4xl font-bold text-white">
          {Math.round(progress)}%
        </Text>
        <Text className="text-sm text-white/80 mt-1">
          {completedDosage} of {totalDosage} completed
        </Text>
      </View>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="white"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
    </View>
  );
}

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
