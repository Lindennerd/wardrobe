import { IonButton, IonInput, useIonAlert, useIonLoading } from "@ionic/react";
import React from "react";
import { UseApi } from "../../hooks/api.service";

type RegisterFormTargetType = EventTarget & {
  email: { value: string };
  password: { value: string };
};

export const RegisterForm: React.FC = () => {
  const { register } = UseApi();
  const [presenAlert] = useIonAlert();
  const [present, dismiss] = useIonLoading();

  async function handleSubmit(e: React.SyntheticEvent) {
    try {
      e.preventDefault();
      const target = e.target as RegisterFormTargetType;
      await present("Por favor, aguarde!");
      await register(target.email.value, target.password.value);
      await dismiss();
      presenAlert("Sucesso! Agora você ja pode logar");
    } catch {
      await dismiss();
      presenAlert("Ocorreu um erro ao registrar você");
    }
  }

  return (
    <form method="POST" onSubmit={(e) => handleSubmit(e)}>
      <IonInput
        label="EMAIL"
        type="email"
        name="email"
        labelPlacement="floating"
      ></IonInput>
      <IonInput
        label="SENHA"
        type="password"
        name="password"
        labelPlacement="floating"
      ></IonInput>
      <IonButton type="submit">REGISTRAR</IonButton>
    </form>
  );
};
