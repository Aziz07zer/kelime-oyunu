const questions = [
    { question: "1) \"Yazmış olduğu Divan-ı Lügati't Türk adlı eser edebiyatımızın ilk sözlüğü kabul edilmektedir. Kitap aynı zamanda ilk dilbilgisi kitabıdır. Ansiklopedik bir özelliğe sahiptir. Sözlü dönem ürünleri olan sav, sagu ve koşukların örneklerini gördüğümüz tek eserdir.\"\n\nBu sözlüğü oluşturarak dilimize büyük katkı sağlayan kişi kimdir?", options: ["A) Yusuf Has Hacip", "B) Kaşgarlı Mahmut", "C) Şinasi", "D)Ahmet Yesevi", "E) Yunus Emre"], correct: 1 },
    { question: "2) Toplumda Türkçe bilincini aşılamak için çalışmalar gerçekleştiren Oktay Sinanoğlu'nun kitabı aşağıdakilerden hangisidir?", options: ["A) Divan", "B) Şair Evlenmesi", "C)Bye Bye Türkçe", "D) Edebiyat Tarihi", "E) Lugat-ı Türkçe"], correct: 2 },
    { question: "3)\" Şimdengeru, divanda, dergâhta, bargâhta, mecliste ve meydanda Türkçeden gayri dil kullanılmaya... uymayanların boynu vurula....\" diyerek Türkçenin ve Türklüğün Anadolu’da ve yeryüzünde ebediyen yaşamasında öncü olma şerefine erişen kişi kimdir?", options: ["A) Arif Nihat Asya", "B) Mehmet Kaplan", "C)Fuat Köprülü ", "D) Ömer Seyfettin", "E) Karamanoğlu Mehmet Bey"], correct: 4 },
    { question: "4) Mustafa Kemal Atatürk'ün isteği doğrultusunda, “Türk dilinin öz güzelliğini ve zenginliğini meydana çıkarmak, onu yeryüzü dilleri arasında değerine yaraşır yüksekliğe eriştirmek” amacıyla 12 Temmuz 1932'de kurulan kurum hangisidir?", options: ["A) Türk Tarih Kurumu", "B) Türk Dili ve Edebiyatı Kürsüsün", "C) Filoloji ", "D) Türk Dil Kurumu", "E) Edebiyat Akademisi"], correct: 3 },
    { question: "5) Türkçeye ilk noktalama işaretlerini getirerek kullanan kişi kimdir?", options: ["A) Şinasi", " B) Namık Kemal", "C)Şemsetttin Sami", "D)Ahmet Vefik Paşa", "E)Ömer Seyfettin"], correct: 0 },
    { question: "6) Türkçeye katkı sağlayan şairlerden biri olan Arif Nihat Asya ne şairi olarak tanınmaktadır?", options: ["A) Vatan", "B) Bayrak", "C) Hürriyet", "D) Anadolu", "E) İstiklal"], correct: 1 },
    { question: "7) Çağatay lehçesinin gelişimine katkı sağlayan ve Muhakemetü'l Lugateyn'i yazan kişi kimdir?", options: ["A) Ahmet Vefik Paşa", "B) Şinasi", "C) Şemsetttin Sami", "D) Ali Şir Nevai", "E) Mehmet Kaplan"], correct: 3 },
    { question: "8) Maupassant tarzı hikayeyi Türkçeye kazandıran ve Milli Edebiyat akımının öncülerinden olan kişi kimdir?", options: ["A) Ziya Gökalp", "B) Arif Nihat Asya", "C) Ömer Seyfettin ", "D) Mehmet Emin Yurdakul", "E) Mehmet Akif Ersoy"], correct: 2 },
    { question: "9) Şemsettin Sami'nin oluşturduğu Kamus-i Türki adlı sözlük hangi anlamda ilk kabul edilir?", options: ["A) Türk edebiyatının ilk sözlüğüdür.", "B) Osmanlı Türkçesinin ilk sözlüğüdür.", "C) Sözlü ürünlerin olduğu tek sözlüktür.", "D) İçerisinde harita olan tek sözlüktür.", "E) Türk adının geçtiği ilk sözlüktür."], correct: 4 },
    { question: "10) Türk edebiyatına tahlil/ analiz yöntemini getiren kişidir. Millî Eğitim Bakanlığının yetmişli yılların hemen başında ilk örnekleri verilen 1000 Temel Eser dizisinin de mimarı olmuştur. Türk edebiyat araştırmalarının önemli temsilcilerindendir.\n\n Yukarıda anlatılan kişi kimdir? ", options: ["A)Mehmet Kaplan", "B) Oktay Sinanoğlu", "C) Şemsettin Sami ", "D) Ahmet Vefik Paşa", "E) Fuat Köprülü"], correct: 0 },
    { question: "11)  Türkiye’de modern edebiyat tarihçiliğinin kurucusu olan , şarkiyat, Türk medeniyeti ve kültür tarihi, Türk edebiyatı tarihi, edebî tenkit, Türk dili, din, Türk sanat musikisi, Türk hukuk ve iktisat tarihleri, Türk siyasi tarihi ve etnolojisi gibi alanlarda eserler veren kişidir. \"İlk Mutasavvıflar\" ve \"Türk Edebiyatı Tarihi\" gibi eserleri vardır.\n\nYukarıda tanıtılan kişi kimdir?", options: ["A) Ömer Seyfettin", "B) Arif Nihat Asya", "C) Mehmet Fuat Köprülü", "D) Ali Şir Nevai", "E) Şemsettin Sami"], correct: 2 },
    { question: "12) Yazdığı  \"Geometri\" kitabında Türkçeye kenar, üçgen, dikey, çevre gibi kelimeleri kazandıran  kişi kimdir?", options: ["A) Şinasi", "B)Mehmet Kaplan", "C) Fuat Köprülü", "D)Oktay Sinanoğlu", "E)Mustafa Kemal Atatürk"], correct: 4 },
    // ...daha fazla soru ekleyin
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const questionNumberElement = document.getElementById('question-number');
    const options = document.querySelectorAll('.option');
    const messageElement = document.getElementById('message');

    questionElement.textContent = questions[currentQuestionIndex].question;
    questionNumberElement.textContent = `Soru ${currentQuestionIndex + 1}/${questions.length}`;
    messageElement.textContent = '';

    options.forEach((option, index) => {
        option.textContent = questions[currentQuestionIndex].options[index];
        option.disabled = false;
    });
}

function selectOption(index) {
    const messageElement = document.getElementById('message');
    const overlay = document.getElementById('overlay');
    const overlayMessage = document.getElementById('overlay-message');
    const correctSound = document.getElementById('correct-sound');
    const wrongSound = document.getElementById('wrong-sound');
    const correctIndex = questions[currentQuestionIndex].correct;

    if (index === correctIndex) {
        correctSound.currentTime = 0; // Sesi yeniden başlat
        correctSound.play();
        if (currentQuestionIndex === questions.length - 1) {
            // Son soruyu doğru cevapladı
            document.querySelector('.quiz-container').style.display = 'none';
            document.getElementById('email-form').style.display = 'block';
        } else {
            overlayMessage.textContent = `Tebrikler! Doğru cevap. ${currentQuestionIndex + 2}. soruya geçtiniz.`;
            overlay.style.visibility = 'visible';
            setTimeout(() => {
                overlay.style.visibility = 'hidden';
                nextQuestion();
            }, 1000); // 1 saniye sonra otomatik olarak sonraki soruya geç
        }
    } else {
        wrongSound.currentTime = 0; // Sesi yeniden başlat
        wrongSound.play();
        overlayMessage.textContent = 'Yanlış cevap. 1. soruya dönüyorsunuz.';
        overlay.style.visibility = 'visible';
        setTimeout(() => {
            overlay.style.visibility = 'hidden';
            currentQuestionIndex = 0;
            loadQuestion();
        }, 3000); // 3 saniye sonra 1. soruya dön
    }

    document.querySelectorAll('.option').forEach(option => option.disabled = true);
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("Quiz tamamlandı!");
    }
}

function sendEmail() {
    const email = document.getElementById('email').value;
    if (email) {
        // E-posta gönderme işlemi
        fetch('https://api.example.com/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: email,
                subject: 'Tebrikler!',
                message: 'Tebrikler! Bu 12 soruluk testi başarılı olarak tamamladınız.'
            })
        })
        .then(response => response.json())
        .then(data => {
            alert(`Tebrikler! Bu 12 soruluk testi başarılı olarak tamamladınız. E-posta adresinize bir mesaj gönderildi: ${email}`);
        })
        .catch(error => {
            alert('E-posta gönderilirken bir hata oluştu.');
            console.error('Error:', error);
        });
    } else {
        alert("Lütfen geçerli bir e-posta adresi girin.");
    }
}

// İlk soruyu başlat
loadQuestion();
