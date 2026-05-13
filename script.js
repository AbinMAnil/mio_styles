// Set the target date to June 10, 2026
const targetDate = new Date('June 10, 2026 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown').innerHTML = "Launched!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    updateElement('days', days);
    updateElement('hours', hours);
    updateElement('minutes', minutes);
    updateElement('seconds', seconds);
}

function updateElement(id, value) {
    const el = document.getElementById(id);
    const formattedValue = value < 10 ? '0' + value : value;
    
    // Only animate if value changed
    if (el.innerText !== formattedValue.toString()) {
        el.innerText = formattedValue;
        el.classList.remove('number-pop');
        void el.offsetWidth; // Trigger reflow
        el.classList.add('number-pop');
    }
}

// Initial call
updateCountdown();

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);
