import { loadEnvConfig } from "@next/env";

loadEnvConfig(".");

export const rootPath = __dirname;
export const { PORT } = process.env;
