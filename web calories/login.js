const authCard = document.querySelector('.auth-card');
const loginView = document.getElementById('login-view');
const signupView = document.getElementById('signup-view');

function focusAfterSlide(view, target) {
  const handleTransitionEnd = (event) => {
    if (event.target !== view || event.propertyName !== 'transform') return;
    view.removeEventListener('transitionend', handleTransitionEnd);
    target.focus();
  };

  view.addEventListener('transitionend', handleTransitionEnd);
}

// Switch between the login and account creation screens.
document.getElementById('show-signup').addEventListener('click', () => {
  authCard.classList.add('show-signup');
  loginView.setAttribute('aria-hidden', 'true');
  loginView.inert = true;
  signupView.setAttribute('aria-hidden', 'false');
  signupView.inert = false;
  focusAfterSlide(signupView, document.getElementById('signup-name'));
});

document.getElementById('show-login').addEventListener('click', () => {
  authCard.classList.remove('show-signup');
  signupView.setAttribute('aria-hidden', 'true');
  signupView.inert = true;
  loginView.setAttribute('aria-hidden', 'false');
  loginView.inert = false;
  focusAfterSlide(loginView, document.getElementById('login-email'));
});

// Show or hide each password field.
document.querySelectorAll('.password-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const passwordInput = document.getElementById(toggle.getAttribute('aria-controls'));
    const showPassword = passwordInput.type === 'password';

    passwordInput.type = showPassword ? 'text' : 'password';
    toggle.setAttribute('aria-pressed', String(showPassword));
    toggle.setAttribute('aria-label', showPassword ? 'Hide password' : 'Show password');
  });
});

// Demo flow: submit either auth form to continue to the dashboard.
document.querySelector('.login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  window.location.href = 'dashboard.html';
});

document.querySelector('.signup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  window.location.href = 'dashboard.html';
});

// Track the pointer so the button's glow follows it.
document.querySelectorAll('.submit-button').forEach((button) => {
  button.addEventListener('pointermove', (event) => {
    const bounds = button.getBoundingClientRect();
    button.style.setProperty('--mouse-x', `${event.clientX - bounds.left}px`);
    button.style.setProperty('--mouse-y', `${event.clientY - bounds.top}px`);
  });

  button.addEventListener('pointerleave', () => {
    button.style.removeProperty('--mouse-x');
    button.style.removeProperty('--mouse-y');
  });
});
