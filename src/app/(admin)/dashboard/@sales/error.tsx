'use client';
import React from 'react';

export interface ErrorProps {
  error: Error;
}

export default function Error({}: ErrorProps) {
  return <div>Unexpected error inside slots sales</div>;
}
