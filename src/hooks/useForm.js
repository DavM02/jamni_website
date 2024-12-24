import { useState } from "react";

export function useForm() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // Обновление данных формы
  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  // Очистка ошибок
  const clearErrors = () => {
    setErrors({});
  };

  // Установка ошибок
  const setFormErrors = (newErrors) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      ...newErrors,
    }));
  };

  // Валидация данных формы
  const validateFormData = (fd) => {
    const validationErrors = {};

    Object.entries(fd).forEach(([key, value]) => {
      if (value.trim().length === 0) {
        validationErrors[key] = "This field is required";
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return false;  
    }

    return true;  
  };

  return {
    formData,
    errors,
    updateFormData,
    setFormErrors,
    clearErrors,
    validateFormData,
  };
}
