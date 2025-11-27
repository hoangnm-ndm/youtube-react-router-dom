import { loginSchema } from "@/schemas/userSchema";
import { loginUser } from "@/services/authServices";
import { UserLoginPayload } from "@/types/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const nav = useNavigate();

  const onSubmit = async (data: UserLoginPayload) => {
    try {
      const res = await loginUser(data);
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("accessToken", res.accessToken);
      toast.success("Login successful!");
      nav("/");
    } catch (err: any) {
      console.log(err);
      toast.error(err.response.data);
      reset();
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Log In Now!</h1>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Email
        </label>
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
          className="form-control"
        />
        {errors.email && (
          <span className="text-danger">{errors.email.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label">
          password
        </label>
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
          className="form-control"
        />
        {errors.password && (
          <span className="text-danger">{errors.password.message}</span>
        )}
      </div>

      <div className="mb-3">
        <button className="w-100 btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default LoginPage;
