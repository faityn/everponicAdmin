import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import NewsList from "@/components/News/NewsList";

export const metadata: Metadata = {
  title: "Lound | Admin page",
  description: "Lound Admin page",
  icons: "/images/logo_head_mini_black.svg",
};

export default function Home() {
  return (
    <>
      <DefaultLayout allowedRoles={["Super Admin", "Admin"]}>
        <Breadcrumb parentName="News Manage" pageName="News List" />
        <div className="flex flex-col gap-10">
          <NewsList  />
        </div>
      </DefaultLayout>
    </>
  );
}
