import { IStory, WalletId } from '@types';
import { IS_DEV, IS_ELECTRON, hasWeb3Provider } from '@utils';
import {
  LedgerNanoSDecrypt,
  KeystoreDecrypt,
  MnemonicDecrypt,
  PrivateKeyDecrypt,
  Web3ProviderDecrypt,
  Web3ProviderInstall,
  WalletConnectDecrypt,
  TrezorDecrypt
} from '@components';

export const getStories = (): IStory[] => [
  {
    name: WalletId.METAMASK,
    steps: hasWeb3Provider() ? [Web3ProviderDecrypt] : [Web3ProviderInstall]
  },
  {
    name: WalletId.LEDGER_NANO_S,
    steps: [LedgerNanoSDecrypt]
  },
  {
    name: WalletId.TREZOR,
    steps: [TrezorDecrypt]
  },
  {
    name: WalletId.WALLETCONNECT,
    steps: [WalletConnectDecrypt]
  },
  {
    name: WalletId.PRIVATE_KEY,
    steps: [PrivateKeyDecrypt],
    isDisabled: IS_DEV ? false : !IS_ELECTRON
  },
  {
    name: WalletId.KEYSTORE_FILE,
    steps: [KeystoreDecrypt],
    isDisabled: IS_DEV ? false : !IS_ELECTRON
  },
  {
    name: WalletId.MNEMONIC_PHRASE,
    steps: [MnemonicDecrypt],
    isDisabled: IS_DEV ? false : !IS_ELECTRON
  }
];
