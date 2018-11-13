module.exports = {
  apps : [{
    name: 'discord-profiler',
    script: 'main.js',

    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
  }],
  };
