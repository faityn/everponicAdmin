import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import NewsCreate from "@/components/News/NewsCreate";

export const metadata: Metadata = {
  title: "Lound | Admin page - News Manage",
  icons: "/images/favicon.ico",
};

const NewsCreatePage = () => {
  return (
    <DefaultLayout allowedRoles={["Super Admin"]}>
      <Breadcrumb parentName="News Manage" pageName="News Create" />

      <div className="flex flex-col gap-10">
        <NewsCreate />
      </div>
    </DefaultLayout>
  );
};

export default NewsCreatePage;
