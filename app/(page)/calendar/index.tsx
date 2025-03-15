import { View, Text, ScrollView } from 'react-native';
import PageHeader from '@/components/ui/PageHeader';

export default function CalendarScreen() {
  return (
    <>
      <PageHeader title="Calendar" />
      <View className="flex-1 bg-gray-100">
        <ScrollView>
          <Text>CalendarScreen</Text>
        </ScrollView>
      </View>
    </>
  );
}
