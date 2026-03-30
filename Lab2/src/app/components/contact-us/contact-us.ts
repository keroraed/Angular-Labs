import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUs {}