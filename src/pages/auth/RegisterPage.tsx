import { registerSchema } from "@/schemas/userSchema";
import { registerUser } from "@/services/authServices";
import { UserCreatePayload } from "@/types/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const nav = useNavigate();

  const onSubmit = async (data: UserCreatePayload) => {
    try {
      await registerUser(data);
      toast.success("Registration successful! Please login.");
      nav("/login");
    } catch (err: any) {
      toast.error(err.response.data || "Registration failed");
      reset();
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Register Now!</h1>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Email
        </label>
        <input
          type="email"
          placeholder="Email..."
          {...register("email", { required: true })}
          className="form-control"
        />
        {errors.email && (
          <span className="text-danger">{errors.email.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Fullname
        </label>
        <input
          type="text"
          placeholder="Fulname..."
          {...register("fullname", { required: true })}
          className="form-control"
        />
        {errors.fullname && (
          <span className="text-danger">{errors.fullname.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Password
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
        <button className="w-100 btn btn-primary">Register</button>
      </div>
    </form>
  );
};

export default RegisterPage;
