import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { CircularProgress } from '@/components/CircularProgressBar';
import { Link } from 'expo-router';

const QUICK_ACTIONS = [
  {
    icon: 'add-circle-outline' as const,
    label: 'Add\nMedication',
    route: '/medications/add' as const,
    color: '#2E7D32',
    gradient: ['#4CAF50', '#2E7D32'] as [string, string],
  },
  {
    icon: 'calendar-outline' as const,
    label: 'Calendar\nView',
    route: '/calendar' as const,
    color: '#1976D2',
    gradient: ['#2196F3', '#1976D2'] as [string, string],
  },
  {
    icon: 'time-outline' as const,
    label: 'History\nLog',
    route: '/history' as const,
    color: '#C2185B',
    gradient: ['#E91E63', '#C2185B'] as [string, string],
  },
  {
    icon: 'medical-outline' as const,
    label: 'Refill\nTracker',
    route: '/refills' as const,
    color: '#E64A19',
    gradient: ['#FF5722', '#E64A19'] as [string, string],
  },
];

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
      {/* Actions */}

      <View>
        <View>
          <Text>Quick Actions</Text>
          <View>
            {QUICK_ACTIONS.map((action) => (
              <Link href={action.route} key={action.label} asChild>
                <TouchableOpacity>
                  <LinearGradient colors={action.gradient}>
                    <View>
                      <View>
                        <Ionicons name={action.icon} size={28} color="white" />
                      </View>
                      <Text>{action.label}</Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
