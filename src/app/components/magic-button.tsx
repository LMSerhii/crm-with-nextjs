'use client';

import React, { useEffect, useState } from 'react';
import Button, { ButtonProps } from './button';

export interface MagicButtonProps {
  props?: ButtonProps;
}

export default function MagicButton({ props }: MagicButtonProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 2) {
      throw new Error('Unexpected error');
    }
  }, [count]);

  return (
    <Button {...props} onClick={() => setCount(count + 1)}>
      Magic Button
    </Button>
  );
}
