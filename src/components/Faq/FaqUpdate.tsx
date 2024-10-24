"use client";
import { faqDetailAtom } from "@/atom";
import getToken from "@/helper/getToken";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import CustomModal from "../Modal/Confirm";
import { useEffect, useState } from "react";
import Loader from "../common/Loader";
import { answerFaq, getFaqDetail } from "@/hooks/useEvents";
import NotFound from "../common/NotFound";
import TextEditor from "../Editor/TextEditor";

interface Props {
  id: number;
}

const FaqUpdate = ({ id }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [createError, setCreateError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [itemsDetail, setItemsDetail] = useRecoilState(faqDetailAtom);
  const [contentValue, setContentValue] = useState("");
  const [contentRequired, setContentRequired] = useState(false);

  const {
    handleSubmit,
    formState: {},
  } = useForm<FormData>();

  useEffect(() => {
    //eslint-disable-next-line react-hooks/exhaustive-deps
    getData();
  }, []);

  const getData = async () => {
    const userToken = getToken();
    const response = await getFaqDetail(String(userToken), id);

    if (response?.status) {
      setContentValue(response?.result?.responseObject?.content);
      setItemsDetail([response?.result?.responseObject]);
    } else {
      setNotFound(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    router.push(`/faq`);
  };

  const closeError = () => {
    setCreateError(false);
  };

  const handleEditorChange = (newContent: string) => {
    setContentValue(newContent);
  };

  const onSubmit: SubmitHandler<FormData> = async () => {
    if (contentValue === undefined) {
      setContentRequired(true);
    } else {
      setLoading(true);
      const answer = contentValue;

      const res = await answerFaq(answer, id);
      if (res?.status) {
        setIsOpen(true);
        setLoading(false);
      } else {
        setCreateError(true);
        setLoading(false);
      }
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white  pb-2.5 pt-4 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-4 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        {notFound && <NotFound />}
        {itemsDetail?.length > 0 &&
          itemsDetail?.map((item, index) => (
            <div key={index} className="max-w-203">
              <form onSubmit={handleSubmit(onSubmit)}>
                <table className=" w-full table-auto text-sm">
                  <tbody>
                    <tr>
                      <td className=" min-w-[130px] max-w-[160px] border-[#eee] px-4 py-3 dark:border-strokedark ">
                        <h5 className="font-medium text-black dark:text-white">
                          Name
                        </h5>
                      </td>
                      <td className=" border-[#eee] px-4 py-3 dark:border-strokedark ">
                        <div className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                          {item?.name}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className=" min-w-[130px] max-w-[160px] border-[#eee] px-4 py-3 dark:border-strokedark ">
                        <h5 className="font-medium text-black dark:text-white">
                          Email
                        </h5>
                      </td>
                      <td className=" border-[#eee] px-4 py-3 dark:border-strokedark ">
                        <div className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                          {item?.email}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className=" min-w-[130px] max-w-[160px] border-[#eee] px-4 py-3 dark:border-strokedark ">
                        <h5 className="font-medium text-black dark:text-white">
                          Title
                        </h5>
                      </td>
                      <td className=" border-[#eee] px-4 py-3 dark:border-strokedark ">
                        <div className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                          {item?.title}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className=" min-w-[130px] max-w-[160px] border-[#eee] px-4 py-3 dark:border-strokedark ">
                        <h5 className="font-medium text-black dark:text-white">
                          Answer
                        </h5>
                      </td>
                      <td className=" border-[#eee] px-4 py-3 dark:border-strokedark ">
                        <div className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: String(item?.answer),
                            }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="min-w-[200px] border-[#eee] px-4 py-3 dark:border-strokedark ">
                        <h5 className="font-medium text-black dark:text-white">
                          Insert Answer
                        </h5>
                      </td>
                      <td className=" border-[#eee] px-4 py-3 dark:border-strokedark ">
                        <TextEditor
                          initialValue=""
                          contentValue={contentValue}
                          onEditorChange={handleEditorChange}
                        />

                        {contentRequired && (
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
                    href={"/faq"}
                    className="inline-flex w-26 items-center justify-center rounded-md border border-primary p-2 text-center font-medium text-primary hover:bg-opacity-90 "
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="flex w-26 justify-center rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90"
                  >
                    Answer
                  </button>
                </div>
              </form>
            </div>
          ))}
      </div>
      <div className="my-5 text-right">
        {isOpen ? (
          <CustomModal>
            <h2 className="text-xl text-black"> Gallery </h2>
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
            <h2 className="text-xl text-black"> Gallery Create </h2>
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

export default FaqUpdate;
