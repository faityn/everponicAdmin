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
    }
  ];
  status?: [
    {
      value?: string;
      text?: string;
    }
  ];
};

export type NewsType = {
  id?: number;
  title?: string;
  content?: string;
  boardFile: [
    {
      id?: number;
      file_name?: string;
      file_ext?: string;
      file_loc?: string;
    }
  ];

  createdAt?: string;
  updatedAt?: string;
};

export type GalleryType = {
  id?: number;
  title?: string;
  content?: string;
  galleryFile: [
    {
      id?: number;
      file_name?: string;
      file_ext?: string;
    }
  ];

  createdAt?: string;
  updatedAt?: string;
};

export type FaqType = {
  id?: number;
  title?: string;
  name?: string;
  email?: string;
  message?: string;
  answer?: string;
  isreplied?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
