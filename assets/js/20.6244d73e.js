(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{602:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"macos、linux-系统制作自定义脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos、linux-系统制作自定义脚本"}},[s._v("#")]),s._v(" MacOS、Linux 系统制作自定义脚本")]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",[a("strong",[s._v("文章转载请标明地址与出处！")])])]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("如今的电脑系统越来越强大，功能越来越多。为了方便用户的使用，开发者们会按使用频率、重要性等指标对系统的功能进行归类、折叠。这就造成我们想使用一个一般用户不经常使用的功能时，需要寻找到很深的路径才可以使用到。而自定义脚本可以帮助我们简化很多寻找的成本，将一些一般用户不常使用，专业人员却经常使用的功能变的方便使用。接下来我们通过一个实际案例看看如何制作一个自定义脚本。")]),s._v(" "),a("blockquote",[a("p",[s._v("注意：本文操作系统均使用 MacOS，其他系统部分操作可能会不同。")])]),s._v(" "),a("h2",{attrs:{id:"案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[s._v("#")]),s._v(" 案例")]),s._v(" "),a("p",[s._v("现在很多互联网为了提升网络的安全性，会建立自己的内网。所以每个在公司且需要连接公司内网的电脑都需要更改 DNS，而修改 DNS 无论在哪个系统都相当的麻烦。而且有些开发者会选择使用自己的电脑办公，回到家还得将 DNS 改为默认状态，大大增加了操作频率。所以需要自定义脚本来简化操作。")]),s._v(" "),a("h2",{attrs:{id:"创建编写可执行脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建编写可执行脚本"}},[s._v("#")]),s._v(" 创建编写可执行脚本")]),s._v(" "),a("p",[s._v("首先，我们需要打开终端，然后使用 "),a("code",[s._v("cd")]),s._v(" 指令进入自己想储存脚本的目录下，使用指令新建一个脚本文件：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" fileName.sh\n")])])]),a("p",[s._v("命令中 "),a("code",[s._v("fileName")]),s._v(" 是我们所创建的文件名，建议根据脚本功能起一个简单易懂的名称，比如 configDNS.sh。后续我们使用时会经常用到名称。创建好脚本文件后，我们使用命令将其打开：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" fileName.sh\n")])])]),a("p",[s._v("打开文件后我们是无法输入内容的，键入“ i ”键切换到输入模式才能编辑内容。我们解决本案例的脚本如下：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${1}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$type")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~ ^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        networksetup -setdnsservers Wi-Fi "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$type")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"已设置DNS为'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$type")]),s._v('"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"XXXX"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        networksetup -setdnsservers Wi-Fi XXX.XXX.XX.XXX\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"已设置DNS为XXXX：XXX.XXX.XX.XXX"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n        networksetup -setdnsservers Wi-Fi empty\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"已设置DNS为默认值"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    networksetup -setdnsservers Wi-Fi empty\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"已设置DNS为默认值"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),a("p",[s._v("脚本会接收运行时传入的第一个参数，并做判断：")]),s._v(" "),a("ol",[a("li",[s._v("如果我们输入的是 xxx.xxx.xxx.xxx（x 为数字，不限位数），则将 DNS 设为我们输入的参数。")]),s._v(" "),a("li",[s._v("如果我们输入的是 xxxx（xxxx 为我们定义的特殊参数，可自定义这个参数名称），则将 DNS设为我们在脚本中写死的 xxx.xxx.xx.xxx。")]),s._v(" "),a("li",[s._v("如果没有匹配到前两个（参数未识别到或未输入参数），则将 DNS 清空，清空后可正常上网，相当于回复默认。")])]),s._v(" "),a("p",[s._v("根据上面的解释，我们可以对脚本进行定制化，将公司的 DNS 写死到脚本中，方便我们经常操作。如果常用的 DNS 比较多，则可以多复制几个 2 判断逻辑进行定制化。")]),s._v(" "),a("p",[s._v("编辑完文件后，我们需要键入 “Esc” 键，然后键入 “:” 键切换到底线命令模式（注意 “:” 需要同时使用 “Shift” 键来输入），然后输入 "),a("code",[s._v("wq")]),s._v(" 并键入“回车”键来保存并退出。如此一来，我们就完成了可执行文件的编写。")]),s._v(" "),a("blockquote",[a("p",[s._v("注意：脚本内容中 "),a("code",[s._v("networksetup -setdnsservers Wi-Fi")]),s._v(" 为 MacOS 中更改 DNS 的指令，其他系统需要作出相应调整。")])]),s._v(" "),a("h2",{attrs:{id:"修改文件读写权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改文件读写权限"}},[s._v("#")]),s._v(" 修改文件读写权限")]),s._v(" "),a("p",[s._v("当我们创建完可执行脚本后，直接在当前终端输入完整的文件名，我们便可以运行脚本。但是我们发现，我输入文件时需要输入包括后缀名 "),a("code",[s._v(".sh")]),s._v(" 的完整文件名才可以执行，这一点都不像指令，所以我们可以将文件名的后缀名删除：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" fileName.sh fileName \n")])])]),a("p",[s._v("删除后缀名之后，我们需要修改文件的读写权限以防无法执行以及预防一些安全问题：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" u+x fileName\n")])])]),a("p",[s._v("这个指令是将文件的执行权限修改为“所属者”才能执行。修改完成后我们可以试着运行一下脚本：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("fileName\n")])])]),a("p",[s._v("这样我们就可以不用输入后缀名，直接输入文件名来执行脚本了。但是我们又发现了一个问题，当我终端离开当前路径后，输入文件名是无法执行脚本的，那么我们该如何解决呢？")]),s._v(" "),a("h2",{attrs:{id:"设置软连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置软连接"}},[s._v("#")]),s._v(" 设置软连接")]),s._v(" "),a("p",[s._v("在 MacOS 系统中，bin 目录是一个已经包含在环境变量里的目录，程序放在里面或者链接到里面就可以在终端里直接执行。其中 MacOS 的 "),a("code",[s._v("usr/bin")]),s._v(" 目录是不允许增删文件的，可以通过向 "),a("code",[s._v("usr/local/bin")]),s._v(" 目录增删文件来实现在终端里直接运行，往后者里面增删文件只要有管理员权限就可以了。所以我们可以将脚本文件软连接到这个目录即可。")]),s._v(" "),a("p",[s._v("我们这里之所以选择软连接是因为这个案例的脚本没必要硬链接到 bin 目录。在链接的选择上我们需要根据脚本是否常用、脚本是否经常变动、脚本大小等多个方位去考虑。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /Users/XXX/XXX/fileName /usr/local/bin\n")])])]),a("p",[s._v("此命令就是设置软连接，即将 "),a("code",[s._v("/Users/XXX/XXX/fileName")]),s._v(" 链接到 "),a("code",[s._v("/usr/local/bin")]),s._v(" 目录内。"),a("code",[s._v("/Users/XXX/XXX/fileName")]),s._v(" 是文件的绝对路径，我们可以将文件从访达中拖入终端来查看文件的绝对路径。自此，我们就可以在任意位置的终端中使用命令来运行我们写的自定义脚本了！")]),s._v(" "),a("h2",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[s._v("#")]),s._v(" 最后")]),s._v(" "),a("p",[s._v("文中涉及到很多知识点，这些知识点每一个拿出来都能写一本书。所以文章是从解决问题的角度去将知识点一笔带过的。这里将文中出现过的知识点罗列下来，以便感兴趣的读者查阅了解：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/88898038",target:"_blank",rel:"noopener noreferrer"}},[s._v("macOS 终端常用命令大全"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.runoob.com/linux/linux-vim.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("vim 的介绍及教程"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.runoob.com/linux/linux-shell.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("shell 的介绍及教程"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.linuxprobe.com/soft-and-hard-links.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("“软连接”和“硬链接”的区别"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);