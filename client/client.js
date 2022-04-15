const ws = new WebSocket("ws://localhost:3000")

var playerTurn = 1;

function main() {
	// Setting DOM to all boxes or input field
	var block1, block2, block3, block4, block5, block6, block7, block8, block9;
	block1 = document.getElementById("block1").value;
	block2 = document.getElementById("block2").value;
	block3 = document.getElementById("block3").value;
	block4 = document.getElementById("block4").value;
	block5 = document.getElementById("block5").value;
	block6 = document.getElementById("block6").value;
	block7 = document.getElementById("block7").value;
	block8 = document.getElementById("block8").value;
	block9 = document.getElementById("block9").value;

	// Checking if Player X won or not and after
	// that disabled all the other fields
	if ((block1 == 'x' || block1 == 'X') && (block2 == 'x' ||
		block2 == 'X') && (block3 == 'x' || block3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("block4").disabled = true;
		document.getElementById("block5").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block8").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player X won');
		resetGame()
	}
	else if ((block1 == 'x' || block1 == 'X') && (block4 == 'x' ||
		block4 == 'X') && (block7 == 'x' || block7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("block2").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block5").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block8").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player X won');
		resetGame()
	}
	else if ((block7 == 'x' || block7 == 'X') && (block8 == 'x' ||
		block8 == 'X') && (block9 == 'x' || block9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block2").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block5").disabled = true;
		document.getElementById("block6").disabled = true;
		window.alert('Player X won');
		resetGame()
	}
	else if ((block3 == 'x' || block3 == 'X') && (block6 == 'x' ||
		block6 == 'X') && (block9 == 'x' || block9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block2").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block5").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block8").disabled = true;
		window.alert('Player X won');
		resetGame()
	}
	else if ((block1 == 'x' || block1 == 'X') && (block5 == 'x' ||
		block5 == 'X') && (block9 == 'x' || block9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("block2").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block8").disabled = true;
		window.alert('Player X won');
		resetGame()
	}
	else if ((block3 == 'x' || block3 == 'X') && (block5 == 'x' ||
		block5 == 'X') && (block7 == 'x' || block7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block2").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block8").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player X won');
		resetGame()
	}
	else if ((block2 == 'x' || block2 == 'X') && (block5 == 'x' ||
		block5 == 'X') && (block8 == 'x' || block8 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player X won');
		resetGame()
	}
	else if ((block4 == 'x' || block4 == 'X') && (block5 == 'x' ||
		block5 == 'X') && (block6 == 'x' || block6 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block2").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block8").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player X won');
		resetGame()
	}

	// Checking of Player X finish
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
	else if ((block1 == '0' || block1 == '0') && (block2 == '0' ||
		block2 == '0') && (block3 == '0' || block3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("block4").disabled = true;
		document.getElementById("block5").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block8").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player 0 won');
		resetGame()
	}
	else if ((block1 == '0' || block1 == '0') && (block4 == '0' ||
		block4 == '0') && (block7 == '0' || block7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("block2").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block5").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block8").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player 0 won');
		resetGame()
	}
	else if ((block7 == '0' || block7 == '0') && (block8 == '0' ||
		block8 == '0') && (block9 == '0' || block9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block2").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block5").disabled = true;
		document.getElementById("block6").disabled = true;
		window.alert('Player 0 won');
		resetGame()
	}
	else if ((block3 == '0' || block3 == '0') && (block6 == '0' ||
		block6 == '0') && (block9 == '0' || block9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block2").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block5").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block8").disabled = true;
		window.alert('Player 0 won');
		resetGame()
	}
	else if ((block1 == '0' || block1 == '0') && (block5 == '0' ||
		block5 == '0') && (block9 == '0' || block9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("block2").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block8").disabled = true;
		window.alert('Player 0 won');
		resetGame()
	}
	else if ((block3 == '0' || block3 == '0') && (block5 == '0' ||
		block5 == '0') && (block7 == '0' || block7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block2").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block8").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player 0 won');
		resetGame()
	}
	else if ((block2 == '0' || block2 == '0') && (block5 == '0' ||
		block5 == '0') && (block8 == '0' || block8 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player 0 won');
		resetGame()
	}
	else if ((block4 == '0' || block4 == '0') && (block5 == '0' ||
		block5 == '0') && (block6 == '0' || block6 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block2").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block8").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player 0 won');
		resetGame()
	}

	// Checking of Player 0 finish
	// Here, Checking about Tie
	else if ((block1 == 'X' || block1 == '0') && (block2 == 'X'
		|| block2 == '0') && (block3 == 'X' || block3 == '0') &&
		(block4 == 'X' || block4 == '0') && (block5 == 'X' ||
			block5 == '0') && (block6 == 'X' || block6 == '0') &&
		(block7 == 'X' || block7 == '0') && (block8 == 'X' ||
			block8 == '0') && (block9 == 'X' || block9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Match Tie";
		window.alert('Match Tie');
		resetGame()
	}
	else {

		// Here, Printing Result
		if (playerTurn == 1) {
			document.getElementById('print')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player 0 Turn";
		}
	}
}

function resetGame() {
	location.reload();
	document.getElementById('block1').value = '';
	document.getElementById("block2").value = '';
	document.getElementById("block3").value = '';
	document.getElementById("block4").value = '';
	document.getElementById("block5").value = '';
	document.getElementById("block6").value = '';
	document.getElementById("block7").value = '';
	document.getElementById("block8").value = '';
	document.getElementById("block9").value = '';
}



function checkTurn(blockId) {
	console.log(blockId);
	if (playerTurn == 1) {
		ws.send(`{"message": "document.getElementById('${blockId}').value = 'X'"}`)
		ws.send(`{"message": "document.getElementById('${blockId}').disabled = true"}`)
		ws.send(`{"message": "playerTurn = 0"}`)
		ws.send(`{"message": "main()"}`)

	}
	else {
		ws.send(`{"message": "document.getElementById('${blockId}').value = '0'"}`)
		ws.send(`{"message": "document.getElementById('${blockId}').disabled = true"}`)
		ws.send(`{"message": "playerTurn = 1"}`)
		ws.send(`{"message": "main()"}`)

	}
}

ws.addEventListener("message", msg => {
	//console.log(msg.data);
	eval(msg.data);
})


