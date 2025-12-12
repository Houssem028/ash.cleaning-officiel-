// booking.js
import { db } from './firebase.js';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// استدعاء نموذج الحجز
const bookingForm = document.getElementById('booking-form');
const msg = document.getElementById('msg');

bookingForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service-select').value;
  const address = document.getElementById('address').value.trim();
  const date = document.getElementById('date').value;

  if (!name || !phone || !service) {
    msg.textContent = "❌ الرجاء تعبئة جميع الحقول المطلوبة";
    return;
  }

  try {
    await addDoc(collection(db, 'bookings'), {
      name,
      phone,
      service,
      address,
      date,
      status: "جديد",
      createdAt: serverTimestamp()
    });

    bookingForm.reset();
    msg.textContent = "✅ تم إرسال الطلب بنجاح!";
  } catch (error) {
    console.error(error);
    msg.textContent = "❌ حدث خطأ أثناء إرسال الطلب";
  }
});
