import React from 'react'
import { formStore } from '../../stores/formStore';
export default function FormWrapper({formkey, children}) {
    const { clearErrors, validateFormData, updateFormData } = formStore()

  return (
      <form action="#"
          autoComplete="off"
          spellCheck={false}
          data-formkey={formkey}
          onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.target);
              const formDataObject = Object.fromEntries(fd.entries());
              clearErrors(formkey);
              if (validateFormData(formkey, formDataObject)) {
                  updateFormData(formkey, formDataObject);
              }
          }}>
          {children}
             </form>
  )
}
