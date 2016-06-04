var correctChoice = 0;
var wrongChoice = 0;
var timer = 11;
var page = 0;

var questionA = {
	question: "Over whom does the One Ring have no power?",
	answerA: "Elrond",
	answerB: "Galadriel",
	answerC: "The Nazgul",
	answerRight: "Tom Bombadil" 
};

var questionB = {
	question: "One of the Istari, who was the tender of flora and fauna?",
	answerA: "Strider",
	answerB: "Celeborn",
	answerRight: "Radagast",
	answerD: "Thranduil"
}

var questionC = {
	question: "These elves were neither grey nor of the high blood.",
	answerA: "Noldor",
	answerRight: "Silvan", 
	answerC: "Sindarin",
	answerD: "Haradrim"
}

var questionD = {
	question: "The Lord of the Dark and Arda's greatest foe, he is the root of all evil.",
	answerA: "The Witch King of Angmar",
	answerB: "Sauron",
	answerRight: "Melkor",
	answerD: "Smaug"
}

var questionE = {
	question: "'He that is Alone', he is the Father of All and supreme over the universe.",
	answerRight: "Iluvatar",
	answerB: "Valar",
	answerC: "Aule",
	answerD: "Maiar"
}

var questionF = {
	question: "The author of all of Arda's lore had a legendary friendship with this classic writer.",
	answerA: "Flannery O'Connor", 
	answerB: "John Steinbeck",
	answerC: "George Orwell", 
	answerRight: "C.S. Lewis"
}

var questionG = {
	question: "This sword was reforged from the shards of a broken blade and wielded by a Dunedain descendant of Isildur.",
	answerA: "Narsil", 
	answerB: "Glamdring",
	answerRight: "Anduril",
	answerD: "Orcrist"
}

var questionH = {
	question: "In what place did the gray wizard give his life to destroy Durin's Bane?",
	answerRight: "Zirakzigil",
	answerB: "Pelennor Fields",
	answerC: "Moria",
	answerD: "Minas Morgul"
}

$("div#responsebox").children("div").hover(function() {
	$(this).css("background-color", "#282828");
	}, function() {
	$(this).css("background-color", "black")
});

function updateScore() {
	console.log ("Correct Answers: " + correctChoice);
	console.log ("Incorrect Answers " + wrongChoice);
};

function run() {
	counter = setInterval(decrement, 1000);
};

function stop() {
	clearInterval(counter);
};

function decrement() {
	timer--;
	$("span#clock").html(' ' + timer);
	if (page === 0) {
		stop();
	}

	if (timer === 0) {
		stop();
		if (page === 1) {
			setTimeout(fiveSeconds, 5000);
			wrongChoice++
			updateScore();
			$("div#firstQuestion").hide();
			$("div#solutionbox").html("<h2>You are out of time. The One Ring had no effect upon Tom Bombadil.</h2>");
			$("div#solutionbox, img#bombadil").show();
			function fiveSeconds() {
			timer = 11;
			run();
			page = 2;
			$("div#solutionbox").hide();
			$("img#bombadil").hide();
			$("div#secondQuestion").show();
			}
		}
		if (page === 2) {
			setTimeout(fiveSeconds, 5000);
			wrongChoice++
			updateScore();
			$("div#secondQuestion").hide();
			$("div#solutionbox").html("<h2>You are out of time. Radagast the Brown was a lover and caretaker of Arda's flora and fauna.</h2>");
			$("div#solutionbox, img#radagast").show();
			function fiveSeconds() {
			timer = 11;
			run();
			page = 3;
			$("div#solutionbox").hide();
			$("img#radagast").hide();
			$("div#thirdQuestion").show();
			}
		}
		if (page === 3) {
			setTimeout(fiveSeconds, 5000);
			wrongChoice++
			updateScore();
			$("div#thirdQuestion").hide();
			$("div#solutionbox").html("<h2>You are out of time. The Silvan elves were wood elves who were commonly ruled over by gray or high elves.</h2>");
			$("div#solutionbox, img#silvan").show();
			function fiveSeconds() {
			timer = 11;
			run();
			page = 4;
			$("div#solutionbox").hide();
			$("img#silvan").hide();
			$("div#fourthQuestion").show();
			}
		}
		if (page === 4) {
			setTimeout(fiveSeconds, 5000);
			wrongChoice++
			updateScore();
			$("div#fourthQuestion").hide();
			$("div#solutionbox").html("<h2>You are out of time. Melkor was the prime antagonist of Arda and the source of its evil.</h2>");
			$("div#solutionbox, img#melkor").show();
			function fiveSeconds() {
			timer = 11;
			run();
			page = 5;
			$("div#solutionbox").hide();
			$("img#melkor").hide();
			$("div#fifthQuestion").show();
			}
		}
		if (page === 5) {
			setTimeout(fiveSeconds, 5000);
			wrongChoice++
			updateScore();
			$("div#fifthQuestion").hide();
			$("div#solutionbox").html("<h2>You are out of time. Iluvatar was the sole, supreme deity over Arda and the created order.</h2>");
			$("div#solutionbox, img#iluvatar").show();
			function fiveSeconds() {
			timer = 11;
			run();
			page = 6;
			$("div#solutionbox").hide();
			$("img#iluvatar").hide();
			$("div#sixthQuestion").show();
			}
		}
		if (page === 6) {
			setTimeout(fiveSeconds, 5000);
			wrongChoice++
			updateScore();
			$("div#sixthQuestion").hide();
			$("div#solutionbox").html("<h2>You are out of time. C.S. Lewis and J.R.R. Tolkien were close friends and members of the same fantasy literary club.</h2>");
			$("div#solutionbox, img#lewis").show();
			function fiveSeconds() {
			timer = 11;
			run();
			page = 7;
			$("div#solutionbox").hide();
			$("img#lewis").hide();
			$("div#seventhQuestion").show();
			}
		}
		if (page === 7) {
			setTimeout(fiveSeconds, 5000);
			wrongChoice++
			updateScore();
			$("div#seventhQuestion").hide();
			$("div#solutionbox").html("<h2>You are out of time. Anduril was reforged from the shards of Narsil and was wielded by Aragorn II Elessar.</h2>");
			$("div#solutionbox, img#anduril").show();
			function fiveSeconds() {
			timer = 11;
			run();
			page = 8;
			$("div#solutionbox").hide();
			$("img#anduril").hide();
			$("div#eighthQuestion").show();
			}
		}
		if (page === 8) {
			setTimeout(fiveSeconds, 5000);
			wrongChoice++
			updateScore();
			$("div#eighthQuestion").hide();
			$("div#solutionbox").html("<h2>You are out of time. Gandalf the Gray cast the Balrog, Durin's Bane, from the peak of Zirakzigil and would shortly thereafter succumb to his own wounds.</h2>");
			$("div#solutionbox, img#balrog").show();
			function fiveSeconds() {
			timer = 11;
			run();
			page = 9;
			$("div#solutionbox").hide();
			$("img#balrog").hide();
			$("div#ninthQuestion").show();
			}
		}
	}
};


$("div#intro, img#gate").on("click", function() {
	$("div#intro, img#gate").hide();
	$("div#timerbox, div#firstQuestion").show();
	page = 1;
	run();
})

$("div#questionbox").html(questionA.question);
$("div#A").html(questionA.answerA);
$("div#B").html(questionA.answerB);
$("div#C").html(questionA.answerC);
$("div#D").html(questionA.answerRight);

$("div#D").on("click", function () {
	stop();
	setTimeout(fiveSeconds, 5000);
	correctChoice++
	updateScore();
	$("div#firstQuestion").hide();
	$("div#solutionbox").html("<h2>You are correct! The One Ring had no effect upon Tom Bombadil.</h2>");
	$("div#solutionbox, img#bombadil").show();
	function fiveSeconds() {
		timer = 11;
		run();
		page = 2;
		$("div#solutionbox").hide();
		$("img#bombadil").hide();
		$("div#secondQuestion").show();
	}
});


$("div#A, div#B, div#C").on("click", function() {
	stop();
	setTimeout(fiveSeconds, 5000);
	wrongChoice++
	updateScore();
	$("div#firstQuestion").hide();
	$("div#solutionbox").html("<h2>You are incorrect. The One Ring had no effect upon Tom Bombadil.</h2>");
	$("div#solutionbox, img#bombadil").show();
	function fiveSeconds() {
		timer = 11;
		run();
		page = 2;
		$("div#solutionbox").hide();
		$("img#bombadil").hide();
		$("div#secondQuestion").show();
	}
});


$("div#questionbox2").html(questionB.question);
$("div#A2").html(questionB.answerA);
$("div#B2").html(questionB.answerB);
$("div#C2").html(questionB.answerRight);
$("div#D2").html(questionB.answerD);

$("div#C2").on("click", function() {
	stop();
	setTimeout(fiveSeconds, 5000);
	correctChoice++
	updateScore();
	$("div#secondQuestion").hide();
	$("div#solutionbox").html("<h2>You are correct! Radagast the Brown was a lover and caretaker of Arda's flora and fauna.</h2>");
	$("div#solutionbox, img#radagast").show();
	function fiveSeconds() {
		timer = 11;
		run();
		page = 3;
		$("div#solutionbox").hide();
		$("img#radagast").hide();
		$("div#thirdQuestion").show();
	}
});

$("div#A2, div#B2, div#D2").on("click", function() {
	stop();
	setTimeout(fiveSeconds, 5000);
	wrongChoice++
	updateScore();
	$("div#secondQuestion").hide();
	$("div#solutionbox").html("<h2>You are incorrect. Radagast the Brown was a lover and caretaker of Arda's flora and fauna.</h2>");
	$("div#solutionbox, img#radagast").show();
	function fiveSeconds() {
		timer = 11;
		run();
		page = 3;
		$("div#solutionbox").hide();
		$("img#radagast").hide();
		$("div#thirdQuestion").show();
	}
});

$("div#questionbox3").html(questionC.question);
$("div#A3").html(questionC.answerA);
$("div#B3").html(questionC.answerRight);
$("div#C3").html(questionC.answerC);
$("div#D3").html(questionC.answerD);

$("div#B3").on("click", function() {
	stop();
	setTimeout(fiveSeconds, 5000);
	correctChoice++
	updateScore();
	$("div#thirdQuestion").hide();
	$("div#solutionbox").html("<h2>You are correct! The Silvan elves were wood elves who were commonly ruled over by gray elves or high elves.</h2>");
	$("div#solutionbox, img#silvan").show();
	function fiveSeconds() {
		timer = 11;
		run();
		page = 4;
		$("div#solutionbox").hide();
		$("img#silvan").hide();
		$("div#fourthQuestion").show();
	}
});

$("div#A3, div#C3, div#D3").on("click", function() {
	stop();
	setTimeout(fiveSeconds, 5000);
	wrongChoice++
	updateScore();
	$("div#thirdQuestion").hide();
	$("div#solutionbox").html("<h2>You are incorrect. The Silvan elves were wood elves who were commonly ruled over by gray elves or high elves.</h2>");
	$("div#solutionbox, img#silvan").show();
	function fiveSeconds() {
		timer = 11;
		run();
		page = 4;
		$("div#solutionbox").hide();
		$("img#silvan").hide();
		$("div#fourthQuestion").show();
	}
});

$("div#questionbox4").html(questionD.question);
$("div#A4").html(questionD.answerA);
$("div#B4").html(questionD.answerB);
$("div#C4").html(questionD.answerRight);
$("div#D4").html(questionD.answerD);

$("div#C4").on("click", function() {
	stop();
	setTimeout(fiveSeconds, 5000);
	correctChoice++
	updateScore();
	$("div#fourthQuestion").hide();
	$("div#solutionbox").html("<h2>You are correct! Melkor was the prime antagonist of Arda and the source of its evil.</h2>");
	$("div#solutionbox, img#melkor").show();
	function fiveSeconds() {
		timer = 11;
		run();
		page = 5;
		$("div#solutionbox").hide();
		$("img#melkor").hide();
		$("div#fifthQuestion").show();
	}
});

$("div#A4, div#B4, div#D4").on("click", function() {
	stop();
	setTimeout(fiveSeconds, 5000);
	wrongChoice++
	updateScore();
	$("div#fourthQuestion").hide();
	$("div#solutionbox").html("<h2>You are incorrect. Melkor was the prime antagonist of Arda and the source of its evil.</h2>");
	$("div#solutionbox, img#melkor").show();
	function fiveSeconds() {
		timer = 11;
		run();
		page = 5;
		$("div#solutionbox").hide();
		$("img#melkor").hide();
		$("div#fifthQuestion").show();
	}
});

$("div#questionbox5").html(questionE.question);
$("div#A5").html(questionE.answerRight);
$("div#B5").html(questionE.answerB);
$("div#C5").html(questionE.answerC);
$("div#D5").html(questionE.answerD);

$("div#A5").on("click", function() {
	stop();
	setTimeout(fiveSeconds, 5000);
	correctChoice++
	updateScore();
	$("div#fifthQuestion").hide();
	$("div#solutionbox").html("<h2>You are correct! Iluvatar was the sole, supreme deity over Arda and the created order.</h2>");
	$("div#solutionbox, img#iluvatar").show();
	function fiveSeconds() {
		timer = 11;
		run();
		page = 6;
		$("div#solutionbox").hide();
		$("img#iluvatar").hide();
		$("div#sixthQuestion").show();
	}
});

$("div#B5, div#C5, div#D5").on("click", function() {
	stop();
	setTimeout(fiveSeconds, 5000);
	wrongChoice++
	updateScore();
	$("div#fifthQuestion").hide();
	$("div#solutionbox").html("<h2>You are incorrect. Iluvatar was the sole, supreme deity over Arda and the created order.</h2>");
	$("div#solutionbox, img#iluvatar").show();
	function fiveSeconds() {
		timer = 11;
		run();
		page = 6;
		$("div#solutionbox").hide();
		$("img#iluvatar").hide();
		$("div#sixthQuestion").show();
	}
});

$("div#questionbox6").html(questionF.question);
$("div#A6").html(questionF.answerA);
$("div#B6").html(questionF.answerB);
$("div#C6").html(questionF.answerC);
$("div#D6").html(questionF.answerRight);

$("div#D6").on("click", function() {
	stop();
	setTimeout(fiveSeconds, 5000);
	correctChoice++
	updateScore();
	$("div#sixthQuestion").hide();
	$("div#solutionbox").html("<h2>You are correct! C.S. Lewis and J.R.R. Tolkien were close friends and members of the same fantasy literary club.</h2>");
	$("div#solutionbox, img#lewis").show();
	function fiveSeconds() {
		timer = 11;
		run();
		page = 7;
		$("div#solutionbox").hide();
		$("img#lewis").hide();
		$("div#seventhQuestion").show();
	}
});

$("div#A6, div#B6, div#C6").on("click", function() {
	stop();
	setTimeout(fiveSeconds, 5000);
	wrongChoice++
	updateScore();
	$("div#sixthQuestion").hide();
	$("div#solutionbox").html("<h2>You are incorrect. C.S. Lewis and J.R.R. Tolkien were close friends and members of the same fantasy literary club.</h2>");
	$("div#solutionbox, img#lewis").show();
	function fiveSeconds() {
		timer = 11;
		run();
		page = 7;
		$("div#solutionbox").hide();
		$("img#lewis").hide();
		$("div#seventhQuestion").show();
	}
});

$("div#questionbox7").html(questionG.question);
$("div#A7").html(questionG.answerA);
$("div#B7").html(questionG.answerB);
$("div#C7").html(questionG.answerRight);
$("div#D7").html(questionG.answerD);

$("div#C7").on("click", function() {
	stop();
	setTimeout(fiveSeconds, 5000);
	correctChoice++
	updateScore();
	$("div#seventhQuestion").hide();
	$("div#solutionbox").html("<h2>You are correct! Anduril was reforged from the shards of Narsil and was wielded by Aragorn II Elessar.</h2>");
	$("div#solutionbox, img#anduril").show();
	function fiveSeconds() {
		timer = 11;
		run();
		page = 8;
		$("div#solutionbox").hide();
		$("img#anduril").hide();
		$("div#eighthQuestion").show();
	}
});

$("div#A7, div#B7, div#D7").on("click", function() {
	stop();
	setTimeout(fiveSeconds, 5000);
	wrongChoice++
	updateScore();
	$("div#seventhQuestion").hide();
	$("div#solutionbox").html("<h2>You are incorrect. Anduril was reforged from the shards of Narsil and was wielded by Aragorn II Elessar.</h2>");
	$("div#solutionbox, img#anduril").show();
	function fiveSeconds() {
		timer = 11;
		run();
		page = 8;
		$("div#solutionbox").hide();
		$("img#anduril").hide();
		$("div#eighthQuestion").show();
	}
});

$("div#questionbox8").html(questionH.question);
$("div#A8").html(questionH.answerRight);
$("div#B8").html(questionH.answerB);
$("div#C8").html(questionH.answerC);
$("div#D8").html(questionH.answerD);
$("div#C7").html(questionG.answerRight);
$("div#D7").html(questionG.answerD);

$("div#A8").on("click", function() {
	stop();
	setTimeout(fiveSeconds, 5000);
	correctChoice++
	updateScore();
	$("div#eighthQuestion").hide();
	$("div#solutionbox").html("<h2>You are correct! Gandalf the Gray cast the Balrog, Durin's Bane, from the peak of Zirakzigil and would shortly thereafter succumb to his own wounds.</h2>");
	$("div#solutionbox, img#balrog").show();
	function fiveSeconds() {
		$("div#timerbox").hide();
		page = 9;
		$("div#solutionbox").hide();
		$("img#balrog").hide();
		$("div#ninthQuestion").show();
		$("span#correct").text(correctChoice);
		$("span#incorrect").text(wrongChoice);
	}
});

$("div#B8, div#C8, div#D8").on("click", function() {
	stop();
	setTimeout(fiveSeconds, 5000);
	wrongChoice++
	updateScore();
	$("div#eighthQuestion").hide();
	$("div#solutionbox").html("<h2>You are incorrect. Gandalf the Gray cast the Balrog, Durin's Bane, from the peak of Zirakzigil and would shortly thereafter succumb to his own wounds.</h2>");
	$("div#solutionbox, img#balrog").show();
	function fiveSeconds() {
		$("div#timerbox").hide();
		page = 9;
		$("div#solutionbox").hide();
		$("img#balrog").hide();
		$("div#ninthQuestion").show();
		$("span#correct").text(correctChoice);
		$("span#incorrect").text(wrongChoice);
	}
});
