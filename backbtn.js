/* Hoda universal nav: back + home. اضافه‌شده به همه‌ی صفحات */
(function(){
  if(window.__hodaNavDone)return; window.__hodaNavDone=true;
  function isHome(){
    var p=(location.pathname||'').split('/').pop().toLowerCase();
    return p===''||p==='index.html';
  }
  function make(){
    // استایل
    var st=document.createElement('style');
    st.textContent=
      '.hoda-unav{position:fixed;top:9px;z-index:99999;display:flex;align-items:center;gap:5px;'+
      'background:rgba(255,255,255,.92);backdrop-filter:blur(8px);border:1px solid rgba(0,0,0,.08);'+
      'border-radius:22px;padding:5px 6px;box-shadow:0 3px 12px rgba(0,0,0,.12);'+
      'font-family:"Estedad",system-ui,sans-serif;-webkit-tap-highlight-color:transparent}'+
      '.hoda-unav.r{right:10px}.hoda-unav.l{left:10px}'+
      '.hoda-unav button,.hoda-unav a{all:unset;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;'+
      'gap:4px;font-size:12.5px;font-weight:800;color:#3a352e;padding:6px 12px;border-radius:18px;transition:.15s}'+
      '.hoda-unav button:active,.hoda-unav a:active{transform:scale(.92);background:rgba(176,122,74,.14)}'+
      '.hoda-unav .hu-ic{font-size:15px;line-height:1}'+
      '@media(min-width:900px){.hoda-unav{top:12px}}';
    document.head.appendChild(st);

    // دکمه‌ی «صفحه‌ی قبل» سمت راست (چون RTL: قبل=راست منطقی، ولی برای دسترسی راحت راست می‌گذاریم)
    var back=document.createElement('div');
    back.className='hoda-unav r';
    var canBack = (window.history.length>1);
    back.innerHTML='<button id="huBack" title="صفحه قبل"><span class="hu-ic">&#8594;</span><span>قبل</span></button>';
    // دکمه‌ی «خانه» سمت چپ
    var home=document.createElement('div');
    home.className='hoda-unav l';
    home.innerHTML='<a href="index.html" title="خانه"><span class="hu-ic">&#127968;</span><span>خانه</span></a>';

    document.body.appendChild(back);
    if(!isHome()) document.body.appendChild(home);

    document.getElementById('huBack').addEventListener('click',function(){
      if(window.history.length>1){history.back();}
      else{location.href='index.html';}
    });
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',make);}else{make();}
})();