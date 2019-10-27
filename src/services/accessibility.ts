import { observable, reaction } from "mobx";
import { provides } from "~/utils/provides";
import { LocalStorageClient, StorableKey } from "~/services/local-storage-client";

@provides(AccessibilityService)
export class AccessibilityService {
	@observable
	public blindness: boolean;

	public static getBlindness = (localStorage: LocalStorageClient) => {
		try {
			return JSON.parse(localStorage.getItem(StorableKey.BLINDNESS) || "");
			// eslint-disable-next-line no-empty
		} catch (err) {
			return localStorage.setItem(StorableKey.BLINDNESS, JSON.stringify(false));
		}
	};

	public constructor(private readonly localStorage: LocalStorageClient) {
		this.blindness = AccessibilityService.getBlindness(localStorage);

		reaction(() => this.blindness, this.handleBlindness);
	}

	private handleBlindness = () => {
		this.localStorage.setItem(
			StorableKey.BLINDNESS,
			JSON.stringify(this.blindness),
		);
	};
}
