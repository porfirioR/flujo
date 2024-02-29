import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactFormGroup } from './models/contact-form-group';
import { ContactApiService } from './services/contact-api.service';
import { ContactApiRequest } from './models/contact-api-request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'flujo-landing';
  public formGroup = new FormGroup<ContactFormGroup>({
    name: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
    zipCode: new FormControl(null, [Validators.required, Validators.min(10000), Validators.max(99999)]),
    property: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, Validators.required),
    lastName: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
  })
  protected saving = false
  protected showGrid: boolean = true;
  
  constructor(
    private readonly contactApiService: ContactApiService,
  ) { }

  ngOnInit(): void {
    this.checkIfTheButtonIconsAreShown()
  }

  protected saveRegister = (): void => {
    this.saving = true
    const request = this.formGroup.getRawValue()! as ContactApiRequest
    this.contactApiService.sendContactData(request).subscribe({
      next: (value) => {
        if (value.Id) {
          alert('Datos enviados')
          window.location.reload()
        }
      }, error: (e) => {
        this.saving = false
        throw e
      }
    })
  }



  @HostListener('window:resize', ['$event'])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  private checkIfTheButtonIconsAreShown(event?: any) {
    this.showGrid = window.screen.width >= 1201
  }
}
