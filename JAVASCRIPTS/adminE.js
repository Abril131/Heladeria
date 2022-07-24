
function buttonEm() {
    //let refresh = document.getElementById('dropbtn');
	//refresh.addEventListener('click', _ => {
        //var targetDiv = document.querySelector('.empleado');
        //data.outerHTML= '<iframe src="adminMenuEmpleados.html" frameborder="0"></iframe>';
        //targetDiv.innerHTML = '<iframe src="adminMenuEmpleados.html" frameborder="0"></iframe>';
        //targetDiv.insertAdjacentHTML('afterbegin', '<iframe src="adminMenuEmpleados.html" frameborder="0"></iframe>');
        const data = document.querySelector(".empleado");
        data.outerHTML = '<iframe src="adminMenuEmpleados.html" class="empleado" frameborder="0"></iframe>';
        
        //data.textContent;   // "Tema 1"
        //data.innerHTML;     // "<h1>Tema 1</h1>"
        data.outerHTML;     // "<div class="data"><h1>Tema 1</h1></div>"
	//})
}
