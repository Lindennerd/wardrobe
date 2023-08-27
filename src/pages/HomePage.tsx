import { IonContent, IonPage } from "@ionic/react";
import { useAuthContext } from "../context/auth.context";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const { auth } = useAuthContext();

  return (
    <IonPage>
      <IonContent fullscreen>
        {auth && auth.user ? auth.user.email : "Bem vindo"}
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
