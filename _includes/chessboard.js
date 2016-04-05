<div class="board" style="width: 400px"></div>
<div class="wrong">Wrong move! Try again... </div>

<div class="correct" > Correct!</div>


<button class="btn btn-default act-reset-board">Reset Position</button>

<script> 
	(function() {
		var START_POS = 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR';
		var TARGET_POS = 'rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR';

		var checkBoard = function(oldPos, newPos) {
			console.log("Position changed:");
			console.log("Old position: " + ChessBoard.objToFen(oldPos));
			console.log("New position: " + ChessBoard.objToFen(newPos));

			if (ChessBoard.objToFen(newPos) == TARGET_POS) {
				// alert("Correct!");
				$(".correct").css("display", "block");
			} else if (ChessBoard.objToFen(newPos) == START_POS) {
				// Fine, we just moved back to the beginning position.
			} else {
				setTimeout(function() {
					board.position(START_POS);	
					$(".wrong").css("display", "block");
				}, 10);
			}
	    }

		var cfg = {
			draggable: true,
		 	position: START_POS,
		 	pieceTheme: "{{ site.baseurl }}/lib/chessboard/img/chesspieces/wikipedia/{piece}.png",
		 	onChange: checkBoard
		};

		var board_div = $('.board:last');
		var board = ChessBoard(board_div[0], cfg);

		var reset_button = $('.act-reset-board:last');
		reset_button.on('click', function() {
			board.position(START_POS);
		});
	})();
</script>