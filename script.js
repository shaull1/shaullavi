// הסרת האנימציה לאחר כמה שניות
setTimeout(() => {
    document.getElementById('splitImageContainer').style.display = 'none';
}, 4000); // 4000 מילישניות = 4 שניות
    // אתחול EmailJS עם המזהה הפומבי שלך

    
    emailjs.init("894834523374");

    // מאזין לטופס כדי למנוע טעינת דף
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // מונע טעינה מחדש של הדף

        // שימוש בפרטי הפרויקט
        emailjs.sendForm("acoustic-portal-444610-c8", "template_xxx5tam", this)
            .then(function() {
                alert("ההודעה נשלחה בהצלחה!");
            }, function(error) {
                alert("שגיאה בשליחת ההודעה: " + JSON.stringify(error));
            });
    });

    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', () => {
        playButton.style.display = 'none'; // הסתר את כפתור ה-Play
        loadGameScript();
    });

    function loadGameScript() {
        const script = document.createElement('script');
        script.src = 'game.js'; // הנתיב לקובץ ה-JavaScript של המשחק
        script.onload = () => {
            console.log('Game script loaded and executed.');
            startGame(); // הפעלת המשחק לאחר טעינת הסקריפט
        };
        document.body.appendC
    }