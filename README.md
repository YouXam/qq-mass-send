# QQ 群发助手

更优雅，更快速，更便捷的 QQ 群发助手。

### 1. 运行程序

```bash
git clone https://github.com/YouXam/qq-mass-send.git
cd qq-mass-send
npm install
node index.js <account> --platform=<platform> -p=<port>
# account: QQ 账号
# platform: QQ 协议，1:安卓手机 2:aPad(默认) 3:安卓手表 4:MacOS 5:iPad
# port: 服务端口，默认为 3000
```

### 2. 打开浏览器

默认为 `http://localhost:3000`，如果你修改了端口，那么就是 `http://localhost:<port>`。  

### 3. 群发

1. 输入祝福语，称呼占位符为 `{name}`。
2. 选择需要群发的好友。
3. 选择每个好友的祝福语和称呼，支持对特定好友进行自定义祝福语。
4. 发送。

### 4. 保存配置

点击 `导出配置` 按钮，将配置保存到本地，下次需要群发时，只需要点击 `导入配置` 按钮，即可加载配置。