const form = document.getElementById('orderForm');
const msg  = document.getElementById('formMsg');

// Telegram-бот: создай через @BotFather, замени TOKEN и CHAT_ID
const TOKEN   = '1234567890:AA...';   // <- твой токен
const CHAT_ID = '-1001234567890';     // <- ID чата, куда приходят заявки

form.addEventListener('submit', async e => {
  e.preventDefault();
  const data = new FormData(form);
  const text =
    `🚜 Заявка квадро:\n` +
    `Имя: ${data.get('name')}\n` +
    `Тел: ${data.get('phone')}\n` +
    `Комментарий: ${data.get('comment')}`;

  try {
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text })
    });
    form.reset();
    msg.classList.remove('hidden');
  } catch {
    alert('Ошибка отправки. Попробуйте позже или напишите в WhatsApp.');
  }
});
