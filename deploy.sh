git pull
npm install -f
npm run build
pm2 delete everponicadmin
pm2 start npm --name everponicadmin -- start
