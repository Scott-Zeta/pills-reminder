import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PageHeader from '@/components/ui/PageHeader';
import { Ionicons } from '@expo/vector-icons';

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
              Which day will you take this?
            </Text>
            <View className="flex flex-row justify-around">
              <TouchableOpacity className="w-5/12 bg-white rounded-xl p-4 m-1 flex items-center border border-gray-300 shadow-sm">
                <View className="w-12 h-12 rounded-full bg-gray-200 flex justify-center items-center mb-2">
                  <Ionicons name="sync-outline" size={24} color="#666" />
                </View>
                <Text className="text-lg font-semibold text-gray-800 text-center">
                  Everyday
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-5/12 bg-white rounded-xl p-4 m-1 flex items-center border border-gray-300 shadow-sm">
                <View className="w-12 h-12 rounded-full bg-gray-200 flex justify-center items-center mb-2">
                  <Ionicons name="calendar" size={24} color="#666" />
                </View>
                <Text className="text-sm font-semibold text-gray-800 text-center">
                  Specific Days of the Week
                </Text>
              </TouchableOpacity>
            </View>
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
