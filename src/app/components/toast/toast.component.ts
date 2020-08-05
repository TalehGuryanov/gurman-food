import { Component, OnInit } from '@angular/core';
import { ToastService } from '@app/services';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor(
    public toastService: ToastService
  ) {}

  ngOnInit(): void {
  }
}
