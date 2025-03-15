import { View, Text, ScrollView } from 'react-native';
import PageHeader from '@/components/ui/PageHeader';

export default function HistoryScreen() {
  return (
    <>
      <PageHeader title="History" />
      <View className="flex-1 bg-gray-100">
        <ScrollView>
          <Text>HistoryScreen</Text>
        </ScrollView>
      </View>
    </>
  );
}
