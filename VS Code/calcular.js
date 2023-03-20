function calcularVo2() {
    var distancia = parseFloat(document.getElementById("distancia").value);
    var vo2Max = (distancia - 504.1) / 44.9;
    document.getElementById("resultado").innerHTML = "Seu VO2 max é: " + vo2Max.toFixed(2);
  }
  
  