import { useCallback, useState } from 'react';

export const useForm = (initalState) => {
  const [form, setForm] = useState(initalState);

  const handleChange = useCallback(
    (update) => {
      if (!update.key) {
        setForm(update);
      } else {
        const { value, key } = update;
        setForm((prev) => ({ ...prev, [key]: value }));
      }
    },
    [setForm]
  );

  return [form, handleChange];
};
