import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PageHeader from '@/components/ui/PageHeader';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const dateOptions = [
  { id: 1, name: 'Everyday', icon: 'sync-outline' as const },
  { id: 2, name: 'Specific Days of the Week', icon: 'calendar' as const },
];

const days = [
  { label: 'M', value: 'Monday' },
  { label: 'Tu', value: 'Tuesday' },
  { label: 'W', value: 'Wednesday' },
  { label: 'Th', value: 'Thursday' },
  { label: 'F', value: 'Friday' },
  { label: 'Sa', value: 'Saturday' },
  { label: 'Su', value: 'Sunday' },
];

export default function AddMedicationScreen() {
  const [dateOption, setdateOption] = useState(0);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const toggleDay = (day: string) => {
    setSelectedDays((prev) => {
      if (prev.includes(day)) {
        if (prev.length === 1) return prev;
        return prev.filter((d) => d !== day);
      }
      return [...prev, day];
    });
  };

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
              {dateOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  className={`w-5/12 rounded-xl p-4 m-1 flex items-center border border-gray-300 shadow-sm ${
                    dateOption === option.id
                      ? 'bg-green-700 border-green-700'
                      : 'bg-white border-gray-300'
                  }`}
                  onPress={() => setdateOption(option.id)}
                >
                  <View
                    className={`w-12 h-12 rounded-full flex justify-center items-center mb-2 ${
                      dateOption === option.id ? 'bg-white/20' : 'bg-gray-200'
                    }`}
                  >
                    <Ionicons
                      name={option.icon}
                      size={24}
                      color={dateOption === option.id ? 'white' : '#666'}
                    />
                  </View>
                  <Text
                    className={`text-sm font-semibold text-gray-800 text-center ${
                      dateOption === option.id ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    {option.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Specific days Picker */}
            <View className="mb-1">
              <Text className="text-2xl font-bold text-gray-900 my-2">
                On These Days
              </Text>
              <View className="flex flex-row justify-center items-center bg-white p-2 m-4 rounded-xl border border-gray-300 shadow-sm">
                {days.map((day) => (
                  <TouchableOpacity
                    key={day.value}
                    onPress={() => toggleDay(day.value)}
                    className={`mx-1 w-10 h-10 rounded-full flex items-center justify-center ${
                      selectedDays.includes(day.value)
                        ? 'bg-green-700'
                        : 'bg-transparent'
                    }`}
                  >
                    <Text
                      className={`text-lg ${
                        selectedDays.includes(day.value)
                          ? 'text-white'
                          : 'text-gray-900'
                      }`}
                    >
                      {day.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
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
