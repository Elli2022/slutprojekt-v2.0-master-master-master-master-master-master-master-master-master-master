const e=document.getElementById("image-selection"),t=document.getElementById("logged-in-users"),n=document.getElementById("create-account-button"),o=document.getElementById("submit-button"),s=document.getElementById("username"),a=document.getElementById("password"),l=document.getElementById("form"),r=document.createElement("p"),d=document.createElement("h1"),c=document.createElement("h1"),i=document.createElement("input"),u=document.createElement("li"),y=document.getElementById("body"),m=document.createElement("h1"),p=document.createElement("div");const h=document.createElement("div");h.style.display="flex",h.style.justifyContent="center";const f="https://social-media-68d76-default-rtdb.europe-west1.firebasedatabase.app/";async function g(){try{const e=await fetch(`${f}users.json`);if(!e.ok)throw new Error(`Error: ${e.status} ${e.statusText}`);const t=await e.json();if(!t)return[];return Object.values(t)}catch(e){throw new Error("Failed to fetch users")}}async function w(e){await g();const t=`${f}users/${e.userName}.json`,n={method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}};try{const e=await fetch(t,n);if(!e.ok)throw new Error(`Error: ${e.status} ${e.statusText}`)}catch(e){throw console.log(e),new Error("Failed to save user information.")}}function E(e){if(t){t.innerHTML="";for(const n of e)if(!n.newUser){const e=document.createElement("li");e.textContent=`${n.userName} - Status: ${n.status}`;const o=document.createElement("img");o.src=n.imageurl,e.appendChild(o),t.appendChild(e),e.addEventListener("click",(()=>{document.body.innerHTML="",l.style.display="none";const e=document.createElement("div");e.innerHTML=`<h1>Welcome to ${n.userName}'s page! </br> Status: ${n.status}</h1>`,document.body.appendChild(e);const o=document.createElement("img");o.src=n.imageurl,o.style.width="50px",o.style.height="50px",o.style.alignItems="center",e.appendChild(o);const s=document.createElement("button");s.textContent="Log Out",s.style.textAlign="center",s.style.margin="10px",document.body.appendChild(s),s.addEventListener("click",(function(){i.style.display="none",p.innerHTML="",s.style.display="none",d.textContent=" ",l.style.display="block",a.value="",r.textContent=" ",p.style.display="none",t.style.display="none",window.location.reload()}))}))}}else console.error("Logged-in users list element not found.")}e?e.addEventListener("change",(()=>{const t=e.value;e.value=t})):console.error("Image dropdown element not found."),n&&s&&a?n.addEventListener("click",(async()=>{d.textContent=" ",r.innerText=" ";const t=s.value,o=a.value;if(!t||!o)return r.textContent="Username and / or password cannot be empty.",r.style.color="red",void n.insertAdjacentElement("afterend",r);if(!await async function(e){return!(await g()).some((t=>t.userName===e))}(t))return r.textContent="Username is already taken. Please choose another one.",r.style.color="red",void n.insertAdjacentElement("afterend",r);y.appendChild(m),m.textContent="Your account has been successfully created! You may now log in with your new account.";const l={userName:t,password:o,status:"",imageurl:e?.value??"",newUser:!0};await w(l)})):console.error("One or more DOM elements not found."),o&&s&&a?o.addEventListener("click",(async e=>{e.preventDefault(),m.textContent=" ",d.textContent=" ",document.body.style.alignContent="center",r.textContent=" ";const n=a.value,o=await g(),y=o.find((e=>e.userName===s.value));if(r.textContent="Log In Successfull! ",!y)return r.textContent="No account found for this user. Please create an account first.",r.style.color="red",void l?.appendChild(r);if(y.password!==n)return r.textContent="Incorrect password. Please try again.",r.style.color="red",void l?.appendChild(r);if(!t)return void console.error("Logged-in users list element not found.");t.innerHTML="";for(const e of o)e.newUser||(document.body.innerHTML="",u.addEventListener("click",(()=>{document.body.innerHTML="",l.style.display="none";const t=document.createElement("div");t.innerHTML=`<h1>Welcome to ${e.userName}'s page! </br> Status: ${e.status}</h1>`,document.body.appendChild(t),document.body.style.alignContent="center";const n=document.createElement("img");n.src=e.imageurl,n.style.width="50px",n.style.height="50px",n.style.alignItems="center",t.appendChild(n);const o=document.createElement("button");o.textContent="Log Out",document.body.appendChild(o),o.addEventListener("click",v),v()})));y.newUser=!1,await w(y),E(await g()),l.style.display="none",p.innerHTML=`<h1>Welcome ${s.value}!</h1> `,p.style.textAlign="center",document.body.appendChild(p),p.appendChild(t),t.style.display="block",i.style.display="block",i.value="",i.id="status",document.body.appendChild(i),i.style.width="200px",i.style.position="relative",i.style.bottom="10px",i.style.left="50%",i.style.transform="translateX(-50%)";const C=document.createElement("button");C.innerText="Send statusmessage! ",C.style.width="120px",C.style.textAlign="center",C.style.margin="10px",h.appendChild(C),document.body.appendChild(h);const x=document.createElement("button");x.innerText="Delete User",x.style.textAlign="center",x.style.margin="10px",x.style.width="120px",h.appendChild(x),document.body.appendChild(h),x?.addEventListener("click",(async e=>{e?.preventDefault(),i.style.display="none",p.innerHTML="",b.style.display="none",d.textContent=" ",l.style.display="block",a.value="",r.textContent=" ",p.style.display="none",t.style.display="none",window.location.reload(),s?(await async function(e){console.log("Deleting user");const t=`${f}users/${e}.json`,n={method:"DELETE",headers:{"Content-type":"application/json; charset=UTF-8"}};try{const e=await fetch(t,n);if(!e.ok)throw new Error(`Error: ${e.status} ${e.statusText}`);console.log("User deleted successfully"),d.textContent="User deleted successfully!",document.body.appendChild(d),E(await g())}catch(e){throw console.log(e),c.textContent="Failed to delete user. Please try again.",document.body.appendChild(c),new Error("Failed to delete user.")}}(s.value),r.textContent=" "):console.error("Username input element not found.")})),C.addEventListener("click",(async()=>{const e=i.value,t=`${f}users/${y.userName}/status.json`,n={method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}};try{const e=await fetch(t,n);if(!e.ok)throw new Error(`Error: ${e.status} ${e.statusText}`)}catch(e){throw console.log(e),new Error("Failed to save user information.")}E(await g()),i.value=""}));const b=document.createElement("button");function v(){i.style.display="none",p.innerHTML="",C.style.display="none",b.style.display="none",x.style.display="none",d.textContent=" ",l.style.display="block",a.value="",r.textContent=" ",p.style.display="none",t.style.display="none",window.location.reload()}b.textContent="Log Out",b.style.textAlign="center",b.style.margin="10px",b.style.width="80px",h.appendChild(b),document.body.appendChild(h),b.addEventListener("click",v)})):console.error("One or more DOM elements not found.");
//# sourceMappingURL=index.707fde80.js.map
