import { FormlyFieldConfig } from "@ngx-formly/core";

export function autosaveExtension(field: FormlyFieldConfig) {

  if (!field.templateOptions || (field.wrappers && field.wrappers.indexOf('autosave') !== -1)) {
    return;
  }

  if (field.templateOptions.autosave !== undefined) {
    field.wrappers = [...(field.wrappers || []), 'autosave'];
  }
}