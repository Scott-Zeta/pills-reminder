import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <LinearGradient colors={['#4CAF50', '#2E7D32']} style={{ flex: 1 }}>
        <View>
          <View>
            <View>
              <Text>Daily Progress</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
