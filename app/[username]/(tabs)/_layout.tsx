import Avatar from '@/components/Avatar';
import { useAppDispatch } from '@/hooks/redux';
import { actions } from '@/redux/slices/videoSlice';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function TabLayout() {
  const { username } = useLocalSearchParams();
  const usernameString = username as string;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actions.loadVideoLists({ username: usernameString }));
  },[]);
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue'}}>
      <Tabs.Screen
        name="new"
        options={{
          title: 'New',
          headerTitle: 'New Video List: ' + usernameString,
          headerLeft: () => <Avatar url={`https://ui-avatars.com/api/?name=${usernameString}` } />,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="newspaper-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="trending"
        options={{
          title: 'Trending',
          headerTitle: 'Trending Video List: ' + usernameString,
          headerLeft: () => <Avatar url={`https://ui-avatars.com/api/?name=${usernameString}` } />,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="level-up" color={color} />,
        }}
      />
    </Tabs>
  );
}
