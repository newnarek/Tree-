window.addEventListener("load", main, false);
function main() {
    var generateButton = document.getElementById("button");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    generateButton.onclick = () => generateTree();
    
    function drawTree(startX, startY, len, angle, branchWidth) {
      ctx.lineWidth = branchWidth;
      ctx.beginPath();
      ctx.save();
      ctx.translate(startX, startY);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -len);
      ctx.stroke();
    
      //  Рисование листьев 
      if (len < 7) {
        ctx.beginPath();
        ctx.arc(0, -len, 10, 0, Math.PI / 2);
        ctx.fill();
        ctx.restore();
        return;
      }
    
      var randomAngle2 = angle + Math.random() * 10 - 15;
      var randomAngle1 = angle + Math.random() * 10 + 15;
    
      drawTree(0, -len, len * 0.8, randomAngle1, branchWidth * 0.7);
      drawTree(0, -len, len * 0.8, randomAngle2, branchWidth * 0.7);
      ctx.restore();
    }
    
    function generateTree() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var angle = Math.random() * 30 - 15;
      var width = Math.random() * 100 + 10;
      var len = Math.random() * 40 + 130;
      var treeColor = getRandomColor();
      var leafColor = getRandomColor();
    
      ctx.strokeStyle = treeColor;
      ctx.fillStyle = leafColor;
    
      var startX = canvas.width / 2;
      var startY = canvas.height - 80;
    
      generateButton.style.background = treeColor;
      drawTree(startX, startY, len, angle, width);
    }
    
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    
    generateTree();
}