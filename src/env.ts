import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		SERVER_NAME: z.string().default("My Server name"),
		SERVER_ADDRESS: z.string().default("localhost"),
		SERVERTAP_ADDRESS: z.string(),
		MAP_ADDRESS: z.string().optional(),
		SERVER_ABOUT_FILE: z.string().optional(),
	},
	client: {},
	runtimeEnv: {
		SERVER_NAME: process.env.SERVER_NAME,
		SERVER_ADDRESS: process.env.SERVER_ADDRESS,
		SERVERTAP_ADDRESS: process.env.SERVERTAP_ADDRESS,
		MAP_ADDRESS: process.env.MAP_ADDRESS,
		SERVER_ABOUT_FILE: process.env.SERVER_ABOUT_FILE,
	},
});

