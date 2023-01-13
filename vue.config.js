const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
	publicPath: process.env.NODE_ENV === "production" ? "/slot-machine" : "/",
	css: {
		loaderOptions: {
			sass: {
				prependData: '@import "@/assets/styles/style.scss";'
			}
		}
	}
})
