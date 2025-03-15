import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

export default function PageLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-gray-100" edges={['bottom']}>
        <View className="flex-1 bg-gray-100">
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: 'white' },
              animation: 'slide_from_right',
            }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
