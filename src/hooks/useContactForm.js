import { useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function useContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function validate() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nama wajib diisi";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor telepon wajib diisi";
    } else if (!/^[0-9+\-\s]{9,15}$/.test(formData.phone)) {
      newErrors.phone = "Format nomor telepon tidak valid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subjek wajib diisi";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Pesan wajib diisi";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Pesan minimal 10 karakter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function resetForm() {
    setFormData(initialFormState);
    setErrors({});
  }

  return {
    formData,
    errors,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    validate,
    resetForm,
  };
}