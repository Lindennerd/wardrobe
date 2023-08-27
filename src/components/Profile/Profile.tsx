import { IonButton } from "@ionic/react";
import { User } from "../../types/types";

export const Profile = ({
  user,
  logout,
}: {
  user: User;
  logout: () => void;
}) => {
  return (
    <div>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Telefone: {user.phone}</p>
      <p>Endereço: {user.localization?.fullAddress}</p>

      <IonButton>Atualizar informações do Perfil</IonButton>
      <IonButton color="warning" onClick={logout}>
        {" "}
        Sair
      </IonButton>
    </div>
  );
};
