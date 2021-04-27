import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { Subject } from 'rxjs';
import { UserDetailsPaymentFacade } from '../store/facade';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  unsubscribe$ = new Subject();

  paymentForm: FormGroup;
  errorMessage: string;

  constructor(private fb: FormBuilder, private facade: UserDetailsPaymentFacade) { }

  ngOnInit(): void {
    this.errorMessage = 'Please Fill all fields';
    this.buildForm();
  }

  buildForm(): void {
    this.paymentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[A-Za-z][A-Za-z -]*$')]],
      lastName: ['', [Validators.required, Validators.minLength(2) , Validators.pattern('^[A-Za-z][A-Za-z -]*$')]],
      monthlyAdvertisingBudget: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/),
                                Validators.minLength(3), Validators.min(111), Validators.max(9999999999999999)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(7),
                    Validators.maxLength(15), Validators.min(1111111), Validators.max(99999999999999)]]
    });
  }

  // Defining Getter methods for form controls
  get firstName(): FormControl {
    return this.paymentForm.controls.firstName as FormControl;
  }
  get lastName(): FormControl {
    return this.paymentForm.controls.lastName as FormControl;
  }
  get monthlyAdvertisingBudget(): FormControl {
    return this.paymentForm.controls.monthlyAdvertisingBudget as FormControl;
  }
  get email(): FormControl {
    return this.paymentForm.controls.email as FormControl;
  }
  get phoneNumber(): FormControl {
    return this.paymentForm.controls.phoneNumber as FormControl;
  }

 onSubmit(): void {
   this.submitForm();
  }

  submitForm(): void {
  if (this.paymentForm.status === 'VALID') {
    const paymentFormData = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      monthlyAdvertisingBudget: this.monthlyAdvertisingBudget.value,
      phoneNumber: +this.phoneNumber.value,
    };

    this.facade.makePayment(paymentFormData);
    // this.paymentService.makePayment(paymentFormData).subscribe(
    //   response => {
    //     if(response.body.status === 'success') {
    //       this.toasterService.pop('success', 'SUCCESSFUL', 'Your payment was successful')
    //     } else {
    //       this.toasterService.pop('error', 'FAILURE', 'Your payment Failed please try again later')
    //     }
    //   }
    // )
  } else {
    this.errorMessage = 'the Form is Invalid!';
  }
  }

  ngOnDestroy(): void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


}
