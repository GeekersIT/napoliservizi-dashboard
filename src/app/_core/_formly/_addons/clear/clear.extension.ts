import { FormlyFieldConfig } from '@ngx-formly/core';

export function clearExtension(field: FormlyFieldConfig) {
  field.wrappers = [...(field.wrappers || []), 'clear'];

  // if (!field.templateOptions || (field.wrappers && field.wrappers.indexOf('clear') !== -1)) {
  //   return;
  // }

  // if (field.templateOptions.clearable) {
  //   field.wrappers = [...(field.wrappers || []), 'clear'];
  // }
}