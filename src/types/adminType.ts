export type AdminType = {
  id?: number;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  phone?: string;
  company?: {
    name?: string;
    title?: string;
  };
  role?: string;
  image?: string;
  created_at?: string;
};


export type BannerType = {
  id?: number;
  title?: string;
  img?: string;
  imgUrl?: string;
  ord?: number;
  createdAt?: string;
  updatedAt?: string;
};


export type MenuItem = {
  menuId: number;
  isUse: boolean;
};

export type SearchOptionsType = {
  search?: [
    {
      value?: string;
      text?: string;
    },
  ];
  status?: [
    {
      value?: string;
      text?: string;
    },
  ];
};


