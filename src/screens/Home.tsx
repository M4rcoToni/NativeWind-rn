import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import { Button } from '../components/Button';
import { Button2 } from '../components/Button2';
import { ToggleTheme } from '../components/ToggleTheme';

export function Home() {
  return (
    <View className='flex-1 items-center justify-center dark:bg-black light:bg-white p-8'>
      <ToggleTheme />
      <Feather
        name='home'
        size={34}
        color={colors.green[500]}
      />
      <Text className='dark:text-gray-200 light:text-white text-2xl font-bold my-4'>
        NativeWind
      </Text>

      <TextInput
        className='w-full h-14 border-2 dark:border-white light:bg-black rounded-md text-white  px-4 focus:border-green-500'
      />

      <Button className='w-full mt-8 bg-violet-600' />
      <Button2 className='w-24 mt-3' />
    </View>
  );
}

