import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function AuthScreen() {
  const [hasBiometrics, setBiometrics] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <LinearGradient colors={['#4CAF50', '#2E7D32']}>
      <View>
        <View>
          <Ionicons name="medical" size={100} color="white" />
        </View>

        <Text>Pill Reminder</Text>
        <Text>Your Personal Medication Assistant</Text>

        <View>
          <Text>Welcome Back!</Text>
          <Text>
            {hasBiometrics
              ? 'Use Face ID/Touch ID or PIN to access your medications'
              : 'Enter your PIN to access your medications'}
          </Text>

          <TouchableOpacity>
            <Ionicons
              name={hasBiometrics ? 'finger-print-outline' : 'keypad-outline'}
              size={24}
              color="white"
            />
            <Text>
              {isAuthenticating
                ? 'Verifying...'
                : hasBiometrics
                ? 'Authenticate'
                : 'Enter PIN'}
            </Text>
          </TouchableOpacity>

          {error && (
            <View>
              <Ionicons name="alert-circle" size={20} color="#f44336" />
              <Text>{error}</Text>
            </View>
          )}
        </View>
      </View>
    </LinearGradient>
  );
}
