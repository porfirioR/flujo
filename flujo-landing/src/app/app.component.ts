import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactFormGroup } from './models/contact-form-group';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'flujo-landing';
  public formGroup: FormGroup<ContactFormGroup> = new FormGroup({
    name: new FormControl(),
    zipCode: new FormControl(),
    property: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    lastName: new FormControl(),
  })
  protected saving = false
  protected showGrid: boolean = true;
  
  ngOnInit(): void {
    this.checkIfTheButtonIconsAreShown()
  }

  protected saveRegister = () => {
    throw new Error('Method not implemented.');
  }



  @HostListener('window:resize', ['$event'])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  private checkIfTheButtonIconsAreShown(event?: any) {
    this.showGrid = window.screen.width >= 1201
  }
}
