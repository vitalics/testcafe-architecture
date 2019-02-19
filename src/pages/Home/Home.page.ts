import { useComponent } from "hooks/component";
import { LoginComponent } from "components/Login/Login";
import { useState } from "hooks/state";

export function HomePage() {

  const login = useComponent(LoginComponent);

  return Object.freeze({
    components: {
      login,
    },
    actions: {
      login: login.login(),
    }
  });
}
