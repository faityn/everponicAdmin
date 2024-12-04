"use client";
import getToken from "@/helper/getToken";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomModal from "../Modal/Confirm";
import { useState } from "react";
import Loader from "../common/Loader";
import { createAdmin } from "@/hooks/useEvents";

interface FormData {
  username: string;
  password: string;
}
const AdminCreate = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [createError, setCreateError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const closeModal = () => {
    setIsOpen(false);
    router.push(`/admin`);
  };

  const closeError = () => {
    setCreateError(false);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    const token = getToken();

    const username = data.username;
    const password = data.password;

    const res = await createAdmin(token as string, username, password);

    if (res?.status) {
      setIsOpen(true);
      setLoading(false);
    } else {
      setCreateError(true);
      setLoading(false);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white  pb-2.5 pt-4 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-4 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <div className="max-w-203">
          <form onSubmit={handleSubmit(onSubmit)}>
            <table className=" w-full table-auto text-sm">
              <tbody>
                <tr>
                  <td className="  border-[#eee] px-4 py-3 dark:border-strokedark ">
                    <h5 className="font-medium text-black dark:text-white">
                      Username
                    </h5>
                  </td>
                  <td className=" border-[#eee] px-4 py-3 dark:border-strokedark ">
                    <input
                      type="text"
                      {...register("username", {
                        required: true,
                      })}
                      placeholder="Enter username"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors.username && (
                      <span className="font-medium text-red ">
                        This field is required
                      </span>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="  border-[#eee] px-4 py-3 dark:border-strokedark ">
                    <h5 className="font-medium text-black dark:text-white">
                      Password
                    </h5>
                  </td>
                  <td className=" border-[#eee] px-4 py-3 dark:border-strokedark ">
                    <input
                      type="password"
                      {...register("password", {
                        required: true,
                      })}
                      placeholder="Enter password"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors.password && (
                      <span className="font-medium text-red ">
                        This field is required
                      </span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex w-full justify-end gap-4 px-4 text-center">
              <Link
                href={"/admin"}
                className="inline-flex w-26 items-center justify-center rounded-md border border-primary p-2 text-center font-medium text-primary hover:bg-opacity-90 "
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="flex w-26 justify-center rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="my-5 text-right">
        {isOpen ? (
          <CustomModal>
            <h2 className="text-xl text-black"> Admin Create </h2>
            <div className="mb-2 mt-4 text-lg text-green-600">
              Saved successfully
            </div>
            <div className="flex w-full items-center justify-center gap-4">
              <button
                onClick={closeModal}
                className="rounded-md bg-slate-500 px-3 py-1 text-white"
              >
                Ok
              </button>
            </div>
          </CustomModal>
        ) : (
          ""
        )}
        {createError ? (
          <CustomModal>
            <h2 className="text-xl text-black"> Admin Create </h2>
            <div className="mb-2 mt-4 text-lg text-red">Error!!</div>
            <div className="flex w-full items-center justify-center gap-4">
              <button
                onClick={closeError}
                className="rounded-md bg-slate-500 px-3 py-1 text-white"
              >
                Ok
              </button>
            </div>
          </CustomModal>
        ) : (
          ""
        )}
        {loading ? <Loader /> : ""}
      </div>
    </div>
  );
};

export default AdminCreate;