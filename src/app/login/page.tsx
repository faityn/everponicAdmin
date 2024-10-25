import { Metadata } from "next";
import AuthLayout from "@/components/Layouts/AuthLayout";
import Login from "@/components/Login/Login";

export const metadata: Metadata = {
  title: "Everponic | Admin page - Login",
  icons: "/images/logo_head_mini_black.svg",
};

const LoginPage = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
};

export default LoginPage;
