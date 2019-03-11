import { Form } from "components/common/form";
import { UserModel } from "models";

export class LoginComponent extends Form<UserModel> {
  public submit(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public fill(model: UserModel): void {
    throw new Error("Method not implemented.");
  }
}
