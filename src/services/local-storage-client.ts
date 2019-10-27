import { optional } from "inversify";

const appNamespace = "mvzaytsev";

const getNamespacedKey = (userKey: string): string => `${appNamespace}:${userKey}`;

export enum StorableKey {
	BLINDNESS = "BLINDNESS"
}

export class LocalStorageClient {
	public constructor(
    @optional() public storage: Storage = window.localStorage,
	) {}

	public getItem = (key: StorableKey): string | null => {
		let result = null;

		try {
			result = this.storage.getItem(getNamespacedKey(key));
		} catch (error) {} // eslint-disable-line no-empty

		return result;
	};

	public get length(): number {
		let result = 0;

		try {
			result = this.storage.length;
		} catch (error) {} // eslint-disable-line no-empty

		return result;
	}

	public setItem = (key: StorableKey, value: string) => {
		try {
			this.storage.setItem(getNamespacedKey(key), value);
		} catch (error) {} // eslint-disable-line no-empty
	};

	public removeItem = (key: StorableKey) => {
		try {
			this.storage.removeItem(getNamespacedKey(key));
		} catch (error) {} // eslint-disable-line no-empty
	};

	public clear = () => {
		try {
			this.storage.clear();
		} catch (error) {} // eslint-disable-line no-empty
	};
}

export const localStorageClient = new LocalStorageClient();
