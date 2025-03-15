import { View, Text, ScrollView } from 'react-native';
import PageHeader from '@/components/ui/PageHeader';

export default function RefillScreen() {
  return (
    <>
      <PageHeader title="Refill" />
      <View className="flex-1 bg-gray-100">
        <ScrollView>
          <Text>RefillScreen</Text>
        </ScrollView>
      </View>
    </>
  );
}
