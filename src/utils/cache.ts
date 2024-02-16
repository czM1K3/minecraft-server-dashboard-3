import NodeCache from "node-cache";

declare global {
	namespace globalThis {
		var cache: NodeCache;
	}
}

let cache: NodeCache;

if (process.env.NODE_ENV === "production") {
	cache = new NodeCache();
} else {
	if (!global.cache) {
		global.cache = new NodeCache();
	}
	cache = global.cache;
}

export default cache;

