import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUs {}