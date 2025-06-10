import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  mySnap!: FaceSnap;
  secondSnap!:FaceSnap;

  faceSnaps!: FaceSnap[];

  ngOnInit() {

    this.faceSnaps = [
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      5
    ),
    this.secondSnap = new FaceSnap(
      'Buffet',
      'Meilleur nourriture du monde !',
      'https://gourmandiz.dhnet.be/wp-content/uploads/2018/04/petitdejvienn.jpg',
      new Date(),
      210
    )
    ];

    this.faceSnaps[1].setLocation('à Paris');
  }
}




