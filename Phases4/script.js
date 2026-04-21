const questions = document.querySelectorAll('.faq-question');
questions.forEach(q => {
  q.addEventListener('click', () => {
    const ans = q.nextElementSibling;
    ans.style.maxHeight = ans.style.maxHeight ? '' : ans.scrollHeight + 'px';
  });
});

const emailBtn = document.getElementById('emailBtn');
if (emailBtn) {
  emailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('newthread_geek@outlook.com').then(() => {
      alert('邮箱已复制');
    });
  });
}