document.addEventListener('DOMContentLoaded', function() {
    // Codul JavaScript care depinde de elementele DOM poat
const form = document.getElementById('form');

const submitCountElement = document.getElementById('submitCount');
let submitCount = 0;
function handleSubmit(event) {
  event.preventDefault();

  submitCount++;

  const formData = {
      name: document.getElementById('floatingName').value,
      phone: document.getElementById('floatingPhone').value,
      email: document.getElementById('floatingEmail').value,
      subject: document.getElementById('floatingSubject').value,
      message: document.getElementById('floatingTextarea2').value
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

});