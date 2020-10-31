import { prefDefaults } from "../definitions/storeDefaults";
const Store = window.require("electron-store");

export class PreferenceStorage {
  static _store = new Store({
    name: "preferences",
    defaults: prefDefaults,
  });

  static set(key: string, value: any) {
    this._store.set(key, value.toString());
  }

  static get(key: string): string {
    return this._store.get(key) as string;
  }

  static findByKey(key: string): string {
    return this._store.get(key) as string;
  }
}
