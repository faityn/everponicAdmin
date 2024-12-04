import {
  AdminsType,
  AdminType,
  BannerType,
  CareersType,
  FaqType,
  GalleryType,
  MenuItem,
  NewsType,
  SearchOptionsType,
} from "@/types/adminType";

import { atom } from "recoil";

export const adminAllListAtom = atom<AdminType[]>({
  key: "admin_list_atom",
  default: [],
});

export const checkedListAtom = atom<string[]>({
  key: "checked_list_atom",
  default: [],
});

export const checkedInterestsListAtom = atom<string[]>({
  key: "checkedInterestsListAtom",
  default: [],
});

export const checkedPurposesListAtom = atom<string[]>({
  key: "checkedPurposesListAtom",
  default: [],
});

export const selectedOptionAtom = atom<string>({
  key: "selected_option_atom",
  default: "",
});

export const totalPageAtom = atom<number>({
  key: "total_page_atom",
  default: 1,
});

export const startDateAtom = atom<string>({
  key: "start_date_atom",
  default: "",
});

export const endDateAtom = atom<string>({
  key: "end_date_atom",
  default: "",
});

export const fileAtom = atom<File | null>({
  key: "file_atom",
  default: null, // This sets the initial state to null
});

export const adminRoleAtom = atom<string>({
  key: "adminRoleAtom",
  default: "",
});

export const bannerListAtom = atom<BannerType[]>({
  key: "bannerListAtom",
  default: [],
});

export const bannerDetailAtom = atom<BannerType[]>({
  key: "bannerDetailAtom",
  default: [],
});

export const adminMenuItemAtom = atom<MenuItem[]>({
  key: "adminMenuItemAtom",
  default: [],
});

export const searchOptionsAtom = atom<SearchOptionsType>({
  key: "searchOptionsAtom",
  default: {},
});
export const optionTypeAtom = atom({
  key: "optionTypeAtom",
  default: "",
});

export const optionStatusAtom = atom({
  key: "optionStatusAtom",
  default: "",
});
export const searchWordAtom = atom({
  key: "searchWordAtom",
  default: "",
});

export const detailOpenAtom = atom({
  key: "detailOpenAtom",
  default: false,
});

export const birthDateAtom = atom({
  key: "birthDateAtom",
  default: "",
});

export const optionRoleAtom = atom({
  key: "optionRoleAtom",
  default: "",
});

export const optionProfessionAtom = atom({
  key: "optionProfessionAtom",
  default: "",
});

export const checkedInterestAtom = atom<string[]>({
  key: "checkedInterestAtom",
  default: [],
});

export const checkedPurposesAtom = atom<string[]>({
  key: "checkedPurposesAtom",
  default: [],
});

export const dataSavedAtom = atom({
  key: "dataSavedAtom",
  default: false,
});

export const createExOrganizerOpenAtom = atom({
  key: "createExOrganizerOpenAtom",
  default: false,
});

export const newsListAtom = atom<NewsType[]>({
  key: "newsListAtom",
  default: [],
});

export const newsDetailAtom = atom<NewsType[]>({
  key: "newsDetailAtom",
  default: [],
});

export const galleryListAtom = atom<GalleryType[]>({
  key: "galleryListAtom",
  default: [],
});

export const galleryDetailAtom = atom<GalleryType[]>({
  key: "galleryDetailAtom",
  default: [],
});

export const faqListAtom = atom<FaqType[]>({
  key: "faqListAtom",
  default: [],
});

export const faqDetailAtom = atom<FaqType[]>({
  key: "faqDetailAtom",
  default: [],
});

export const careersListAtom = atom<CareersType[]>({
  key: "careersListAtom",
  default: [],
});

export const careersDetailAtom = atom<CareersType[]>({
  key: "careersDetailAtom",
  default: [],
});

export const adminListAtom = atom<AdminsType[]>({
  key: "adminListAtom",
  default: [],
});

export const adminDetailAtom = atom<AdminsType[]>({
  key: "adminDetailAtom",
  default: [],
});
