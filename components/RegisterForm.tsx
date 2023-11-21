"use client";

import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { customFetch } from "@/lib/utils";
import { toast } from "./ui/use-toast";
import { AxiosError } from "axios";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const user = useAppSelector((state) => state.userState.user);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      inputValues.email.trim() === "" ||
      inputValues.username.trim() === "" ||
      inputValues.password.trim() === ""
    )
      return;
    setLoading(true);

    try {
      const response = await customFetch.post(
        "auth/local/register",
        inputValues
      );
      toast({
        title: "Registered successfully",
      });
      router.push("/login");
      return response.data;
    } catch (error) {
      const errorMessage = error as AxiosError<ApiErrorResponse>;
      const message =
        errorMessage?.response?.data?.error.message ||
        "please double check your credentials";
      toast({
        variant: "destructive",
        title: message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[30rem] w-full mx-auto mt-5">
      <h1 className="font-semibold text-xl text-center ">Sign Up</h1>
      <h1 className="text-2xl max-[400px]:text-xl text-center mt-3">
        Enter your details to Sign Up.
      </h1>

      <div className="mt-12 relative">
        <label htmlFor="name">Name</label>
        <Input
          id="name"
          name="username"
          type="name"
          className={`text-lg`}
          value={inputValues.username}
          onChange={handleInputChange}
        />
      </div>

      <div className="mt-6 relative">
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          name="email"
          type="email"
          value={inputValues.email}
          onChange={handleInputChange}
          className="text-lg"
        />
      </div>

      <div className="mt-6 relative">
        <label htmlFor="Password">Password</label>
        <Input
          name="password"
          type="password"
          id="password"
          className="text-lg"
          onChange={handleInputChange}
        />
      </div>

      <div className="flex justify-between items-center mt-9">
        <p>
          Already a member{" "}
          <Link href={"/login"} className="text-destructive font-semibold">
            Log in
          </Link>{" "}
        </p>

        <Button
          disabled={loading}
          type="submit"
          className=" ml-auto  rounded-3xl font-semibold"
        >
          {loading ? <Loader className="animate-spin" /> : "Continue"}
        </Button>
      </div>
    </form>
  );
};
export default RegisterForm;
