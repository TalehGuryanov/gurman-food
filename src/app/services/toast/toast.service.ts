import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastDefinition } from '@app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastMessage$ = new BehaviorSubject<ToastDefinition>(null);

  constructor() {
  }

  toPrintToast(code: number, message: string) {

    const toast = {
      title: 'Error!',
      text: message,
      type: 'error'
    }

    if (code < 400) {
      toast.title = 'Success!'
      toast.type = 'success'
    }

    this.toastMessage$.next(toast);
    setTimeout(() => this.toastMessage$.next(null), 2000)
  }
}


