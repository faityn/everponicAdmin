"use server";

export const getExhibitionList = async (
  token: string,
  searchUrl: string,
  page: number,
  size: number
) => {
  const search = searchUrl;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/exhibitions/list?${search}&page=${page}&pageSize=${size}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getExhibitionSearchOptionList = async (token: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/exhibitions/search_options`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          locale: "mn",
        },
        redirect: "follow",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const createExhibition = async (
  formdata: FormData,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  checkedInterests: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  checkedPurposes: any
) => {
  const image: File | null = (formdata.get("img") as unknown) as File;
  const formData2 = new FormData();
  const token = formdata.get("token") as string;

  formData2.append("title", formdata.get("title") as string);
  formData2.append("short_desc", formdata.get("short_desc") as string);
  formData2.append("startDate", formdata.get("startDate") as string);
  formData2.append("endDate", formdata.get("endDate") as string);
  formData2.append("description", formdata.get("description") as string);
  formData2.append("status", formdata.get("status") as string);
  formData2.append("interests", JSON.stringify(checkedInterests));
  formData2.append("purposes", JSON.stringify(checkedPurposes));
  if (image !== null) {
    formData2.append("img", image);
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/exhibition/create`,
      {
        method: "POST",
        body: formData2,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const updateExhibition = async (
  formdata: FormData,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  checkedInterests: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  checkedPurposes: any
) => {
  const image: File | null = (formdata.get("img") as unknown) as File;
  const formData2 = new FormData();
  const token = formdata.get("token") as string;

  formData2.append("exhibitionId", formdata.get("exhibitionId") as string);
  formData2.append("title", formdata.get("title") as string);
  formData2.append("short_desc", formdata.get("short_desc") as string);
  formData2.append("startDate", formdata.get("startDate") as string);
  formData2.append("endDate", formdata.get("endDate") as string);
  formData2.append("description", formdata.get("description") as string);
  formData2.append("status", formdata.get("status") as string);
  formData2.append("interests", JSON.stringify(checkedInterests));
  formData2.append("purposes", JSON.stringify(checkedPurposes));
  if (image !== null) {
    formData2.append("img", image);
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/exhibition/update`,
      {
        method: "POST",
        body: formData2,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );
    console.log(response);

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getExhibitionDetail = async (token: string, id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/exhibition/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );
    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const deleteExhibition = async (token: string, id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/exhibition/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const changeExhibitionStatus = async (
  token: string,
  id: number,
  status: string
) => {
  try {
    const raw = JSON.stringify({
      exhibitionId: Number(id),
      status: status,
    });
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/exhibition/update/status`,
      {
        method: "POST",
        body: raw,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getExhibitionLecturesList = async (
  token: string,
  page: number,
  size: number
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/exhibitions/lectures/list?page=${page}&pageSize=${size}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export const createExhibitionLectures = async (formdata: FormData) => {
  const formData2 = new FormData();
  const token = formdata.get("token") as string;

  formData2.append("exhibitionId", formdata.get("exhibitionId") as string);
  formData2.append("title", formdata.get("title") as string);
  formData2.append("short_desc", formdata.get("short_desc") as string);
  formData2.append("startDate", formdata.get("startDate") as string);
  formData2.append("endDate", formdata.get("endDate") as string);
  formData2.append("description", formdata.get("description") as string);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/exhibitions/lecture/create`,
      {
        method: "POST",
        body: formData2,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const updateExhibitionLectures = async (formdata: FormData) => {
  const formData2 = new FormData();
  const token = formdata.get("token") as string;

  formData2.append("lectureId", formdata.get("lectureId") as string);
  formData2.append("exhibitionId", formdata.get("exhibitionId") as string);
  formData2.append("title", formdata.get("title") as string);
  formData2.append("short_desc", formdata.get("short_desc") as string);
  formData2.append("startDate", formdata.get("startDate") as string);
  formData2.append("endDate", formdata.get("endDate") as string);
  formData2.append("description", formdata.get("description") as string);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/exhibitions/lecture/update`,
      {
        method: "POST",
        body: formData2,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const deleteExhibitionLectures = async (token: string, id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/exhibitions/lecture/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getExhibitionLectureDetail = async (token: string, id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/exhibitions/lecture/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export const getExhibitionAll = async (token: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/exhibitions/list`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export const getExhibitionUsersList = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/filter?key=role&value=user&limit=10&skip=30`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getExhibitionFeedbackList = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/filter?key=role&value=user&limit=2&skip=50`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getBannerList = async (token: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/banners/list`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );
    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getBannerDetail = async (token: string, id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/banner/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );
    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const createBanner = async (formdata: FormData) => {
  const image: File | null = (formdata.get("img") as unknown) as File;
  const formData2 = new FormData();
  const token = formdata.get("token") as string;
  formData2.append("title", "Garchig 1");
  if (image !== null) {
    formData2.append("img", image);
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/banner/create`,
      {
        method: "POST",
        body: formData2,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const updateBanner = async (formdata: FormData) => {
  const image: File | null = (formdata.get("img") as unknown) as File;
  const formData2 = new FormData();
  const token = formdata.get("token") as string;
  formData2.append("id", formdata.get("id") as string);
  formData2.append("title", formdata.get("title") as string);
  if (image !== null) {
    formData2.append("img", image);
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/banner/update`,
      {
        method: "POST",
        body: formData2,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const deleteBanner = async (token: string, id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/banner/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const uploadImage = async (formdata: FormData) => {
  const image: File | null = (formdata.get("file") as unknown) as File;
  const formData2 = new FormData();
  if (image !== null) {
    formData2.append("img", image);
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/image/upload`,
      {
        method: "POST",
        body: formData2,
      }
    );

    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getNewsList = async (
  token: string,
  page: number,
  size: number
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/boardInfo/list?page=${page}&limit=${size}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const createNews = async (formdata: FormData) => {
  const image: File | null = (formdata.get("img") as unknown) as File;
  const formData2 = new FormData();
  const token = formdata.get("token") as string;
  formData2.append("title", formdata.get("title") as string);
  formData2.append("master_id", "1");
  formData2.append("content", formdata.get("content") as string);
  if (image !== null) {
    formData2.append("image", image);
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/boardInfo`,
      {
        method: "POST",
        body: formData2,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.json();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getNewsDetail = async (token: string, id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/boardInfo/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );
    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const updateNews = async (formdata: FormData, id: number) => {
  const image: File | null = (formdata.get("img") as unknown) as File;
  const formData2 = new FormData();
  const token = formdata.get("token") as string;
  //formData2.append("id", formdata.get("id") as string);
  formData2.append("title", formdata.get("title") as string);
  formData2.append("master_id", "1");
  formData2.append("content", formdata.get("content") as string);
  if (image !== null) {
    formData2.append("image", image);
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/boardInfo/${id}`,
      {
        method: "PUT",
        body: formData2,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const deleteNews = async (token: string, id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/boardInfo/${id}`,
      {
        method: "DELETE",

        redirect: "follow",
      }
    );
    console.log(response);

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getGalleryList = async (
  token: string,
  page: number,
  size: number
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/gallery/list?page=${page}&limit=${size}&order=최신순`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );
    const data = await response.json();
    console.log(data);
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const createGallery = async (formdata: FormData) => {
  const image: File | null = (formdata.get("img") as unknown) as File;
  const formData2 = new FormData();
  const token = formdata.get("token") as string;
  formData2.append("title", formdata.get("title") as string);
  formData2.append("content", formdata.get("content") as string);
  if (image !== null) {
    formData2.append("image", image);
  }
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery`, {
      method: "POST",
      body: formData2,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      redirect: "follow",
    });

    const data = await response.json();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getGalleryDetail = async (token: string, id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/gallery/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );
    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const updateGallery = async (formdata: FormData, id: number) => {
  const image: File | null = (formdata.get("img") as unknown) as File;
  const formData2 = new FormData();
  const token = formdata.get("token") as string;
  //formData2.append("id", formdata.get("id") as string);
  formData2.append("title", formdata.get("title") as string);

  formData2.append("content", formdata.get("content") as string);
  if (image !== null) {
    formData2.append("image", image);
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/gallery/${id}`,
      {
        method: "PUT",
        body: formData2,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const deleteGallery = async (id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/gallery/${id}`,
      {
        method: "DELETE",

        redirect: "follow",
      }
    );

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getFaqList = async (token: string, page: number, size: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/faq/list?page=${page}&limit=${size}&order=newest`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );
    const data = await response.json();
    console.log(data);
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getFaqDetail = async (token: string, id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/faq/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );
    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const answerFaq = async (answer: string, id: number) => {
  const raw = JSON.stringify({
    answer: answer,
  });
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/faq/${id}`,
      {
        method: "PUT",
        body: raw,
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      }
    );

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const deleteFaq = async (id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/faq/${id}`,
      {
        method: "DELETE",

        redirect: "follow",
      }
    );

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getCareersList = async (
  token: string,
  page: number,
  size: number
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/careers/list?page=${page}&limit=${size}&order=newest`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const createCareers = async (formdata: FormData) => {
  const image: File | null = (formdata.get("img") as unknown) as File;
  const formData2 = new FormData();
  const token = formdata.get("token") as string;
  formData2.append("title", formdata.get("title") as string);
  formData2.append("outlink", formdata.get("outlink") as string);

  if (image !== null) {
    formData2.append("image", image);
  }
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/careers`, {
      method: "POST",
      body: formData2,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      redirect: "follow",
    });

    const data = await response.json();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const deleteCareers = async (id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/careers/${id}`,
      {
        method: "DELETE",

        redirect: "follow",
      }
    );
    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getCareersDetail = async (token: string, id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/careers/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );
    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const updateCareers = async (formdata: FormData, id: number) => {
  const image: File | null = (formdata.get("img") as unknown) as File;
  const formData2 = new FormData();
  const token = formdata.get("token") as string;

  formData2.append("title", formdata.get("title") as string);
  formData2.append("outlink", formdata.get("outlink") as string);

  if (image !== null) {
    formData2.append("image", image);
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/careers/${id}`,
      {
        method: "PUT",
        body: formData2,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getAdminList = async (token: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      redirect: "follow",
    });

    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const createAdmin = async (
  token: string,
  username: string,
  password: string
) => {
  try {
    const raw = JSON.stringify({
      username: username,
      password: password,
    });

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: "POST",
      body: raw,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      redirect: "follow",
    });

    const data = await response.json();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getAdminDetail = async (token: string, id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );
    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const updateAdmin = async (
  token: string,
  id: number,
  username: string,
  password: string
) => {
  try {
    const raw = JSON.stringify({
      username: username,
      password: password,
    });
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
      {
        method: "PUT",
        body: raw,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );
    console.log(response);

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const deleteAdmin = async (token: string, id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
      }
    );

    console.log(response);

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
