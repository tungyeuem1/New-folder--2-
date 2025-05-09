let students = JSON.parse(localStorage.getItem("students")) || [
    { id: 1, name: "Toro", math: 8, english: 7, science: 6 },
    { id: 2, name: "Ly Tieu Long", math: 4, english: 3, science: 5 },
    { id: 3, name: "Donal Trump", math: 9, english: 9, science: 10 },
  ];
  
  function calculateAverage(math, english, science) {
    return ((math + english + science) / 3).toFixed(2);
  }
  
  function determineGrade(average) {
    if (average >= 8) return "Giỏi";
    if (average >= 6.5) return "Khá";
    if (average >= 5) return "Trung bình";
    return "Yếu";
  }
  
  function renderStudents(filter = "") {
    const tableBody = document.getElementById("studentTableBody");
    tableBody.innerHTML = "";
  
    const filteredStudents = students.filter((student) =>
      student.name.toLowerCase().includes(filter.toLowerCase())
    );
  
    filteredStudents.forEach((student) => {
      const average = calculateAverage(student.math, student.english, student.science);
      const grade = determineGrade(average);
  
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.math}</td>
        <td>${student.english}</td>
        <td>${student.science}</td>
        <td>${average}</td>
        <td>${grade}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteStudent(${student.id})">Xóa</button>
          <button class="btn btn-primary btn-sm" onclick="editStudent(${student.id})">Cập nhật điểm</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }
  function addStudent() {
    const name = document.getElementById("name").value.trim();
    const math = parseFloat(document.getElementById("math").value);
    const english = parseFloat(document.getElementById("english").value);
    const science = parseFloat(document.getElementById("science").value);
    if (!name || isNaN(math) || isNaN(english) || isNaN(science)) {
      alert("Vui lòng nhập đầy đủ và đúng dữ liệu!");
      return;
    }
    const newStudent = {
      id: students.length ? students[students.length - 1].id + 1 : 1,
      name,
      math,
      english,
      science,
    };
    students.push(newStudent);
    saveStudents();
    renderStudents();
    document.getElementById("studentForm").reset();
  }
  function deleteStudent(id) {
    students = students.filter((student) => student.id !== id);
    saveStudents();
    renderStudents();
    alert("Xóa sinh viên thành công!");
  }
  function editStudent(id) {
    const student = students.find((student) => student.id === id);
    const newMath = parseFloat(prompt("Nhập điểm Toán mới:", student.math));
    const newEnglish = parseFloat(prompt("Nhập điểm Anh mới:", student.english));
    const newScience = parseFloat(prompt("Nhập điểm Khoa học mới:", student.science));
    if (isNaN(newMath) || isNaN(newEnglish) || isNaN(newScience)) {
      alert("Vui lòng nhập đúng dữ liệu!");
      return;
    }
    student.math = newMath;
    student.english = newEnglish;
    student.science = newScience;
    saveStudents();
    renderStudents();
  }
  function searchStudents() {
    const searchInput = document.getElementById("search").value.trim();
    renderStudents(searchInput);
  }
  function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
  }
  document.getElementById("addButton").onclick = addStudent;
  document.getElementById("search").oninput = searchStudents;
  renderStudents();