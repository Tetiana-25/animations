
const imagesList = [];

for (let i=0; i< 360; i++){
    let imageTemplate = 'images/VILLAS_IN_MARBELLA_Cam_09_v10_00';
    let imageIndex;
    if (i< 10){
        imageIndex = '00' + i;
    }
    if (i>10 & i<100){
        imageIndex  = '0' + i;
    }
    if (i>=100){
        imageIndex =i;
    }
    let fullImage = imageTemplate + imageIndex + '.webp';
    imagesList.push(fullImage);
}


const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');
const images = []; // Array to hold image elements
const imageCount = imagesList.length; // Number of images to display
let currentImageIndex = 0;

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Load images
for (let i = 0; i < imageCount; i++) {
    const img = new Image();
    let number = '';
    if (i< 10){
        number = '00' + i;
    }
    if (i>=10 & i<100){
        number  = '0' + i;
    }
    if (i>=100){
        number =i;
    }
    img.src = `images/VILLAS_IN_MARBELLA_Cam_09_v10_00${number}.webp`; // Placeholder images
    images.push(img);
}

// Draw the current image on the canvas
function drawImage() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images[currentImageIndex], 0, 0, canvas.width, canvas.height);
}

// Scroll event listener
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;

    // Calculate the current image index based on scroll position
    currentImageIndex = Math.floor((scrollPosition / totalHeight)*1.5* imageCount);
    currentImageIndex = Math.min(currentImageIndex, imageCount - 1); // Ensure index is within bounds

    drawImage();
});

// Initial draw
images[0].onload = drawImage;
















    const logoWrapper = document.querySelector('.logo-wrapper');
    const heroSection = document.querySelector('#main-hero');

    const heroDescription1 = document.querySelector('.hero-description p:first-child');
    const heroDescription2 = document.querySelector('.hero-description p:nth-child(2)');
    const heroDescription3 = document.querySelector('.hero-description p:nth-child(3)');
    const heroDescription4 = document.querySelector('.hero-description p:nth-child(4)');

    const heroTitle = document.querySelector('.hero-main-titles');

    // Ініціалізація GSAP ScrollTrigger анімації для logo-wrapper
    gsap.registerPlugin(ScrollTrigger);


    gsap.to(logoWrapper, {
        scrollTrigger: {
          trigger: heroSection,
          start: "top top", // Початок анімації на самому верху секції
          end: 400, // Кінець анімації, коли секція зникне з екрану
          scrub: true, // Прив'язка анімації до прокрутки (1 секунда для плавного переходу)
        },
        scale: 0.1,   // Масштабування логотипа
        y: -220,      // Позиція по вертикалі
        ease: "linear", // Без easing для стабільного руху
    });

    gsap.to(logoWrapper, {
        scrollTrigger: {
          trigger: heroSection,
          start: 400, // Початок анімації на самому верху секції
          end: 500, // Кінець анімації, коли секція зникне з екрану
          scrub: true, // Прив'язка анімації до прокрутки (1 секунда для плавного переходу)
        },
        opacity: 0,  
        ease: "linear", // Без easing для стабільного руху
    });

    gsap.to(heroDescription1, {
        scrollTrigger: {
          trigger: heroSection,
          start: "top top", // Початок анімації на самому верху секції
          end: 350, // Кінець анімації, коли секція зникне з екрану
          scrub: true, // Прив'язка анімації до прокрутки (1 секунда для плавного переходу)
        },
        y: 5,
        opacity: 0,  
        ease: "power2.inOut", // Без easing для стабільного руху
    });

    gsap.to(heroDescription2, {
        scrollTrigger: {
          trigger: heroSection,
          start: "top top", // Початок анімації на самому верху секції
          end: 300, // Кінець анімації, коли секція зникне з екрану
          scrub: true, // Прив'язка анімації до прокрутки (1 секунда для плавного переходу)
        },
        y: 5,
        opacity: 0,  
        ease: "power2.inOut", // Без easing для стабільного руху
    });
    gsap.to(heroDescription3, {
        scrollTrigger: {
          trigger: heroSection,
          start: "top top", // Початок анімації на самому верху секції
          end: 250, // Кінець анімації, коли секція зникне з екрану
          scrub: true, // Прив'язка анімації до прокрутки (1 секунда для плавного переходу)
        },
        y: 5,
        opacity: 0,  
        ease: "power2.inOut", // Без easing для стабільного руху
    });
    gsap.to(heroDescription4, {
        scrollTrigger: {
          trigger: heroSection,
          start: "top top", // Початок анімації на самому верху секції
          end: 200, // Кінець анімації, коли секція зникне з екрану
          scrub: true, // Прив'язка анімації до прокрутки (1 секунда для плавного переходу)
        },
        y: 5,
        opacity: 0,  
        ease: "power2.inOut", // Без easing для стабільного руху
    });



    const heroMainTitle = heroTitle.querySelector('.hero-main-title:nth-child(1)');
    const heroMainTitle2 = heroTitle.querySelector('.hero-main-title:nth-child(2)');

    // Функція для розбиття тексту на букви в кожному елементі
    const splitText = (element) => {
      const content = element.innerHTML;
    
      // Створюємо тимчасовий елемент для маніпуляцій
      const tempElement = document.createElement('div');
      tempElement.innerHTML = content;
    
      // Для кожного елемента всередині, перевіряємо, чи є текст, і розбиваємо його на букви
      tempElement.querySelectorAll('*').forEach(el => {
          // Якщо це текстовий вузол, розбиваємо його на букви
          const text = el.textContent.split('');
          el.innerHTML = text.map(letter => `<span>${letter}</span>`).join('');
      });
    
      return tempElement.innerHTML;
    };
    
    // Розбиваємо текст в .hero-main-title на окремі букви, зберігаючи всі теги
    heroMainTitle.innerHTML = splitText(heroMainTitle);
    heroMainTitle2.innerHTML = splitText(heroMainTitle2);




    gsap.fromTo('.hero-main-title:nth-child(1) span span, .hero-main-title:nth-child(1) i span', 
        {
            opacity: 0,
            scale: 1.5
        },
        {
        scrollTrigger: {
          trigger: heroSection,
          start: 500, // Початок анімації на самому верху секції
          end: 700, // Кінець анімації, коли секція зникне з екрану
          scrub: true, // Прив'язка анімації до прокрутки (1 секунда для плавного переходу)
        },
        opacity: 1,  // Кінцева opacity
        duration: 0.5, // Тривалість анімації для кожної букви
        scale: 1,
        stagger: {
          amount: 1, // Загальна тривалість затримки між буквами
          from: "random", // Задаємо випадковий порядок
          axis: "x", // Випадкова анімація на осі X
          start: 0, // Початок
          end: 1 // Кінець
        },
        ease: "power1.out", // Тип easing для анімації
        duration: 1
        }
    );

    gsap.to('.hero-main-title:nth-child(1) span span, .hero-main-title:nth-child(1) i span', 
        {
            scrollTrigger: {
                trigger: heroSection,
                start: 900, // Початок анімації на самому верху секції
                end: 1000, // Кінець анімації, коли секція зникне з екрану
                scrub: true, // Прив'язка анімації до прокрутки (1 секунда для плавного переходу)
            },
            stagger: {
                amount: 1, // Загальна тривалість затримки між буквами
                from: "random", // Задаємо випадковий порядок
                axis: "x", // Випадкова анімація на осі X
                start: 0, // Початок
                end: 1 // Кінець
              },
              ease: "power1.out", // Тип easing для анімації
              duration: 1,
              opacity: 0,
                scale: 0,
        }
    );

    gsap.fromTo('.hero-main-title:nth-child(2) span span, .hero-main-title:nth-child(2) i span', 
        {
            opacity: 0,
            scale: 1.5
        },
        {
        scrollTrigger: {
          trigger: heroSection,
          start: 1000, // Початок анімації на самому верху секції
          end: 1200, // Кінець анімації, коли секція зникне з екрану
          scrub: true, // Прив'язка анімації до прокрутки (1 секунда для плавного переходу)
        },
        opacity: 1,  // Кінцева opacity
        duration: 0.5, // Тривалість анімації для кожної букви
        scale: 1,
        stagger: {
          amount: 1, // Загальна тривалість затримки між буквами
          from: "random", // Задаємо випадковий порядок
          axis: "x", // Випадкова анімація на осі X
          start: 0, // Початок
          end: 1 // Кінець
        },
        ease: "power1.out", // Тип easing для анімації
        duration: 1
        }
    );