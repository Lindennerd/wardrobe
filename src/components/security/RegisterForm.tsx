import { IonButton, IonInput } from "@ionic/react";
import React from "react";

export const RegisterForm: React.FC = () => {
  return (
    <form>
      <IonInput label="EMAIL" type="email" labelPlacement="floating"></IonInput>
      <IonInput
        label="SENHA"
        type="password"
        labelPlacement="floating"
      ></IonInput>
      <IonButton type="submit">REGISTRAR</IonButton>
    </form>
  );
};
