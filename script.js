document.addEventListener("DOMContentLoaded", function() {
    // אתחול EmailJS עם המפתח הציבורי שלך
    emailjs.init("mm5MmpmLFVMbigN4I"); // הכנס את ה-Public Key שלך מ-EmailJS

    // קבלת הטופס והאזנה לאירוע השליחה
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // למנוע רענון דף
        
        // בדיקת שדות ריקים
        const name = this.user_name.value.trim();
        const phone = this.user_phone.value.trim();
        const message = this.message.value.trim();

        if (!name || !phone || !message) {
            document.getElementById("error-message").style.display = "block";
            return;
        } else {
            document.getElementById("error-message").style.display = "none";
        }

        // שליחת הנתונים דרך EmailJS
        emailjs.sendForm("service_0xkqci5", "template_5q3a8am", this)
            .then(function() {
                alert("ההודעה נשלחה בהצלחה!");
                document.getElementById("contact-form").reset();
            }, function(error) {
                alert("שגיאה בשליחה, נסה שוב.");
                console.error("EmailJS Error:", error);
            });
    });
});
