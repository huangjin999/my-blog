import{_ as n,p as a,q as s,Y as e}from"./framework-aa5c4115.js";const o={},p=e(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h1><h3 id="确认你的操作系统" tabindex="-1"><a class="header-anchor" href="#确认你的操作系统" aria-hidden="true">#</a> 确认你的操作系统</h3><p><code>cat /etc/os-release</code></p><h3 id="_1-安装依赖" tabindex="-1"><a class="header-anchor" href="#_1-安装依赖" aria-hidden="true">#</a> 1.安装依赖</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>sudo yum install openssl openssl<span class="token operator">-</span>devel 
sudo yum install pcre pcre<span class="token operator">-</span>devel
sudo yum install gcc
sudo yum install pcre<span class="token operator">-</span>devel
sudo yum install openssl openssl<span class="token operator">-</span>devel
sudo yum install zlib zlib<span class="token operator">-</span>devel
sudo yum install nano
安装依赖的时候，中间会有一些询问，输入<span class="token constant">Y</span>即可<span class="token punctuation">;</span>
查看是否安装成功： rpm <span class="token operator">-</span>qa xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-下载nginx的tar包" tabindex="-1"><a class="header-anchor" href="#_2-下载nginx的tar包" aria-hidden="true">#</a> 2. 下载nginx的tar包</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>进入<span class="token operator">/</span>usr<span class="token operator">/</span>local目录
cd <span class="token operator">/</span>usr<span class="token operator">/</span>local
<span class="token comment">//创建一个文件夹nginx</span>
mkdir nginx
<span class="token comment">//进入nginx文件夹</span>
cd nginx
<span class="token comment">//下载tar包 （版本随意，必须）</span>
wget http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>nginx<span class="token punctuation">.</span>org<span class="token operator">/</span>download<span class="token operator">/</span>nginx<span class="token operator">-</span><span class="token number">1.13</span><span class="token number">.7</span><span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz
<span class="token comment">//解压tar包</span>
tar <span class="token operator">-</span>xvf nginx<span class="token operator">-</span><span class="token number">1.13</span><span class="token number">.7</span><span class="token punctuation">.</span>tar<span class="token punctuation">.</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-安装nginx" tabindex="-1"><a class="header-anchor" href="#_3-安装nginx" aria-hidden="true">#</a> 3. 安装nginx</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">//进入nginx目录</span>
cd <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>nginx
<span class="token comment">//执行命令</span>
<span class="token punctuation">.</span><span class="token operator">/</span>configure
<span class="token comment">//执行make命令</span>
make
<span class="token comment">//执行make install命令</span>
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-启动nginx" tabindex="-1"><a class="header-anchor" href="#_4-启动nginx" aria-hidden="true">#</a> 4. 启动nginx</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>nginx<span class="token operator">/</span>sbin<span class="token operator">/</span>nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个时候提示你： Welcome to nginx..... 这就等于<code>nginx</code>安装成功啦，默认端口是<code>80</code></p><h2 id="部署前端项目" tabindex="-1"><a class="header-anchor" href="#部署前端项目" aria-hidden="true">#</a> 部署前端项目</h2><ol><li>将打包好的项目或者自己单页面的<code>index.html</code>文件放在服务器<code>nginx</code>目录下的<code>html</code>文件夹中</li><li>在<code>html</code>文件夹下面通过<code>rz + 回车</code>命令将文件上传进去</li><li>如果是<code>index.html</code>直接省略这一步骤，如果是压缩包就需要通过<code>unzip 文件名</code> 解压，得到打包好的目录文件</li><li>然后运行<code>/usr/local/nginx/sbin/nginx</code>就可实现</li></ol><h5 id="如果启动nginx报如下错误" tabindex="-1"><a class="header-anchor" href="#如果启动nginx报如下错误" aria-hidden="true">#</a> 如果启动nginx报如下错误：</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> to <span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">:</span><span class="token number">80.</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span>
<span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> to <span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">:</span><span class="token number">80.</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span>
<span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> to <span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">:</span><span class="token number">80.</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span>
<span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> to <span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">:</span><span class="token number">80.</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样表示 <code>80</code> 端口地址已被使用,nginx默认端口是80，执行命令，查询端口占用情况</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>netstat <span class="token operator">-</span>ntpl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打印出来一串端口代码，打印出来可以看到这里的80端口被nginx占用了，我们需要的是这一串代码的最后一项，也就是<code>PID</code>， 这时候执行 <code>80</code> 端口后面的PID <code>kill -9 5347</code>（5347是这个进程的PID），就可以结束这个进程，释放<code>80</code>端口。 最后再次以运行<code>nginx</code>就可以了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>nginx<span class="token operator">/</span>sbin<span class="token operator">/</span>nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20),t=[p];function c(l,i){return a(),s("div",null,t)}const d=n(o,[["render",c],["__file","nginx.html.vue"]]);export{d as default};
