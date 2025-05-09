const quizData = [
  {
    question: "1. Rekan saya meminta saya memalsukan tanda tangan presensi. Sikap saya... ",
    options: [
      { text: "Meminta rekan lain untuk memalsukan tanda tangannya", value: 1 },
      { text: "Menuruti permintaannya karena dia rekan yang baik", value: 2 },
      { text: "Menolak permintaannya dan membiarkan kolom presensinya kosong ", value: 3 },
      { text: "Melaporkannya pada atasan agar atasan menegurnya", value: 4 },
      { text: "Menegurnya agar tidak melakukan kecurangan presensi", value: 5 },
    ],
  },

  {
    question: "2. Ketika gagal mencapai sesuatu yang diinginkan, saya... ",
    options: [
      { text: "Mencari dengan seksama siapa yang turut bertanggung jawab terhadap kegagalan saya tersebut", value: 2 },
      { text: "Mengambil waktu untuk menenangkan diri", value: 3 },
      { text: "Bersedih hati", value: 1 },
      { text: "Melakukan introspeksi dan memperbaiki kekurangan penyebab kegagalan", value: 5 },
      { text: "Meminta bantuan orang-orang terdekat", value: 4 },
    ],
  },

  {
    question: "3. Rekan saya meminta saya memalsukan tanda tangan presensi. Sikap saya... ",
    options: [
      { text: "Dengan terpaksa menerimanya", value: 3 },
      { text: "Menerimanya dengan sedikit kekecewaan", value: 4 },
      { text: "Menerimanya dengan lapang dada", value: 5 },
      { text: "Membenci diri sendiri", value: 2 },
      { text: "Meratapi diri sendiri", value: 1 },
    ],
  },

  {
    question: "4. Di kantor Anda ada seorang rekan kerja yang ketika menghadapi orang, tidak bisa berkomunikasi dengan baik, egois, sombong, tidak jarang menyakiti perasaan orang ketika berbicara, dan kadang Anda juga merasa kurang dihargai atas pekerjaan dan pencapaian Anda di kantor. Sikap Anda ....",
    options: [
      { text: "Saya memahami karakter teman kerja tersebut dan saya tidak ingin terlalu memikirkan hal tersebut, untuk menghindari masalah saya berusaha menghindar dan tidak berbicara kepadanya dan hanya fokus pada tanggung jawab pekerjaan saya", value: 1 },
      { text: "Saya akan memahami sifat tersebut karena setiap orang memiliki karakter yang berbeda-beda, namun untuk menyadarkan dia saya akan berbicara dan bersikap seperti dirinya agar dia menyadari bahwa sikap dan cara berbicaranya menyakiti perasaan orang lain", value: 2 },
      { text: "Saya memahami bahwa setiap orang tentu memiliki karakter dan sifat yang berbeda-beda termasuk teman kerja saya tersebut, agar tidak merasa tersakiti oleh sikapnya maka saya perlu pintar untuk mengambil hatinya", value: 3 },
      { text: "Saya memahami perbedaan karakter setiap orang, namun saya tidak terlalu memikirkan hal tersebut, yang terpenting saya bisa menempatkan diri sewajarnya dan berbicara seperlunya secara rasional", value: 4 },
      { text: "Memahami perbedaan karakter merupakan suatu hal yang wajar, namun saya harus tetap memberitahunya secara sopan cara berbicara dan bersikap yang baik. Hal tersebut untuk menghindari adanya konflik di tempat kerja dikarenakan ketidaksesuaian dalam bersosialisasi", value: 5 },
    ],
  },

  {
    question: "5. Jika suatu rencana kerja terlihat rumit, maka ....",
    options: [
      { text: "Saya tak mau repot-repot mencobanya", value: 1 },
      { text: "Saya khawatir jika mencobanya dan gagal", value: 2 },
      { text: "Saya minta pendapat istri yang penting saya coba dulu", value: 3 },
      { text: "Saya berani mencobanya setelah mempertimbangkan risikonya", value: 4 },
      { text: "Yang penting saya coba dulu", value: 5 },
    ],
  },

  {
    question: "6. Anda ditugaskan oleh atasan untuk memimpin sebuah tim kerja. Tim Anda akan menjalankan sebuah program yang terbilang tenggat waktunya cukup ketat. Akan tetapi anggota tim kerja yang Anda pimpin memperlihatkan sikap yang cenderung tidak peduli dengan tugas masing-masing yang diemban. Sikap Anda seharusnya ....",
    options: [
      { text: "Melaporkan kepada atasan atas sikap anggota tim yang tidak serius dalam menjalankan kewajiban mereka dalam tim sehingga bisa diberikan teguran dan sanksi", value: 1 },
      { text: "Saya akan serius dan fokus bekerja dan yang terpenting bagian kewajiban saya dalam program tersebut terselesaikan dengan baik, anggota tim akan malu bisa kalah tekun dari saya", value: 3 },
      { text: "Mengingatkan anggota tim yang kurang serius dalam mengerjakan kewajibannya dan sampaikan bahwa bila mereka masih tidak peduli pada tanggung jawabnya, maka saya akan mengeluarkan mereka dari tim kerja", value: 2 },
      { text: "Mengingatkan anggota tim agar mereka sadar akan penyelesaian tanggung jawab yang diemban dan terus memotivasinya agar fokus dalam bekerja", value: 4 },
      { text: "Membagi tugas secara adil dan disesuaikan dengan kemampuan serta kompetensi masing-masing anggota tim", value: 5 },
    ],
  },

  {
    question: "7. Pada suatu malam ketika Anda sedang sibuk bekerja, anak Anda sedang belajar dikamarnya, dan istri Anda sedang memasak untuk hidangan malam keluarga. Tiba-tiba listrik di rumah Anda padam sehingga membuat anak dan istri Anda panik, yang akan Anda lakukan adalah ....",
    options: [
      { text: "Meminta rekan lain untuk memalsukan tanda tangannya", value: 1 },
      { text: "Saya akan mencari penerangan bila tidak ada satupun yang berusaha mencari penerangan alternatif.", value: 2 },
      { text: "Tetap tenang dan menyuruh istri untuk menyalakan penerangan alternatif. Istri yang sedang berada di dapur tentu akan lebih dekat dengan penerangan alternatif.", value: 3 },
      { text: "Mengkhawatirkan anak dan istri yang ketakutan karena gelap, dan mencari penerangan agar mereka tidak ketakutan.", value: 4 },
      { text: "Berinisiatif mencari penerangan agar anak saya tetap bisa belajar dan istri saya juga bisa melanjutkan masak dengan tenang.", value: 5 },
    ],
  },

  {
    question: "8. Sepanjang karier kerja Anda, Anda terlambat masuk kantor ....",
    options: [
      { text: "Sering sekali", value: 1 },
      { text: "Beberapa kali di masa lalu", value: 2 },
      { text: "Satu dua kali", value: 3 },
      { text: "Jarang", value: 4 },
      { text: "Tidak pernah", value: 5 },
    ],
  },

  {
    question: "9. Aturan angka kredit diubah tahun ini ....",
    options: [
      { text: "Menolak perubahan itu karena merepotkan", value: 1 },
      { text: "Perubahan itu memberatkan pegawai", value: 2 },
      { text: "Mempelajari jika mau mengusulkan angka kredit", value: 3 },
      { text: "Saya akan patuh pada aturan", value: 4 },
      { text: "Mempelajari perubahan itu dengan teliti ", value: 5 },
    ],
  },

  {
    question: "10. Anda bekerja di sebuah perusahaan sebagai HRD. Ketika merekrut pegawai baru yang akan bertugas pada bagian pelayanan, Anda lebih mengutamakan seorang pegawai yang ....",
    options: [
      { text: "Memiliki wajah cantik/tampan", value: 1 },
      { text: "Berpakaian rapi", value: 2 },
      { text: "Memiliki pengetahuan umum yang tinggi", value: 3 },
      { text: "Disiplin dan tepat waktu", value: 4 },
      { text: "Memiliki kemampuan berkomunikasi yang baik", value: 5 },
    ],
  },

  {
    question: "11. Ketika Anda mengalami kegagalan dalam meminta maaf atas kesalahan yang Anda lakukan, sikap Anda adalah ....",
    options: [
      { text: "Tidak berani meminta maaf lagi", value: 1 },
      { text: "Bimbang apakah meminta maaf lagi itu perlu", value: 2 },
      { text: "Meminta bantuan orang lain menjadi penengah", value: 3 },
      { text: "Berusaha meminta maaf lagi berharap dimaafkan", value: 4 },
      { text: "Berusaha meminta maaf lagi, sampai dimaafkan", value: 5 },
    ],
  },

  {
    question: "12. Saya mengetahui bahwa atasan saya di kantor melakukan rekayasa laporan keuangan untuk kepentingan pribadi. Sikap saya sebaiknya ....",
    options: [
      { text: "Wajar karena hal tersebut sering terjadi di kantor mana pun", value: 1 },
      { text: "Hal semacam itu memang sudah menjadi tradisi yang tidak baik di lingkungan kerja manapun. ", value: 2 },
      { text: "Hanya dalam hati saja saya tidak menyetujui hal tersebut", value: 3 },
      { text: "Tidak ingin terlibat dalam proses rekayasa tersebut dan sebisa mungkin mengingatkan bahwa hal itu tidak baik", value: 4 },
      { text: "Melaporkan atasan tersebut kepada pihak yang berwenang", value: 5 },
    ],
  },

  {
    question: "13. Perusahaan tempat saya bekerja sedang mengalami masalah internal, sikap saya ....",
    options: [
      { text: "Bagaimanapun juga publik berhak tahu, oleh karenanya saya beberkan masalah internal tersebut kepada publik", value: 1 },
      { text: "Saya tentu saja berusaha menjaga keamanan posisi saya agar tidak terusik", value: 2 },
      { text: "Saya berusaha agar diri saya jangan sampai terkena imbasnya", value: 3 },
      { text: "Biarlah pimpinan yang mengambil keputusan", value: 4 },
      { text: "Saya berusaha memberikan gagasan pemecahan masalah kepada pimpinan, sambil menjaga kerahasiaan masalah internal ini", value: 5 },
    ],
  },

  {
    question: "14. Agar suatu kegiatan berhasil dilaksanakan, sikap Anda adalah ....",
    options: [
      { text: "Menggunakan cara yang biasa saya pakai", value: 1 },
      { text: "Minta bimbingan guru dalam melaksanakan kegiatan tersebut", value: 2 },
      { text: "Menyesuaikan dengan kondisi yang sedang berjalan", value: 3 },
      { text: "Mencontoh orang lain yang sukses mengerjakan pekerjaan serupa", value: 4 },
      { text: "Mempelajari jenis kegiatan tersebut sebelum memulai kegiatan", value: 5 },
    ],
  },

  {
    question: "15. Atasan yang Anda sukai adalah ....",
    options: [
      { text: "Tidak terlalu membantu menyelesaikan tugas, namun sebaliknya berharap saya menyelesaikan pekerjaan tanpa sering berkonsultasi kepadanya", value: 1 },
      { text: "Sangat disiplin dan selalu meminta saya menunggu keputusan yang diambilnya sebelum suatu dilaksanakan", value: 2 },
      { text: "Senantiasa mendelegasikan wewenangnya pada bawahan", value: 3 },
      { text: "Selalu menanyakan pendapat dan ide dari bawahan sebagai bahan masukan untuk suatu pekerjaan yang dilakukannya", value: 4 },
      { text: "Selalu memberi petunjuk yang jelas atas pekerjaan yang akan bawahan kerjakan.", value: 5 },
    ],
  },

  {
    question: "16. Berpindah-pindah pekerjaan adalah hal yang wajar?",
    options: [
      { text: "Saya menyukai pekerjaan saya, tetapi jika ada pekerjaan yang lebih baik saya tidak ragu untuk pindah.", value: 1 },
      { text: "Pekerjaan saya saat ini tidak dapat menjamin masa depan saya.", value: 2 },
      { text: "Saya tidak berpendapat bahwa karyawan harus setia terhadap perusahaannya.", value: 3 },
      { text: "Saya meyakini nilai-nilai yang mengatakan bahwa loyalitas terhadap pekerjaan adalah sikap yang terpuji.", value: 4 },
      { text: "Saya meyakini bahwa loyalitas itu penting sehingga saya merasakan pentingnya tanggung jawab moral karyawan.", value: 5 },
    ],
  },

  {
    question: "17. Bulan depan ada kesempatan untuk ikut kompetensi dalam bidang saya senangi, maka saya",
    options: [
      { text: "Tidak, ikut saja daripada kalah", value: 1 },
      { text: "Tidak ikut kompetisi", value: 2 },
      { text: "Ikut jika ada kemungkinan saya menang", value: 3 },
      { text: "Saya ikut, karena saya pasti memenangkan persaingan", value: 4 },
      { text: "Mempersiapkan diri guna memenangkan persaingan", value: 5 },
    ],
  },

  {
    question: "18. Jika Anda dituntut untuk menyelesaikan pekerjaan lebih cepat dari biasanya, maka tindakan Anda seharusnya...",
    options: [
      { text: "Meninggalkan pekerjaan tersebut.", value: 1 },
      { text: "Menolak tuntutan tersebut.", value: 2 },
      { text: "Menyuruh orang lain yang dapat mengerjakan tugas tersebut lebih cepat dari Anda.", value: 3 },
      { text: "Mengerjakan semampu Anda.", value: 4 },
      { text: "Mengerjakan dengan penuh tanggung jawab dan seoptimal mungkin.", value: 5 },
    ],
  },

  {
    question: "19. Saat saya sibuk dengan pekerjaan, ada unit kerja lain meminta saya untuk mencari file karyawan segera. Maka yang akan saya lakukan....",
    options: [
      { text: "Melaporkan pada atasan Anda karena mengganggu aktivitas Anda.", value: 1 },
      { text: "Meminta bagian lain untuk mencari sendiri.", value: 2 },
      { text: "Menunda-nunda mencari file tersebut.", value: 3 },
      { text: "Mencari secara bersama-sama file tersebut.", value: 4 },
      { text: "Segera mencari file yang diminta.", value: 5 },
    ],
  },

  {
    question: "20. Ketika sedang lelah dengan pekerjaan di kantor, Anda akan...",
    options: [
      { text: "Keluar ruangan", value: 1 },
      { text: "Bermain game", value: 2 },
      { text: "Makan di kantin", value: 3 },
      { text: "Mendengarkan musik", value: 4 },
      { text: "Tidur sejenak", value: 5 },
    ],
  },

  {
    question: "21. Di kantor Anda terdapat banyak sekali kertas bekas, maka Anda akan...",
    options: [
      { text: "Membiarkannya", value: 1 },
      { text: "Membakarnya", value: 2 },
      { text: "Membuangnya saja", value: 3 },
      { text: "Menjualnya", value: 4 },
      { text: "Membuatnya kertas baru", value: 5 },
    ],
  },

  {
    question: "22. Untuk memenuhi kebutuhan gizi anak Anda, Anda sering...",
    options: [
      { text: "Memberikannya makanan instan", value: 1 },
      { text: "Mengajaknya makan di restoran", value: 2 },
      { text: "Membelikannya buah-buahan segar", value: 3 },
      { text: "Menanam sayuran sendiri", value: 4 },
      { text: "Memasak bersamanya", value: 5 },
    ],
  },

  {
    question: "23. Jika Anda menjadi bagian dari tim SAR yang kebetulan tersesat di suasana bencana, yang akan Anda lakukan untuk keluar dari situasi tersebut adalah....",
    options: [
      { text: "Menangis dan menyesal karena bergabung dengan tim SAR yang tersesat.", value: 1 },
      { text: "Mencoba untuk tenang sambil berharap bantuan akan segera datang.", value: 2 },
      { text: "Mengikuti petunjuk ketua rombongan untuk keluar dari kesulitan tersebut.", value: 3 },
      { text: "Mencoba menghubungi penjaga Posko, untuk memandu mencari jalan keluar.", value: 4 },
      { text: "Mengajak tim untuk mencari alternatif solusi mencari jalan keluar.", value: 5 },
    ],
  },

  {
    question: "24. Setelah dilakukan penelusuran ternyata bendahara Anda melakukan korupsi. Sebagai atasan yang akan Anda lakukan adalah...",
    options: [
      { text: "Memecatnya", value: 1 },
      { text: "Mengintrogasinya tentang alasan melakukan korupsi", value: 2 },
      { text: "Meminta pertanggung jawaban karyawan tersebut.", value: 3 },
      { text: "Meminta karyawan tersebut mengembalikan uang hasil korupsi tersebut.", value: 4 },
      { text: "Melaporkannya ke pihak berwajib.", value: 5 },
    ],
  },

  {
    question: "25. Salah satu staf Anda terbukti melakukan tindak gratifikasi, maka tindakan Anda adalah...",
    options: [
      { text: "Melupakan kejadian tersebut.", value: 1 },
      { text: "Membiarkan perbuatan tersebut.", value: 2 },
      { text: "Memaklumi kejadian tersebut sebagai bentuk kekhilafan.", value: 3 },
      { text: "Menasehatinya agar tidak terjadi peristiwa tersebut di lain hari.", value: 4 },
      { text: "Menindak secara tegas untuk memberikan efek jera.", value: 5 },
    ],
  },

  {
    question: "26. Staf Anda berniat untuk mengundurkan diri, padahal kinerjanya sangat baik. Sebagai atasan, tindakan yang akan Anda lakukan adalah...",
    options: [
      { text: "Membiarkannya mengundurkan diri karena merupakan hak.", value: 1 },
      { text: "Memberikan fasilitas yang diinginkan oleh karyawan tersebut. ", value: 2 },
      { text: "Menaikkan gaji dan tunjangan agar tidak jadi mengundurkan diri.", value: 3 },
      { text: "Mempertahankan karyawan tersebut agar tidak mengundurkan diri.", value: 4 },
      { text: "Mencoba untuk menanyakan alasan pengunduran dirinya, jika memungkinkan meminta karyawan tersebut untuk tetap bertahan di kantor.", value: 5 },
    ],
  },

  {
    question: "27. Jika komputer rekan Anda rusak dan ia meminjam komputer Anda untuk menyelesaikan pekerjaannya yang mendesak, maka tindakan Anda adalah....",
    options: [
      { text: "Meminjamkan komputer Anda dengan rasa kesal.", value: 1 },
      { text: "Menolak permintaannya secara halus.", value: 2 },
      { text: "Memintanya agar meminjam komputer rekan Anda yang lain.", value: 3 },
      { text: "Menyuruhnya menghubungi tim IT agar segera dibantu.", value: 4 },
      { text: "Meminjamkan komputer sambil menghubungi IT agar segera mendapat bantuan. ", value: 5 },
    ],
  },

  {
    question: "28. Saat sedang bekerja, mendadak salah satu keluarga saya menelepon dan meminta bantuan. Yang saya lakukan....",
    options: [
      { text: "Tidak peduli", value: 1 },
      { text: "Menelefon anggota keluarga tersebut dan memintanya menunggu jam pulang kerja", value: 2 },
      { text: "Segera pergi dan menghampiri anggota keluarga saya tersebut", value: 3 },
      { text: "Meminta izin kepada atasan untuk pergi jika diizinkan pergi", value: 4 },
      { text: "Meminta izin kepada atasan untuk pergi dan tetap pergi walaupun tak diizinkan", value: 5 },
    ],
  },

  {
    question: "29. Atasan saya menanyakan tanggapan saya tentang teman sejawat saya, yang saya katakan......",
    options: [
      { text: "Tidak mengatakan apa-apa", value: 1 },
      { text: "Mengatakan hal yang buruk saja tentang teman saya", value: 2 },
      { text: "Mengatakan hal yang baik saja tentang teman saya", value: 3 },
      { text: "Mengatakan apa adanya tentang teman saya", value: 4 },
      { text: "Mengatakan hal yang baik terlebih dahulu lalu memberitahukan kekurangannya", value: 5 },
    ],
  },

  {
    question: "30. Saat sedang jam istirahat siang, yang saya lakukan....",
    options: [
      { text: "Pergi keluar kantor", value: 1 },
      { text: "Tidur", value: 2 },
      { text: "Mengerjakan tugas yang belum selesai", value: 3 },
      { text: "Membaca media informasi (Buku, Majalah, Internet)", value: 4 },
      { text: "Makan siang dan menunaikan ibadah", value: 5 },
    ],
  },
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let userAnswers = []; // Array untuk menyimpan jawaban pengguna

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

  // Mengacak urutan opsi jawaban
  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i].value;

    const optionText = document.createTextNode(shuffledOptions[i].text);

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
    const answerValue = parseInt(selectedOption.value);
    score += answerValue;
    userAnswers.push({
      question: quizData[currentQuestion].question,
      userAnswer: answerValue,
      correctAnswer: null, // Karena ini tes kepribadian, tidak ada jawaban "benar"
    });
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
  resultContainer.innerHTML = `Skor Anda: ${score} dari ${quizData.length * 5}`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);

displayQuestion();