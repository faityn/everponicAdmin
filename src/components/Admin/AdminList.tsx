"use client";
import { useRecoilState } from "recoil";
import { adminListAtom, checkedListAtom } from "@/atom";
import { useEffect, useState } from "react";

import { deleteAdmin, getAdminList } from "@/hooks/useEvents";

import Link from "next/link";
import getToken from "@/helper/getToken";
import { FiEdit } from "react-icons/fi";
import CustomModal from "../Modal/Confirm";
const AdminList = () => {
  const [itemsList, setItemsList] = useRecoilState(adminListAtom);
  const [checkedElements, setChechedElements] = useRecoilState(checkedListAtom);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    if (id === "all") {
      const allIds = itemsList?.map((data) => {
        return data?.id;
      });
      setChechedElements(() =>
        e.target.checked ? (([...allIds] as unknown) as string[]) : []
      );
    } else {
      setChechedElements((prevChecked) =>
        e.target.checked
          ? [...prevChecked, id]
          : prevChecked.filter((item: string) => item !== id)
      );
    }
  };

  const userDelete = async () => {
    const userToken = getToken();
    checkedElements.forEach(async (element) => {
      await deleteAdmin(String(userToken), Number(element));
    });
    getData();
    setChechedElements([]);
    setIsOpen(false);
  };

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
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md disabled:bg-slate-300 bg-rose-400 px-5 py-2 text-center text-[15px] font-medium text-white hover:bg-opacity-90"
              onClick={openModal}
              disabled={checkedElements?.length > 0 ? false : true}
            >
              Delete
            </button>
            {isOpen ? (
              <CustomModal>
                <h2 className="text-xl text-black">
                  ({checkedElements?.length}) Admin will <br /> be deleted
                </h2>
                <div className="mb-2 mt-4 text-lg text-black">
                  Are you sure you want to <br />
                  delete?
                </div>
                <div className="flex w-full items-center justify-center gap-4">
                  <button
                    onClick={closeModal}
                    className="rounded-md bg-slate-500 px-3 py-1 text-white"
                  >
                    Cancel{" "}
                  </button>
                  <button
                    onClick={userDelete}
                    className="rounded-md bg-red px-3 py-1 text-white "
                  >
                    Delete{" "}
                  </button>
                </div>
              </CustomModal>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="w-[30px] px-3 py-3 font-medium text-black dark:text-white ">
                <label
                  htmlFor="checkboxLabelOne"
                  className="flex cursor-pointer select-none items-center"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="checkboxLabelOne"
                      className="sr-only"
                      onChange={(e) => handleCheck(e, "all")}
                      checked={
                        checkedElements.length === itemsList?.length
                          ? true
                          : false
                      }
                    />
                    <div
                      className={`mr-4 flex h-4 w-4 items-center justify-center rounded border ${
                        checkedElements.length === itemsList?.length &&
                        "border-primary bg-gray dark:bg-transparent"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-sm ${
                          checkedElements.length === itemsList?.length &&
                          "bg-primary"
                        }`}
                      ></span>
                    </div>
                  </div>
                </label>
              </th>
              <th className="min-w-50px] px-4 py-3 font-medium text-black dark:text-white ">
                #
              </th>

              <th className="min-w-[200px] px-4 py-3 font-medium text-black dark:text-white ">
                Name
              </th>
              <th className="min-w-[200px] px-4 py-3 font-medium text-black dark:text-white ">
                Email
              </th>
              <th className="min-w-[100px] px-4 py-3 font-medium text-black dark:text-white"></th>
            </tr>
          </thead>
          <tbody>
            {itemsList?.map((item, index) => (
              <tr key={index}>
                <td className="border-b  border-[#eee] px-3 py-4  dark:border-strokedark ">
                  <label
                    htmlFor={String(item?.id)}
                    className="flex cursor-pointer select-none items-center"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        id={String(item?.id)}
                        className="sr-only"
                        onChange={(e) =>
                          handleCheck(e, (item?.id as unknown) as string)
                        }
                        checked={checkedElements.includes(
                          (item?.id as unknown) as string
                        )}
                      />
                      <div
                        className={`mr-4 flex h-4 w-4 items-center justify-center rounded border ${
                          checkedElements.includes(
                            (item?.id as unknown) as string
                          ) && "border-primary bg-gray dark:bg-transparent"
                        }`}
                      >
                        <span
                          className={`h-2 w-2 rounded-sm ${
                            checkedElements.includes(
                              (item?.id as unknown) as string
                            ) && "bg-primary"
                          }`}
                        ></span>
                      </div>
                    </div>
                  </label>
                </td>
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
                <td className="border-b border-[#eee] px-4 py-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xl font-medium bg-success text-primary `}
                  >
                    <Link href={`/admin/${item?.id}`}>
                      <FiEdit className="text-[17px]" />
                    </Link>
                    {/* <RiSearchLine /> */}
                  </p>
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
