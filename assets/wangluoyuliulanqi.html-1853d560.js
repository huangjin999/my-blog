import{_ as s,p as t,q as a,s as n,R as e,t as l,Y as i,n as r}from"./framework-aa5c4115.js";const v={},c=i(`<h1 id="网络与浏览器" tabindex="-1"><a class="header-anchor" href="#网络与浏览器" aria-hidden="true">#</a> 网络与浏览器</h1><h2 id="_1-当我们在web浏览器的地址栏中输入-www-baidu-com-具体发生了什么" tabindex="-1"><a class="header-anchor" href="#_1-当我们在web浏览器的地址栏中输入-www-baidu-com-具体发生了什么" aria-hidden="true">#</a> 1. 当我们在web浏览器的地址栏中输入：www.baidu.com，具体发生了什么？</h2><p><strong>一次完整的HTTP服务过程是什么</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 输入www.baidu.com网址, DNS解析(域名映射的过程), 将域名转换成ip地址 (计算机在网络中的标识)
2. 根据ip地址, 就可以找到服务器, 尝试建立TCP连接, 三次握手
   三次握手: 一次发起连接, 两次 =&gt; 双方确认
3. 发起 http 请求, 服务器端做出响应, 响应index.html
4. 浏览器解析 index.html, 加载其他的一些资源 图片, js等
5. 浏览器完成渲染
6. http服务结束, 断开TCP连接, 四次挥手(客气挽留)
   (1) A我要撤了, 我要断开连接 
   (2) B你先等等, 我看看, 还有没有没发完的数据  (A就在等着)
       ...
   (3) B检查完, 确实没有什么额外的数据要传输了, 跟A说, 你撤吧, 你断开连接吧
   (4) A: 好的, 那我走了 (A准备要断开连接了)
       B收到A的确认关闭的消息后, B就会直接断开, 而A还会再等一等
       ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：</p><ol><li>DNS怎么找到域名的？</li></ol><blockquote><p>DNS域名解析采用的是递归查询的方式，过程是，先去找DNS缓存-&gt;缓存找不到就去找根域名服务器-&gt;根域名又会去找下一级，这样递归查找之后，找到了，给我们的web浏览器</p></blockquote><ol><li>为什么HTTP协议要基于TCP来实现？</li></ol><blockquote><p>TCP是一个端到端的可靠面相连接的协议，HTTP基于传输层TCP协议不用担心数据传输的各种问题（当发生错误时，可以重传）</p></blockquote><ol><li>最后一步浏览器是如何对页面进行渲染的？</li></ol><blockquote><p>a）解析html文件构成 DOM树 b）解析CSS文件构成渲染树 c）边解析，边渲染 d）JS 单线程运行，JS有可能修改DOM结构，意味着JS执行完成前，后续所有资源的下载是没有必要的，所以JS是单线程，会阻塞后续资源下载</p></blockquote><h2 id="_2-tcp-三次握手理解-双方确认" tabindex="-1"><a class="header-anchor" href="#_2-tcp-三次握手理解-双方确认" aria-hidden="true">#</a> 2. TCP 三次握手理解 (双方确认)</h2><p>TCP是一个端到端的 <strong>可靠</strong> 面相连接的协议，</p><p>HTTP基于传输层TCP协议不用担心数据传输的各种问题（当发生错误时，可以重传）</p>`,14),u={href:"https://blog.csdn.net/qq_38950316/article/details/81087809",target:"_blank",rel:"noopener noreferrer"},o=i(`<p><strong>为什么要3次握手</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我们假定第一次发送的请求,  因为网络延迟很慢才到达服务端，
然后客户端以为这服务器居然不理睬我，然后默默的关闭的等待连接的请求，走开了（好比追女神）；
但事实呢？女神（服务器）是因为各种各样的原因，很晚才看到，然后说我接受你了, 同意你的要求咱们两结婚吧！
但是，A早已经远走高飞，这个请求A完全不会收到（在第二次握手，服务端打开连接，等待客户端的响应），
那么女生呢，以为对方收到了，就会一直等待，这样B的资源就会被浪费的（创建连接的时候，空间浪费以及端口消耗）；
而三次握手, 就不会发生，服务端同意连接了，但是A缺一直没有下一步的动作，导致资源浪费；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-关闭tcp连接四次挥手的理解-客气挽留" tabindex="-1"><a class="header-anchor" href="#_3-关闭tcp连接四次挥手的理解-客气挽留" aria-hidden="true">#</a> 3. 关闭TCP连接四次挥手的理解 (客气挽留)</h2><p>目标: 关闭连接(四次挥手)</p><p>不能直接一次性断开连接(双方知晓), 万一还有什么数据没有传完, 造成数据的丢失!</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这和有礼貌的好友道别一样：（a：客户端 b:服务端） 
1、一开始A想要回家离开，但是呢？怕B还有事情要交代，那么呢？只好先向B打招呼，我要走了，请求停止交谈(请求断开连接)

 (此时，a到B的连接没有断开，依旧可以进行通信）； 
2、同意A的请求，说好的，但是我这里可能还有一些话（数据）没说完。我检查看看, 你等等, 等我说完你再走。 
3、B确实没啥要补充的了，就告知你我可以撤了 
4、A说好的，知道了，88；（B得知A走开了，关闭了自己的连接 )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-get方法和post方法有何区别" tabindex="-1"><a class="header-anchor" href="#_4-get方法和post方法有何区别" aria-hidden="true">#</a> 4. GET方法和POST方法有何区别？</h2><p>默认的http请求的内容, 在网络中传输, 明文的形式传递的 (https 对内容加密)</p><table><thead><tr><th></th><th>GET方法</th><th>POST方法</th></tr></thead><tbody><tr><td><strong>数据传输⽅式</strong></td><td>通过URL传输数据 (地址栏拼接参数)</td><td>通过请求体传输</td></tr><tr><td><strong>数据安全</strong></td><td>数据暴露在URL中，可通过浏览历史记录、缓存等很容易查到数据信息</td><td>数据因为在请求主体内， 所以有⼀定的安全性保证</td></tr><tr><td><strong>数据类型</strong></td><td>只允许 ASCII 字符</td><td>⽆限制</td></tr><tr><td><strong>GET⽆害</strong></td><td>刷新、后退等浏览器操作是⽆害的</td><td>可能会引起重复提交表单</td></tr><tr><td><strong>功能特性</strong></td><td>安全且幂等（这⾥的安全是指只读特性，就是使⽤这个⽅法不会引起服务器状态变化。 <strong>幂等的概念是指同⼀个请求⽅法执⾏多次和仅执⾏⼀次的效果完全相同）</strong></td><td>⾮安全(会引起服务器端的变化)、<strong>⾮幂等</strong></td></tr></tbody></table><h2 id="_5-你了解的http状态码有哪些" tabindex="-1"><a class="header-anchor" href="#_5-你了解的http状态码有哪些" aria-hidden="true">#</a> 5. 你了解的HTTP状态码有哪些？</h2><p><strong>成功（2XX）</strong></p><table><thead><tr><th>状态码</th><th>原因短语</th><th>说明</th></tr></thead><tbody><tr><td>200</td><td>OK</td><td>表示从客户端发来的请求在服务器端被正确处理</td></tr><tr><td>201</td><td>Created</td><td>请求已经被实现，⽽且有⼀个新的资源已经依据请求的需要⽽建⽴ 通常是在POST请求，或是某些PUT请求之后创建了内容, 进行的返回的响应</td></tr><tr><td>202</td><td>Accepted</td><td>请求服务器已接受，但是尚未处理，不保证完成请求 适合异步任务或者说需要处理时间比较长的请求，避免HTTP连接一直占用</td></tr><tr><td>204</td><td>No content</td><td>表示请求成功，但响应报⽂不含实体的主体部分</td></tr><tr><td>206</td><td>Partial Content</td><td>进⾏的是范围请求, 表示服务器已经成功处理了部分 GET 请求 响应头中会包含获取的内容范围 (常用于分段下载)</td></tr></tbody></table><p><strong>重定向（3XX）</strong></p><table><thead><tr><th>状态码</th><th>原因短语</th><th>说明</th></tr></thead><tbody><tr><td>301</td><td>Moved Permanently</td><td>永久性重定向，表示资源已被分配了新的 URL 比如，我们访问 <strong>http</strong>😕/www.baidu.com 会跳转到 <strong>https</strong>😕/www.baidu.com</td></tr><tr><td>302</td><td>Found</td><td>临时性重定向，表示资源临时被分配了新的 URL, 支持搜索引擎优化 首页, 个人中心, 遇到了需要登录才能操作的内容, 重定向 到 登录页</td></tr><tr><td>303</td><td>See Other</td><td>对于POST请求，它表示请求已经被处理，客户端可以接着使用GET方法去请求Location里的URI。</td></tr><tr><td><strong>304</strong></td><td><strong>Not Modified</strong></td><td><strong>自从上次请求后，请求的网页内容未修改过。服务器返回此响应时，不会返回网页内容。(协商缓存)</strong></td></tr><tr><td>307</td><td>Temporary Redirect</td><td>对于POST请求，表示请求还没有被处理，客户端应该向Location里的URI重新发起POST请求。 不对请求做额外处理, 正常发送请求, 请求location中的url地址</td></tr></tbody></table><p>因为post请求, 是非幂等的, 从302中, 细化出了 303 和 307</p><p>简而言之:</p><ul><li>301 302 307 都是重定向</li><li>304 协商缓存</li></ul><p><strong>客户端错误（4XX）</strong></p><table><thead><tr><th>状态码</th><th>原因短语</th><th>说明</th></tr></thead><tbody><tr><td><strong>400</strong></td><td><strong>Bad Request</strong></td><td><strong>请求报⽂存在语法错误(（传参格式不正确）</strong></td></tr><tr><td>401</td><td>UnAuthorized</td><td>权限认证未通过(没有权限)</td></tr><tr><td>403</td><td>Forbidden</td><td>表示对请求资源的访问被服务器拒绝</td></tr><tr><td>404</td><td>Not Found</td><td>表示在服务器上没有找到请求的资源</td></tr><tr><td>408</td><td>Request Timeout</td><td>客户端请求超时</td></tr><tr><td>409</td><td>Confict</td><td>请求的资源可能引起冲突</td></tr></tbody></table><p><strong>服务端错误（5XX）</strong></p><table><thead><tr><th>状态码</th><th>原因短语</th><th>说明</th></tr></thead><tbody><tr><td>500</td><td>Internal Sever Error</td><td>表示服务器端在执⾏请求时发⽣了错误</td></tr><tr><td>501</td><td>Not Implemented</td><td>请求超出服务器能⼒范围，例如服务器不⽀持当前请求所需要的某个功能， 或者请求是服务器不⽀持的某个⽅法</td></tr><tr><td>503</td><td>Service Unavailable</td><td>表明服务器暂时处于超负载或正在停机维护，⽆法处理请求</td></tr><tr><td>505</td><td>Http Version Not Supported</td><td>服务器不⽀持，或者拒绝⽀持在请求中使⽤的 HTTP 版本</td></tr></tbody></table><p>问到状态码: 304 400 401??</p><p>当前端看到控制台报出 400 时, 请问一定是后台的问题么? 如何排查错误? (前端先检查传参格式是否有误)</p><h2 id="_6-为什么需要https-https是如何保证安全的" tabindex="-1"><a class="header-anchor" href="#_6-为什么需要https-https是如何保证安全的" aria-hidden="true">#</a> 6. 为什么需要HTTPS？HTTPS是如何保证安全的？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP协议是网络通信的基石, 基于HTTP协议, 完成了很多的网页应用功能, 但是HTTP协议是明文传输数据的! 太不安全了!
HTTPS 是安全版的 HTTP。
HTTP 协议在传输数据时采用的是明⽂方式传递，因此，⼀些敏感信息的传输就变得很不安全。
而 HTTPS 就是为了解决 HTTP 的不安全⽽产⽣的。

总结：
因为 HTTP 协议明文传输数据, 太不安全
利用 HTTPS 协议可以更安全, 在HTTP基础上进行加密
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTPS 在传输数据的过程中会对数据进行加密处理，保证安全性。
那HTTPS采用的什么样的加密方式呢？我们来了解下一些加密的基本概念。
目前常见的加密算法可以分成三类，\`对称加密算法\`，\`非对称加密算法\` 和 \`Hash算法\`。
1. 对称加密算法: 相同密钥加密解密,  可逆的! 可以用于加密解密传输数据
   想使用对称加密算法, 一定要保证密钥不被泄漏  (且进行密钥的传输约定时, 一定要保证安全)
2. 非对称加密算法: 有两把钥匙, 公钥, 私钥,  可逆的, 可以用于 https 的初步交换密钥
3. Hash算法: 不可逆的,  根据一段内容, 生成一段唯一标识, 一般用于验证数据是否被修改!   (md5)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https结合了两种加密⽅式：
- 将 \`对称加密的密钥(一串约定的字符串)\` ⽤非对称加密的公钥, 进⾏加密并发送出去，接收⽅使⽤私钥解密得到 \`对称加密密钥\`
- 双⽅沟通时使⽤ \`对称加密密钥\` 进⾏

可以看到，只有在发送秘钥阶段才使用非对称加密，而后续的通信都使用对称加密，这样解决了性能问题。

HTTPS 目前所使用的 TLS或SSL协议,  就是目前采用的加密通道的规范协议 

它利用对称加密、(公私钥)非对称加密, 以及其密钥交换算法，可完成可信任的信息传输

1. 利用 非对称加密 加密传输 对称加密所约定的密钥  (保证了密钥传输的安全)
2. 后续, 利用对称加密, 有效便捷的进行数据传输!!

总结：https又是如何保证安全?
底层实际是 对称加密 和 非对称加密配合, 实现加密数据传输
(1) 使用非对称加密, 加密对称加密的密钥, 进行密钥的交换
(2) 后续就使用对称加密进行数据传输
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如何保证你访问的网站是安全的? 如何保证你浏览器第一次请求某个网站拿到的公钥是安全的?

CA证书 =&gt; 数字证书, 由权威CA机构, 申请统一发布的!
证书中, 就会包含公钥, 网站信息, 网站用途, 证书过期时间...
在浏览器第一次请求某个网站时, 就会将证书响应! 浏览会自动存证书, 并做证书校验
(1) 看证书是否过期
(2) 看证书中的网址 和 你正在访问的网址是否匹配
(3) 看发布证书的机构是否权威
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>万一证书被篡改了怎么办? =&gt; 数字签名

会根据证书生成时的内容, 会生成一个唯一标识
后续拿到证书时, 只需要用相同的hash算法, 生成一个唯一标识
如果校验唯一标识, 一致的, 说明没有改过
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-http-2-和-http1-x-比-有什么优势和特点" tabindex="-1"><a class="header-anchor" href="#_7-http-2-和-http1-x-比-有什么优势和特点" aria-hidden="true">#</a> 7. HTTP/2 和 HTTP1.x 比，有什么优势和特点？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP/2 的升级, 对于用户来说, 是跨时代的!  基于HTTP/2, 用户访问网页的速度会非常快!!! (充分利用带宽)

HTTP/2: 淘宝, 天猫, 京东等, 已做升级 ....

1. HTTP/2 采⽤\`⼆进制格式\`来传输数据，⽽⾮ HTTP 1.x 的⽂本格式，⼆进制协议\`解析起来更⾼效\`
2. HTTP/2 采用一些\`头部压缩技术\`，减少在请求和响应头中重复携带的数据，\`降低网络负担\`
3. HTTP/2 采⽤\`服务器推送\`方式，主动向客户端推送资源，提高页面加载效率
4. HTTP/2 采⽤\`多路复用机制\`，减少需要创建的连接数量，降低资源占用和性能消耗

HTTP1.X 同一时间, 只能并发建立 6-8 个 TCP 连接, 一个连接同时只能一个请求 (虽然可以 keep-alive复用, 但也得一个个来)
(建立连接的成本比较高, 不让一次性建立太多连接)
而新版本 HTTP/2 建立一次连接, 就可以并发很多个请求!
所以 HTTP/2 的升级, 大大提升了页面加载的效率!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-http缓存控制-浏览器缓存" tabindex="-1"><a class="header-anchor" href="#_8-http缓存控制-浏览器缓存" aria-hidden="true">#</a> 8. http缓存控制(浏览器缓存)？</h2><p><strong>谈谈你对缓存的理解</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http缓存: 强缓存, 协商缓存 两个相互配合实现 缓存处理
强缓存: 对于缓存的资源, 会根据过期时间判断, 如果未过期, 直接用 (不发请求)
       只有过期了, 才会发请求

协商缓存: 当强缓存未命中(资源过期了), 发请求带上最后修改的时间(或者文件唯一标识Etag)
问后台, 这个资源, 是否还能继续用, 是否这个文件发生了变化?
服务器, 对比最后修改的时间, 或者对比唯一标识Etag, 
(1) 发现都一致, 这个资源还能用 (不会返回资源) 304
(2) 发现不一致, 说明资源变化了 (会完整的返回新资源) 200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-浏览器渲染的整体流程" tabindex="-1"><a class="header-anchor" href="#_9-浏览器渲染的整体流程" aria-hidden="true">#</a> 9. 浏览器渲染的整体流程?</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>浏览器渲染的整体流程:
1. 解析最新的html结构, 生成DOM树
2. 同时解析最新的css样式, 生成样式规则rules
3. 将DOM树 和 样式规则rules结合 =&gt; 生成render Tree 渲染树
4. 基于渲染树, 进行运算布局 (重排)
5. 进行绘制 (重绘)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-重绘-repaint-和重排-回流reflow-是什么-开发时应该注意什么" tabindex="-1"><a class="header-anchor" href="#_10-重绘-repaint-和重排-回流reflow-是什么-开发时应该注意什么" aria-hidden="true">#</a> 10. 重绘(repaint)和重排(回流reflow)是什么? 开发时应该注意什么？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>重排: 对布局重新计算排布, 更新布局
何时会触发重排: (布局发生改变)

重绘: 对界面, 进行渲染绘制
何时触发重绘: 
(1) 改变了不影响布局的样式(backgroundColor color), 只触发重绘
(2) 改变布局了, 布局更新后, 也会触发重绘

重绘和重排的关系:
1. 重绘不一定会触发重排, 比如: 只改了背景色
2. 只要重排了, 必然触发重绘!!!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>优化页面渲染性能的角度: 尽可能减少重绘和重排的次数

CSS：
   避免使用table布局
   将动画效果应用到position属性为absolute或fixed的元素上

JS：
   避免频繁操作样式，可汇总后统一修改
   尽量使用class进行样式修改
   减少dom的删减次数，可使用字符串或者docuemntFragment一次性插入
   极限优化时，修改样式可将其display: none后修改
   避免多次触发上面提到的那些会触发回流的方法，可以的话尽量用变量存住
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-cookie和session以及token的区别" tabindex="-1"><a class="header-anchor" href="#_11-cookie和session以及token的区别" aria-hidden="true">#</a> 11. cookie和session以及token的区别</h2><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cookie
    1. 指的是浏览器里面能永久存储的一种数据，仅仅是浏览器实现的一种数据存储功能
    2. cookie由服务端生成，发送给客户端，浏览器把cookiel以键值方式保存在起来，下一次再请求同一网站会把cookie发送给服务端，由于cookie是存在客户端上的，所以浏览器加入了一些限制确保cookie不会被恶意使用，同时不会占据太多磁盘空间，所以每个域的cookie数量是有限的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>session
    1. session表示会话机制，服务端得需要知道是谁给我发的请求。所以服务端就要给每个客户端分配不同的“身份标识”，然后客户端每次向服务器发送请求的时候，都带上这个这个&quot;身份标识&quot;服务器就知道此时是来自哪里的请求了。至于客户端怎么保存这个&quot;身份标识”，可以有很多种方式,对于客户端，大家一般都默认采用cookie的方式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Token
    1. 无状态、可扩展
    2. 安全性
        请求中发送token而不再是发送cookie能够防止CSRF(跨站请求伪造)。即使在客户端使用cookie存储token, cookie也仅仅是一个存储机制而不是用于认证。不将信息存储在Session中，让我们少了对session操作。
    3. 可扩展性
    4. 多平台跨域
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-什么是浏览器同源策略-为什么浏览器会有跨域限制的问题" tabindex="-1"><a class="header-anchor" href="#_12-什么是浏览器同源策略-为什么浏览器会有跨域限制的问题" aria-hidden="true">#</a> 12. 什么是浏览器同源策略？为什么浏览器会有跨域限制的问题？</h2><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>浏览器同源策略是浏览器最基本也是最核心的安全功能，它规定客户端脚本在没有明确授权的情况下，不能读写不同源的目标资源。

所谓的同源指的是相同协议，域名和端口号，如果两个资源路径在协议，域名，端口号上有任何一点不同，则它们就不属于同源的资源。

另外在同源策略上，又分为两种表现形式：
第一：禁止对不同页面进行DOM操作
第二：禁止使用XMLHttpRequest向不是同源的服务器发送ajax请求。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>什么是跨域呢？
访问同源的资源是被浏览器允许的，但是如果访问不同源的资源，浏览器默认是不允许的。访问不同源的资源那就是我们所说的跨域。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如何解决跨域问题
1. 开发过程中，使用代码解决
2. 项目上线时，使用nginx解决
3. 有些接口支持JSONP，使用JSONP来解决跨域
4. 后端也可以配置cors来解决
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-jsonp-的原理是什么" tabindex="-1"><a class="header-anchor" href="#_13-jsonp-的原理是什么" aria-hidden="true">#</a> 13. JSONP 的原理是什么？</h2><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>尽管浏览器有同源策略，但是 script 标签的 src 属性不会被同源策略所约束，可以获取任意服务器上的脚本并执行。jsonp 通过插入 script 标签的方式来实现跨域，参数只能通过 url 传入，仅能支持 get 请求。

Step1: 创建 callback 方法
Step2: 插入 script 标签
Step3: 后台接受到请求，解析前端传过去的 callback 方法，返回该方法的调用，并且数据作为参数传入该方法
Step4: 前端执行服务端返回的方法调用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-websocket和http的区别" tabindex="-1"><a class="header-anchor" href="#_14-websocket和http的区别" aria-hidden="true">#</a> 14. WebSocket和HTTP的区别</h2><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http协议是用在应用层的协议，他是基于tcp协议的，http协议建立链接也必须要有三次握手才能发送信息。

http链接分为短链接，长链接，短链接是每次请求都要三次握手才能发送自己的信息。即每一个request对应一个response。长链接是在一定的期限内保持链接。保持TCP连接不断开。客户端与服务器通信，必须要有客户端发起然后服务器返回结果。客户端是主动的，服务器是被动的。

WebSocket他是为了解决客户端发起多个http请求到服务器资源浏览器必须要经过长时间的轮训问题而生的，他实现了多路复用，他是全双工通信。在webSocket协议下客服端和浏览器可以同时发送信息。

建立了WenSocket之后服务器不必在浏览器发送request请求之后才能发送信息到浏览器。这时的服务器已有主动权想什么时候发就可以发送信息到服务器。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-前端做本地数据存储的方式有哪些" tabindex="-1"><a class="header-anchor" href="#_15-前端做本地数据存储的方式有哪些" aria-hidden="true">#</a> 15. 前端做本地数据存储的方式有哪些？</h2><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>web存储的方式:
  1. localStorage 5M (用户不删, 一直都在)
  2. sessionStorage 5M  (关闭浏览器, 会自动销毁)
  3. cookie 4k (可以设置过期时间) 缺点: 太小, 操作不方便  插件: js-cookie
  4. web sql (废弃)  sql语句 select * from ...
  5. IndexedDB 适合于存储大量的数据 (大小 &gt;= 250M, 且甚至没有上限) 异步操作 (性能好)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-xss和csrf区别" tabindex="-1"><a class="header-anchor" href="#_16-xss和csrf区别" aria-hidden="true">#</a> 16. XSS和CSRF区别？</h2><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>跨站脚本攻击（Cross Site Scripting)：
    为了不和层叠样式表 CSS 混淆，故将跨站脚本攻击缩写为 XSS。恶意攻击者往 Web 页面里插入恶意 Script 代码，当用户浏览该页之时，嵌入其中 Web 里面的 Script 代码会被执行，从而达到恶意攻击用户的目的。

跨站请求伪造（Cross-site request forgery）：
    是伪造请求，冒充用户在站内的正常操作。我们知道，绝大多数网站是通过 cookie 等方式辨识用户身份，再予以授权的。所以要伪造用户的正常操作，最好的方法是通过 XSS 或链接欺骗等途径，让用户在本机（即拥有身份 cookie 的浏览器端）发起用户所不知道的请求。

区别：
    1）原理不同，CSRF是利用网站A本身的漏洞，去请求网站A的api；XSS是向目标网站注入JS代码，然后执行JS里的代码。
    2）CSRF需要用户先登录目标网站获取cookie，而XSS不需要登录
    3）CSRF的目标是用户，XSS的目标是服务器
    4）XSS是利用合法用户获取其信息，而CSRF是伪造成合法用户发起请求

防范：
    1）主流的浏览器内置了防范 XSS 的措施，例如 CSP。
    2）HttpOnly 防止劫取 Cookie
    3）输入检查，不要相信用户的任何输入。
    4）输出检查，一般来说，除富文本的输出外，在变量输出到 HTML 页面时，可以使用编码或转义的方式来防御 XSS 攻击。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17-项目开发常用到的状态码都有哪些" tabindex="-1"><a class="header-anchor" href="#_17-项目开发常用到的状态码都有哪些" aria-hidden="true">#</a> 17. 项目开发常用到的状态码都有哪些？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>100  Continue继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息
200  OK          正常返回信息
201  Created     请求成功并且服务器创建了新的资源
202  Accepted     服务器已接受请求，但尚未处理
301  Moved Permanently  请求的网页已永久移动到新位置。
302  Found          临时性重定向。
303  See Other     临时性重定向，且总是使用 GET 请求新的 URI。
304  Not Modified  自从上次请求后，请求的网页未修改过。

400  Bad Request  服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
401  Unauthorized 请求未授权。
403  Forbidden    禁止访问。
404  Not Found   找不到如何与 URI 相匹配的资源。
500  Internal Server Error  最常见的服务器端错误。
503  Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-get请求的2种请求参数" tabindex="-1"><a class="header-anchor" href="#_18-get请求的2种请求参数" aria-hidden="true">#</a> 18. GET请求的2种请求参数？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>query参数: 
   路由path: /register
   请求path: /register?username=xxx&amp;amp;password=yyy   
   获取参数: req.query.username
param参数:（只能拼在路径中） 
   路由path: /register/:username/:password
   请求path: /register/xxx/123   
   获取参数: req.params.username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_19-两个独立html页面怎么通信" tabindex="-1"><a class="header-anchor" href="#_19-两个独立html页面怎么通信" aria-hidden="true">#</a> 19. 两个独立html页面怎么通信？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>问题描述:
如：淘宝A，B页面，A为商品页，B为购物车页，两个页面同时打开,在A页面点击商品添加至购物车，切换到B页面购物车怎么显示该商品信息

解决方案
1.利用localStroage，A页面将数据存入localStroage，B页面读取localStorage中的数据
2.关键点: B页面如何知道A页面什么时候存数据到localStorage
3.localStorage中有个‘storage’事件
4.window.addEventListener(‘storage’, callback)，A页面存数据，B页面监听事件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,67);function b(m,h){const d=r("ExternalLinkIcon");return t(),a("div",null,[c,n("p",null,[e("根据这个IP，找到对应的服务器，发起TCP的三次握手 ("),n("a",u,[e("tcp 三次握手四次挥手 (opens new window)"),l(d)]),e(")")]),o])}const p=s(v,[["render",b],["__file","wangluoyuliulanqi.html.vue"]]);export{p as default};
