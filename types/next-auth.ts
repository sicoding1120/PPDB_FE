import { Session } from "inspector/promises";

declare module "next-auth" {
    interface Session {
        user: {
            id: number | undefined | null;
            email: string | undefined | null;
            name: string | undefined | null;
            accessToken: any;
            refreshToken: any;
            token: any;
            image: string | undefined | null;
            role: string | undefined | null;
        }
    }
}