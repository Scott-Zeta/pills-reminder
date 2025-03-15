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
      {/* Header */}
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
      <View className="flex-1 pt-5">
        <View className="px-5 mb-6">
          <Text className="text-xl font-bold text-gray-900 mb-1">
            Quick Actions
          </Text>
          <View className="flex flex-row flex-wrap gap-3 mt-4 justify-around">
            {QUICK_ACTIONS.map((action) => (
              <Link href={action.route} key={action.label} asChild>
                <TouchableOpacity className="w-[48%] h-[100px] rounded-xl overflow-hidden">
                  <LinearGradient
                    colors={action.gradient}
                    style={{
                      flex: 1,
                      padding: 15,
                    }}
                  >
                    <View className="flex-1 justify-between">
                      <View className="w-10 h-10 rounded-md bg-white/20 flex items-center justify-center">
                        <Ionicons name={action.icon} size={28} color="white" />
                      </View>
                      <Text className="text-sm font-semibold text-white mt-2">
                        {action.label}
                      </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        </View>
      </View>

      {/* Schedule */}
      <View>
        <View>
          <Text>Today's Schedule</Text>
          <Link href="/calendar" asChild>
            <TouchableOpacity>
              <Text>See All</Text>
            </TouchableOpacity>
          </Link>
        </View>
        {false ? (
          <View>
            <Ionicons name="medical-outline" size={48} color="#ccc" />
            <Text>No medications scheduled for today</Text>
            <Link href="/medications/add" asChild>
              <TouchableOpacity>
                <Text>Add Medication</Text>
              </TouchableOpacity>
            </Link>
          </View>
        ) : (
          <View>
            <View>
              <Ionicons name="medical" size={24} />
            </View>
            <View>
              <Text>Medication Name</Text>
              <Text>Medication Dosage</Text>
            </View>
            <View>
              <Ionicons name="time-outline" size={16} color="#666" />
              <Text>Medication time</Text>
            </View>

            {false ? (
              <View>
                <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
                <Text>Taken</Text>
              </View>
            ) : (
              <TouchableOpacity onPress={() => console.log('Take')}>
                <Text>Take</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
}
