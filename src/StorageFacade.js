import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageFacade {
  _enableFlag = false;
  _listeners = [];

  constructor(flag) {
    AsyncStorage.getItem(flag).then((value) => {
      this._enableFlag = value;
    });
  }

  addListener(listener) {
    this._listeners.push(listener);
  }

  readFlag = () => this._enableFlag;

  saveFlag(value) {
    AsyncStorage.setItem(_enableFlag, value).then(() => {
      this._enableFlag = value;
      this._listeners.forEach((listener) => listener(value));
    });
  }
}

export default new StorageFacade();
