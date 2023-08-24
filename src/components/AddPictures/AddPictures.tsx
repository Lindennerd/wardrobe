import { IonButton, IonIcon, IonLabel } from "@ionic/react";
import { add } from "ionicons/icons";
import { usePhotoService } from "../../hooks/photo.service";

export const AddPictures: React.FC = () => {
  const { gallery, takePhoto } = usePhotoService();

  return (
    <IonButton fill="outline" onClick={takePhoto}>
      <IonIcon aria-hidden="true" icon={add} />
      <IonLabel>Adicionar roupas</IonLabel>
    </IonButton>
  );
};
