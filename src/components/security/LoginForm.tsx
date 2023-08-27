import { IonButton, IonInput, useIonAlert, useIonLoading } from "@ionic/react";
import React from "react";
import { useAuthContext } from "../../context/auth.context";

type LoginFormTargetType = EventTarget & {
  user: { value: string };
  password: { value: string };
};

export const LoginForm: React.FC = () => {
  const authContext = useAuthContext();

  const [present, dismiss] = useIonLoading();
  const [presentAlert] = useIonAlert();

  async function handleLoginSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    try {
      const target = e.target as LoginFormTargetType;
      await present("Por favor, aguarde");
      const result = await authContext.login({
        user: target.user.value,
        password: target.password.value,
      });
      await dismiss();

      if (!result.success)
        presentAlert("O usuário ou a senha estão incorretos");
    } catch (error) {
      dismiss();
      presentAlert((error as Error).message);
    }
  }

  return (
    <form onSubmit={(e) => handleLoginSubmit(e)} method="POST">
      <IonInput
        name="user"
        label="EMAIL"
        type="email"
        labelPlacement="floating"
      ></IonInput>
      <IonInput
        name="password"
        label="SENHA"
        type="password"
        labelPlacement="floating"
      ></IonInput>
      <IonButton type="submit">LOGIN</IonButton>
    </form>
  );
};
