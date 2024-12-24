import { create } from "zustand";

export const formStore = create((set, get) => ({
  forms: {}, // Храним данные и ошибки по ключам формы
  // Обновление данных формы
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

  // Установка ошибок
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

  // Очистка ошибок
  clearErrors: (formKey) => {
    set((state) => ({
      forms: {
        ...state.forms, // сохраняем все формы
        [formKey]: {
          ...state.forms[formKey], // сохраняем данные формы
          errors: {}, // очищаем только ошибки
        },
      },
    }));
  },

  // Валидация данных формы
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
      return false; // Form is invalid
    }
    return true; // Form is valid
  },
}));
