import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { RegisterUserService } from 'src/app/SERVICES/AccountService/register-user.service';

@Directive({
  selector: '[uniqueUsername]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUsernameValidatorDirective, multi: true }]
})
export class UniqueUsernameValidatorDirective implements AsyncValidator {

  constructor(public service: RegisterUserService) { }

  validate(u: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.service.getUserByUsername(u.value).pipe(
      map(users => {
        return users && users.length > 0 ? { 'uniqueUsername': true } : null;
      })
    );
  }
}
