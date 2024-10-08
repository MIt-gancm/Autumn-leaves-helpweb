const helpContent = {
    install: {
        title: "如何安装Autumn-leaves脚本？",
        content: `
# 安装Autumn-leaves脚本

1. 首先，确保你的系统满足以下其一要求：
   - termux
   - Linux（deb系列推荐乌班图18 20 22）

2. 打开命令行终端，运行以下命令：

\`\`\`shell
# Termux

pkg upgrade -y & pkg update -y & pkg install git -y & git clone https://github.com/MIt-gancm/Autumn-leaves ~/.gancm 
# github
pkg upgrade -y & pkg update -y & pkg install git -y & git clone https://gitee.com/MIt-gancm/Autumn-leaves ~/.gancm 
# gitee

# Linux

apt upgrade -y & apt update -y  & akg install git -y & git clone https://github.com/MIt-gancm/Autumn-leaves .gancm 
# github
apt upgrade -y & apt update -y & akg install git -y & git clone https://gitee.com/MIt-gancm/Autumn-leaves .gancm 
# gitee
\`\`\`

3. 安装完成后，你可以通过以下命令验证安装：

\`\`\`bash
bash ~/.gancm/gancm
# 出现对话框就安装完成了
\`\`\`
        `
    },
why_not_run: {
    title: "报错脚本出问题了？",
    content: `
\`\`\`shell
rm -rfv ~/.gancm/gancm
# 安装了proot的一定要有备份
# Termux

pkg upgrade -y & pkg update -y & pkg install git -y & git clone https://github.com/MIt-gancm/Autumn-leaves ~/.gancm 
# github
pkg upgrade -y & pkg update -y & pkg install git -y & git clone https://gitee.com/MIt-gancm/Autumn-leaves ~/.gancm 
# gitee

# Linux

apt upgrade -y & apt update -y  & akg install git -y & git clone https://github.com/MIt-gancm/Autumn-leaves .gancm 
# github
apt upgrade -y & apt update -y & akg install git -y & git clone https://gitee.com/MIt-gancm/Autumn-leaves .gancm 
# gitee
\`\`\`
画饼~~（proot的有空换个位置存储方便一点）~~
不行截图问群友或者临时会话私信发群主~~高中一个月拿一次手机~~看到会回~~几百年吧可能~~
**请先查看:如何提供问题寻求帮助？ 和 提问的智慧！**
`},

How_to_ask_a_question: {
    title: "报错脚本出问题了？",
    content: `
# 发现错误 在错误界面精准截图
发现错误不要慌：
脚本执行带**警告**的部分截图
脚本执行带**错误**的部分截图
脚本执行带**报错日志**的部分截图
单开一个终端:
执行:
\`\`\`shell
uname -a
# 设备基本信息   排除框架问题
\`\`\`

# 发现错误 精准描述拒绝无用信息
在截图之后尽可能详细准确的描述你干了什么
执行脚本的命令是什么
在脚本里选择了什么
您尽可能描述问题我们就可以更方便的找到错误并更正

# 常见错误 _找不到xxx
像截图找不到wget
***
![这是图片](./images/not_fomund_xxx.png "找不到wget")
***
运行:
\`\`\`shell
pkg install wget -y
# termux
apt install wget -y
# Linux
# 还不行!?
apt remove wget -y & apt install wget -y
pkg remove wget -y & apt install wget -y
#wget 替换找不到的包的名字
\`\`\`

# 常见错误 _ 挂载不到桌面
像截图找不到桌面
***
![这是图片](./images/noX11.png "找不到桌面")
***
运行:
\`\`\`shell
vim ~/.gancm/MCserver/核心种类/版本/start.sh
# 在java命令后面加上 nogui
# 编辑按 i 
# 完成按 ESC 然后 : (必须是英文的冒号) wq (写入和退出) 回车完成
\`\`\`
**实在不行换核心**

# 常见错误 _ 手机管家
手机管家拦截
***
![这是图片](./images/safedog.png "拦截")
***
部分手机可能拦截proot安装或其他操作  冻结手机管家可以缓解问题
**自行查找安装软件冻结**
**冻结有风险关机一定记得解冻**
`}
    // 其他问题的内容...
};
