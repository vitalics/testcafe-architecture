import { Component } from "components/Component";
import { SubmitAPI } from 'components/mixins/submit';
import { Model } from 'models/model';

export abstract class Form<T extends Model<T>> extends Component implements SubmitAPI {
  public constructor(protected readonly selector: string = 'form') {
    super(selector);
  }
  public abstract submit(): Promise<void>;
  public abstract fill(model: T): void;
}
