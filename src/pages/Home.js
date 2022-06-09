import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');

  const [mySkills, setMySkills] = useState(['queijo']);

  const addSkillHandle = () => {
    const skill = newSkill;

    setMySkills([...mySkills, skill]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={addSkillHandle}>
        <Text style={styles.buttonText}>Add new</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginTop: 50}]}>My skills</Text>
      {mySkills.map(skill => {
        return (
          <Text key={skill} style={[styles.title, {marginTop: 50}]}>
            {skill}
          </Text>
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fintWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 8,
    width: '100%',
  },
  button: {
    backgroundColor: '#A370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
