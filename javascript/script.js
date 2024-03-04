document.getElementById('toggle').addEventListener('change', function () {
    const navLinks = document.querySelector('.nav_links');
    navLinks.classList.toggle('responsive');
});

const form = document.getElementById('form');

const submitCountElement = document.getElementById('submitCount');
let submitCount = 0;
function handleSubmit(event) {
  event.preventDefault();

  submitCount++;

  const formData = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
  };

  let existingFormData = JSON.parse(localStorage.getItem('formData'));
  if (!Array.isArray(existingFormData)) {
      existingFormData = []; 
      // Initialize as an empty array if not an array
  }

  existingFormData.push(formData);

  const updatedFormDataJSON = JSON.stringify(existingFormData);
  localStorage.setItem('formData', updatedFormDataJSON);

  const submitCountElement = document.getElementById('submitCount');
  submitCountElement.textContent = submitCount;

  form.reset();
}
form.addEventListener('submit', handleSubmit);