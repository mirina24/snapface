import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.sevices';

@Component({
  selector: 'app-face-snap',
  standalone: true, 
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService) {}
  
  ngOnInit(): void {
  this.snapButtonText = 'Oh, Snap!'; 
  this.userHasSnapped = false;
  }

  onSnap(): void{
    if (this.userHasSnapped){
      this.unSnap();
    }
    else{
      this.snap();
    }
  }


  unSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }

}



