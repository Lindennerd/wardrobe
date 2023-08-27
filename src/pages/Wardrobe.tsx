import { IonContent, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import { AddPictures } from "../components/AddPictures/AddPictures";
import { UseApi } from "../hooks/api.service";
import { Cloth } from "../types/types";
import "./Wardrobe.css";

const WardrobePage: React.FC = () => {
  const { getUserWardrobe } = UseApi();
  const [wardrobe, setWardrobe] = useState<Cloth[]>();

  useEffect(() => {
    const fetchWardrobe = async () => {
      const response = await getUserWardrobe();
      setWardrobe(response);
    };

    fetchWardrobe();
  }, []);

  const displayGarnments = () => {
    if (!wardrobe) return <></>;
    return wardrobe?.map((item, index) => {
      return (
        <div key={index}>
          <p>{item.name}</p>
          <img src={item.image} alt="" />
        </div>
      );
    });
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <AddPictures></AddPictures>
        {displayGarnments()}
      </IonContent>
    </IonPage>
  );
};

export default WardrobePage;
