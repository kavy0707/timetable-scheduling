// Get the subject section and buttons
const subjectSection = document.getElementById('subject-section');
const addSubjectBtn = document.getElementById('add-subject-btn');
const removeBtn = document.getElementById('remove-btn');

// Function to add a new subject row
function addSubjectRow() {
  const newRow = document.createElement('div');
  newRow.className = 'sub-row';
  newRow.innerHTML = `
    <div>
      <label for="subjectName">Name</label>
      <input type="text" class="subject-name" name="subjectName" required>
    </div>
    <div>
      <label for="hoursPerWeek">Hours per Week</label>
      <input type="text" class="hours-per-week" name="hoursPerWeek" required>
    </div>
    <button type="button" class="add-btn">+</button>
    <button type="button" class="remove-btn">-</button>
    
  `;
  subjectSection.appendChild(newRow);
}

// Function to remove a subject row
function removeSubjectRow(event) {
  const target = event.target;
  if (target.classList.contains('remove-btn')) {
    const row = target.parentNode;
    row.remove();
  }
}

// Function to add a new subject row when the "+" button is clicked
function addNewRow(event) {
  const target = event.target;
  if (target.classList.contains('add-btn')) {
    addSubjectRow();
  }
}

// Add event listeners
addSubjectBtn.addEventListener('click', addSubjectRow);
subjectSection.addEventListener('click', removeSubjectRow);
subjectSection.addEventListener('click', addNewRow);

// Get the faculty section and buttons
const facultySection = document.getElementById('faculty-section');
const addFacultyBtn = document.getElementById('add-faculty-btn');
const removeFacultyBtn = document.getElementById('remove-faculty-btn');

// Function to add a new faculty row
function addFacultyRow() {
  const newRow = document.createElement('div');
  newRow.className = 'faculty-row';
  newRow.innerHTML = `
    <div>
      <label for="facultyName">Name</label>
      <input type="text" class="faculty-name" name="facultyName" required>
    </div>
    <div>
      <label for="availability">Availability</label>
      <input type="text" class="availability" name="availability" required>
    </div>
    <button type="button" class="add-faculty-btn">+</button>
    <button type="button" class="remove-faculty-btn">-</button>
    
  `;
  facultySection.appendChild(newRow);
}

// Function to remove a faculty row
function removeFacultyRow(event) {
  const target = event.target;
  if (target.classList.contains('remove-faculty-btn')) {
    const row = target.parentNode;
    row.remove();
  }
}

// Function to add a new faculty row when the "+" button is clicked
function addNewFacultyRow(event) {
  const target = event.target;
  if (target.classList.contains('add-faculty-btn')) {
    addFacultyRow();
  }
}

// Add event listeners
addFacultyBtn.addEventListener('click', addFacultyRow);
facultySection.addEventListener('click', removeFacultyRow);
facultySection.addEventListener('click', addNewFacultyRow);