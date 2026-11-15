const dropzone = document.getElementById('dropzone');
const mealInput = document.getElementById('meal-image');
const cameraInput = document.getElementById('camera-image');
const preview = document.getElementById('image-preview');
const dropzoneCopy = document.getElementById('dropzone-copy');
const analyzeButton = document.getElementById('analyze-button');
const removeButton = document.getElementById('remove-image');
const uploadMessage = document.getElementById('upload-message');

let previewUrl = null;

function clearImage() {
  if (previewUrl) URL.revokeObjectURL(previewUrl);
  previewUrl = null;
  preview.removeAttribute('src');
  preview.hidden = true;
  dropzoneCopy.querySelector('.drop-title').textContent = 'Drop your meal photo here';
  dropzone.classList.remove('has-image');
  removeButton.hidden = true;
  analyzeButton.disabled = true;
  uploadMessage.textContent = '';
  mealInput.value = '';
  cameraInput.value = '';
}

function selectImage(file) {
  if (!file) return;

  const supportedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (!supportedTypes.includes(file.type)) {
    clearImage();
    uploadMessage.textContent = 'Please choose a JPG, PNG, or WEBP image.';
    uploadMessage.style.color = '#f0a28c';
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    clearImage();
    uploadMessage.textContent = 'This image is larger than 10 MB. Please choose a smaller photo.';
    uploadMessage.style.color = '#f0a28c';
    return;
  }

  if (previewUrl) URL.revokeObjectURL(previewUrl);
  previewUrl = URL.createObjectURL(file);
  preview.src = previewUrl;
  preview.hidden = false;
  dropzoneCopy.querySelector('.drop-title').textContent = file.name;
  dropzone.classList.add('has-image');
  removeButton.hidden = false;
  analyzeButton.disabled = false;
  uploadMessage.style.color = '';
  uploadMessage.textContent = 'Photo ready. Select “Analyze my meal” to continue.';
}

dropzone.addEventListener('click', (event) => {
  if (event.target.closest('button')) return;
  mealInput.click();
});

dropzone.addEventListener('keydown', (event) => {
  if (event.target !== dropzone || !['Enter', ' '].includes(event.key)) return;
  event.preventDefault();
  mealInput.click();
});

mealInput.addEventListener('change', () => selectImage(mealInput.files[0]));
cameraInput.addEventListener('change', () => selectImage(cameraInput.files[0]));

['dragenter', 'dragover'].forEach((eventName) => {
  dropzone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropzone.classList.add('dragover');
  });
});

['dragleave', 'drop'].forEach((eventName) => {
  dropzone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropzone.classList.remove('dragover');
  });
});

dropzone.addEventListener('drop', (event) => selectImage(event.dataTransfer.files[0]));
removeButton.addEventListener('click', clearImage);

analyzeButton.addEventListener('click', () => {
  if (analyzeButton.disabled) return;
  uploadMessage.style.color = '#f0c785';
  uploadMessage.textContent = 'Photo selected. Meal recognition will be connected in the next step.';
});
