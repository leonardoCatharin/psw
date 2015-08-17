var str =
'  	<header>'+
'		<img src="./image/logo.png" height="100px">'+
'		<h1>PSW - CLÍNICA</h1>'+
'	</header>'+
'	<nav>'+
'		<ul id="drop-menu">'+
'			<li class="img-home"><a href="home.html"><img class="img-home" src="./icon/home.png">'+
'			<li><a>Cadastros</a>'+
'				<ul>'+
'					<li><a href="./medico/home.html">Paciente</a></li>'+
'					<li><a href="./medico/home.html">Médico</a></li>'+
'					<li><a href="">Secretária</a></li>'+
'				</ul>'+
'			</li>'+
'			<li><a>Agenda</a>'+
'				<ul>'+
'					<li><a>Agendar Consultas</a></li>'+
'				</ul>'+
'			</li>'+
'			<li><a>Relatórios</a>'+
'				<ul>'+
'					<li><a>Consultar Agenda</a></li>'+
'					<li><a>Relatório Paciente</a></li>'+
'					<li><a>Pacientes atendidos</a></li>'+
'				</ul>'+
'			</li>'+
'			<li><a>Prontuário</a>'+
'				<ul>'+
'					<li><a>Prontuários</a></li>'+
'				</ul>'+
'			</li>'+
'			<li><a>Fechar</a></li>'+
'		</ul>'+
'	</nav>';
document.getElementById('header').innerHTML = (str);
