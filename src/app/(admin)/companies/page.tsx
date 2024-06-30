import React from 'react';
import CompanyTable from '../../components/company-table';
import CompanyRow from '@/app/components/company-row';
import { CompanyStatus } from '@/lib/api';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <CompanyTable>
      <CompanyRow company="Costco" />
    </CompanyTable>
  );
}
