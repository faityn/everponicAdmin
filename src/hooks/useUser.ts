"use server";

export const adminLogin = async (username: string, password: string) => {
  try {
    const raw = JSON.stringify({
      username: username,
      password: password,
    });

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: "POST",
      body: raw,
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    });
    console.log(response);

    const data = await response.json();

    console.log(data);
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
    //return error;
  }
};

export const userLogin = async (username: string, password: string) => {
  try {
    const raw = JSON.stringify({
      username: username,
      password: password,
    });
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: "POST",
        body: raw,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    //return error;
  }
};

export const getLoginData = async (token: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/auth/login_data`,
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
