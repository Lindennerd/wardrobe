import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from "@capacitor/camera";
import { useState } from "react";
// import { Filesystem, Directory } from "@capacitor/filesystem";
// import { Preferences } from "@capacitor/preferences";

export function usePhotoService() {
  const [gallery, setGallery] = useState<Photo[]>([]);

  async function takePhoto(): Promise<any> {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });
    setGallery([image, ...gallery]);
  }

  return {
    takePhoto,
    gallery,
  };
}
