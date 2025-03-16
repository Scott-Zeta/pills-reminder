import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PageHeader from '@/components/ui/PageHeader';

export default function AddMedicationScreen() {
  return (
    <>
      <PageHeader title="Add Medication" />
      <View className="flex-1 bg-gray-100">
        <ScrollView showsVerticalScrollIndicator={false} className="p-5">
          {/* Basic Info */}
          <View className="mb-1">
            <Text className="text-xl font-bold text-gray-900 my-2">Name</Text>
            <View className="bg-white rounded-xl mb-3 border border-gray-300 shadow-sm">
              <TextInput
                className="text-xl text-gray-800 mx-4 my-1 h-10"
                placeholder="Medication Name"
                placeholderTextColor="#999"
                value=""
                onChangeText={() => {}}
              />
            </View>
          </View>

          <View className="mb-1">
            <Text className="text-2xl font-bold text-gray-900 my-2">
              Dosage
            </Text>
            <View className="bg-white rounded-xl mb-3 border border-gray-300 shadow-sm">
              <TextInput
                className="text-xl text-gray-800 mx-4 my-1 h-10"
                placeholder="Medication Name"
                placeholderTextColor="#999"
                value=""
                onChangeText={() => {}}
              />
            </View>
          </View>

          {/* Date */}
          <View className="mb-1">
            <Text className="text-2xl font-bold text-gray-900 my-2">
              When will you take this?
            </Text>
          </View>

          {/* Time */}
          <View className="mb-1">
            <Text className="text-2xl font-bold text-gray-900 my-2">
              At what time?
            </Text>
          </View>

          {/* Duration */}
          <View className="mb-1">
            <Text className="text-2xl font-bold text-gray-900 my-2">
              Duration
            </Text>
          </View>

          {/* Reminder toggle */}
          <View className="mb-1">
            <Text>Reminder toggle</Text>
          </View>

          {/* Refill Toggle */}
          <View className="mb-1">
            <Text>Refill Toggle</Text>
          </View>
        </ScrollView>
        {/* Button */}
        <View>
          <TouchableOpacity>
            <Text>Add Medication</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
