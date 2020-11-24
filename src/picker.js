import DocumentPicker from 'react-native-document-picker';
import * as RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function storeJsonData(value, key) {
  try {
    await AsyncStorage.setItem('@selectedTimetable', value);
  } catch (e) {
    console.log('Local storage error' + e);
  }
}

async function openJsonFile() {
  // Open Dockument Picker Dialog
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    // Read file from url
    RNFS.readFile(res.uri)
      .then((result) => {
        // Store data in local storage if everything ok
        const jsonValue = JSON.stringify(result);
        storeJsonData(jsonValue, String(JSON.parse(result).id));
        console.log('stored!');
      })
      .catch((err) => {
        console.log(err.message, err.code);
      });
  } catch (err) {
    //Handling any exception (If any)
    if (DocumentPicker.isCancel(err)) {
      //If user canceled the document selection
      alert('Действие было отменено');
    } else {
      //For Unknown Error
      alert('Ошибка: ' + JSON.stringify(err));
      throw err;
    }
  }
}

export default openJsonFile;
