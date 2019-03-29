import { Button } from "./button";

export abstract class Link extends Button {
  public constructor(protected readonly selector: string = 'a') {
    super(selector);
  }
  public abstract getLinkUrl(): string;
}
