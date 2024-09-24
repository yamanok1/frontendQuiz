import { useState, useEffect } from "react";
import "./App.css";

const HTMLQuestions = [
  {
    question: "HTML neyin kısaltmasıdır?",
    options: [
      "A) Hyperlinks and Text Markup Language",
      "B) Home Tool Markup Language",
      "C) Hyper Text Markup Language",
      "D) Hyper Text Makeup Language",
    ],
    correctAnswer: "C) Hyper Text Markup Language",
  },
  {
    question: "HTML'de en büyük başlık etiketi hangisidir?",
    options: ["A) <h6>", "B) <h1>", "C) <h2>", "D) <h3>"],
    correctAnswer: "B) <h1>",
  },
  {
    question: "<a> etiketi hangi amaçla kullanılır?",
    options: [
      "A) Liste oluşturmak",
      "B) Bağlantı oluşturmak",
      "C) Paragraf oluşturmak",
      "D) Görsel eklemek",
    ],
    correctAnswer: "B) Bağlantı oluşturmak",
  },
  {
    question: "HTML dokümanında stil tanımlamak için hangi etiket kullanılır?",
    options: ["A) <css>", "B) <script>", "C) <style>", "D) <link>"],
    correctAnswer: "C) <style>",
  },
  {
    question: "Bir HTML sayfasında hangi etiket metni kalın yapar?",
    options: ["A) <i>", "B) <u>", "C) <b>", "D) <strong>"],
    correctAnswer: "C) <b>",
  },
  {
    question: "HTML'de sayfa başlığı hangi etikette bulunur?",
    options: ["A) <title>", "B) <head>", "C) <meta>", "D) <body>"],
    correctAnswer: "A) <title>",
  },
  {
    question: "<img> etiketi ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      "A) Görsel eklemek için kullanılır",
      "B) Bağlantı oluşturmak için kullanılır",
      "C) Tablo oluşturmak için kullanılır",
      "D) Liste oluşturmak için kullanılır",
    ],
    correctAnswer: "A) Görsel eklemek için kullanılır",
  },
  {
    question:
      "Bir HTML dokümanında listelenen maddeler için hangi etiket kullanılır?",
    options: ["A) <ul>", "B) <ol>", "C) <li>", "D) <dl>"],
    correctAnswer: "C) <li>",
  },
  {
    question: "<br> etiketi ne işe yarar?",
    options: [
      "A) Satır sonu ekler",
      "B) Paragraf oluşturur",
      "C) Metni kalın yapar",
      "D) Bağlantı oluşturur",
    ],
    correctAnswer: "A) Satır sonu ekler",
  },
  {
    question: "HTML'de tablo başlığı hangi etiketle belirlenir?",
    options: ["A) <thead>", "B) <th>", "C) <tr>", "D) <td>"],
    correctAnswer: "B) <th>",
  },
];

const CSSQuestions = [
  {
    question: "CSS neyin kısaltmasıdır?",
    options: [
      "A) Colorful Style Sheets",
      "B) Creative Style Sheets",
      "C) Cascading Style Sheets",
      "D) Computer Style Sheets",
    ],
    correctAnswer: "C) Cascading Style Sheets",
  },
  {
    question:
      "CSS'de hangi özellik bir öğenin arka plan rengini ayarlamak için kullanılır?",
    options: [
      "A) color",
      "B) bgcolor",
      "C) background-color",
      "D) background-image",
    ],
    correctAnswer: "C) background-color",
  },
  {
    question: "CSS'de hangi özellik metin rengini ayarlamak için kullanılır?",
    options: ["A) font-color", "B) text-color", "C) color", "D) font-style"],
    correctAnswer: "C) color",
  },
  {
    question:
      "CSS'de bir öğenin içeriği ile kenarları arasındaki boşluğu ayarlamak için hangi özellik kullanılır?",
    options: ["A) margin", "B) padding", "C) border", "D) spacing"],
    correctAnswer: "B) padding",
  },
  {
    question:
      "CSS'de bir öğenin kenarlarının kalınlığını ayarlamak için hangi özellik kullanılır?",
    options: ["A) padding", "B) margin", "C) border-width", "D) border-style"],
    correctAnswer: "C) border-width",
  },
  {
    question:
      "CSS'de bir öğenin yatay hizalamasını ayarlamak için hangi özellik kullanılır?",
    options: [
      "A) align",
      "B) horizontal-align",
      "C) text-align",
      "D) align-items",
    ],
    correctAnswer: "C) text-align",
  },
  {
    question: "CSS'de 'id' seçici hangi sembol ile tanımlanır?",
    options: ["A) . (nokta)", "B) # (diyez)", "C) * (yıldız)", "D) @ (at)"],
    correctAnswer: "B) # (diyez)",
  },
  {
    question: "CSS'de yazı tipini değiştirmek için hangi özellik kullanılır?",
    options: [
      "A) font-family",
      "B) font-style",
      "C) font-weight",
      "D) font-size",
    ],
    correctAnswer: "A) font-family",
  },
  {
    question: "CSS'de 'class' seçici hangi sembol ile tanımlanır?",
    options: ["A) . (nokta)", "B) # (diyez)", "C) * (yıldız)", "D) @ (at)"],
    correctAnswer: "A) . (nokta)",
  },
  {
    question:
      "CSS'de bir öğenin şeffaflığını ayarlamak için hangi özellik kullanılır?",
    options: ["A) opacity", "B) transparency", "C) visibility", "D) display"],
    correctAnswer: "A) opacity",
  },
];

const JavaScriptQuestions = [
  {
    question: "JavaScript nedir?",
    options: [
      "A) Bir programlama dili",
      "B) Bir stil sayfası dili",
      "C) Bir veri tabanı",
      "D) Bir işletim sistemi",
    ],
    correctAnswer: "A) Bir programlama dili",
  },
  {
    question:
      "JavaScript'te hangi anahtar kelime değişken tanımlamak için kullanılır?",
    options: ["A) var", "B) let", "C) const", "D) Hepsi"],
    correctAnswer: "D) Hepsi",
  },
  {
    question: "JavaScript'te hangi sembol 'strict equality' anlamına gelir?",
    options: ["A) =", "B) ==", "C) ===", "D) !=="],
    correctAnswer: "C) ===",
  },
  {
    question:
      "JavaScript'te bir dizinin uzunluğunu öğrenmek için hangi özellik kullanılır?",
    options: ["A) length", "B) size", "C) count", "D) index"],
    correctAnswer: "A) length",
  },
  {
    question: "JavaScript'te bir fonksiyon nasıl tanımlanır?",
    options: [
      "A) function myFunction()",
      "B) var myFunction = function()",
      "C) const myFunction = () => {}",
      "D) Hepsi",
    ],
    correctAnswer: "D) Hepsi",
  },
  {
    question: "JavaScript'te hangi metot bir dizinin sonuna eleman ekler?",
    options: ["A) push", "B) pop", "C) shift", "D) unshift"],
    correctAnswer: "A) push",
  },
  {
    question: "JavaScript'te bir 'for' döngüsü nasıl başlatılır?",
    options: [
      "A) for (let i = 0; i < 5; i++)",
      "B) for (i <= 5; i++)",
      "C) for i = 1 to 5",
      "D) for (let i = 0; i <= 5)",
    ],
    correctAnswer: "A) for (let i = 0; i < 5; i++)",
  },
  {
    question: "JavaScript'te 'undefined' neyi ifade eder?",
    options: [
      "A) Tanımlanmamış bir değişken",
      "B) Tanımsız bir değer",
      "C) Yanlış bir değer",
      "D) Null değer",
    ],
    correctAnswer: "A) Tanımlanmamış bir değişken",
  },
  {
    question: "JavaScript'te 'this' anahtar kelimesi neyi ifade eder?",
    options: [
      "A) Global nesneyi",
      "B) Mevcut fonksiyonu",
      "C) Mevcut nesneyi",
      "D) Hiçbiri",
    ],
    correctAnswer: "C) Mevcut nesneyi",
  },
  {
    question: "JavaScript'te 'NaN' ne anlama gelir?",
    options: [
      "A) Not a Number",
      "B) Not a Name",
      "C) Not an Array",
      "D) Not Applicable",
    ],
    correctAnswer: "A) Not a Number",
  },
];

const AccessibilityQuestions = [
  {
    question: "Erişilebilirlik (Accessibility) ne anlama gelir?",
    options: [
      "A) İnternet sitelerinin sadece masaüstü cihazlarda çalışması",
      "B) Web içeriklerine herkesin erişebilmesini sağlamak",
      "C) Web sitelerinin sadece görsel açıdan çekici olması",
      "D) Web sitelerinin hızlı yüklenmesi",
    ],
    correctAnswer: "B) Web içeriklerine herkesin erişebilmesini sağlamak",
  },
  {
    question: "Erişilebilirlik için en önemli unsur hangisidir?",
    options: [
      "A) Renk uyumu",
      "B) Metin okuma desteği",
      "C) Görsel düzen",
      "D) HTML yapılandırması",
    ],
    correctAnswer: "B) Metin okuma desteği",
  },
  {
    question:
      "Hangi HTML etiketi, bir bağlantının amaçlandığı işlevi belirtir?",
    options: ["A) <a>", "B) <img>", "C) <button>", "D) <div>"],
    correctAnswer: "A) <a>",
  },
  {
    question:
      "Ekran okuyucu kullanan kullanıcılar için hangi HTML etiketleri önemlidir?",
    options: [
      "A) <div> ve <span>",
      "B) <header> ve <footer>",
      "C) <img> ve <alt>",
      "D) <section> ve <article>",
    ],
    correctAnswer: "C) <img> ve <alt>",
  },
  {
    question:
      "Renk körü olan bir kullanıcı için hangi renk kombinasyonu önerilmez?",
    options: [
      "A) Kırmızı ve Yeşil",
      "B) Mavi ve Sarı",
      "C) Siyah ve Beyaz",
      "D) Mor ve Turuncu",
    ],
    correctAnswer: "A) Kırmızı ve Yeşil",
  },
  {
    question: "Erişilebilir bir web formu için en önemli özellik nedir?",
    options: [
      "A) Estetik görünüm",
      "B) Hızlı yükleme süresi",
      "C) Etiketlerin doğru kullanımı",
      "D) Görsel hiyerarşi",
    ],
    correctAnswer: "C) Etiketlerin doğru kullanımı",
  },
  {
    question: "Web sitelerinde alt yazı (caption) kullanımı neden önemlidir?",
    options: [
      "A) Yükleme süresini azaltır",
      "B) Mobil cihazlarda daha iyi görünüm sağlar",
      "C) İşitme engelli kullanıcılar için içerik erişimini artırır",
      "D) Görsel kalitesini artırır",
    ],
    correctAnswer:
      "C) İşitme engelli kullanıcılar için içerik erişimini artırır",
  },
  {
    question:
      "Hangi ARIA (Accessible Rich Internet Applications) özelliği, bir öğenin erişilebilirliğini artırır?",
    options: [
      "A) aria-hidden",
      "B) aria-label",
      "C) aria-disabled",
      "D) aria-checked",
    ],
    correctAnswer: "B) aria-label",
  },
  {
    question: "Erişilebilirlik testleri yapmak için hangi araç kullanılabilir?",
    options: [
      "A) Photoshop",
      "B) Google Lighthouse",
      "C) Chrome DevTools",
      "D) Sublime Text",
    ],
    correctAnswer: "B) Google Lighthouse",
  },
  {
    question:
      "Erişilebilir bir web sitesi tasarlarken hangi yaklaşım en önemlidir?",
    options: [
      "A) Minimalist tasarım",
      "B) Renk doygunluğu",
      "C) Kullanıcı merkezli tasarım",
      "D) İnteraktif öğeler",
    ],
    correctAnswer: "C) Kullanıcı merkezli tasarım",
  },
];

function App() {
  // localStorage.theme == 'dark' ? true : false
  const [theme, setTheme] = useState(
    localStorage.theme ? localStorage.theme : "light"
  ); //theme statei
  const [currentPage, setCurrentPage] = useState("home"); //anasayfa değişiyor
  const [selectedQuestions, setSelectedQuestions] = useState([]); //seçilen sorular stateti
  const [quizType, setQuizType] = useState(null); // hangi quize girecek onu belirleyeceğiz

  function handleToggle() {
    setTheme(theme == "light" ? "dark" : "light");
  }

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.theme = theme == "light" ? "light" : "dark";
  }, [theme]);

  useEffect(() => {
    let questions;
    if (quizType === "HTML") {
      questions = HTMLQuestions;
    } else if (quizType === "CSS") {
      questions = CSSQuestions;
    } else if (quizType === "JAVASCRİPT") {
      questions = JavaScriptQuestions;
    } else if (quizType === "ACCESSİBİLİTY") {
      questions = AccessibilityQuestions;
    } else {
      questions = [];
    }
    setSelectedQuestions(questions);
  }, [quizType]);

  function handleQuizSelection(type) {
    setQuizType(type);
    setCurrentPage("quiz");
  }

  function theEndQuizPage() {
    setCurrentPage("home");
    setQuizType(null);
  }

  return (
    <div className="container">
      {currentPage === "home" ? (
        <>
          <Toggle handleToggle={handleToggle} theme={theme} />
          <QuizSelectionContainer
            handleToggle={handleToggle}
            handleQuizSelection={handleQuizSelection}
          />
        </>
      ) : (
        <QuizPage
          questions={selectedQuestions}
          handleToggle={handleToggle}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          theEndQuizPage={theEndQuizPage}
          quizType={quizType}
        />
      )}
    </div>
  );
}

function Toggle({ handleToggle, theme }) {
  //theme ayarlıyoruz
  return (
    <div className="toggle">
      <img className="lightsun" src="/img/lightsun.svg" alt="light sun" />
      <img className="darksun" src="/img/darksun.svg" alt="dark sun" />
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleToggle}
          checked={theme == "dark" ? true : false}
        />
        <span className="slider round"></span>
      </label>
      <img className="lightmoon" src="/img/lightMoon.svg" alt="Light moon" />
      <img className="darkMoon" src="/img/darkMoon.svg" alt="dark moon" />
    </div>
  );
}

function QuizSelectionContainer({ handleQuizSelection }) {
  //ana sayfadaki quiz seçeneklerini(btns) ve başlığı gösteriyoruz
  return (
    <div className="quizSelectionContainer">
      <div className="title">
        <h1>Frontend Quiz Uygulamasına Başlayın!</h1>
        <p>Başlamak için bir konu seçin.</p>
      </div>
      <QuizSelections handleQuizSelection={handleQuizSelection} />
    </div>
  );
}

function QuizSelections({ handleQuizSelection }) {
  //anasayfadaki quiz buttonları
  return (
    <div className="quizSelections">
      <button onClick={() => handleQuizSelection("HTML")}>
        {" "}
        <img src="/img/html.svg" alt="html imgesi" /> HTML
      </button>
      <button onClick={() => handleQuizSelection("CSS")}>
        {" "}
        <img src="/img/css.svg" alt="css imgesi" /> CSS
      </button>
      <button onClick={() => handleQuizSelection("JAVASCRİPT")}>
        {" "}
        <img src="/img/javaScript.svg" alt="javaScript imgesi" /> Javascript
      </button>
      <button onClick={() => handleQuizSelection("ACCESSİBİLİTY")}>
        {" "}
        <img src="/img/Accessibility.svg" alt="Accessibility imgesi" />{" "}
        Accessibility
      </button>
    </div>
  );
}

function QuizPage({
  questions,
  handleToggle,
  theEndQuizPage,
  currentPage,
  setCurrentPage,
  quizType,
}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const comingQuestion = questions[questionIndex];
  const [showNextButton, setShowNextButton] = useState(false); //cevap göndere bastıktan sonra sonmraki soru butonu çıkıyor
  const [selectedOption, setSelectedOption] = useState(null); //kullanıcı hangi optionu seçti
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    localStorage.data
      ? setData(JSON.parse(localStorage.data))
      : setData({
          theme: "light",
        });
  }, []);

  function save() {
    localStorage.data = JSON.stringify(data);
  }

  useEffect(() => {
    save();
  }, [data]);

  function handleClick(index) {
    setSelectedOption(index); // tıkladığımız butonun indexini kaydedio
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isAnswerCorrect =
      comingQuestion.options[selectedOption] === comingQuestion.correctAnswer;

    if (isAnswerCorrect) {
      setScore(score + 1);
    }

    if (selectedOption === null) {
      alert("Lütfen bir şık seçiniz!");
      return;
    }

    setIsCorrect(isAnswerCorrect);
    setShowNextButton(true);
    setData([...data, dataObj]);
    save();
  }

  function deleteData() {
    localStorage.removeItem("data");
    theEndQuizPage();
  }

  function handleNextQuestion() {
    if (questionIndex < questions.length - 1) {
      //-1 yapmamızın nedeni dizinin 0dan başlaması
      setQuestionIndex(questionIndex + 1); //indexi 1 arttırarak soru değiştriyorum
      setSelectedOption(null);
      setShowNextButton(false);
      setIsCorrect(null); //diğer sayfada cevap sıfırlansın yoksa bacgroundlar karışıyor
    } else {
      setCurrentPage("score");
    }
  }

  return (
    <div className="quizPage">
      <div className="quizPageHeader">
        <h1>{quizType}</h1>
        <Toggle handleToggle={handleToggle} />
      </div>
      {currentPage === "quiz" ? (
        comingQuestion && (
          <div className="activeQuestionPart">
            <div className="quizPageQuestions">
              <p>
                Soru {questionIndex + 1} / {questions.length}
              </p>
              <h1>{comingQuestion.question}</h1>
            </div>
            <div className="quizPageBtns">
              {comingQuestion.options.map((x, i) => (
                <button
                  key={i}
                  onClick={() => handleClick(i)}
                  style={{
                    backgroundColor:
                      selectedOption === i
                        ? isCorrect === null
                          ? "#d9b6ef"
                          : isCorrect
                          ? "green"
                          : "red"
                        : comingQuestion.options[i] ===
                            comingQuestion.correctAnswer && isCorrect === false
                        ? "green"
                        : "",
                  }}
                  className={selectedOption === i ? "selected" : ""}
                  disabled={showNextButton}
                >
                  {x}
                </button>
              ))}
              {showNextButton ? (
                <button
                  className="submitBtn"
                  onClick={handleNextQuestion}
                  disabled={selectedOption === null}
                >
                  SONRAKİ SORU
                </button>
              ) : (
                <button className="submitBtn" onClick={handleSubmit}>
                  CEVABI GÖNDER
                </button>
              )}
            </div>
          </div>
        )
      ) : (
        <div className="scorePage">
          <div className="scoreCompletedPart">
            <h1>Quiz Tamamlandı!</h1>
          </div>
          <div className="scoreInformContainer">
            <div className="scoreInformPart">
              <h1>{quizType}</h1>
              <p className="score">{score} </p>
              <p className="scoreLenght">{questions.length} üzerinden </p>
            </div>
            <div className="theEndQuizPage">
              <button onClick={deleteData}>Ana Sayfaya Dön</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
