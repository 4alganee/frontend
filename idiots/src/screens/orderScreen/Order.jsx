import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  globalstyles,
  height,
  scale,
  width,
} from '../../../configs/globalStyles';

export const Order = props => {
  const [sidebarWidth, setSidebarWidth] = useState(0); // 10초 [ms
  const timeString = props.route.params.estimatedTime; // Example time string
  const timeParts = timeString.split(' '); // Split the time string by space
  const [totalTime, setTotalTime] = useState(0);
  const [remainTime, setRemainTime] = useState(0);
  const [validate, setValidate] = useState(false);
  let totalSeconds = 0;

  for (const part of timeParts) {
    if (part.includes('m')) {
      totalSeconds += parseInt(part) * 60; // Convert minutes to seconds
    } else if (part.includes('s')) {
      totalSeconds += parseInt(part); // Add seconds
    }
  }
  const updateValidate = () => {
    setValidate(true);
  };
  const updateRemain = () => {
    setRemainTime(remainTime - 1);
  };
  useEffect(() => {
    setTotalTime(totalSeconds * 1000); // Convert to ms
    setRemainTime(totalSeconds);
    let startTime = Date.now();
    let timer;

    const updateSidebar = () => {
      const currentTime = Date.now() - startTime;
      const width = (currentTime / totalTime) * 100;
      setSidebarWidth(width);
      if (width > 100) {
        updateValidate();
      }
      if (currentTime < totalTime) {
        timer = setTimeout(updateSidebar, 100); // 100ms마다 업데이트
      }
    };
    updateSidebar();

    return () => {
      clearTimeout(timer);
    };
  }, [totalTime]);
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainTime(prevCount => prevCount - 1);
    }, 1000);

    // 타이머 정리
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={globalstyles.h2_2}>Order</Text>
      </View>
      <View style={styles.content}>
        {validate ? (
          <View>
            <Text style={globalstyles.h1}>Your food is ready ✅</Text>
            <Text style={globalstyles.p1}>
              Please take your food{'\n'}from the Covot.
            </Text>
          </View>
        ) : (
          <Text style={globalstyles.h1}>
            Cobot is cooking👨‍🍳{'\n'}your food.
          </Text>
        )}
        <View style={styles.remainTime}>
          {!validate ? (
            <>
              <Text style={[globalstyles.h1, {color: 'white'}]}>
                {remainTime}s
              </Text>
              <Text style={[globalstyles.h2, {color: 'white'}]}>remaining</Text>
            </>
          ) : (
            <Text style={[globalstyles.h1, {color: 'white'}]}>Done🎉</Text>
          )}
        </View>
      </View>
      <View style={styles.timeBarWrapper}>
        <View style={styles.sidebarContainer}>
          <View style={[styles.sidebar, {width: `${sidebarWidth}%`}]} />
          <View style={styles.PngWrapper}>
            <Image
              source={require('../../../configs/assets/Cobot.png')}
              style={styles.cobotStyle}
            />
            <View
              style={{
                width: 8 * width,
                height: '100%',
                backgroundColor: 'red',
                borderRadius: 200,
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.process}>
        <Text style={[globalstyles.p1]}>Boiling Water</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[globalstyles.p1, {marginRight: 35 * width}]}>
            Adding Some Juice
          </Text>
          <Text style={globalstyles.p1}>Done ✅</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16 * scale,
  },
  header: {
    height: 60 * height,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6 * height,
  },
  content: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentText: {
    width: 214 * width,
  },
  remainTime: {
    backgroundColor: '#FF4949',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10 * scale,
    borderRadius: 14 * scale,
    width: 96 * width,
    height: 80 * height,
  },
  timeBarWrapper: {
    width: '100%',
    paddingTop: 62 * height,
  },
  sidebarContainer: {
    flexDirection: 'row',
    height: 10 * height,
    marginTop: 10 * height,
    marginBottom: 4 * height,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    overflow: 'visible',
  },
  sidebar: {
    height: '100%',
    backgroundColor: '#FF8D8D',
  },
  process: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cobotStyle: {
    width: 20 * width,
    height: 32 * height,
    resizeMode: 'contain',
  },
  PngWrapper: {
    position: 'Relative',
    top: -32 * height,
  },
});
