(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{551:function(e,t,a){"use strict";a.r(t);var s=a(20),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("当项目大规模使用 Docker 时，容器通信的问题也就产生了。要解决容器通信问题，必须先了解很多关于网络的知识。Docker 作为目前最火的轻量级容器技术，有很多令人称道的功能，如 Docker 的镜像管理。然而，Docker 同样有着很多不完善的地方，网络方面就是 Docker 比较薄弱的部分。因此，我们有必要深入了解 Docker 的网络知识，以满足更高的网络需求。")]),e._v(" "),a("h2",{attrs:{id:"默认网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认网络"}},[e._v("#")]),e._v(" 默认网络")]),e._v(" "),a("p",[e._v("安装 Docker 以后，会默认创建三种网络，可以通过 "),a("code",[e._v("docker network ls")]),e._v(" 查看。")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("[root@localhost ~]# docker network ls\nNETWORK ID          NAME                DRIVER              SCOPE\n688d1970f72e        bridge              bridge              local\n885da101da7d        host                host                local\nf4f1b3cf1b7f        none                null                local\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("在学习 Docker 网络之前，我们有必要先来了解一下这几种网络模式都是什么意思。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/2e/2e91e1e707ce9bba410b28b0c0711862.png",alt:"img"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2018.cnblogs.com%2Fblog%2F1250063%2F201905%2F1250063-20190504141152194-1554812372.png&refer=http%3A%2F%2Fimg2018.cnblogs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644649106&t=59cea2a90bf8f7180cbd9db0ee39f6f5",alt:"img"}})]),e._v(" "),a("h3",{attrs:{id:"bridge-网络模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bridge-网络模式"}},[e._v("#")]),e._v(" bridge 网络模式")]),e._v(" "),a("p",[e._v("在该模式中，Docker 守护进程创建了一个虚拟以太网桥 "),a("code",[e._v("docker0")]),e._v("，新建的容器会自动桥接到这个接口，附加在其上的任何网卡之间都能自动转发数据包。")]),e._v(" "),a("p",[e._v("默认情况下，守护进程会创建一对对等虚拟设备接口 "),a("code",[e._v("veth pair")]),e._v("，将其中一个接口设置为容器的 "),a("code",[e._v("eth0")]),e._v(" 接口（容器的网卡），另一个接口放置在宿主机的命名空间中，以类似 "),a("code",[e._v("vethxxx")]),e._v(" 这样的名字命名，从而将宿主机上的所有容器都连接到这个内部网络上。")]),e._v(" "),a("p",[e._v("比如我运行一个基于 "),a("code",[e._v("busybox")]),e._v(" 镜像构建的容器 "),a("code",[e._v("bbox01")]),e._v("，查看 "),a("code",[e._v("ip addr")]),e._v("：")]),e._v(" "),a("blockquote",[a("p",[e._v("busybox 被称为嵌入式 Linux 的瑞士军刀，整合了很多小的 unix 下的通用功能到一个小的可执行文件中。")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/22/22294d0ff75d0537a339bb4a68156cae.png",alt:"img"}})]),e._v(" "),a("p",[e._v("然后宿主机通过 "),a("code",[e._v("ip addr")]),e._v(" 查看信息如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/96/96f90c91c36ab4856b622b9ec89c22ca.png",alt:"img"}})]),e._v(" "),a("p",[e._v("通过以上的比较可以发现，证实了之前所说的：守护进程会创建一对对等虚拟设备接口 "),a("code",[e._v("veth pair")]),e._v("，将其中一个接口设置为容器的 "),a("code",[e._v("eth0")]),e._v(" 接口（容器的网卡），另一个接口放置在宿主机的命名空间中，以类似 "),a("code",[e._v("vethxxx")]),e._v(" 这样的名字命名。")]),e._v(" "),a("p",[e._v("同时，守护进程还会从网桥 "),a("code",[e._v("docker0")]),e._v(" 的私有地址空间中分配一个 IP 地址和子网给该容器，并设置 docker0 的 IP 地址为容器的默认网关。也可以安装 "),a("code",[e._v("yum install -y bridge-utils")]),e._v(" 以后，通过 "),a("code",[e._v("brctl show")]),e._v(" 命令查看网桥信息。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/ef/ef543e4801d2452b89ce10717da6f75f.png",alt:"img"}})]),e._v(" "),a("p",[e._v("对于每个容器的 IP 地址和 Gateway 信息，我们可以通过 "),a("code",[e._v("docker inspect 容器名称 | ID")]),e._v(" 进行查看，在 "),a("code",[e._v("NetworkSettings")]),e._v(" 节点中可以看到详细信息。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/02/029eb7068eef9dd25a6c1a1f6240f83d.png",alt:"img"}})]),e._v(" "),a("p",[e._v("我们可以通过 "),a("code",[e._v("docker network inspect bridge")]),e._v(" 查看所有 "),a("code",[e._v("bridge")]),e._v(" 网络模式下的容器，在 "),a("code",[e._v("Containers")]),e._v(" 节点中可以看到容器名称。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/da/dac4584faa00f34d334812f6f321f507.png",alt:"img"}})]),e._v(" "),a("blockquote",[a("p",[e._v("关于 "),a("code",[e._v("bridge")]),e._v(" 网络模式的使用，只需要在创建容器时通过参数 "),a("code",[e._v("--net bridge")]),e._v(" 或者 "),a("code",[e._v("--network bridge")]),e._v(" 指定即可，当然这也是创建容器默认使用的网络模式，也就是说这个参数是可以省略的。")])]),e._v(" "),a("p",[e._v("Bridge 桥接模式的实现步骤主要如下：")]),e._v(" "),a("ul",[a("li",[e._v("Docker Daemon 利用 veth pair 技术，在宿主机上创建一对对等虚拟网络接口设备，假设为 veth0 和 veth1。而")])]),e._v(" "),a("p",[e._v("veth pair 技术的特性可以保证无论哪一个 veth 接收到网络报文，都会将报文传输给另一方。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Docker Daemon 将 veth0 附加到 Docker Daemon 创建的 docker0 网桥上。保证宿主机的网络报文可以发往 veth0；")])]),e._v(" "),a("li",[a("p",[e._v("Docker Daemon 将 veth1 添加到 Docker Container 所属的 namespace 下，并被改名为 eth0。如此一来，宿主机的网络报文若发往 veth0，则立即会被 Container 的 eth0 接收，实现宿主机到 Docker Container 网络的联通性；同时，也保证 Docker Container 单独使用 eth0，实现容器网络环境的隔离性。")])])]),e._v(" "),a("h3",{attrs:{id:"host-网络模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host-网络模式"}},[e._v("#")]),e._v(" host 网络模式")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("host 网络模式需要在创建容器时通过参数 "),a("code",[e._v("--net host")]),e._v(" 或者 "),a("code",[e._v("--network host")]),e._v(" 指定；")])]),e._v(" "),a("li",[a("p",[e._v("采用 host 网络模式的 Docker Container，可以直接使用宿主机的 IP 地址与外界进行通信，若宿主机的 eth0 是一个公有 IP，那么容器也拥有这个公有 IP。同时容器内服务的端口也可以使用宿主机的端口，无需额外进行 NAT 转换；")])]),e._v(" "),a("li",[a("p",[e._v("host 网络模式可以让容器共享宿主机网络栈，这样的好处是外部主机与容器直接通信，但是容器的网络缺少隔离性。")])])]),e._v(" "),a("p",[e._v("比如我基于 "),a("code",[e._v("host")]),e._v(" 网络模式创建了一个基于 "),a("code",[e._v("busybox")]),e._v(" 镜像构建的容器 "),a("code",[e._v("bbox02")]),e._v("，查看 "),a("code",[e._v("ip addr")]),e._v("：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/a1/a135beb32e9a9ee30573fedfdc3166df.png",alt:"img"}})]),e._v(" "),a("p",[e._v("然后宿主机通过 "),a("code",[e._v("ip addr")]),e._v(" 查看信息如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/ca/ca8d882de4b1c0cc6863ce35a379ce9b.png",alt:"img"}})]),e._v(" "),a("p",[e._v("对，你没有看错，返回信息一模一样，我也可以肯定我没有截错图，不信接着往下看。我们可以通过 "),a("code",[e._v("docker network inspect host")]),e._v(" 查看所有 "),a("code",[e._v("host")]),e._v(" 网络模式下的容器，在 "),a("code",[e._v("Containers")]),e._v(" 节点中可以看到容器名称。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/5c/5c2a42edd2c5ee42ed90613d3cf9b7c9.png",alt:"img"}})]),e._v(" "),a("h3",{attrs:{id:"none-网络模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#none-网络模式"}},[e._v("#")]),e._v(" none 网络模式")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("none 网络模式是指禁用网络功能，只有 lo 接口 local 的简写，代表 127.0.0.1，即 localhost 本地环回接口。在创建容器时通过参数 "),a("code",[e._v("--net none")]),e._v(" 或者 "),a("code",[e._v("--network none")]),e._v(" 指定；")])]),e._v(" "),a("li",[a("p",[e._v("none 网络模式即不为 Docker Container 创建任何的网络环境，容器内部就只能使用 loopback 网络设备，不会再有其他的网络资源。可以说 none 模式为 Docke Container 做了极少的网络设定，但是俗话说得好 “少即是多”，在没有网络配置的情况下，作为 Docker 开发者，才能在这基础做其他无限多可能的网络定制开发。这也恰巧体现了 Docker 设计理念的开放。")])])]),e._v(" "),a("p",[e._v("比如我基于 "),a("code",[e._v("none")]),e._v(" 网络模式创建了一个基于 "),a("code",[e._v("busybox")]),e._v(" 镜像构建的容器 "),a("code",[e._v("bbox03")]),e._v("，查看 "),a("code",[e._v("ip addr")]),e._v("：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/da/da89a711e2cd1533f387af7279bf1254.png",alt:"img"}})]),e._v(" "),a("p",[e._v("我们可以通过 "),a("code",[e._v("docker network inspect none")]),e._v(" 查看所有 "),a("code",[e._v("none")]),e._v(" 网络模式下的容器，在 "),a("code",[e._v("Containers")]),e._v(" 节点中可以看到容器名称。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/7c/7cbb2b6c4794f16d58d60d5b2f2896c4.png",alt:"img"}})]),e._v(" "),a("h3",{attrs:{id:"container-网络模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-网络模式"}},[e._v("#")]),e._v(" container 网络模式")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Container 网络模式是 Docker 中一种较为特别的网络的模式。在创建容器时通过参数 "),a("code",[e._v("--net container: 已运行的容器名称 | ID")]),e._v(" 或者 "),a("code",[e._v("--network container: 已运行的容器名称 | ID")]),e._v(" 指定；")])]),e._v(" "),a("li",[a("p",[e._v("处于这个模式下的 Docker 容器会共享一个网络栈，这样两个容器之间可以使用 localhost 高效快速通信。")])])]),e._v(" "),a("p",[a("strong",[e._v("Container 网络模式即新创建的容器不会创建自己的网卡，配置自己的 IP，而是和一个指定的容器共享 IP、端口范围等")]),e._v("。同样两个容器除了网络方面相同之外，其他的如文件系统、进程列表等还是隔离的。")]),e._v(" "),a("p",[e._v("比如我基于容器 "),a("code",[e._v("bbox01")]),e._v(" 创建了 "),a("code",[e._v("container")]),e._v(" 网络模式的容器 "),a("code",[e._v("bbox04")]),e._v("，查看 "),a("code",[e._v("ip addr")]),e._v("：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/81/818952cc487b2c0cd82820390e81380c.png",alt:"img"}})]),e._v(" "),a("p",[e._v("容器 "),a("code",[e._v("bbox01")]),e._v(" 的 "),a("code",[e._v("ip addr")]),e._v(" 信息如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/85/85fb9c1c02d952d13e5354b6f44f4314.png",alt:"img"}})]),e._v(" "),a("p",[e._v("宿主机的 "),a("code",[e._v("ip addr")]),e._v(" 信息如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/ef/efedaafb1629d26f4da4f0148e2d14af.png",alt:"img"}})]),e._v(" "),a("p",[e._v("通过以上测试可以发现，Docker 守护进程只创建了一对对等虚拟设备接口用于连接 bbox01 容器和宿主机，而 bbox04 容器则直接使用了 bbox01 容器的网卡信息。")]),e._v(" "),a("p",[e._v("这个时候如果将 bbox01 容器停止，会发现 bbox04 容器就只剩下 lo 接口了。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/49/49e89f8df52174bdfb44a8af282e94c3.png",alt:"img"}})]),e._v(" "),a("p",[e._v("然后 bbox01 容器重启以后，bbox04 容器也重启一下，就又可以获取到网卡信息了。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/ef/ef73e34a579593fc63f5fe124ab9bdd4.png",alt:"img"}})]),e._v(" "),a("h3",{attrs:{id:"link"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[e._v("#")]),e._v(" link")]),e._v(" "),a("p",[a("code",[e._v("docker run --link")]),e._v(" 可以用来链接两个容器，使得源容器（被链接的容器）和接收容器（主动去链接的容器）之间可以互相通信，并且接收容器可以获取源容器的一些数据，如源容器的环境变量。")]),e._v(" "),a("p",[e._v("这种方式"),a("strong",[e._v("官方已不推荐使用")]),e._v("，并且在未来版本可能会被移除，所以这里不作为重点讲解，感兴趣可自行了解。")]),e._v(" "),a("p",[e._v("官网警告信息：https://docs.docker.com/network/links/")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/fc/fc24a8595e8e3260c3c64ba683709335.png",alt:"img"}})]),e._v(" "),a("h2",{attrs:{id:"自定义网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义网络"}},[e._v("#")]),e._v(" 自定义网络")]),e._v(" "),a("p",[e._v("虽然 Docker 提供的默认网络使用比较简单，但是为了保证各容器中应用的安全性，在实际开发中更推荐使用自定义的网络进行容器管理，以及启用容器名称到 IP 地址的自动 DNS 解析。")]),e._v(" "),a("blockquote",[a("p",[e._v("从 Docker 1.10 版本开始，docker daemon 实现了一个内嵌的 DNS server，使容器可以直接通过容器名称通信。方法很简单，只要在创建容器时使用 "),a("code",[e._v("--name")]),e._v(" 为容器命名即可。")])]),e._v(" "),a("blockquote",[a("p",[e._v("但是使用 Docker DNS 有个限制："),a("strong",[e._v("只能在 user-defined 网络中使用")]),e._v("。也就是说，默认的 bridge 网络是无法使用 DNS 的，所以我们就需要自定义网络。")])]),e._v(" "),a("h3",{attrs:{id:"创建网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建网络"}},[e._v("#")]),e._v(" 创建网络")]),e._v(" "),a("p",[e._v("通过 "),a("code",[e._v("docker network create")]),e._v(" 命令可以创建自定义网络模式，命令提示如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/d2/d289cb7dfcde873e916d3832a2f6762a.png",alt:"img"}})]),e._v(" "),a("p",[e._v("进一步查看 "),a("code",[e._v("docker network create")]),e._v(" 命令使用详情，发现可以通过 "),a("code",[e._v("--driver")]),e._v(" 指定网络模式且默认是 "),a("code",[e._v("bridge")]),e._v(" 网络模式，提示如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/e8/e8bc6e1a1929583fc64d7835abfd3e53.png",alt:"img"}})]),e._v(" "),a("p",[e._v("创建一个基于 "),a("code",[e._v("bridge")]),e._v(" 网络模式的自定义网络模式 "),a("code",[e._v("custom_network")]),e._v("，完整命令如下：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("docker network create custom_network\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("通过 "),a("code",[e._v("docker network ls")]),e._v(" 查看网络模式：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("[root@localhost ~]# docker network ls\nNETWORK ID          NAME                DRIVER              SCOPE\nb3634bbd8943        bridge              bridge              local\n062082493d3a        custom_network      bridge              local\n885da101da7d        host                host                local\nf4f1b3cf1b7f        none                null                local\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("通过自定义网络模式 "),a("code",[e._v("custom_network")]),e._v(" 创建容器：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("docker run -di --name bbox05 --net custom_network busybox\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("通过 "),a("code",[e._v("docker inspect 容器名称 | ID")]),e._v(" 查看容器的网络信息，在 "),a("code",[e._v("NetworkSettings")]),e._v(" 节点中可以看到详细信息。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/1c/1ca75646e69ffe857cdf8fbfb2ae1c9f.png",alt:"img"}})]),e._v(" "),a("h3",{attrs:{id:"连接网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接网络"}},[e._v("#")]),e._v(" 连接网络")]),e._v(" "),a("p",[e._v("通过 "),a("code",[e._v("docker network connect 网络名称 容器名称")]),e._v(" 为容器连接新的网络模式。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/a6/a6ab9446f592a2c6cec437c07e9d3a2f.png",alt:"img"}})]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("docker network connect bridge bbox05\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("通过 "),a("code",[e._v("docker inspect 容器名称 | ID")]),e._v(" 再次查看容器的网络信息，多增加了默认的 "),a("code",[e._v("bridge")]),e._v("。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/4b/4b6fd24ddf0ee62fb5dac8603e79ea23.png",alt:"img"}})]),e._v(" "),a("h3",{attrs:{id:"断开网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#断开网络"}},[e._v("#")]),e._v(" 断开网络")]),e._v(" "),a("p",[e._v("通过 "),a("code",[e._v("docker network disconnect 网络名称 容器名称")]),e._v(" 命令断开网络。")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("docker network disconnect custom_network bbox05\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("通过 "),a("code",[e._v("docker inspect 容器名称 | ID")]),e._v(" 再次查看容器的网络信息，发现只剩下默认的 "),a("code",[e._v("bridge")]),e._v("。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/6f/6f88e32486fa182758aeb8e721b97ccd.png",alt:"img"}})]),e._v(" "),a("h3",{attrs:{id:"移除网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移除网络"}},[e._v("#")]),e._v(" 移除网络")]),e._v(" "),a("p",[e._v("可以通过 "),a("code",[e._v("docker network rm 网络名称")]),e._v(" 命令移除自定义网络模式，网络模式移除成功会返回网络模式名称。")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("docker network rm custom_network\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("注意：如果通过某个自定义网络模式创建了容器，则该网络模式无法删除。")]),e._v(" "),a("h2",{attrs:{id:"容器间网络通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器间网络通信"}},[e._v("#")]),e._v(" 容器间网络通信")]),e._v(" "),a("p",[e._v("接下来我们通过所学的知识实现容器间的网络通信。首先明确一点，容器之间要互相通信，必须要有属于同一个网络的网卡。")]),e._v(" "),a("p",[e._v("我们先创建两个基于默认的 "),a("code",[e._v("bridge")]),e._v(" 网络模式的容器。")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("docker run -di --name default_bbox01 busybox\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("通过 "),a("code",[e._v("docker network inspect bridge")]),e._v(" 查看两容器的具体 IP 信息。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/04/041224a1b885f07c1833770ccaf7fafe.png",alt:"img"}})]),e._v(" "),a("p",[e._v("然后测试两容器间是否可以进行网络通信。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/4e/4ef36764bec599454c39ddd81c3b4808.png",alt:"img"}})]),e._v(" "),a("p",[e._v("经过测试，从结果得知两个属于同一个网络的容器是可以进行网络通信的，但是 IP 地址可能是不固定的，有被更改的情况发生，那容器内所有通信的 IP 地址也需要进行更改，能否使用容器名称进行网络通信？继续测试。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/0f/0fbef35528679ed487051c941d1ee9ff.png",alt:"img"}})]),e._v(" "),a("p",[e._v("经过测试，从结果得知使用容器进行网络通信是不行的，那怎么实现这个功能呢？")]),e._v(" "),a("p",[e._v("从 Docker 1.10 版本开始，docker daemon 实现了一个内嵌的 DNS server，使容器可以直接通过容器名称通信。方法很简单，只要在创建容器时使用 "),a("code",[e._v("--name")]),e._v(" 为容器命名即可。")]),e._v(" "),a("p",[e._v("但是使用 Docker DNS 有个限制："),a("strong",[e._v("只能在 user-defined 网络中使用")]),e._v("。也就是说，默认的 bridge 网络是无法使用 DNS 的，所以我们就需要自定义网络。")]),e._v(" "),a("p",[e._v("我们先基于 "),a("code",[e._v("bridge")]),e._v(" 网络模式创建自定义网络 "),a("code",[e._v("custom_network")]),e._v("，然后创建两个基于自定义网络模式的容器。")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("docker run -di --name custom_bbox01 --net custom_network busybox\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("通过 "),a("code",[e._v("docker network inspect custom_network")]),e._v(" 查看两容器的具体 IP 信息。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/ef/ef9911ed2985da4bbec968db819b3b0b.png",alt:"img"}})]),e._v(" "),a("p",[e._v("然后测试两容器间是否可以进行网络通信，分别使用具体 IP 和容器名称进行网络通信。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/0d/0d9d914c3d96f1fc257272b2a6ec0041.png",alt:"img"}})]),e._v(" "),a("p",[e._v("经过测试，从结果得知两个属于同一个自定义网络的容器是可以进行网络通信的，并且可以使用容器名称进行网络通信。")]),e._v(" "),a("p",[e._v("那如果此时我希望 "),a("code",[e._v("bridge")]),e._v(" 网络下的容器可以和 "),a("code",[e._v("custom_network")]),e._v(" 网络下的容器进行网络又该如何操作？其实答案也非常简单：让 "),a("code",[e._v("bridge")]),e._v(" 网络下的容器连接至新的 "),a("code",[e._v("custom_network")]),e._v(" 网络即可。")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("docker network connect custom_network default_bbox01\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/infoq/2c/2cda24b26c612da7969e2c90ba9be5a6.png",alt:"img"}})]),e._v(" "),a("p",[e._v("学完容器网络通信，大家就可以练习使用多个容器完成常见应用集群的部署了。后面就该学习 Docker 进阶部分的内容 Docker Compose 和 Docker Swarm。")]),e._v(" "),a("p",[e._v("参考：")])])}),[],!1,null,null,null);t.default=r.exports}}]);