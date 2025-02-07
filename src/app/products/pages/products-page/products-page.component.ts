import { Component, inject } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  // constructor(private fb: FormBuilder){}
  private fb =inject(FormBuilder);

  public color: string = 'green';

  public myForm : FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email] ]
  })

  chageColor():void{
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
}
