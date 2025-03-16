import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import PageHeader from '@/components/ui/PageHeader';

export default function AddMedicationScreen() {
  return (
    <>
      <PageHeader title="Add Medication" />
      <View className="flex-1 bg-gray-100">
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Basic Info */}
          <View className="mb-6">
            <Text className="text-2xl font-bold text-gray-900 mb-4 mt-2">
              Name
            </Text>
          </View>
          <View className="mb-6">
            <Text className="text-2xl font-bold text-gray-900 mb-4 mt-2">
              Dosage
            </Text>
          </View>

          {/* Date */}
          <View className="mb-6">
            <Text className="text-2xl font-bold text-gray-900 mb-4 mt-2">
              When will you take this?
            </Text>
          </View>

          {/* Time */}
          <View className="mb-6">
            <Text className="text-2xl font-bold text-gray-900 mb-4 mt-2">
              At what time?
            </Text>
          </View>

          {/* Duration */}
          <View className="mb-6">
            <Text className="text-2xl font-bold text-gray-900 mb-4 mt-2">
              Duration
            </Text>
          </View>

          {/* Reminder toggle */}
          <View className="mb-6">
            <Text>Reminder toggle</Text>
          </View>

          {/* Refill Toggle */}
          <View className="mb-6">
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
