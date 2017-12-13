module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'med-share',
      cwd: '/code/virus_source_app',
      script: './server.js',
      env: {
        NODE_ENV: 'production',
        COMMON_VARIABLE: 'true',
      },
      env_development: {
        NODE_ENV: 'development',
      },
      watch: false,
      ignore_watch: ['logs', 'node_modules', 'pem'],
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    development: {
      // user: 'root',
      // host: '47.93.158.148',
      ref: 'origin/master',
      repo: 'https://github.com/excalibur233/virus_source.git',
      path: '/code/virus_source_app',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env development',
      env: {
        NODE_ENV: 'development',
      },
    },
    production: {
      // user: 'root',
      // host: '47.93.158.148',
      ref: 'origin/master',
      repo: 'https://github.com/excalibur233/virus_source.git',
      path: '/code/virus_source_app',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      env: {
        NODE_ENV: 'production',
      },
    },
  },
};
