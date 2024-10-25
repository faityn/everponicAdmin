import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import NewsList from "@/components/News/NewsList";

export const metadata: Metadata = {
  title: "Everponic | Admin page - News Manage",
  icons: "/images/logo_head_mini_black.svg",
};

const NewsPage = () => {
  return (
    <DefaultLayout allowedRoles={["Super Admin"]}>
      <Breadcrumb parentName="News Manage" pageName="News List" />

      <div className="flex flex-col gap-10">
        <NewsList />
      </div>
    </DefaultLayout>
  );
};

export default NewsPage;
