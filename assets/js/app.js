// PrevTech Group - i18n + behavior
const SUPPORTED = ['en','es'];
const DEFAULT_LANG = 'en';
const NESTED = /(\/about\/|\/divisions\/|\/contact\/)/.test(location.pathname);
const BASE = NESTED ? '../' : './';

function detectLang(){
  const saved = localStorage.getItem('lang');
  if(saved && SUPPORTED.includes(saved)) return saved;
  const nav = (navigator.language||'en').slice(0,2).toLowerCase();
  return SUPPORTED.includes(nav) ? nav : DEFAULT_LANG;
}

let state = {lang: detectLang(), dict: {}};

async function loadI18n(){
  try{
    const res = await fetch(`${BASE}assets/i18n/${state.lang}.json`);
    state.dict = await res.json();
    applyI18n();
  }catch(e){console.error('i18n load error', e)}
}

function t(key){ return state.dict[key] || key; }

function applyI18n(){
  document.documentElement.setAttribute('lang', state.lang);
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.getAttribute('data-i18n')); });
  // Buttons
  const btnEn = document.getElementById('btn-en');
  const btnEs = document.getElementById('btn-es');
  if(btnEn && btnEs){
    btnEn.setAttribute('aria-pressed', state.lang==='en');
    btnEs.setAttribute('aria-pressed', state.lang==='es');
  }
}

function setLang(lang){ if(!SUPPORTED.includes(lang)) return; state.lang = lang; localStorage.setItem('lang', lang); loadI18n(); }

window.addEventListener('DOMContentLoaded',()=>{
  const btnEn = document.getElementById('btn-en');
  const btnEs = document.getElementById('btn-es');
  if(btnEn) btnEn.addEventListener('click', ()=>setLang('en'));
  if(btnEs) btnEs.addEventListener('click', ()=>setLang('es'));
  loadI18n();
});
