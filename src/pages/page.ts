import { t } from "testcafe";
import { useEnvironment } from "hooks";

const { BASE_URL } = useEnvironment();

export abstract class Page {
  protected readonly baseUrl = BASE_URL;

  public constructor(protected readonly url: string = '/') { }

  public async open(url: string = this.baseUrl + this.url): Promise<void> {
    await t.navigateTo(url);
  }

}

export interface PageAPI {
  open(url?: string): Promise<void>;
}
