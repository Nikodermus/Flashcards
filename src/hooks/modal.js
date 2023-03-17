import { useState } from 'react';

export const useModal = () => {
  const [visible, setVisible] = useState(false);

  return {
    visible,
    toggle: () => setVisible((prev) => !prev),
    show: () => setVisible(true),
    hide: () => setVisible(false),
  };
};
