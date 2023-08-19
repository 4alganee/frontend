import React from 'react';
import {Share, View, Button} from 'react-native';

const ShareExample = () => {
  const onShare = async () => {
    const result = await Share.share({
      message:
        'React Native | A framework for building native apps using React',
    });
  };
  return (
    <View style={{marginTop: 50}}>
      <Button onPress={onShare} title="Share" />
    </View>
  );
};

export default ShareExample;
