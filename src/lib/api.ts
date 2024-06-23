export interface SummaryStats {
  promotions: number;
  categories: number;
  newCompanies: number;
  activeCompanies: number;
}

export interface SummarySales {
  id: string;
  companyId: string;
  companyTitle: string;
  sold: number;
  income: number;
}

export interface Country {
  id: string;
  title: string;
}

export interface Category {
  id: string;
  title: string;
}

export enum CompanyStatus {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface Company {
  id: string;
  title: string;
  description: string;
  status: CompanyStatus;
  joinedDate: string;
  hasPromotions: boolean;
  categoryId: string;
  categoryTitle: string;
  countryId: string;
  countryTitle: string;
  avatar?: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: number;
  companyId: string;
  companyTitle: string;
  avatar?: string;
}

const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;

const buildUrl = (...paths: string[]) =>
  `https://${PROJECT_TOKEN}.mockapi.io/api/v1/${paths.join('/')}`;

const stringifyQueryParams = (params: Record<string, string>) =>
  new URLSearchParams(params).toString();

const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return (await res.json()) as T;
};

/** SummaryStats */

// export const getSummaryStats = (init?: RequestInit) => {
//   return sendRequest<SummaryStats>(buildUrl('summary-stats', '1'), init);
// };

export const getSummaryStats = (init?: RequestInit) => {
  return {
    promotions: 432,
    categories: 8,
    newCompanies: 28,
    activeCompanies: 670,
  };
};

/** SummuryStats */

/** SummurySales */

// export const getSummarySales = (init?: RequestInit) => {
//   return sendRequest<SummarySales[]>(buildUrl('summary-sales'), init);
// };

export const getSummarySales = (init?: RequestInit) => {
  return [
    {
      id: '1',
      companyId: '1',
      companyTitle: 'Costco',
      sold: 550,
      income: 670,
    },
    {
      id: '1',
      companyId: '1',
      companyTitle: 'Costco',
      sold: 550,
      income: 670,
    },
    {
      id: '1',
      companyId: '1',
      companyTitle: 'Costco',
      sold: 550,
      income: 670,
    },
    {
      id: '1',
      companyId: '1',
      companyTitle: 'Costco',
      sold: 550,
      income: 670,
    },
    {
      id: '1',
      companyId: '1',
      companyTitle: 'Costco',
      sold: 550,
      income: 670,
    },
    {
      id: '1',
      companyId: '1',
      companyTitle: 'Costco',
      sold: 550,
      income: 670,
    },
  ];
};
/** SummurySales */

/** Countries */

// export const getCountries = (init?: RequestInit) => {
//   return sendRequest<Country[]>(buildUrl('countries'), init);
// };

export const getCountries = (init?: RequestInit) => {
  return [
    { id: '1', title: 'USA' },
    { id: '2', title: 'Germany' },
    { id: '3', title: 'Japan' },
    { id: '4', title: 'Canada' },
    { id: '5', title: 'Spain' },
  ];
};

/** Countries */

/** Categories */

// export const getCategories = (init?: RequestInit) => {
//   return sendRequest<Category[]>(buildUrl('categories'), init);
// };

export const getCategories = (init?: RequestInit) => {
  return [
    { id: '1', title: 'Products' },
    { id: '2', title: 'Outsource' },
    { id: '3', title: 'Post' },
    { id: '4', title: 'Astro' },
    { id: '5', title: 'Criminal' },
    { id: '6', title: 'Outdoor' },
    { id: '7', title: 'GoodTrip' },
    { id: '8', title: 'Salary' },
  ];
};

/** Categories */

// export const getCompanies = (init?: RequestInit) => {
//   return sendRequest<Company[]>(buildUrl('companies'), init);
// };

export const getCompanies = (init?: RequestInit) => {
  return [
    {
      id: '1',
      title: 'Costco',
      description: 'Good company',
      status: 'active',
      joinedDate: '26-12-2023',
      hasPromotions: true,
      categoryId: '1',
      categoryTitle: 'Products',
      countryId: '1',
      countryTitle: 'USA',
      avatar: '',
    },
    {
      id: '2',
      title: 'Costco',
      description: 'Good company',
      status: 'active',
      joinedDate: '26-12-2023',
      hasPromotions: true,
      categoryId: '2',
      categoryTitle: 'Outsource',
      countryId: '2',
      countryTitle: 'USA',
      avatar: '',
    },
    {
      id: '2',
      title: 'Costco',
      description: 'Good company',
      status: 'active',
      joinedDate: '26-12-2023',
      hasPromotions: true,
      categoryId: '3',
      categoryTitle: 'Post',
      countryId: '3',
      countryTitle: 'USA',
      avatar: '',
    },
    {
      id: '3',
      title: 'Costco',
      description: 'Good company',
      status: 'active',
      joinedDate: '26-12-2023',
      hasPromotions: true,
      categoryId: '4',
      categoryTitle: 'Astro',
      countryId: '4',
      countryTitle: 'USA',
      avatar: '',
    },
    {
      id: '4',
      title: 'Costco',
      description: 'Good company',
      status: 'active',
      joinedDate: '26-12-2023',
      hasPromotions: true,
      categoryId: '5',
      categoryTitle: 'Criminal',
      countryId: '5',
      countryTitle: 'USA',
      avatar: '',
    },
    {
      id: '5',
      title: 'Costco',
      description: 'Good company',
      status: 'active',
      joinedDate: '26-12-2023',
      hasPromotions: true,
      categoryId: '6',
      categoryTitle: 'Outdoor',
      countryId: '1',
      countryTitle: 'USA',
      avatar: '',
    },
    {
      id: '6',
      title: 'Costco',
      description: 'Good company',
      status: 'active',
      joinedDate: '26-12-2023',
      hasPromotions: true,
      categoryId: '7',
      categoryTitle: 'GoodTrip',
      countryId: '2',
      countryTitle: 'USA',
      avatar: '',
    },
    {
      id: '7',
      title: 'Costco',
      description: 'Good company',
      status: 'active',
      joinedDate: '26-12-2023',
      hasPromotions: true,
      categoryId: '8',
      categoryTitle: 'Salary',
      countryId: '3',
      countryTitle: 'USA',
      avatar: '',
    },
    {
      id: '8',
      title: 'Costco',
      description: 'Good company',
      status: 'active',
      joinedDate: '26-12-2023',
      hasPromotions: true,
      categoryId: '1',
      categoryTitle: 'Products',
      countryId: '4',
      countryTitle: 'USA',
      avatar: '',
    },
    {
      id: '9',
      title: 'Costco',
      description: 'Good company',
      status: 'active',
      joinedDate: '26-12-2023',
      hasPromotions: false,
      categoryId: '5',
      categoryTitle: 'Criminal',
      countryId: '5',
      countryTitle: 'USA',
      avatar: '',
    },
  ];
};

/** Companies */

export const getCompany = (id: string, init?: RequestInit) => {
  return sendRequest<Company>(buildUrl('companies', id), init);
};

/** Promotions */

// export const getPromotions = async (
//   params: Record<string, string> = {},
//   init?: RequestInit
// ) => {
//   return sendRequest<Promotion[]>(
//     `${buildUrl('promotions')}?${stringifyQueryParams(params)}`,
//     init
//   );
// };

export const getPromotions = async (
  params: Record<string, string> = {},
  init?: RequestInit
) => {
  return [
    {
      id: '1',
      title: 'Some prom',
      description: 'Good Good',
      discount: 25,
      companyId: '1',
      companyTitle: 'Costco',
      avatar: '',
    },
    {
      id: '1',
      title: 'Some prom',
      description: 'Good Good',
      discount: 45,
      companyId: '1',
      companyTitle: 'Costco',
      avatar: '',
    },
    {
      id: '1',
      title: 'Some prom',
      description: 'Good Good',
      discount: 35,
      companyId: '1',
      companyTitle: 'Costco',
      avatar: '',
    },
    {
      id: '1',
      title: 'Some prom',
      description: 'Good Good',
      discount: 26,
      companyId: '1',
      companyTitle: 'Costco',
      avatar: '',
    },
    {
      id: '1',
      title: 'Some prom',
      description: 'Good Good',
      discount: 17,
      companyId: '1',
      companyTitle: 'Costco',
      avatar: '',
    },
    {
      id: '1',
      title: 'Some prom',
      description: 'Good Good',
      discount: 10,
      companyId: '1',
      companyTitle: 'Costco',
      avatar: '',
    },
    {
      id: '1',
      title: 'Some prom',
      description: 'Good Good',
      discount: 45,
      companyId: '1',
      companyTitle: 'Costco',
      avatar: '',
    },
  ];
};

/** Promotions */

export const createCompany = async (
  data: Omit<Company, 'id' | 'hasPromotions'>,
  init?: RequestInit
) => {
  return sendRequest<Company>(buildUrl('companies'), {
    ...init,
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      ...(init && init.headers),
      'content-type': 'application/json',
    },
  });
};

export const createPromotion = async (
  data: Omit<Promotion, 'id'>,
  init?: RequestInit
) => {
  return sendRequest<Promotion>(buildUrl('promotions'), {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      ...(init && init.headers),
      'content-type': 'application/json',
    },
  });
};
