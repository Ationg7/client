import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-postdialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule],
  templateUrl: './postdialog.component.html',
  styleUrl: './postdialog.component.css'
})
export class PostdialogComponent {
  postForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.postForm = this.fb.group({
      title: [''],
      content:[''],
    })
  }

}
