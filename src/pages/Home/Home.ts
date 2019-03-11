import { Page } from "../page";
import { LoginComponent } from "components/Login";

export class HomePage extends Page {
  public loginComponent = new LoginComponent();
  public async login() {
    const a = await this.loginComponent.getCSS('border-bottom-left-radius');
    a.toLocaleLowerCase();
    this.loginComponent.submit();
  }
}
