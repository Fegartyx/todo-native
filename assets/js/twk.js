const quizData = [
  {
    question: '1. Bela negara adalah sebuah sikap, tekad, dan tindakan yang dilakukan oleh warga negara. Hal ini adalah pengertian bela negara menurut....',
    options: ['Sunarso', 'Sutarman', 'Chaidir Basrie', 'Darji Darmodiharjo '],
    answer: 'Chaidir Basrie',
  },
  {
    question: '2. Kong Jaing (bukan nama sebenarnya) merupakan sesepuh dan Guru Silat Beksi khas Betawi. Jika ditelisik dari sisi bela negara, kegiatan yang ia jalankan merupakan contoh bela negara dalam hal ....',
    options: ['Pelestarian alam', 'Melestarikan budaya', 'Belajar dengan rajin bagi para pelajar', 'Mencintai produk-produk dalam negeri '],
    answer: 'Melestarikan budaya',
  },
  {
    question: '3. Fenomena manusia silver semakin merajalela, baik di lampu perlintasan kota besar maupun pusat keramaian. Mirisnya, oknum manusia silver ini ada yang diisi oleh anak di bawah umur dan seringkali beraksi pada saat jam sekolah. Salah satu bentuk hak bela negara bagi warga negara Indonesia berdasarkan ilustrasi di atas adalah ....',
    options: ['Memperoleh pendidikan', 'Mempertahankan hak untuk hidup', 'Menjaga ketertiban masyarakat ibu kota', 'Berpegang teguh pada pedoman pancasila '],
    answer: 'Memperoleh pendidikan',
  },
  {
    question: '4. Banyak dari kalangan pelajar Indonesia yang mengenyam pendidikan di negara-negara maju. Bahkan ada yang menunjukkan kemampuannya menjadi ilmuwan dan pembicara di acara-acara besar yang diadakan oleh PBB. Wujud bela negara yang dapat dilakukan pelajar tersebut adalah ....',
    options: ['Mengajari anak-anak di pedesaan', 'Mengembangkan ilmu pengetahuan', 'Memberikan sponsor kepada pelajar luar negeri', 'Mencari pekerjaan yang lebih baik di luar negeri'],
    answer: 'Mengembangkan ilmu pengetahuan',
  },
  {
    question: '5. Fenomena generasi muda yang mengalami kepudaran terhadap jiwa nasionalisme disebabkan karena ....',
    options: ['Orientasi nasionalisme adalah sikap dan perbuatan', 'Labeling yang menjadi stigma bagi generasi muda', 'Ukuran nasionalisme dipahami hanya sebatas perjuangan secara fisik', 'Kurangnya daya juang terhadap tantangan perubahan zaman'],
    answer: 'Ukuran nasionalisme dipahami hanya sebatas perjuangan secara fisik',
  },
  {
    question: '6. Isu pemecah belahan negara yang dilakukan oleh pihak-pihak tidak bertanggung jawab agar membuat negara menjadi kacau marak terjadi. Sikap kita sebagai warga negara yang baik yaitu ....',
    options: ['Ikut menyebarkan dan memprovokasi.', 'Tidak mudah terimbas isu hoax yang belum tentu kebenarannya.', 'Berpegang teguh pada kepercayaan masing-masing.', 'Waspada dan ikut campur.'],
    answer: 'Tidak mudah terimbas isu hoax yang belum tentu kebenarannya.',
  },
  {
    question: '7. Ancaman disintegrasi bangsa harus dihadapi dengan ....',
    options: ['Pengembalian insentif secara menyeluruh', 'Penunjukan kepala daerah oleh pemerintah pusat', 'Memupuk nasionalisme dan patriotisme', 'Penggunaan kekuatan militer'],
    answer: 'Memupuk nasionalisme dan patriotisme',
  },
  {
    question: '8. Pelimpahan wewenang pemerintah oleh pemerintah pusat kepada gubernur sebagai wakil pemerintah maupun kepala instansi vertikal di wilayah tertentu disebut...',
    options: ['Sentralisasi', 'Dekonsentrasi', 'Pelimpahan wewenang', 'Desentralisasi'],
    answer: 'Dekonsentrasi',
  },
  {
    question: '9. Negara Indonesia dikatakan menganut sistem konstitusional, hal ini karena kekuasaan pemerintah didasarkan pada....',
    options: ['Kehendak wakil rakyat', 'Kebijakan para ahli hukum', 'Peraturan Pemerintah', ' Undang-Undang Dasar 1945'],
    answer: 'Undang-Undang Dasar 1945',
  },
  {
    question: '10. Tokoh yang memberikan usul nama Pancasila untuk dasar Negara Indonesia adalah...',
    options: ['Dr. Radjiman Wedyodiningrat', 'Mr. Soepomo', 'Muh. Yamin', 'Ir. Soekarno'],
    answer: 'Ir. Soekarno',
  },
  {
    question: '11. Bangsa Indonesia adalah bangsa yang anti terhadap segala penjajah. Hal ini sesuai dengan pembukaan UUD 1945...',
    options: ['Alinea pertama', 'Alinea kedua', 'Alinea ketiga', 'Alinea keempat'],
    answer: 'Alinea pertama',
  },
  {
    question: '12. Berdasarkan Pasal 30 ayat (2), usaha pertahan dan keamanan negara tugas dari...',
    options: ['Tiap warga negara', 'TNI AD, AL, dan AU', 'TNI dan Polri sebagai kekuatan utama, dan rakyat sebagai kekuatan pendukung', 'Seluruh rakyat yang tinggal di Indonesia'],
    answer: 'TNI dan Polri sebagai kekuatan utama, dan rakyat sebagai kekuatan pendukung',
  },
  {
    question: '13. Berikut ini yang merupakan contoh peran serta positif warga negara dalam kegiatan pemerintah adalah...',
    options: ['Menunjukkan kekayaan.', 'Membayar pajak tepat pada waktunya.', 'Membangun hotel-hotel berbintang.', 'Memberikan bantuan kepada para korban bencana alam.'],
    answer: 'Membayar pajak tepat pada waktunya.',
  },
  {
    question: '14. Hari Kesaktian Pancasila diperingati setiap tanggal...',
    options: ['1 Juni', '22 Juni', '30 September', '1 Oktober'],
    answer: '1 Oktober',
  },
  {
    question: '15. Sumpah Pemuda merupakan titik balik pemuda Indonesia untuk bersatu demi mewujudkan Indonesia merdeka. Tokoh yang membacakan Sumpah Pemuda adalah...',
    options: ['Amir Syarifudin', 'Moh Yamin', 'Djojo Marsaid', 'Soegondo Djojopoespito'],
    answer: 'Soegondo Djojopoespito',
  },
  {
    question: '16. Pada periode awal Kemerdekaan Indonesia sebelum MPR, DPR, dan DPA dibentuk, segala kekuasaan lembaga tersebut dijalankan oleh...',
    options: ['Presiden dan menteri', 
        'Presiden dan wakil presiden', 
        'Presiden dengan bantuan Komite Nasional', 
        'Presiden, menteri, dan BPK'],
    answer: 'Presiden dengan bantuan Komite Nasional',
  },
  {
    question: '17. Pada periode awal kemerdekaan Indonesia terjadi beberapa penyimpangan terhadap ketentuan UUD 1945. Contoh penyimpangan pada awal kemerdekaan Indonesia adalah...',
    options: ['Lembaga-lembaga negara dipimpin oleh presiden', 
        'Membentuk DPA dan MA dengan penerapan presiden', 
        'Terjadi perubahan sistem kabinet presidensial menjadi kabinet parlementer', 
        'Membentuk MPRS yang anggotanya diangkat dan diberhentikan presiden'],
    answer: 'Terjadi perubahan sistem kabinet presidensial menjadi kabinet parlementer',
  },
  {
    question: '18. Negara Kesatuan Republik Indonesia yang lahir pada 17 Agustus 1945 belum sempurna sebagai negara jika ditinjau dari segi...',
    options: ['Ilmu politik', 'Ilmu sosial', 'Ilmu budaya', 'Hukum tata negara'],
    answer: 'Hukum tata negara',
  },
  {
    question: '19. Di Indonesia presiden memegang fungsi rangkap, yaitu sebagai kepala negara dan kepala pemerintahan. Menurut UUD 1945, presiden dibantu oleh...',
    options: ['Menteri-menteri', 
        'Wakil presiden', 
        'Ketua partai', 
        'Sekretaris kabinet.'],
    answer: 'Menteri-menteri',
  },
  {
    question: '20. Contoh pelaksanaan politik luar negeri yang bebas dan aktif berdasarkan Pancasila adalah...',
    options: ['Ikut campur dan memihak salah satu blok', 
        'Pengiriman pasukan perdamaian ke wilayah konflik', 
        'Memberi bantuan senjata kepada negara yang bertikai', 
        'Menghimpun negara sepaham dan seideologi'],
    answer: 'Pengiriman pasukan perdamaian ke wilayah konflik',
  },
  {
    question: '21. Pancasila wajib diterima dan dipatuhi oleh seluruh lapisan masyarakat tanpa terkecuali maka Pancasila tergolong pada ideologi yang...',
    options: ['Tertutup', 'Terbuka', 'Progresif', 'Kontemporer'],
    answer: 'Tertutup',
  },
  {
    question: '22. Fungsi dan filsafat Pancasila dalam hubungan dengan ideologi-ideologi di dunia adalah sebagai...',
    options: ['Perbandingan perkembangan ideologi', 'Penyaringan masuknya ideologi asing', 'Perpaduan filsafat dan ideologi', 'Perebutan hegemoni filsafat'],
    answer: 'Penyaringan masuknya ideologi asing',
  },
  {
    question: '23. Hubungan antara Pancasila dan Proklamasi Kemerdekaan adalah...',
    options: ['Pancasila memberi motivasi perjuangan kemerdekaan', 'Pancasila menjadi dasar perumusan Teks Proklamasi', 'Teks Proklamasi dirumuskan bersama dengan Pancasila', 'Proklamasi Kemerdekaan menjadi dasar berlakunya Pancasila'],
    answer: 'Proklamasi Kemerdekaan menjadi dasar berlakunya Pancasila',
  },
  {
    question: '24. Salah satu sumbangan yang diberikan Sumpah Pemuda adalah...',
    options: ['Memberi penghargaan kepada tradisi etnik', 'Meningkatkan kesadaran berbangsa', 'Saling menghargai di kalangan suku-suku bangsa', 'Kesadaran akan kebhinekaan'],
    answer: 'Meningkatkan kesadaran berbangsa',
  },
  {
    question: '25. Pemerintah telah menetapkan kewajiban wajib belajar pendidikan dasar 9 tahun. Yang dimaksud pendidikan 9 tahun adalah...',
    options: ['Pendidikan yang terdiri atas prasekolah, SD, dan SMP', 'Pendidikan tingkat SMP 3 tahun yang dihapus dan diintegrasikan menjadi SD tahun', 'Pendidikan tingkat SD 6 tahun dan SMP 3 tahun', 'Pendidikan SD dan SMP yang sama-sama menjadi 9 tahun'],
    answer: 'Pendidikan tingkat SD 6 tahun dan SMP 3 tahun',
  },
  {
    question: '26. Undang-Undang Dasar Negara Republik Indonesia Tahun 1945 merupakan hukum dasar Indonesia. Undang-undang dasar ini diamandemen pada 1999-2022. Alasan pokok yang menjadi penyebab dilakukan amandemen terhadap UUD 1945 adalah...',
    options: ['Menyesuaikan dengan paham liberalis dan komunis', 'Menyesuaikan dengan kehidupan baru negara Indonesia', 'Keinginan bangsa Indonesia memberikan kekuasaan lebih besar kepada DPR', 'Pasal-pasal dalam undang-undang dasar sudah tidak sesuai perkembangan zaman.'],
    answer: 'Menyesuaikan dengan kehidupan baru negara Indonesia',
  },
  {
    question: '27. Dasar ikatan hidup bermasyarakat yang telah dijunjung tinggi oleh nenek moyang bangsa Indonesia adalah...',
    options: ['Gotong royong', 'Kerja keras', 'Sama rata', 'Toleransi'],
    answer: 'Gotong royong',
  },
  {
    question: '28. Persatuan Indonesia merupakan suatu faktor kunci yang menentukan terwujudnya kemerdekaan Indonesia. Oleh karena itu, realisasi persatuan Indonesia harus bersifat...',
    options: ['Statis', 'Dinamis', 'Materialistis', 'Materialistis'],
    answer: 'Dinamis',
  },
  {
    question: '29. Bangsa Indonesia tumbuh dan berkembang dalam suatu proses sampai membentuk negara Republik Indonesia. Pernyataan tersebut menunjukkan kesatuan...',
    options: ['Nasib', 'Sejarah', 'Wilayah', 'Kebudayaan'],
    answer: 'Sejarah',
  },
  {
    question: '30. Pertahanan merupakan salah satu bidang urusan pemerintah pusat. Tugas dari pemerintah pusat dalam bidang pertahanan adalah...',
    options: ['Memberi grasi', 'Membentuk kepolisian negara', 'Menetapkan keamanan nasional', 'Menetapkan kebijakan untuk wajib militer'],
    answer: 'Menetapkan keamanan nasional',
  }
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