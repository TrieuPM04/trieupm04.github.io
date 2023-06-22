// // Bước 1: Xác định biên bản chứa các nước đi
// var moves = ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6'];

// // Bước 2: Xác định thời gian chờ giữa các nước đi (nếu cần)
// var delay = 1000; // 1 giây

// // Bước 3: Hàm di chuyển quân cờ tự động
// function autoMove() {
//     var currentIndex = 0;

//     function moveNext() {
//     if (currentIndex < moves.length) {
//         var move = moves[currentIndex];

//         var sourceId = move.substring(0, 2);
//         var targetId = move.substring(2, 4);

//         var piece = document.getElementById(sourceId);
//         var target = document.getElementById(targetId);

//         // Di chuyển quân cờ từ ô nguồn đến ô đích
//         var pieceImg = piece.querySelector('img');
//         target.innerHTML = piece.innerHTML;
//         piece.innerHTML = '';

//         currentIndex++;

//         var randomDelay = Math.floor(Math.random() * 1500) + 500;

//         // Thực hiện di chuyển tiếp theo sau một khoảng thời gian chờ
//         setTimeout(moveNext, randomDelay);
//     }
//     }

//     // Bắt đầu di chuyển từ bước đầu tiên
//     moveNext();
// }

// // Bước 4: Gọi hàm di chuyển tự động
// autoMove();


// VER 2
var games = [
    ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6', 'd2d3', 'd7d6',
     'c1g5', 'f8e7', 'b1c3', 'c8g4', 'd1d2', 'd8d7', 'h2h3', 'g4f3', 'g2f3',
     'c6d8', 'a2a3', 'd8e6', 'c4b3', 'c7c6', 'g5e3', 'd6d5', 'e4d5', 'c6d5',
     'd3d4', 'e5d4', 'e3d4', 'e6d4', 'd2d4', 'd7e6', 'd4e3', 'e6e3', 'f2e3',
     'a8d8', 'e1f2', 'e7c5', 'h1e1', 'e8e7'],

    ['d2d4', 'd7d5', 'c2c4', 'e7e6', 'g1f3', 'g8f6', 'b1c3', 'd5c4', 'e2e4', 
    'f8b4', 'f1c4', 'f6e4', 'c1d2', 'e4d2', 'd1d2', 'b4c3', 'd2c3', 'b8d7', 
    'f3e5', 'd7e5', 'd4e5', 'b7b6', 'c3d3', 'd8d3', 'c4d3', 'c8b7', 'e1e2', 'e8e7', 'a1c1', 'c7c5', 'b2b4', 'b7g2', 'h1g1', 'g2b7', 'b4c5', 'b7d5'],

    ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6', 'd2d3', 'd7d6',
    'c1g5', 'f8e7', 'b1c3', 'c8g4', 'h2h3', 'g4f3', 'd1f3', 'c6d4', 'f3d1', 'c7c6', 'a2a4', 'd8b6', 'g5d2', 'b6c7', 'c3e2', 'd4e2', 'd1e2', 'a8d8', 'a1d1', 'd6d5', 'c4b3',
    'd5e4', 'd3e4', 'c6c5', 'd2c3', 'd8d1', 'e1d1', 'c7d6', 'd1c1', 'h7h6', 'e2d3', 'd6d3', 'c2d3'],

    ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6', 'd2d3', 'd7d6',
    'c1g5', 'f8e7', 'b1c3', 'c8g4', 'd1d2', 'd8d7', 'h2h3', 'g4f3', 'g2f3',
    'c6d8', 'a2a3', 'd8e6', 'c4b3', 'c7c6', 'g5e3', 'd6d5', 'e4d5', 'c6d5',
    'd3d4', 'e5d4', 'e3d4', 'e6d4', 'd2d4', 'd7e6', 'd4e3', 'e6e3', 'f2e3',
    'a8d8', 'e1f2', 'e7c5', 'h1e1', 'e8e7'], // 1

    ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6', 'd2d3', 'd7d6',
    'c1g5', 'f8e7', 'b1c3', 'c8g4', 'h2h3', 'g4f3', 'd1f3', 'c6d4', 'f3d1', 'c7c6', 'a2a4', 'd8b6', 'g5d2', 'b6c7', 'c3e2', 'd4e2', 'd1e2', 'a8d8', 'a1d1', 'd6d5', 'c4b3',
    'd5e4', 'd3e4', 'c6c5', 'd2c3', 'd8d1', 'e1d1', 'c7d6', 'd1c1', 'h7h6', 'e2d3', 'd6d3', 'c2d3'], //2
    
    ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6', 'd2d3', 'd7d6',
    'c1g5', 'f8e7', 'b1c3', 'c8g4', 'h2h3', 'g4f3', 'd1f3', 'c6d4', 'f3d1', 'c7c6', 'a2a4', 'd8b6', 'g5d2', 'b6c7', 'c3e2', 'd4e2', 'd1e2', 'a8d8', 'a1d1', 'd6d5', 'c4b3',
    'd5e4', 'd3e4', 'c6c5', 'd2c3', 'd8d1', 'e1d1', 'c7d6', 'd1c1', 'h7h6', 'e2d3', 'd6d3', 'c2d3'], //3
    
    ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6', 'd2d3', 'd7d6',
    'c1g5', 'f8e7', 'b1c3', 'c8g4', 'd1d2', 'd8d7', 'h2h3', 'g4f3', 'g2f3',
    'c6d8', 'a2a3', 'd8e6', 'c4b3', 'c7c6', 'g5e3', 'd6d5', 'e4d5', 'c6d5',
    'd3d4', 'e5d4', 'e3d4', 'e6d4', 'd2d4', 'd7e6', 'd4e3', 'e6e3', 'f2e3',
    'a8d8', 'e1f2', 'e7c5', 'h1e1', 'e8e7'] //1
    
  ];

var delay = 1000;

function autoMove(moves, boardId) {
  var currentIndex = 0;
  // Lưu lại trạng thái ban đầu của bàn cờ
  var initialPosition = document.getElementById(boardId).innerHTML; 

  function moveNext() {
    if (currentIndex < moves.length) {
      var move = moves[currentIndex];

      var sourceId = move.substring(0, 2);
      var targetId = move.substring(2, 4);

      var piece = document.getElementById(boardId).querySelector('#' + sourceId);
      var target = document.getElementById(boardId).querySelector('#' + targetId);

      var pieceImg = piece.querySelector('img');
      target.innerHTML = piece.innerHTML;
      piece.innerHTML = '';

      currentIndex++;

      var randomDelay = Math.floor(Math.random() * 5000) + 1000;

      setTimeout(moveNext, randomDelay);
    } else {
      // Khi kết thúc ván cờ, khôi phục lại trạng thái ban đầu của bàn cờ
      document.getElementById(boardId).innerHTML = initialPosition;
      setTimeout(function() {
        autoMove(moves, boardId);
      }, delay);
    }
  }

  moveNext();
}

autoMove(games[0], 'board1');
autoMove(games[1], 'board2');
autoMove(games[2], 'board3');
autoMove(games[3], 'board4');
autoMove(games[4], 'board5');
autoMove(games[5], 'board6');
autoMove(games[6], 'board7');
