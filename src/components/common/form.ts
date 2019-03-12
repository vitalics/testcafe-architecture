import { Component } from "components/Component";
import { SubmitAPI } from 'components/mixins/submit';
import { Model } from 'models/model';

export abstract class Form<T extends Model<T>> extends Component implements SubmitAPI {
  public abstract submit(): Promise<void>;
  public abstract fill(model: T): void;
}
