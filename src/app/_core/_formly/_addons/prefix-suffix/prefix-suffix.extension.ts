import { FormlyFieldConfig } from "@ngx-formly/core";

export function prefixSuffixExtension(field: FormlyFieldConfig) {
  if (!field.templateOptions || (field.wrappers && field.wrappers.indexOf('prefix-suffix') !== -1)) {
    return;
  }

  if (field.templateOptions._prefix || field.templateOptions._suffix) {
    field.wrappers = [...(field.wrappers || []), 'prefix-suffix'];
  }
}