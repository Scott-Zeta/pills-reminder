import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function PageHeader({ title }: { title: string }) {
  const router = useRouter();
  return (
    <>
      <LinearGradient
        colors={['#1a8e2d', '#146922']}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 120 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
      <View className="flex flex-row items-center px-5 pb-5 z-10 pt-16">
        <TouchableOpacity
          className="w-10 h-10 rounded-full bg-white flex justify-center items-center shadow-md"
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={28} color="#1a8e2d" />
        </TouchableOpacity>
        <Text className="text-[28px] font-bold text-white ml-4">{title}</Text>
      </View>
    </>
  );
}
