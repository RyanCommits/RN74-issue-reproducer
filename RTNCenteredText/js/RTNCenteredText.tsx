import React from 'react';
import {ViewProps} from 'react-native/types';
import RTNCenteredText, {Commands} from './RTNCenteredTextNativeComponent';

type Props = ViewProps & {
  text: string;
};

export default function TextComponent(props: Props) {
  return (
    <RTNCenteredText
      {...props}
      ref={element => {
        if (element) {
          Commands.trigger(element); // <-- trigger will not be called natively if batchRenderingUpdatesInEventLoop is turned ON
        }
      }}
    />
  );
}
