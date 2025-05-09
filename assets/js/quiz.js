const quizData = [
  {
    question: '1. GEMPA : RITCHER = SUHU : ...',
    options: ['Termometer', 'Panas', 'Tekanan', 'Derajat'],
    answer: 'Derajat',
  },
  {
    question: '2. SENAPAN : BERBURU = ... : ...',
    options: ['Perangkap : Menangkap', 'Kapal : Berlabuh', 'Kereta : Lancar', 'Pancing : Ikan'],
    answer: 'Perangkap : menangkap',
  },
  {
    question: '3. RAMALAN : KENYATAAN = ... : ...',
    options: ['Astrologi : Masa depan', 'Dugaan : Fakta', 'Mimpi : Tidur', 'Cita-cita : Angan-angan'],
    answer: 'Dugaan : Fakta',
  },
  {
    question: '4. UANG : PUNDI-PUNDI= ... : ...',
    options: ['Air : Tempayan', 'Gelas : Nampan', 'Hubungan : Jambang', 'Buku : Percetakan'],
    answer: 'Air : Tempayan',
  },
  {
    question: '5. RAMBUT: GUNDUL= ... : ...',
    options: ['Bulu : Cabut', 'Lantai : Licin', 'Pakaian : Bugil', 'Botak : Kepala'],
    answer: 'Pakaian : Bugil',
  },
  {
    question: '6. Kekang >< ...',
    options: ['Hewan', 'Bebas', 'Batas', 'Kebas'],
    answer: 'Bebas',
  },
  {
    question: '7. Konveks >< ...',
    options: ['Nyata', 'Cekung', 'Bias', 'Cembung'],
    answer: 'Cekung',
  },
  {
    question: '8. Sekuler >< ...',
    options: ['Tradisional', 'Keagamaan', 'Duniawi', 'Keberagaman'],
    answer: 'Keagamaan',
  },
  {
    question: '9. Makar >< ...',
    options: ['Baik', 'Pakar', 'Mekar', ' Sentosa'],
    answer: 'Baik',
  },
  {
    question: '10. Gegai >< ...',
    options: ['Lemah', 'Bohong', 'Geger', 'Kuat'],
    answer: 'Kuat',
  },
  {
    question: '11. Andal = ...',
    options: ['Bebal', 'Tebal', 'Tangguh', 'Dampak'],
    answer: 'Tangguh',
  },
  {
    question: '12. Mudun = ...',
    options: ['Setuju', 'Mufakat', 'Beradab', 'Mufakat'],
    answer: 'Beradab',
  },
  {
    question: '13. Canggih = ...',
    options: ['Kompleks', 'Sukar', 'Sulit', 'Mutakhir'],
    answer: 'Mutakhir',
  },
  {
    question: '14. Boga = ...',
    options: ['Pakaian bersama', 'Makanan kenikmatan', 'Tata rias', 'Dekorasi tata ruang'],
    answer: 'Makanan kenikmatan',
  },
  {
    question: '15. Warta = ...',
    options: ['Berita', 'Harta', 'Benda', 'Cerita'],
    answer: 'Berita',
  },
  {
    question: '16. Semua tamu undangan harus memakai gaun saat pesta. Riona mengikuti pesta dan tidak memakai gaun.',
    options: ['Peserta pesta bukan hanya tamu undangan saja.', 
        'Riona adalah penyelenggara pesta.', 
        'Beberapa tamu undangan tidak memakai gaun saat pesta.', 
        'Ada tamu undangan yang tidak mengikuti pesta.'],
    answer: 'Peserta pesta bukan hanya tamu undangan saja.',
  },
  {
    question: '17. Semua hewan adalah makhluk hidup. Semua hewan memerlukan makanan. Kuda makan rumput.',
    options: ['Hanya kuda yang merupakan hewan pemakan rumput.', 
        'Beberapa hewan tidak memerlukan makanan.', 
        'Kuda tidak membutuhkan makanan.', 
        'Kuda adalah makhluk hidup pemakan rumput.'],
    answer: 'Kuda adalah makhluk hidup pemakan rumput.',
  },
  {
    question: '18. Iwan lebih tinggi daripada amir. Amir lebih tinggi daripada Yudi dan Bandi. Joko lebih tinggi daripada Amir dan Ridwan. Tidak ada yang tingginya sama. Jika Bandi lebih tinggi daripada Ridwan, maka ...',
    options: ['Bandi lebih tinggi daripada Joko', 
        'Amir lebih tinggi daripada Ridwan', 
        'Yudi lebih tinggi daripada Ridwan', 
        'Joko lebih tinggi daripada Iwan'],
    answer: 'Amir lebih tinggi daripada Ridwan',
  },
  {
    question: '19. Riska, pemain bulutangkis Detik Badminton Club, dapat melakukan service forehand dengan baik. Setiap pemain yang bisa melakukan service forehand dengan baik dapat melakukan dropshot akurat. Kesimpulan yang benar adalah ...',
    options: ['Beberapa pemain bulutangkis Detik Badminton Club tidak dapat melakukan service forehand dengan baik tetapi dapat melakukan dropshot yang akurat.', 
        'Semua pemain bulutangkis Detik Badminton Club dapat melakukan service forehand dengan baik dan dropshot yang akurat.', 
        'Beberapa pemain bulutangkis Detik Badminton Club dapat melakukan service forehand dengan baik dan dropshot yang akurat.', 
        'Semua pemain bulutangkis dapat melakukan service forehand dengan baik dan dropshot yang akurat.'],
    answer: 'Beberapa pemain bulutangkis Detik Badminton Club dapat melakukan service forehand dengan baik dan dropshot yang akurat.',
  },
  {
    question: '20. Bila naik kereta api, harus membayar kontan atau memakai tiket abonemen. Badu naik kereta api padahal tidak membayar kontan. Kesimpulan yang tepat adalah ...',
    options: ['Badu membayar dengan tiket abonemen.', 
        'Badu tidak mempunyai tiket abonemen.', 
        'Badu tidak mempunyai uang kontan.', 
        'Badu membayar kontan untuk naik kereta api.'],
    answer: 'Badu membayar dengan tiket abonemen.',
  },
  {
    question: '21. Suatu seri angka sebagai berikut: 1, 3, 7, 13, 21, ..., seri selanjutnya adalah ...',
    options: ['26', '25', '31', '30'],
    answer: '31',
  },
  {
    question: '22. Suatu seri huruf sebagai berikut: A, C, E, B, D, F, D, ....',
    options: ['A', 'F', 'G', 'P'],
    answer: 'F',
  },
  {
    question: '23. 4, 11, 30, 8, 19, 29, 16, 27, 28, ..., ..., ...',
    options: ['32, 34, 35', '33, 34, 35', '32, 34, 37', '32, 35, 27'],
    answer: '32, 35, 27',
  },
  {
    question: '24. ..., ..., 122, 134, 268, 280',
    options: ['49, 61', '61, 44', '44, 57', '35 dan 87'],
    answer: '49, 61',
  },
  {
    question: '25. 5, 7, 11, 13, 17, 19, 23, ...',
    options: ['25, 28', '25, 29', '25, 27', '25, 26'],
    answer: '25, 29',
  },
  {
    question: '26. Pada saat ini, harga satu lusin kelereng dan sepuluh kilogram salak adalah sama. Jika harga satu lusin kelereng telah naik sebesar 10% dan harga salak naik sebesar 2%, maka untuk membeli satu lusin kelereng dan sepuluh kilogram salak diperlukan tambahan uang sebesar .....',
    options: ['12%', '7%', '6%', '10%'],
    answer: '6%',
  },
  {
    question: '27. Seorang pekerja dibayar Rp 800 per jam. Ia bekerja dari pukul 08.00-16.00. ia akan mendapat tambahan sebesar 50% per jam jika bekerja melampaui pukul 16.00. Jika ia memperoleh Rp 8.000 pada hari itu, pukul berapa ia pulang?',
    options: ['17.25', '18.20', '16.20', '17.20'],
    answer: '17.20',
  },
  {
    question: '28. Seorang pengrajin merencanakan untuk membuat beberapa tas dan keranjang dari bahan bambu. Jumlah kedua macam barang tersebut adalah 48 buah. Jumlah keranjang direncanakan tiga kali jumlah tas. Berapakah jumlah keranjang yang akan dibuat?',
    options: ['36', '46', '54', '63'],
    answer: '36',
  },
  {
    question: '29. Suatu selokan mempunyai penampang berbentuk trapesium dengan panjang sisi-sisi sejajarnya 3 m dan 1,5 m dan panjang selokan 15 km. Berapakah volume air maksimum yang dapat ditampung oleh selokan, jika tinggi selokan 0,2 m?',
    options: ['6750 m3', '675 m3', '67,5 m3', '6,75 m3'],
    answer: '6750 m3',
  },
  {
    question: '30. Diketahui lamanya belajar mandiri siswa sebanding dengan nilai ujian. Jika siswa dengan nilai ujian 90 melakukan belajar mandiri 12 jam/hari, maka lamanya belajar mandiri siswa dengan nilai 60 adalah ...',
    options: ['6 jam/hari', '8 jam/hari', '24 jam/hari', '18 jam/hari'],
    answer: '8 jam/hari',
  },
  {
    question: '31. Jika 2x = 64 dan 3y = 81, manakah pernyataan berikut yang benar?',
    options: ['x > y', 'x < y', 'x = y', 'x ≠ y'],
    answer: 'x > y',
  },
  {
    question: '32. Jika x = 2,4 – 1,98 + 0,009 dan y = 5,08, maka ...',
    options: ['Hubungan x dan y tak dapat ditentukan', 'x ≠ y', 'x = y', 'x > y'],
    answer: 'x = y',
  },
  {
    question: '33. Suatu mobil menempuh jarak 7 km dalam 15 menit. Berapakah rata-rata jarak tempuh mobil dalam 1 jam?',
    options: ['26 km', '20 km', '28 km', '22 km'],
    answer: '28 km',
  },
  {
    question: '34. Edward berjalan selama 2 jam dan menempuh jarak 8,7 km. Pada paruh jam pertama ditempuh 3 km, paruh jam ke-2 ditempuh 1 km, paruh jam ke-3 ditempuh 4,5 km. Berapakah km ditempuh pada paruh jam ke-4?',
    options: ['100 m', '200 m', '2000 m', '1000 m'],
    answer: '200 m',
  },
  {
    question: '35. Dari suatu kelas yang terdiri atas 40 orang siswa diperoleh nilai rata-rata kelas 7,00 untuk mata pelajaran matematika saja. Jika nilai 5 siswa tertinggi dengan rata-rata 8,50 dan 10 nilai siswa terendah dengan rata-rata 6,00 dikeluarkan, berapa nilai rata-rata siswa sisanya?',
    options: ['7,60', '7,80', '7,10', 'Salah semua'],
    answer: '7,10',
  },
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();