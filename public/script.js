// script.js
const form = document.getElementById('userForm');
const resultSection = document.getElementById('result');
const greetingEl = document.getElementById('greeting');
const ageTextEl = document.getElementById('ageText');
const toast = document.getElementById('toast');

function showToast(msg, time = 2500){
  toast.innerText = msg;
  toast.classList.remove('hidden');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=> toast.classList.add('hidden'), time);
}

form.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const name = form.name.value.trim();
  const year = parseInt(form.year.value, 10);

  if(!name){ showToast('Vui lòng nhập tên'); return; }
  if(!year || year < 1900 || year > (new Date().getFullYear())){ showToast('Năm sinh không hợp lệ'); return; }

  const age = new Date().getFullYear() - year;

  // Hiển thị kết quả
  greetingEl.innerText = `Xin chào, tôi là ${name}!`;
  ageTextEl.innerText = `Bạn sinh năm ${year}, năm nay bạn ${age} tuổi.`;
  resultSection.classList.remove('hidden');

  // Gọi API để lưu dữ liệu
  try {
    const resp = await fetch('/api/save', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ name, year, age })
    });
    if(resp.ok){
      showToast('Đã lưu thông tin thành công ✅');
    } else {
      const txt = await resp.text();
      showToast('Lưu thất bại: ' + txt);
    }
  } catch (err) {
    console.error(err);
    showToast('Lỗi khi lưu: không thể kết nối server');
  }
});
