document.getElementById('stargazingForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    
    const successMsg = document.getElementById('successMessage');
    successMsg.classList.remove('hidden');
    
    this.reset();
    
    setTimeout(() => {
        successMsg.classList.add('hidden');
    }, 5000);
});