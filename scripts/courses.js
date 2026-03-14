const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 231", name: "Frontend Development I", credits: 3, completed: false },
  { code: "CSE 121", name: "Programming Fundamentals", credits: 3, completed: true }
];

const container = document.querySelector('#courses');
const creditsSpan = document.querySelector('#credits');

function displayCourses(list) {
  container.innerHTML = "";
  const totalCredits = list.reduce((sum, c) => sum + c.credits, 0);
  creditsSpan.textContent = totalCredits;

  list.forEach(course => {
    const card = document.createElement('div');
    card.textContent = `${course.code} - ${course.name}`;
    card.className = course.completed ? "completed" : "";
    container.appendChild(card);
  });
}

displayCourses(courses);

document.querySelector('#all').addEventListener('click', () => displayCourses(courses));
document.querySelector('#wdd').addEventListener('click', () => displayCourses(courses.filter(c => c.code.startsWith("WDD"))));
document.querySelector('#cse').addEventListener('click', () => displayCourses(courses.filter(c => c.code.startsWith("CSE"))));