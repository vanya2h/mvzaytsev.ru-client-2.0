import { observable, reaction } from 'mobx';
import { provides } from '~/utils/provides';
import { LocalStorageClient, StorableKey } from '~/services/local-storage-client';

export enum FontSizeEnum {
  Normal = 'Normal',
  Big = 'Big'
}

@provides(AccessibilityService)
export class AccessibilityService {
  @observable
  public blindness: boolean;

  @observable
  public size: FontSizeEnum;

  public static getBlindness = (localStorage: LocalStorageClient) => {
    try {
      return JSON.parse(localStorage.getItem(StorableKey.BLINDNESS) || '');
      // eslint-disable-next-line no-empty
    } catch (err) {
      return localStorage.setItem(StorableKey.BLINDNESS, JSON.stringify(false));
    }
  };

  public static getSize = (localStorage: LocalStorageClient) => {
    try {
      return JSON.parse(localStorage.getItem(StorableKey.FONT_SIZE) || '');
      // eslint-disable-next-line no-empty
    } catch (err) {
      return localStorage.setItem(
        StorableKey.FONT_SIZE,
        JSON.stringify(FontSizeEnum.Normal),
      );
    }
  };

  public constructor(private readonly localStorage: LocalStorageClient) {
    this.blindness = AccessibilityService.getBlindness(localStorage);
    this.size = AccessibilityService.getSize(localStorage);

    reaction(() => this.blindness, this.handleBlindness);
    reaction(() => this.size, this.handleFontSize);
  }

  private handleBlindness = () => {
    this.localStorage.setItem(
      StorableKey.BLINDNESS,
      JSON.stringify(this.blindness),
    );
  };

  private handleFontSize = () => {
    this.localStorage.setItem(StorableKey.FONT_SIZE, JSON.stringify(this.size));
  };
}
