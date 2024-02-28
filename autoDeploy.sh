#!/bin/bash
log_file="./deploy.log"
log_time=$(date +"%Y-%m-%d %H:%M:%S")

git fetch origin

CHANGES=$(git log HEAD..origin/main --oneline)
if [ $CHANGES ]; then
    git pull origin main
    pm2 stop nuxt 
    pm2 delete nuxt 
    yarn install
    yarn build
    PORT=3000 pm2 start yarn --name "nuxt" -- start
    log_content="Deploy thành công"
else 
    log_content="Deploy thành công"
fi

echo "$log_time: $log_content" >> "$log_file"