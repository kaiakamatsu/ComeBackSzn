import React, {useRef, useEffect} from 'react';
import { Animated} from 'react-native';

export const FadeInView = (props) => {
    const fade = useRef(new Animated.Value(0)).current
  
    useEffect(() => {
      Animated.timing(
        fade, {toValue: 1, duration: 1000, useNativeDriver: true}
      ).start();
    }, [fade])
  
    return (
      <Animated.View
        style={{
          ...props.style,
          opacity: fade,
        }}
      > 
        {props.children} 
      </Animated.View>
    );
  }