import { useState, useCallback } from "react";

export default (initialValues) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleFormChange = useCallback(
      (event) => {
        const { value, name, type } = event.target;

        if (type === 'checkbox') {
          setFormValues({ ...formValues, [name]: event.target.checked });
          return;
        }

        setFormValues({ ...formValues, [name]: value });
      }, [formValues]
  );

  const handleReset = useCallback(() => {
    setFormValues(initialValues)
  }, [initialValues]);

  return [formValues, handleFormChange, handleReset];
};