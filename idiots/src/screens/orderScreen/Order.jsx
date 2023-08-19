import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { height, scale, width } from '../../../configs/globalStyles';

export const Order = () => {
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [totalTime, setTotalTime] = useState(1000); // 10초 [ms
  const [circlePosition, setCirclePosition] = useState(0);

  useEffect(() => {
    let startTime = Date.now();
    let timer;

    const updateSidebar = () => {
      const currentTime = Date.now() - startTime;
      const width = (currentTime / totalTime) * 100;
      setSidebarWidth(width);

      const position = (width * 0.01) * (window.innerWidth - 10); // 바의 너비에 따라 원의 위치 계산
      setCirclePosition(position);

      if (currentTime < totalTime) {
        timer = setTimeout(updateSidebar, 100); // 100ms마다 업데이트
      }
    };

    updateSidebar();

    return () => {
      clearTimeout(timer);
    };
  }, [totalTime]);

  return (
    <View style={styles.container}>
      <View style={styles.sidebarContainer}>
        <View style={[styles.sidebar, { width: `${sidebarWidth}%` }]} />
        <View style={styles.endCircle}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10 * height,
    margin: 10 * scale,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    overflow: 'hidden',
  },
  sidebarContainer: {
    position: 'relative',
    flex: 1,
  },
  sidebar: {
    height: '100%',
    backgroundColor: '#FF8D8D',
  },
  endCircle: {
    top: -5,
    right: 1,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    
  },
});
