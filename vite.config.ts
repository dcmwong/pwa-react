import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
	registerType: "prompt",
	includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
	manifest: {
		name: "Travel App",
		short_name: "TravelApp",
		description: "An app to test PWAs", 
		icons: [
			{
				src: "/maskable_icon.png",
				sizes: "225x225",
				type: "image/png",
				purpose: "any maskable",
			},
		],
		theme_color: "#171717",
		background_color: "#e8ebf2",
		display: "standalone",
		scope: "/",
		start_url: "/",
		orientation: "portrait",
	},
};
// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [react(), VitePWA(manifestForPlugin)],
});
