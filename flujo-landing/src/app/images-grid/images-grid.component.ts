import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'flux-workspace-images-grid',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './images-grid.component.html',
  styleUrls: ['./images-grid.component.scss']
})
export class ImagesGridComponent {}