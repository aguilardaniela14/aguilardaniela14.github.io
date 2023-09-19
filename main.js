let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #cb9fa8;'>|</span>"
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #de5c77">Estudiante de ingeniería biónica, siempre aprendiendo.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
