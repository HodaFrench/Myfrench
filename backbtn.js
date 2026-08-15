/* Hoda: bouton flottant « Retour » - propre, aligné au thème du site */
(function(){
  if(window.__hodaBackDone)return; window.__hodaBackDone=true;
  function isHome(){var p=(location.pathname||'').split('/').pop().toLowerCase();return p===''||p==='index.html';}
  function make(){
    if(isHome())return;
    var st=document.createElement('style');
    st.textContent=
      '.hoda-back-float{position:fixed;top:12px;left:12px;z-index:99999;display:inline-flex;align-items:center;gap:6px;'+
      'background:#fff;color:#1a73e8;border:1px solid #e8eaed;cursor:pointer;'+
      'border-radius:22px;padding:8px 15px 8px 12px;font-family:"Lexend",system-ui,sans-serif;font-size:13px;font-weight:600;'+
      'box-shadow:0 2px 10px rgba(60,64,67,.18);transition:.15s;-webkit-tap-highlight-color:transparent}'+
      '.hoda-back-float:hover{background:#f8f9fa;box-shadow:0 4px 14px rgba(60,64,67,.26)}'+
      '.hoda-back-float:active{transform:scale(.95)}'+
      '.hoda-back-float svg{width:16px;height:16px}'+
      '@media(min-width:900px){.hoda-back-float{top:14px;left:16px}}';
    document.head.appendChild(st);
    var b=document.createElement('button');
    b.className='hoda-back-float';
    b.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg><span>Retour</span>';
    b.addEventListener('click',function(){ if(window.history.length>1){history.back();}else{location.href='index.html';} });
    document.body.appendChild(b);
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',make);}else{make();}
})();
