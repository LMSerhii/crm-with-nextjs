import { CompanyStatus } from '@/lib/api';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

export interface StatusLabelProps extends PropsWithChildren {
  status: CompanyStatus;
  disabled?: boolean;
}

export default function StatusLabel({
  children,
  status,
  disabled,
}: StatusLabelProps) {
  return (
    <div
      className={clsx(
        `inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium`,
        status === CompanyStatus.Active && 'text-green-700 bg-green-100',
        status === CompanyStatus.NotActive && 'text-red-700 bg-red-100',
        status === CompanyStatus.Pending && 'text-orange-700 bg-orange-100',
        status === CompanyStatus.Suspended && 'text-blue-700 bg-blue-100',
        { ['opacity-75 cursor-not-allowed']: disabled }
      )}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current"></div>
      {children}
    </div>
  );
}
