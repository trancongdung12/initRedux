import AsyncStorage from '@react-native-async-storage/async-storage';

const persist = {
  key: 'root',
  storage: AsyncStorage,
  timeout: null,
  version: 1,
  whitelist: [],
  blacklist: [],
};

export default persist;
