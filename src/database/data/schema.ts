import { LSKeys, LocalStorage } from '@types';

import { defaultSettings } from './settings';
import { defaultContacts } from './contacts';

export const SCHEMA_BASE: LocalStorage = {
  version: 'v1.0.0',
  mtime: new Date('01/01/2020').valueOf(),
  [LSKeys.ACCOUNTS]: {},
  [LSKeys.ADDRESS_BOOK]: defaultContacts,
  [LSKeys.ASSETS]: {},
  [LSKeys.CONTRACTS]: {},
  [LSKeys.NETWORKS]: {} as LocalStorage[LSKeys.NETWORKS],
  [LSKeys.NOTIFICATIONS]: {},
  [LSKeys.SETTINGS]: defaultSettings,
  [LSKeys.PASSWORD]: '',
  [LSKeys.NETWORK_NODES]: {} as LocalStorage[LSKeys.NETWORK_NODES]
};
