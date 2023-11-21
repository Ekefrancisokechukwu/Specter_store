"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "./ui/use-toast";
import { customFetch } from "@/lib/utils";
import { AxiosError } from "axios";
import { Loader } from "lucide-react";
import { useAppDispatch } from "@/redux/store";
import { loginUser } from "@/redux/features/user/userSlice";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [inputValues, setInputValues] = useState({
    identifier: "",
    password: "",
  });
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      inputValues.identifier.trim() === "" ||
      inputValues.password.trim() === ""
    )
      return;
    setLoading(true);

    try {
      const response = await customFetch.post("/auth/local", inputValues);
      toast({
        title: "Login successfully",
      });
      dispatch(loginUser(response.data));
      router.push("/cart");
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
      <h1 className="text-2xl text-center">Enter your details to sign in.</h1>

      <div className="mt-12">
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          name="identifier"
          value={inputValues.identifier}
          onChange={handleInputChange}
          className="text-lg"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="Password">Password</label>
        <Input
          id="Password"
          type="password"
          name="password"
          value={inputValues.password}
          onChange={handleInputChange}
          className="text-lg"
        />
      </div>
      <div className="flex justify-between items-center mt-9">
        <p>
          Not a member yet{" "}
          <Link href={"/register"} className="text-destructive font-semibold">
            Join Us
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
export default LoginForm;
