import { FormControl } from "@angular/forms"

export interface ContactFormGroup {
  name: FormControl<null | string>
  zipCode: FormControl<null | number>
  property: FormControl<null | number>
  email: FormControl<null | string>
  lastName: FormControl<null | string>
  phone: FormControl<null | string>
}
