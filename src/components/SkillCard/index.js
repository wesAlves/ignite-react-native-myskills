import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const SkillCard = props => {
  return (
    <TouchableOpacity>
      <Text style={[styles.title, {marginTop: 50}]}>{props.skill}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {color: '#fff', fontSize: 22, fontWeight: 'bold'},
});
