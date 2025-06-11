import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})


export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      5
    ),
    new FaceSnap(
      'Buffet',
      'Meilleur nourriture du monde !',
      'https://gourmandiz.dhnet.be/wp-content/uploads/2018/04/petitdejvienn.jpg',
      new Date(),
      210
    ).withLocation('à la montagne'),
    ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    foundFaceSnap.snap(snapType);
  }


}





