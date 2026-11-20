console.log("مرحباً بك في معرض أعمال يسرى");

// ظهور بطاقات المشاريع عند التمرير

const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

cards.forEach((card) => {
    observer.observe(card);
});

// التأكد من تحميل صور المشاريع

document.querySelectorAll(".project-card img").forEach((img) => {

    img.addEventListener("load", () => {
        console.log("تم تحميل الصورة: " + img.alt);
    });

    img.addEventListener("error", () => {
        console.log("تعذر تحميل الصورة: " + img.alt);
    });

});