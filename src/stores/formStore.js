import { create } from "zustand";

export const formStore = create((set, get) => ({
    errors: new Set(),
    formData: {},
    updateFormData: (newData) => {
        set((state) => ({
            formData: { ...state.formData, ...newData },
        }));
    },
    setErrors: (errors) => {
        set({ errors: new Set(errors) });
    },
    clearErrors: () => {
        set({ errors: new Set() });
    },
    validateFormData: (fd) => {
        const errors = new Set();

        Object.entries(fd).forEach(([key, value]) => {
            if (value.trim().length === 0) {
                errors.add(key);
            }
        });

        set((state) => ({
            errors: new Set([...state.errors, ...errors]),
        }));
    },
}));
