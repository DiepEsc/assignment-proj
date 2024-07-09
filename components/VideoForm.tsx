import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { GestureHandlerRootView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import Checkbox from 'expo-checkbox';

type VideoFormProps = {
  title?: string,
  video?: VideoModel,
  list?: 'new' | 'trending'
  onSubmit?: (video: VideoModel, list: 'new' | 'trending') => void | Promise<void>
  submitButtonText?: string
}

export default function VideoForm(props: VideoFormProps) {
  const { video, list, onSubmit, submitButtonText } = props;

  const [title, setTitle] = useState(video?.title);
  const [url, setUrl] = useState(video?.url);
  const [listName, setListName] = useState(list as 'new' | 'trending');
  const [validationError, setValidationError] = useState('');

  function validateForm() {
    if (!title || !url) {
      setValidationError('Title and url are required');
      return false;
    } else {
      setValidationError('');
    }
  }

  const handleFormSubmit = () => {
    if (onSubmit) {
      if (!title || !url) return;
      onSubmit({ id: video?.id, title, url }, listName);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title ?? "Video Information"}</Text>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} defaultValue={video?.title} onChangeText={setTitle} />

      <Text style={styles.label}>Link</Text>
      <TextInput style={styles.input} defaultValue={video?.url} onChangeText={setUrl} />

      {video && (
        <View>
          <Text style={styles.label}>List</Text>
          <SelectList list={listName} onValueChange={setListName} />
        </View>
      )}

      <Button title={submitButtonText || 'Submit'} onPress={handleFormSubmit} />
    </View>
  )
}

const SelectList = ({ list, onValueChange }: { list: 'new' | 'trending', onValueChange: (value: 'new' | 'trending') => void }) => {

  return (
    <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <View style={styles.selection}>
        <Checkbox
          value={"new" == list}
          onValueChange={isChecked => {
            if (isChecked) onValueChange('new');
          }}
        />
        <Text style={styles.selectionLabel}>New</Text>
      </View>

      <View style={styles.selection}>
        <Checkbox
          value={"trending" == list}
          onValueChange={isChecked => {
            if (isChecked) onValueChange('trending');
          }}
        />
        <Text style={styles.selectionLabel}>Trending</Text>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  selection: {
    padding: 4,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  selectionLabel: {
    paddingStart: 8,
  }

});