import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function AuthScreen() {
  const [hasBiometrics, setBiometrics] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <LinearGradient colors={['#4CAF50', '#2E7D32']} style={{ flex: 1 }}>
      <View className="flex-1 p-5 items-center justify-center">
        <View className="w-30 h-30 bg-white/20 rounded-full justify-center items-center mb-5">
          <Ionicons name="medical" size={100} color="white" />
        </View>

        <Text className="text-4xl font-bold text-white mb-2 shadow-lg shadow-black/20">
          Pill Reminder
        </Text>
        <Text className="text-lg text-white/90 mb-10 text-center">
          Your Personal Medication Assistant
        </Text>

        <View className="bg-white rounded-2xl p-8 w-full items-center shadow-lg">
          <Text className="text-2xl font-bold text-gray-800 mb-2">
            Welcome Back!
          </Text>
          <Text className="text-base text-gray-600 text-center mb-7">
            {hasBiometrics
              ? 'Use Face ID/Touch ID or PIN to access your medications'
              : 'Enter your PIN to access your medications'}
          </Text>

          <TouchableOpacity
            className={`bg-green-600 py-4 px-7 rounded-xl w-full flex-row items-center justify-center ${
              isAuthenticating ? 'opacity-70' : ''
            }`}
          >
            <Ionicons
              name={hasBiometrics ? 'finger-print-outline' : 'keypad-outline'}
              size={24}
              color="white"
              className="mr-2"
            />
            <Text className="text-white text-base font-semibold">
              {isAuthenticating
                ? 'Verifying...'
                : hasBiometrics
                ? 'Authenticate'
                : 'Enter PIN'}
            </Text>
          </TouchableOpacity>

          {error && (
            <View className="flex-row items-center mt-5 p-2.5 bg-red-100 rounded-lg">
              <Ionicons name="alert-circle" size={20} color="#f44336" />
              <Text className="text-red-600 ml-2 text-sm">{error}</Text>
            </View>
          )}
        </View>
      </View>
    </LinearGradient>
  );
}
