import { Component } from "components/component";
import { TypeAPI } from "components/mixins";

export abstract class Input extends Component implements TypeAPI {
  abstract type(value: string): Promise<void>;
}
