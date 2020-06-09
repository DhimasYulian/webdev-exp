// Notif Script
const notifBtn = document.querySelector('.btn-notif');
const notif = document.querySelector('.notif');
notifBtn.addEventListener('click', function () {
    notif.classList.add('notif-close');
    // setInterval(slideUp, 600000)
})

// News Script
const newsBtn = document.querySelector('.n-close');
const news = document.querySelector('.news');
newsBtn.addEventListener('click', function () {
    news.classList.replace('news-show', 'news-close');
})

window.onscroll = function () {
    slideUp()
};


function slideUp() {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        news.classList.add('news-show');
    }
}