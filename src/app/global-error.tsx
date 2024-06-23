'use client';

import React from 'react';

export interface GlobalErrorProps {}

export default function GlobalError({}: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <h1>Something globaly went wrong</h1>
        </div>
      </body>
    </html>
  );
}
