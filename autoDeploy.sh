#!/bin/bash
log_file="./deploy.log"
log_time=$(date +"%Y-%m-%d %H:%M:%S")

git fetch origin

CHANGES=$(git log HEAD..origin/main --oneline)
if [ $CHANGES ]; then
    pm2 stop nest 
    pm2 delete nest 
    PORT=5555 pm2 start yarn --name "nest" -- start
    log_content="Deploy thành công"
else 
    log_content="Deploy thành công"
fi

echo "$log_time: $log_content" >> "$log_file"