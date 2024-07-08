import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'New',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="newspaper-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="trending"
        options={{
          title: 'Trending',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="level-up" color={color} />,
        }}
      />
    </Tabs>
  );
}
