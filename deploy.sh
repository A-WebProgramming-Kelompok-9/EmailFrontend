#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add --all
git checkout --orphan gh-pages
git commit -m "gh-pages"
git remote add origin https://github.com/yuriko192/emailclient-vue
git push origin gh-pages -f

cd -