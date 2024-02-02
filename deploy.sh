#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

#push_addr=`git remote get-url --push origin` # git提交地址，也可以手动设置，比如：push_addr=git@github.com:xugaoyi/vuepress-theme-vdoing.git
# if [ -z "$GITHUB_TOKEN" ]; then
#     push_addr=`git remote get-url --push origin`
#     # 解决node报错
#     export NODE_OPTIONS=--openssl-legacy-provider 
# else
push_addr=`git remote get-url --push origin`
push_addr=`echo $push_addr | awk -F'://' '{print $2}'`
push_addr=https://zhangxiang:${GITHUB_TOKEN}@${push_addr}
git config user.email "501696487@qq.com"
git config user.name "zhangxiang"
# fi
commit_info=`git describe --all --always --long`
dist_path=dist # 打包生成的文件夹路径
push_branch=trunk # 推送的分支

# 生成静态文件
npm run build

# 进入生成的文件夹
cd $dist_path

git init
git add -A
git commit -m "deploy, $commit_info"
# 输出上传路径
echo $push_addr
git push -f $push_addr HEAD:$push_branch

cd -
rm -rf $dist_path