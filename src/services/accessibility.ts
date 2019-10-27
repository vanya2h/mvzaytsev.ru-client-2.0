import { observable, reaction } from "mobx";
import { provides } from "~/utils/provides";
import { LocalStorageClient, StorableKey } from "~/services/local-storage-client";

@provides(AccessibilityService)
export class AccessibilityService {
	@observable
	public dark: boolean;

	public static getdark = (localStorage: LocalStorageClient) => {
		try {
			return JSON.parse(localStorage.getItem(StorableKey.DARK) || "");
			// eslint-disable-next-line no-empty
		} catch (err) {
			return localStorage.setItem(StorableKey.DARK, JSON.stringify(false));
		}
	};

	public constructor(private readonly localStorage: LocalStorageClient) {
		this.dark = AccessibilityService.getdark(localStorage);

		reaction(() => this.dark, this.handledark);
	}

	private handledark = () => {
		this.localStorage.setItem(
			StorableKey.DARK,
			JSON.stringify(this.dark),
		);
	};
}
