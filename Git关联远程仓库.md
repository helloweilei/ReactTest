本地项目关联到远程git仓库
场景是这样的:在gitee-code上新建一个项目，gitee会帮你把项目初始化，初始化之后会根据你的选择生成默认的说明文件和gitignore文件。这个时候你就可以复制一下这个项目的地址，准备和本地的项目关联到一起了。

将这个场景扩大化，其实是将任意一个项目与git远程仓库关联到一起的过程。

完全空白项目关联
首先讲一种简单的场景，如果我们新建项目的时候没有生成任何的初始化文件，我们需要做的就是将本地的项目和空白的仓库关联起来，这种情况下的命令是：

#git初始化
git init
#设置remote地址
git remote add 地址
#将全部文件加入git版本管理 .的意思是将当前文件夹下的全部文件放到版本管理中
git add .
#提交文件 使用-m 编写注释
git commit -m "注释"
#推送到远程分支
git push
执行完以上操作，项目就与远程git仓库关联到了一起，可以正常使用了，去git项目页上可以看到刚刚提交的代码

有文件的项目关联
然后就考虑最开始说的情况，就是远程仓库里已经有文件，这时候你执行上面的步骤是不可以的，因为需要把远程仓库的文件先更新下来。步骤如下

#git初始化
git init
#设置remote地址
git remote add  origin 地址
#获取远程仓库master分支上的内容
git pull origin master
#将当前分支设置为远程仓库的master分支
git branch --set-upstream-to=origin/master master
#将全部文件加入git版本管理 .的意思是将当前文件夹下的全部文件放到版本管理中
git add .
#提交文件 使用-m 编写注释
git commit -m "注释"
#推送到远程分支
git push
这样操作就可以了。

设置仓库级别的用户名和邮箱
有时候需要使用多个git帐号，就对应的需要配置多个用户名和密码，git 配置相关的命令为 git config

#查看当前全部的配置
git config -l
1
2
执行这个命令会进入一个配置文件页，使用vim编辑器的推出命令退出 :wq

#全局级配置，如果没有仓库级别的特殊配置，默认读取这个配置
git config --global user.name "name"
git config --global user.email "email"

#仓库级配置，一般一个项目配置一次
git config user.name "name"
git config user.email "email"


文章来源：https://blog.csdn.net/vi_error/article/details/80608793