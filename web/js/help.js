const modal = document.getElementById('helpModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.getElementsByClassName('close')[0];

// 问题和答案数据

// 为所有问题添加点击事件
document.querySelectorAll('.help-section li').forEach(item => {
    item.addEventListener('click', function() {
        const question = this.getAttribute('data-question');
        if (helpContent[question]) {
            modalTitle.textContent = helpContent[question].title;
            modalContent.innerHTML = marked(helpContent[question].content);
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('show');
                Prism.highlightAll();
            }, 10);
        }
    });
});

// 关闭模态框
function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 200);
}

closeBtn.onclick = closeModal;

// 点击模态框外部关闭
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// ESC键关闭模态框
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// 设置marked选项，启用代码高亮
marked.setOptions({
    highlight: function(code, lang) {
        if (Prism.languages[lang]) {
            return Prism.highlight(code, Prism.languages[lang], lang);
        } else {
            return code;
        }
    }
});
