import { FormlyFieldConfig } from "@ngx-formly/core";

export function clearExtension(field: FormlyFieldConfig) {
  // console.log(field)
  if(field.type != 'toggle')
    field.wrappers = [...(field.wrappers || []), 'clear'];
}