import { RoleEnum, UserCreatePayload, UserLoginPayload } from "@/types/User";
import apiClient from ".";
interface UserResponse {
  _id: string;
  role: RoleEnum;
  email: string;
  fullname: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken?: string;
  user: UserResponse;
}

export const registerUser = async (
  payload: UserCreatePayload
): Promise<UserResponse> => {
  const response = await apiClient.post<UserResponse>(
    "/auth/register",
    payload
  );
  return response.data;
};

export const loginUser = async (payload: UserLoginPayload): Promise<any> => {
  const response = await apiClient.post("/auth/login", payload);
  return response.data.data;
};

export const forgotPassword = async (payload: { email: string }) => {
  const response = await apiClient.post("/auth/forgot-password", payload);
  return response.data;
};

export const refreshToken = async (): Promise<{ accessToken: string }> => {
  const response = await apiClient.post("/auth/refresh-token");
  console.log(response);
  return response.data.data;
};
