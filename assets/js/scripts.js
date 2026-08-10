function load(selector, url) {
    const cached = localStorage.getItem(url);

    if (cached) {
        document.querySelector(selector).innerHTML = cached;
    }


    fetch(url)
        .then(response => response.text())
        .then(html => {
            if (html !== cached) {
                document.querySelector(selector).innerHTML = html;
                localStorage.setItem(url, html);
            }
        })
}