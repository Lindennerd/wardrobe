import { IonCol, IonContent, IonPage, IonRow, IonText } from "@ionic/react";
import { Profile } from "../components/Profile/Profile";
import { LoginForm } from "../components/security/LoginForm";
import { RegisterForm } from "../components/security/RegisterForm";
import { useAuthContext } from "../context/auth.context";
import "./Profile.css";

const ProfilePage: React.FC = () => {
  const { auth, logout } = useAuthContext();

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonRow>
          <IonCol
            className="ion-justify-content-center"
            style={{ display: "flex" }}
          >
            {auth && auth.user ? (
              <Profile user={auth.user} logout={logout} />
            ) : (
              <LoginOrRegister />
            )}
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

const LoginOrRegister = () => {
  return (
    <div>
      <IonText color="primary">
        <h1>Já tem uma conta?</h1>
      </IonText>
      <LoginForm></LoginForm>
      <hr />
      <IonText color="primary">
        <h1>Ainda não tem uma conta?</h1>
      </IonText>
      <RegisterForm></RegisterForm>
    </div>
  );
};

export default ProfilePage;
