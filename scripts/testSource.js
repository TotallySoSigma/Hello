function goToWebsite() {
    const url = document.getElementById('googleInput').ariaValueMax;
    if (url) {
        if (!/^https?:\/\//i.test(url)){
            window.location.href = 'http://' + url;

        }
            else {
             window.location.href = url;
        }
    }
}