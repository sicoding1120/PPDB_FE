
export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponse {
    status: string;
    message: string;
}