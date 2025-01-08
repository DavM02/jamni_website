import { create } from "zustand";

export const formStore = create((set, get) => ({
  forms: {},  
 
  updateFormData: (formKey, newData) => {
    set((state) => ({
      forms: {
        ...state.forms,
        [formKey]: {
          ...state.forms[formKey],
          formData: { ...state.forms[formKey]?.formData, ...newData },
        },
      },
    }));
  },
 
  setErrors: (formKey, newErrors) => {
    set((state) => ({
      forms: {
        ...state.forms,
        [formKey]: {
          ...state.forms[formKey],
          errors: { ...state.forms[formKey]?.errors, ...newErrors },
        },
      },
    }));
  },

  clearErrors: (formKey) => {
    set((state) => ({
      forms: {
        ...state.forms,  
        [formKey]: {
          ...state.forms[formKey],  
          errors: {}, 
        },
      },
    }));
  },

  validateFormData: (formKey, fd) => {
    const errors = {};
    Object.entries(fd).forEach(([key, value]) => {
      if (value.trim().length === 0) {
        errors[key] = "This field is required";
      }
    });

    if (Object.keys(errors).length > 0) {
      set((state) => ({
        forms: {
          ...state.forms,
          [formKey]: {
            ...state.forms[formKey],
            errors,
          },
        },
      }));
      return false; 
    }
    return true; 
  },
}));
