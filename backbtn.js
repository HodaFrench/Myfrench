/* Hoda: دکمه‌ی شناور «صفحه‌ی قبل» - تمیز، بدون تداخل با دکمه‌ی خانه‌ی صفحه */
(function(){
  if(window.__hodaBackDone)return; window.__hodaBackDone=true;
  function isHome(){var p=(location.pathname||'').split('/').pop().toLowerCase();return p===''||p==='index.html';}
  function make(){
    if(isHome())return; // در خانه لازم نیست
    var st=document.createElement('style');
    st.textContent=
      '.hoda-back-float{position:fixed;top:8px;left:10px;z-index:99999;display:inline-flex;align-items:center;gap:5px;'+
      'background:#8a5d33;color:#fff;border:none;cursor:pointer;'+
      'border-radius:20px;padding:7px 14px;font-family:"Estedad",system-ui,sans-serif;font-size:12.5px;font-weight:800;'+
      'box-shadow:0 3px 10px rgba(0,0,0,.25);transition:.15s;-webkit-tap-highlight-color:transparent}'+
      '.hoda-back-float:active{transform:scale(.93)}'+
      '.hoda-back-float .hbf-ic{font-size:15px;line-height:1}'+
      '@media(min-width:900px){.hoda-back-float{top:11px;left:14px}}';
    document.head.appendChild(st);
    var b=document.createElement('button');
    b.className='hoda-back-float';
    b.innerHTML='<span class="hbf-ic">&#8594;</span><span>صفحه قبل</span>';
    b.addEventListener('click',function(){
      if(window.history.length>1){history.back();}else{location.href='index.html';}
    });
    document.body.appendChild(b);
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',make);}else{make();}
})();