import { Button } from "./button";

export abstract class Link extends Button {
  public abstract getUrl(): string;
}
