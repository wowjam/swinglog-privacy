
const search=document.querySelector('#search');
const sections=[...document.querySelectorAll('main section')];
const links=[...document.querySelectorAll('#contents li')];
function filter(){const q=search.value.trim().toLocaleLowerCase();let count=0;sections.forEach((s,i)=>{const show=!q||s.textContent.toLocaleLowerCase().includes(q);s.hidden=!show;links[i].hidden=!show;if(show)count++});document.querySelector('#empty').hidden=count>0;}
search.addEventListener('input',filter);
document.querySelector('#clear').addEventListener('click',()=>{search.value='';filter();search.focus()});
document.querySelector('#print').addEventListener('click',()=>window.print());
document.querySelectorAll('.languages a').forEach(a=>a.addEventListener('click',()=>{a.hash=location.hash}));
const contents=document.querySelector('#contents');if(matchMedia('(max-width:850px)').matches)contents.open=false;
document.querySelectorAll('#contents a').forEach(a=>a.addEventListener('click',()=>{if(matchMedia('(max-width:850px)').matches)contents.open=false}));
function showAnchor(){const target=document.getElementById(location.hash.slice(1));if(target?.hidden){search.value='';filter();target.scrollIntoView()}}
window.addEventListener('hashchange',showAnchor);
