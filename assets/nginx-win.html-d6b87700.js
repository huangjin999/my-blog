import{_ as e,p as i,q as n,Y as l}from"./framework-aa5c4115.js";const d={},a=l(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h1><p>在 Windows 上安装 <code>nginx</code> 并部署前端项目的步骤如下：</p><h3 id="_1-下载并安装-nginx" tabindex="-1"><a class="header-anchor" href="#_1-下载并安装-nginx" aria-hidden="true">#</a> 1. 下载并安装 Nginx</h3><ol><li><strong>下载 Nginx</strong>: <ul><li>访问 Nginx 官方下载页面。</li><li>选择适用于 Windows 的稳定版本（例如 <code>nginx-1.xx.x</code>）。</li></ul></li><li><strong>解压 Nginx</strong>: <ul><li>将下载的 <code>.zip</code> 文件解压到所需的目录（例如 <code>C:\\nginx</code>）。</li></ul></li></ol><h3 id="_2-配置-nginx" tabindex="-1"><a class="header-anchor" href="#_2-配置-nginx" aria-hidden="true">#</a> 2. 配置 Nginx</h3><ol><li><p><strong>打开配置文件</strong>:</p><ul><li>进入 <code>nginx</code> 目录，找到并打开 <code>conf</code> 文件夹中的 <code>nginx.conf</code> 文件。</li></ul></li><li><p><strong>修改配置文件</strong>:</p><ul><li>配置根目录和静态文件路径。假设你要部署的前端项目位于 <code>C:\\nginx\\html\\my-project</code>，可以按以下方式配置：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx
复制代码
http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;
        server_name  localhost;

        location / {
            root   html/my-project;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_3-部署前端项目" tabindex="-1"><a class="header-anchor" href="#_3-部署前端项目" aria-hidden="true">#</a> 3. 部署前端项目</h3><ol><li>将前端项目复制到 Nginx 根目录 : <ul><li>将前端项目（例如 <code>build</code> 或 <code>dist</code> 文件夹中的内容，或者直接index.html）复制到 <code>\\nginx\\html</code> 目录中。</li><li>结构为：<code>\\nginx\\html\\index.html</code></li></ul></li></ol><h3 id="_4-启动-nginx" tabindex="-1"><a class="header-anchor" href="#_4-启动-nginx" aria-hidden="true">#</a> 4. 启动 Nginx</h3><ol><li><p><strong>启动 Nginx</strong>:</p><ul><li>打开命令提示符（CMD），导航到 <code>nginx</code> 所在目录（例如 <code>C:\\nginx</code>）。</li><li>运行以下命令启动 <code>nginx</code>：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>start nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>检查 Nginx 是否成功启动</strong>:</p><ul><li>在浏览器中访问 <code>http://你的ip</code>，如果能够看到你的前端项目主页，说明 Nginx 已经成功启动并运行。</li></ul></li></ol><h3 id="_5-常用命令" tabindex="-1"><a class="header-anchor" href="#_5-常用命令" aria-hidden="true">#</a> 5. 常用命令</h3><ol><li><p><strong>重新加载配置</strong>:</p><ul><li>如果修改了 <code>nginx.conf</code> 文件，需要重新加载配置：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>停止 Nginx</strong>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -s stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>查看 Nginx 状态</strong>:</p><ul><li>检查 Nginx 是否在运行：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tasklist /fi &quot;imagename eq nginx.exe&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="_6-其他配置" tabindex="-1"><a class="header-anchor" href="#_6-其他配置" aria-hidden="true">#</a> 6. 其他配置</h3><ol><li><p><strong>设置其他静态资源路径</strong>:</p><ul><li>可以根据需要在 <code>nginx.conf</code> 中添加更多的 <code>location</code> 块来处理不同的路径。</li><li>这个代表当你浏览器访问<code>web</code>文件夹<code>(http://1.23.45.9/web)</code>时候会给你跳转到<code>C:/Users/Administrator/Downloads/nginx-1.24.0/nginx-1.24.0/html/web/;</code>文件夹下的内容</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> location /web/ {
            alias   C:/Users/Administrator/Downloads/nginx-1.24.0/nginx-1.24.0/html/web/;
            autoindex on; # This will list the directory contents if no index file is found
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>api代理配置</strong></p></li><li><p><strong>设置接口api路径</strong>:</p><ul><li>可以根据需要在 <code>nginx.conf</code> 中添加更多的 <code>location</code> 块来处理不同的路径。</li><li>这个代表当你项目接口访问<code>1.23.45.9/prod-api</code>的时候代理到 <code>http://1.23.32.12:8080</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        location /prod-api  {
            rewrite ^/prod-api/(.*) /$1 break;
            proxy_pass http://1.23.32.12:8080;
        }  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,14),s=[a];function t(o,r){return i(),n("div",null,s)}const u=e(d,[["render",t],["__file","nginx-win.html.vue"]]);export{u as default};
