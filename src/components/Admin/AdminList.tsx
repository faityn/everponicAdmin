"use client";
import { useRecoilState } from "recoil";
import { adminListAtom } from "@/atom";
import { useEffect } from "react";

import { getAdminList } from "@/hooks/useEvents";

import Link from "next/link";
import getToken from "@/helper/getToken";
const AdminList = () => {
  const [itemsList, setItemsList] = useRecoilState(adminListAtom);

  const getData = async () => {
    const userToken = getToken();
    const response = await getAdminList(String(userToken));

    if (response?.status) {
      setItemsList(response?.result?.responseObject);
    }
  };
  useEffect(() => {
    //eslint-disable-next-line react-hooks/exhaustive-deps
    getData();
  }, []);
  return (
    <div className="rounded-sm border border-stroke bg-white  pb-2.5 pt-4 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-4 xl:pb-1">
      <div className="grid grid-cols-12  pb-4">
        <div className="col-span-5 flex  w-full  gap-4 max-md:col-span-12 max-xsm:flex-col "></div>
        <div className="col-span-7 w-full  text-right max-md:col-span-12 ">
          <div className="flex w-full  justify-end gap-4">
            <Link
              href={"/admin/create"}
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2 text-center text-[15px] font-medium text-white hover:bg-opacity-90"
            >
              Create
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-50px] px-4 py-3 font-medium text-black dark:text-white ">
                #
              </th>

              <th className="min-w-[200px] px-4 py-3 font-medium text-black dark:text-white ">
                Name
              </th>
              <th className="min-w-[200px] px-4 py-3 font-medium text-black dark:text-white ">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {itemsList?.map((item, index) => (
              <tr key={index}>
                <td className="border-b  border-[#eee] px-4 py-4 dark:border-strokedark ">
                  <h5 className="font-medium text-black dark:text-white">
                    {index + 1}
                  </h5>
                </td>

                <td className="border-b border-[#eee] px-4 py-4  dark:border-strokedark ">
                  <h5 className="font-medium  dark:text-white">{item?.name}</h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-4  dark:border-strokedark ">
                  <h5 className="font-medium  dark:text-white">
                    {item?.email}
                  </h5>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="my-5 text-right"></div>
    </div>
  );
};

export default AdminList;
