import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, 
  FilesystemDirectory, CameraPhoto, CameraSource } from '@capacitor/core'; //access all the features that will be used later on

const { Camera, Filesystem, Storage } = Plugins


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = []

  constructor() { }

  public async addNewPhotoToGallery(){
    const capturedPhoto = await Camera.getPhoto(
      { 
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera, 
        quality: 100 
      }
    );

    this.photos.unshift({
      filepath: "---",
      webviewPath: capturedPhoto.webPath
    })
  }

}

//use this structure as our representation of a photo that is taken by the camera
export interface Photo{
  filepath: string;
  webviewPath: string;
}
