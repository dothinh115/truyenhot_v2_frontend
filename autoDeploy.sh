#!/bin/bash
log_file="./deploy.log"
log_time=$(date +"%Y-%m-%d %H:%M:%S")

git fetch origin
wait

CHANGES="$(git log HEAD..origin/main --oneline)"
if [ -n "$CHANGES" ]; then
    pm2 stop nuxt 
    wait
    git pull origin main
    yarn install
    wait
    yarn build
    wait
    PORT=3000 pm2 start yarn --name "nuxt" -- start
    wait
    log_content="Deploy thành công"
else 
    log_content="Không có gì thay đổi"
fi

echo "$log_time: $log_content" >> "$log_file"
