import React, {useState, useEffect} from 'react';
import {TouchableHighlight, Text, View, ScrollView, Image} from 'react-native';
import translate from './getLocalizedText';
import appStyles from './AppStyles';
import SelectionButton from './SelectionButton';
import BetterMenu from './BetterMenu';
import BirthControlImg from '../../assets/BirthControl.png';

function BirthControlOral() {
  return [
    {
      do: 'BirthControlInfo1',
    },
    {
      do: 'BirthControlInfo2',
    },
    {
      do: 'BirthControlInfo2a',
    },
    {
      do: 'BirthControlInfo2b',
    },
    {
      do: 'BirthControlInfo2c',
    },
  ];
}

function BirthControlIUDInfo() {
  return [
    {
      do: 'BirthControlInfo3',
    },
    {
      do: 'BirthControlInfo4',
    },
    {
      do: 'BirthControlInfo5',
    },
  ];
}
function BirthControlSteralizationInfo() {
  return [
    {
      do: 'BirthControlInfo6',
    },
    {
      do: 'BirthControlInfo7',
    },
    {
      do: 'BirthControlInfo8',
    },
  ];
}

export function BirthControlPill() {
  return (
    <View style={appStyles.contentContainer}>
      <ScrollView>
        {BirthControlOral().map((bcp, key) => (
          <BetterMenu
            style={appStyles.BirthControlInfo}
            key={key}
            text={translate(bcp.do)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export function BirthControlIUD() {
  return (
    <View style={appStyles.contentContainer}>
      <ScrollView>
        {BirthControlIUDInfo().map((iud, key) => (
          <BetterMenu
            style={appStyles.BirthControlInfo}
            key={key}
            text={translate(iud.do)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export function BirthControlSteralize() {
  return (
    <View style={appStyles.contentContainer}>
      <ScrollView>
        {BirthControlSteralizationInfo().map((bcs, key) => (
          <BetterMenu
            style={appStyles.BirthControlInfo}
            key={key}
            text={translate(bcs.do)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export function BirthControlMainScreen(props) {
  return (
    <ScrollView contentContainerStyle={appStyles.contentContainer}>
      <Image
        style={{justifyContent: 'center', width: 300, height: 140}}
        source={BirthControlImg}
      />
      <Text
        style={{
          fontSize: appStyles.regularFontSize - 5,
          justifyContent: 'center',
          paddingHorizontal: 20,
          paddingBottom: 5,
          paddingTop: 5,
        }}
      >
        {translate('WhatIsBirthControl')}
      </Text>

      <SelectionButton
        style={appStyles.BirthControlSelectionButton}
        text={translate('BirthControlPill')}
        onPress={() => {
          props.navigation.navigate('BirthControlPill');
        }}
      />
      <SelectionButton
        style={appStyles.BirthControlSelectionButton}
        text={translate('BirthControlIUD')}
        onPress={() => {
          props.navigation.navigate('BirthControlIUD');
        }}
      />
      <SelectionButton
        style={appStyles.BirthControlSelectionButton}
        text={translate('BirthControlSteralize')}
        onPress={() => {
          props.navigation.navigate('BirthControlSteralize');
        }}
      />
    </ScrollView>
  );
}
