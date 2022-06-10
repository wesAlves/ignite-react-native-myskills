import React, {ReactNode} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface SkillPorps {
  id?: string;
  skill: string;
  children?: ReactNode;
}

export const SkillCard = ({skill, children}: SkillPorps) => {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  textSkill: {color: '#fff', fontSize: 22, fontWeight: 'bold'},
});
