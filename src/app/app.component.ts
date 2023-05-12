import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup
} from '@angular/forms';

import { exampleSchema } from './example-schema';
import { SchemaFormUtils } from './schema-form-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dynamicFormGroup: FormGroup<any>;
  schema = exampleSchema; // could load from an external source
  controls: Record<string, AbstractControl>;

  constructor(fb: FormBuilder) {
    this.dynamicFormGroup = fb.group(
      SchemaFormUtils.createControlsConfigFromSchema(this.schema)
    );

    // Make it easier to get to the form controls from the template.
    this.controls = this.dynamicFormGroup.controls;
  }

  onSubmit(): void {
    console.log('Form Submitted', this.dynamicFormGroup.value);
  }

  logTheForm(): void {
    console.log('form: ', this.dynamicFormGroup);
  }
}
