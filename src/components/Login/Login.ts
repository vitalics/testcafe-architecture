import { Selector, t } from "testcafe";
import { useState } from "hooks";

export function LoginComponent() {
  const [getLoggedIn, setLoggedIn] = useState(false);
  const email = Selector('#login');
  return Object.freeze({
    email,
    loggedIn: getLoggedIn(),

    login: async () => {
      await t.click(email)
      setLoggedIn(true);
    }
  });
}