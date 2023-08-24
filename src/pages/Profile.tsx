import { IonCol, IonContent, IonPage, IonRow, IonText } from "@ionic/react";
import { LoginForm } from "../components/security/LoginForm";
import { RegisterForm } from "../components/security/RegisterForm";
import "./Profile.css";

const ProfilePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonRow class="ion-justify-content-center">
          <IonCol class="ion-align-self-center">
            <IonText color="primary">
              <h1>Já tem uma conta?</h1>
            </IonText>
            <LoginForm></LoginForm>
            <hr />
            <IonText color="primary">
              <h1>Ainda não tem uma conta?</h1>
            </IonText>
            <RegisterForm></RegisterForm>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
