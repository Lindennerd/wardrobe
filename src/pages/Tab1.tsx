import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { camera } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import { usePhotoService } from "../hooks/photo.service";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const { gallery, takePhoto } = usePhotoService();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        {gallery.map((photo, index) => (
          <img src={photo.webPath} alt="" key={index} />
        ))}
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={takePhoto}>
            <IonIcon name="camera" icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
