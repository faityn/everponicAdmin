git pull
npm install -f
npm run build
pm2 delete everponicAdmin
pm2 start npm --name everponicAdmin -- start
