import{a as g,S as y,i as l}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="57775486-4e44ac2f3d58fab367b1ac76d",p="https://pixabay.com/api/";function b(o){return g.get(p,{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function S(o){const r=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:s,comments:m,downloads:d})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${a}">
        <img class="gallery-image" src="${i}" alt="${e}" />
      </a>
      <ul class="info">
        <li class="info-item"><b>Likes</b>${t}</li>
        <li class="info-item"><b>Views</b>${s}</li>
        <li class="info-item"><b>Comments</b>${m}</li>
        <li class="info-item"><b>Downloads</b>${d}</li>
      </ul>
    </li>`).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function w(){c.innerHTML=""}function E(){u.classList.add("is-visible")}function q(){u.classList.remove("is-visible")}const f=document.querySelector(".form");f.addEventListener("submit",P);function P(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(r===""){l.warning({message:"Please enter a search query!",position:"topRight"});return}w(),E(),b(r).then(i=>{if(i.hits.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}S(i.hits)}).catch(()=>{n("Something went wrong. Please try again later.")}).finally(()=>{q(),f.reset()})}function n(o){l.error({message:o,position:"topRight",theme:"dark",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",maxWidth:432})}
//# sourceMappingURL=index.js.map
