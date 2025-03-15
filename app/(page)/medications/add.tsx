import { View, Text, ScrollView } from 'react-native';
import PageHeader from '@/components/ui/PageHeader';

export default function AddMedicationScreen() {
  return (
    <>
      <PageHeader title="Add Medication" />
      <View className="flex-1 bg-gray-100">
        <ScrollView>
          <Text>AddMedicationScreen</Text>
        </ScrollView>
      </View>
    </>
  );
}
