module.exports = {
  apps: [
    {
      name: "truyenhot-frontend",
      script: ".output/server/index.mjs",
      exec_mode: "fork",
      watch: false,
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
