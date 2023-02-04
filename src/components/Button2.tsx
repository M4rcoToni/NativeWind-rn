import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StyledComponent } from 'nativewind';

export function Button2({ ...rest }) {
  return (
    <StyledComponent component={TouchableOpacity} {...rest}>
      <TouchableOpacity className='h-14 bg-green-500 rounded-md items-center justify-center'>
        <Text className='text-white font-bold text-base'>
          Entrar
        </Text>
      </TouchableOpacity>
    </StyledComponent>

  );
}

