module.exports = {
  apps : [{
    name: 'FrontendTimes',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 8003',
    watch: false,
    exec_mode: "fork",
  }, {
    // script: './service-worker/',
    // watch: ['./service-worker']
  }],

  // deploy : {
  //   production : {
  //     user : 'SSH_USERNAME',
  //     host : 'SSH_HOSTMACHINE',
  //     ref  : 'origin/master',
  //     repo : 'GIT_REPOSITORY',
  //     path : 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': ''
  //   }
  // }
};
