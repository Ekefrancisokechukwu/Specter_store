import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

const Register = () => {
  return (
    <div className="px-8 pb-6 pt-3">
      <h1 className="text-center">
        <Link href={"/"} className="font-semibold text-xl inline-block mt-2">
          Specter Store
        </Link>
      </h1>

      <RegisterForm />
    </div>
  );
};

export default Register;
