const crypto = require('crypto');

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name: 'lg-training',
      script: './server.js',
      env: {
        NODE_ENV: process.NODE_ENV,
        PORT: process.env.PORT || 8000
      },
      watch: process.env.NODE_ENV !== 'production',
      exec_interpreter: 'node',
      instances: 'max',
      exec_mode: 'cluster',
      ignore_watch: ['node_modules', '.vscode', 'test', 'logs', '__test__', 'src', 'e2e'],
      wait_ready: true,
      max_restarts: 4,
      restart_delay: 6000,
      kill_timeout : 7000,
      source_map_support: true,
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      merge_logs: true,
      log_date_format : 'DD-MM-YYYY HH:mm Z'
    }
  ],
};
