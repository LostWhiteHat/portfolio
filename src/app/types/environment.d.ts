export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            GITHUB_ID: string;
            GITHUB_SECRET: string;
            LINKEDIN_ID: string;
            LINKEDIN_SECRET: string;
            EMAIL_SERVER_USER: string;
            EMAIL_SERVER_PASS: string;
            EMAIL_SERVER_HOST: string;
            EMAIL_SERVER_PORT: number;
            EMAIL_FROM: string;
            DATABASE_HOST: string;
            DATABASE_USER: string;
            DATABASE_USER_PORTFOLIO: string;
            DATABASE_PASS: string;
            DATABASE_PASS_PORTFOLIO: string;
            DATABASE_SCHEMA: string;
            DATABASE_SCHEMA_PORTFOLO: string;
            DATABASE_PORT: number;
        }
    }
}
