import { useCallback, useState } from 'react';

export const useModal = (defaultState = false) => {
  const [visible, setVisible] = useState(defaultState);

  const toggle = useCallback(() => setVisible((prev) => !prev), [setVisible]);
  const show = useCallback(() => setVisible(true), [setVisible]);
  const hide = useCallback(() => setVisible(false), [setVisible]);

  return {
    visible,
    toggle,
    show,
    hide,
  };
};
