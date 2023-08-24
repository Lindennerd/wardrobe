import { IonContent, IonPage } from "@ionic/react";
import { AddPictures } from "../components/AddPictures/AddPictures";
import "./Wardrobe.css";

const WardrobePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <AddPictures></AddPictures>
      </IonContent>
    </IonPage>
  );
};

export default WardrobePage;
