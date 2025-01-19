// 언어 데이터 추가
const translations = {
	ko: {
		title: "Chill Guy 측정기",
		startButton: "측정",
		restartButton: "다시 시작하기",
		saveButton: "결과 저장하기",
		questions: [
			{
				question: "선풍기 바람이 나에게 까지 닿지않아...어떻게 해야할까?",
				image: "q1.webp",
				options: [
					{
						text: "땀을 흘리자. 여름이니까",
						score: 3,
					},
					{
						text: "선풍기 근처로 이동하며 자연스럽게 바람을 받는다. 마치 우주의 흐름처럼.",
						score: 2,
					},
					{
						text: "손에 부채를 들고 천천히 부채질한다. 천천히.",
						score: 1,
					},
					{
						text: "땀을 닦으며, 창밖을 바라본다.",
						score: 0,
					},
				],
			},
			{
				question: "만나기로한 친구가 30분이나 지각했다.",
				image: "q2.webp",
				options: [
					{
						text: "이제 움직이자",
						score: 3,
					},
					{ text: "기다리는 동안 여유롭게 음악을 듣고 있었어", score: 2 },
					{ text: "커피 한 잔 마시면서 기다리고 있었어", score: 1 },
					{ text: "다음부터 일찍 왔으면 해", score: 0 },
				],
			},
			{
				question: "일이 너무 많아 야근을 해야 할 것 같다.",
				image: "q3.webp",
				options: [
					{ text: "내일의 나에게 선물을 주자. 오늘은 집에 간다", score: 3 },
					{ text: "할 수 있는 만큼만 하고 가자. 건강이 최고다", score: 2 },
					{ text: "조금만 더 하다가 가야겠다. 스트레스 받지 말자", score: 1 },
					{ text: "빨리 끝내고 가자. 열심히 하면 된다", score: 0 },
				],
			},
			{
				question: "주말에 갑자기 약속이 취소되었다.",
				image: "q4.webp",
				options: [
					{ text: "나와의 약속을 잡고 침대에 눕는다.", score: 3 },
					{ text: "좋은 기회군. 나만의 시간을 가지자", score: 2 },
					{ text: "다른 친구를 만날까? 아니야, 그냥 쉬자", score: 1 },
					{ text: "다음을 기약하며 넷플릭스를 본다", score: 0 },
				],
			},
			{
				question: "길가다가 발에 껌이 붙었다.",
				image: "q5.avif",
				imageBy: {
					name: "TikTok",
					url: "https://www.tiktok.com/@y2mmem/video/7442305398587034912",
				},
				options: [
					{ text: "껌과의 인연을 받아들인다", score: 3 },
					{ text: "귀찮지만 그래도 어쩔 수 없지", score: 2 },
					{ text: "근처 편의점에서 물티슈를 사자", score: 1 },
					{ text: "아... 짜증나네. 빨리 떼야겠다", score: 0 },
				],
			},
			{
				question: "퇴근길에 엄청난 traffic jam에 걸렸습니다. 당신은?",
				image: "q6.webp",
				options: [
					{ text: "음악 소리를 키운다.", score: 3 },
					{ text: "명상을 한다.", score: 2 },
					{ text: "우회도로를 찾아보자. 천천히", score: 1 },
					{ text: "다음부턴 이 시간은 피해서 가야지", score: 0 },
				],
			},
			{
				question: "당신의 인생 모토는?",
				image: "q7.webp",

				options: [
					{ text: "인생은 흘러가는 대로. 모든 게 Fine해", score: 3 },
					{ text: "천천히 가도 괜찮아. 결국 다 잘될 거야", score: 2 },
					{ text: "긍정적으로 생각하면 긍정적인 일이 생겨", score: 1 },
					{ text: "열심히 살자. 그래도 여유롭게", score: 0 },
				],
			},
		],
		results: {
			score21: {
				text: "세상 모든 게 Fine해. 네 주변은 언제나 Chill한 에너지로 가득해",
				image: "score21.webp",
			},
			score20: {
				text: "🌊 평화로운 흐름 그 자체. 네가 있는 곳이 바로 Chill Zone이야",
				image: "score20.webp",
			},
			score18: {
				text: "🧘‍♂️ 완벽하진 않아도 Fine해. 네 안의 평화가 곧 Chill이니까",
				image: "score18.webp",
			},
			score16: {
				text: "🍃 자유롭게 흘러가는 중. Everything's Chill, Everything's Fine",
				image: "score16.webp",
			},
			score13: {
				text: "👀 천천히 바라보는 네 방식이 Fine해. 그게 바로 진정한 Chill",
				image: "score13.webp",
			},
			score10: {
				text: "⚖️ 밸런스의 달인. 어떤 순간에도 Chill하게 받아들여",
				image: "score10.webp",
			},
			score7: {
				text: "🎮 여유로운 미소가 매력이야. Keep Calm and Stay Chill",
				image: "score7.webp",
			},
			score4: {
				text: "🤔 깊은 생각도 Fine해. 그 속에서 찾은 평화가 너만의 Chill",
				image: "score4.webp",
			},
			score0: {
				text: "⚡ 열정 가득한 게 Fine해. 당신은 Chill...dren",
				image: "score0.webp",
			},
		},
		infoTitle: "About Chill Guy",
		infoText: {
			description:
				"'Chill Guy'는 2024년 초 한국에서 유행하기 시작한 밈으로, 모든 상황에서 여유롭고 평화로운 태도를 보이는 사람을 의미합니다. 이 용어는 영어 'Chill'(여유롭다, 편안하다)과 'Guy'(사람)의 합성어입니다.",
			origin:
				"이 밈은 2024년 1월, 한 유튜버의 '칠가이 테스트' 영상이 인기를 얻으면서 시작되었습니다. 이후 SNS에서 빠르게 확산되어 '긍정적이고 여유로운 태도로 살아가는 사람'을 지칭하는 신조어로 자리잡았습니다.",
			culture:
				"Chill Guy는 단순히 '여유로운 사람'이 아닌, 현대 사회의 스트레스와 경쟁 속에서도 자신만의 페이스를 유지하며 평화로운 마인드를 가진 사람을 의미합니다. 모든 상황에서 'Fine'하다고 말하며, 긍정적인 에너지를 전파하는 것이 특징입니다.",
			purpose:
				"이 테스트는 해당 밈을 재미있게 해석한 팬 콘텐츠입니다. 테스트를 통해 자신의 'Chill' 정도를 재미있게 확인해볼 수 있습니다.",
			copyright:
				"만약 저작권 등 문제가 있다고 판단되시면, 아래 이메일로 연락 주시기 바랍니다. 최대한 신속하게 조치하도록 하겠습니다.",
			email: "📧 daeseong0226@gmail.com",
		},
		closeButton: "닫기",
		shareButton: "공유하기",
		shareTitle: "공유하기",
		shareButtons: {
			instagram: "Instagram Story 공유",
			twitter: "X에 공유하기",
			download: "이미지 저장",
		},
		shareErrors: {
			instagramRequired: "Instagram 앱이 필요합니다.",
			instagramFailed: "Instagram Story 공유에 실패했습니다.",
			saveFailed: "이미지 저장에 실패했습니다. 다시 시도해주세요.",
		},
		musicGuide: {
			before: "🎵 BGM을 듣고 싶다면",
			after: "을 눌러주세요",
		},
	},
	en: {
		title: "Chill Guy Test",
		startButton: "Start",
		restartButton: "Restart",
		saveButton: "Save Result",
		questions: [
			{
				question: "The fan's breeze doesn't reach you... What would you do?",
				image: "q1.webp",
				options: [
					{
						text: "Let's sweat. It's summer after all",
						score: 3,
					},
					{
						text: "Move closer to the fan and naturally catch the breeze. Like the flow of the universe.",
						score: 2,
					},
					{
						text: "Hold a hand fan and fan myself slowly. Slowly.",
						score: 1,
					},
					{
						text: "Wipe off the sweat and look out the window.",
						score: 0,
					},
				],
			},
			{
				question: "Your friend is 30 minutes late for the meeting.",
				image: "q2.webp",
				options: [
					{
						text: "Let's start moving now",
						score: 3,
					},
					{ text: "I was just enjoying some music while waiting", score: 2 },
					{ text: "I was having a coffee while waiting", score: 1 },
					{ text: "Hope you can come earlier next time", score: 0 },
				],
			},
			{
				question: "You might need to work overtime due to too much work.",
				image: "q3.webp",

				options: [
					{
						text: "Let's give tomorrow's me a gift. I'm going home now",
						score: 3,
					},
					{
						text: "Let's just do what we can and go. Health comes first",
						score: 2,
					},
					{ text: "I'll work a bit more and then leave. No stress", score: 1 },
					{
						text: "Let's finish quickly and go. Working hard is the key",
						score: 0,
					},
				],
			},
			{
				question: "Your weekend plans got suddenly canceled.",
				image: "q4.webp",

				options: [
					{ text: "Make a date with myself and lie in bed", score: 3 },
					{ text: "Good opportunity. Let's have some me time", score: 2 },
					{
						text: "Should I meet another friend? Nah, let's just rest",
						score: 1,
					},
					{
						text: "Watch Netflix while looking forward to next time",
						score: 0,
					},
				],
			},
			{
				question: "You stepped on gum while walking. How do you react?",
				image: "q5.avif",

				options: [
					{
						text: "This is just part of life~ I'll remove it slowly",
						score: 3,
					},
					{ text: "What a hassle~ But can't help it", score: 2 },
					{ text: "Let's buy some wet wipes from the nearby store", score: 1 },
					{ text: "Ugh... annoying. Need to remove it quickly", score: 0 },
				],
			},
			{
				question:
					"You're stuck in a huge traffic jam on your way home. What do you do?",
				image: "q6.webp",

				options: [
					{
						text: "Traffic's bad~ Let's listen to some music while driving",
						score: 3,
					},
					{ text: "How about some meditation during this time?", score: 2 },
					{ text: "Let's look for a detour. Slowly", score: 1 },
					{ text: "Should avoid this time next time", score: 0 },
				],
			},
			{
				question: "What's your life motto?",
				image: "q7.webp",

				options: [
					{ text: "Go with the flow. Everything's Fine", score: 3 },
					{ text: "It's okay to go slow. Everything will work out", score: 2 },
					{ text: "Think positive and positive things will happen", score: 1 },
					{ text: "Work hard but stay relaxed", score: 0 },
				],
			},
		],
		results: {
			score21: {
				text: "✨ Everything's Fine around you. Your presence brings the ultimate Chill vibes",
				image: "score21.webp",
			},
			score20: {
				text: "🌊 Pure peace in motion. Wherever you are becomes the Chill Zone",
				image: "score20.webp",
			},
			score18: {
				text: "🧘‍♂️ Perfectly imperfect and Fine. Your inner peace is pure Chill",
				image: "score18.webp",
			},
			score16: {
				text: "🍃 Going with the flow. Everything's Chill, Everything's Fine",
				image: "score16.webp",
			},
			score13: {
				text: "👀 Taking it slow is Fine. That's what makes you genuinely Chill",
				image: "score13.webp",
			},
			score10: {
				text: "⚖️ Master of balance. Keeping it Chill in every moment",
				image: "score10.webp",
			},
			score7: {
				text: "🎮 That peaceful smile says it all. Keep Calm and Stay Chill",
				image: "score7.webp",
			},
			score4: {
				text: "🤔 Deep thoughts are Fine. Finding your Chill in contemplation",
				image: "score4.webp",
			},
			score0: {
				text: "⚡ Passionate soul with a Chill mind. That's perfectly Fine",
				image: "score0.webp",
			},
		},
		infoTitle: "About Chill Guy",
		infoText: {
			description:
				"'Chill Guy' is a meme that became popular in Korea in early 2024, referring to someone who maintains a relaxed and peaceful attitude in all situations. The term combines the English words 'Chill' (relaxed, calm) and 'Guy' (person).",
			origin:
				"This meme gained popularity in January 2024 when a YouTuber's 'Chill Guy Test' video went viral. It quickly spread across social media, becoming a new term to describe 'someone who lives with a positive and relaxed attitude.'",
			culture:
				"A Chill Guy isn't just someone who's relaxed, but rather someone who maintains their own pace and peaceful mindset despite the stress and competition of modern society.",
			purpose:
				"This test is fan content that playfully interprets Chill Guy culture.",
			copyright:
				"If you believe there are any copyright issues, please contact us at the email below. We will take appropriate action as quickly as possible.",
			email: "📧 daeseong0226@gmail.com",
		},
		closeButton: "Close",
		shareButton: "Share",
		shareTitle: "Share",
		shareButtons: {
			instagram: "Share to Instagram Story",
			twitter: "Share to X",
			download: "Save Image",
		},
		shareErrors: {
			instagramRequired: "Instagram app is required.",
			instagramFailed: "Failed to share to Instagram Story.",
			saveFailed: "Failed to save image. Please try again.",
		},
		musicGuide: {
			before: "🎵 Click",
			after: "for BGM",
		},
	},
};

// currentLang 초기값을 브라우저 언어에 따라 설정하는 함수 추가
function getInitialLanguage() {
	const browserLang = navigator.language || navigator.userLanguage;
	return browserLang.startsWith("ko") ? "ko" : "en";
}

// currentLang 변수 초기화 수정
let currentLang = getInitialLanguage();

// 언어 변경 함수
function changeLanguage(lang) {
	currentLang = lang;

	// 버튼 활성화 상태 변경
	document.querySelectorAll(".language-btn").forEach((btn) => {
		btn.classList.toggle("active", btn.dataset.lang === lang);
	});

	// 현재 화면 상태에 따라 텍스트 업데이트
	updateTexts();
}

// 텍스트 업데이트 함수
function updateTexts() {
	const t = translations[currentLang];

	document.querySelector(".title").textContent = t.title;
	document.querySelector(".start-button").textContent = t.startButton;

	if (quizContainer.style.display === "block") {
		renderQuestion();
	} else if (resultContainer.style.display === "block") {
		showResult();
	}

	// 다시 시작하기 버튼만 업데이트
	document.querySelectorAll(".result-button").forEach((btn) => {
		if (btn.onclick.toString().includes("restartQuiz")) {
			btn.textContent = t.restartButton;
		}
	});

	// 정보 모달 텍스트 업데이트
	document.querySelector("#infoModal h3").textContent = t.infoTitle;
	const infoText = document.querySelector(".info-text");
	infoText.innerHTML = `
		<p>${t.infoText.description}</p>
		<p>${t.infoText.origin}</p>
		<p>${t.infoText.culture}</p>
		<p>${t.infoText.purpose}</p>
		<p>${t.infoText.copyright}</p>
		<p class="contact-email">${t.infoText.email}</p>
	`;
	document.querySelector("#infoModal .modal-close").textContent = t.closeButton;

	// 공유 모달 텍스트 업데이트
	document.querySelector("#shareModal h3").textContent = t.shareTitle;
	document.querySelectorAll("#shareModal .icon-button").forEach((btn) => {
		if (btn.onclick.toString().includes("Instagram")) {
			btn.title = t.shareButtons.instagram;
		} else if (btn.onclick.toString().includes("shareToX")) {
			btn.title = t.shareButtons.twitter;
		} else if (btn.onclick.toString().includes("saveImage")) {
			btn.title = t.shareButtons.download;
		}
	});
	document.querySelector("#shareModal .modal-close").textContent =
		t.closeButton;

	// BGM 가이드 텍스트 업데이트
	document.querySelectorAll(".music-guide").forEach((guide, index) => {
		guide.textContent = index === 0 ? t.musicGuide.before : t.musicGuide.after;
	});
}

let currentQuestionIndex = 0;
let totalScore = 0;

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result");
const resultText = document.getElementById("result-text");

// 배열 섞기 함수
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

// 질문 화면 렌더링
function renderQuestion() {
	const currentQuestion =
		translations[currentLang].questions[currentQuestionIndex];
	const shuffledOptions = shuffleArray([...currentQuestion.options]);

	const questionNumber =
		currentQuestionIndex === translations[currentLang].questions.length - 1
			? "Chill."
			: `${currentQuestionIndex + 1}.`;

	quizContainer.innerHTML = `
      <div class="question">
        ${questionNumber} ${currentQuestion.question}
      </div>
      <div class="question-image skeleton">
        <img 
          src="${currentQuestion.image}" 
          alt="Question Image" 
          style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;"
          onload="this.classList.add('loaded'); this.parentElement.classList.remove('skeleton')"
        >
      </div>
      ${
				currentQuestion.imageBy
					? `
        <div class="image-credit">
          Image by <a href="${currentQuestion.imageBy.url}" target="_blank" rel="noopener">${currentQuestion.imageBy.name}</a>
        </div>
      `
					: ""
			}
      ${shuffledOptions
				.map(
					(option) => `
          <button class="option" onclick="selectOption(${option.score})">${option.text}</button>
        `,
				)
				.join("")}
    `;
}

// 옵션 선택
function selectOption(score) {
	const quizContainer = document.getElementById("quiz-container");

	// 페이드 아웃 효과 추가
	quizContainer.classList.add("fade-out");

	// 페이드 아웃이 완료된 후 다음 질문으로 전환
	setTimeout(() => {
		totalScore += score;
		currentQuestionIndex++;

		if (currentQuestionIndex < translations[currentLang].questions.length) {
			showQuestion(currentQuestionIndex);
			// 페이드 인 효과
			quizContainer.classList.remove("fade-out");
		} else {
			showResult();
		}
	}, 300);
}

// 결과 보여주기
function showResult() {
	quizContainer.style.display = "none";
	let resultMessage = "";
	const t = translations[currentLang];

	if (totalScore >= 21) {
		resultMessage = t.results.score21.text;
	} else if (totalScore === 20) {
		resultMessage = t.results.score20.text;
	} else if (totalScore >= 18) {
		resultMessage = t.results.score18.text;
	} else if (totalScore >= 16) {
		resultMessage = t.results.score16.text;
	} else if (totalScore >= 13) {
		resultMessage = t.results.score13.text;
	} else if (totalScore >= 10) {
		resultMessage = t.results.score10.text;
	} else if (totalScore >= 7) {
		resultMessage = t.results.score7.text;
	} else if (totalScore >= 4) {
		resultMessage = t.results.score4.text;
	} else {
		resultMessage = t.results.score0.text;
	}

	const resultData = getResultData();

	resultContainer.innerHTML = `
      <div class="score-text">${currentLang === "ko" ? `너의 점수는 ${totalScore}점이야.` : `Your score is ${totalScore}.`}</div>
      <h2 class="result-title">${resultMessage}</h2>
      <div class="result-image skeleton">
        <img 
          src="${resultData.image}" 
          alt="Result Image" 
          style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;"
          onload="this.classList.add('loaded'); this.parentElement.classList.remove('skeleton')"
        >
      </div>
      ${
				resultData.imageBy
					? `
        <div class="image-credit">
          Image by <a href="${resultData.imageBy.url}" target="_blank" rel="noopener">${resultData.imageBy.name}</a>
        </div>
      `
					: ""
			}
      <div class="button-group">
        <button class="result-button" onclick="restartQuiz()">${t.restartButton}</button>
        <button class="result-button" onclick="openShareModal()">${t.shareButton}</button>
      </div>
    `;

	resultContainer.style.display = "block";
}

// 퀴즈 다시 시작
function restartQuiz() {
	currentQuestionIndex = 0;
	totalScore = 0;
	resultContainer.style.display = "none";
	document.getElementById("start-container").style.display = "flex";
	quizContainer.style.display = "none";
}

// 페이지 로드 시 초기 설정
document.addEventListener("DOMContentLoaded", () => {
	// 초기 화면 설정
	document.getElementById("quiz-container").style.display = "none";
	document.getElementById("result").style.display = "none";
	document.getElementById("start-container").style.display = "flex";

	// BGM 설정
	bgm.volume = 0.5;
	document.addEventListener(
		"click",
		() => {
			if (!isMusicPlaying) {
				bgm.play();
				isMusicPlaying = true;
				musicToggle.textContent = "🔊";
			}
		},
		{ once: true },
	);

	// 초기 언어 설정에 따른 텍스트 업데이트
	updateTexts();

	// 초기 언어 설정에 따라 언어 버튼 활성화
	document.querySelectorAll(".language-btn").forEach((btn) => {
		btn.classList.toggle("active", btn.dataset.lang === currentLang);
	});
});

// 퀴즈 시작 함수 수정
function startQuiz() {
	document.getElementById("start-container").style.display = "none";
	document.getElementById("quiz-container").style.display = "block";
	document.getElementById("result").style.display = "none";
	// 현재 언어의 질문들을 섞기
	translations[currentLang].questions = shuffleArray([
		...translations[currentLang].questions,
	]);
	currentQuestionIndex = 0;
	totalScore = 0;
	showQuestion(currentQuestionIndex);
}

// Instagram 공유 함수 추가
function shareToInstagram() {
	// Instagram 공유 로직 구현
	// 실제 구현시에는 웹 공유 API나 딥링크를 사용해야 합니다
	alert("Instagram 공유 기능은 추후 구현될 예정입니다.");
}

// 이미지 저장 함수 추가
async function saveImage() {
	try {
		// 저장 버튼 숨기기 (이미지에 포함되지 않도록)
		const buttons = document.querySelectorAll(".result-button");
		buttons.forEach((button) => (button.style.display = "none"));

		// 결과 div를 이미지로 변환
		const element = document.getElementById("result");
		const canvas = await html2canvas(element, {
			backgroundColor: "#f1f8e9",
			scale: 2, // 더 선명한 이미지를 위해 2배 크기로 렌더링
		});

		// 버튼 다시 보이게 하기
		buttons.forEach((button) => (button.style.display = "block"));

		// 이미지 다운로드
		const link = document.createElement("a");
		link.download = "my-chill-result.png";
		link.href = canvas.toDataURL("image/png");
		link.click();
	} catch (err) {
		console.error("이미지 저장 중 오류가 발생했습니다:", err);
		alert(translations[currentLang].shareErrors.saveFailed);
	}
}

// Instagram Story 공유 함수 수정
async function shareToInstagramStory() {
	try {
		const resultElement = document.getElementById("result");

		// 버튼 숨기기 (이미지에 포함되지 않도록)
		const buttons = document.querySelectorAll(".result-button");
		buttons.forEach((button) => (button.style.display = "none"));

		// 이미지 생성
		const canvas = await html2canvas(resultElement, {
			backgroundColor: getComputedStyle(document.body).getPropertyValue(
				"--container-bg",
			),
			scale: 2,
		});

		// 버튼 다시 보이게 하기
		buttons.forEach((button) => (button.style.display = "block"));

		// Canvas를 Blob으로 변환하고 파일로 만들기
		const blob = await new Promise((resolve) =>
			canvas.toBlob(resolve, "image/png"),
		);
		const file = new File([blob], "chill-guy-result.png", {
			type: "image/png",
		});

		// 파일을 공유하기 위해 Web Share API 사용
		if (navigator.share) {
			await navigator.share({
				files: [file],
				title: "Chill Guy Test Result",
				text:
					currentLang === "ko"
						? `나의 Chill Guy 점수는 ${totalScore}점!\n테스트 하러가기 👉 https://chill-guy.limcpf.com`
						: `My Chill Guy score is ${totalScore}!\nTake the test 👉 https://chill-guy.limcpf.com`,
			});
		} else {
			// Web Share API를 지원하지 않는 경우 대체 방법
			const instagramURL = "instagram://story-camera";
			window.location.href = instagramURL;

			setTimeout(() => {
				if (document.hidden) return;
				alert(translations[currentLang].shareErrors.instagramRequired);
			}, 2000);
		}

		closeShareModal();
	} catch (error) {
		console.error("Instagram Story 공유 중 오류:", error);
		alert(translations[currentLang].shareErrors.instagramFailed);
	}
}

// BGM 관련 코드 추가
const bgm = document.getElementById("bgm");
const musicToggle = document.getElementById("musicToggle");
let isMusicPlaying = false;

// BGM 토글 함수
function toggleMusic() {
	if (isMusicPlaying) {
		bgm.pause();
		musicToggle.textContent = "🔈";
	} else {
		bgm
			.play()
			.then(() => {
				musicToggle.textContent = "🔊";
			})
			.catch((error) => {
				console.log("음악 재생에 실패했습니다:", error);
				alert("음악 재생에 실패했습니다. 브라우저 설정을 확인해주세요.");
			});
	}
	isMusicPlaying = !isMusicPlaying;
}

// 음악 토글 버튼에 이벤트 리스너 추가
musicToggle.addEventListener("click", toggleMusic);

// 결과 이미지 가져오기 함수 추가
function getResultImage() {
	const t = translations[currentLang];

	if (totalScore >= 21) {
		return t.results.score21.image;
	} else if (totalScore === 20) {
		return t.results.score20.image;
	} else if (totalScore >= 18) {
		return t.results.score18.image;
	} else if (totalScore >= 16) {
		return t.results.score16.image;
	} else if (totalScore >= 13) {
		return t.results.score13.image;
	} else if (totalScore >= 10) {
		return t.results.score10.image;
	} else if (totalScore >= 7) {
		return t.results.score7.image;
	} else if (totalScore >= 4) {
		return t.results.score4.image;
	} else {
		return t.results.score0.image;
	}
}

// 결과 데이터 가져오기 함수 추가
function getResultData() {
	const t = translations[currentLang];

	if (totalScore >= 21) {
		return t.results.score21;
	} else if (totalScore === 20) {
		return t.results.score20;
	} else if (totalScore >= 18) {
		return t.results.score18;
	} else if (totalScore >= 16) {
		return t.results.score16;
	} else if (totalScore >= 13) {
		return t.results.score13;
	} else if (totalScore >= 10) {
		return t.results.score10;
	} else if (totalScore >= 7) {
		return t.results.score7;
	} else if (totalScore >= 4) {
		return t.results.score4;
	} else {
		return t.results.score0;
	}
}

// 개인정보처리방침 표시 함수
function showPrivacyPolicy() {
	alert(
		"이 테스트는 어떠한 개인정보도 수집하지 않습니다.\n모든 테스트 결과는 브라우저에서만 처리되며 서버에 저장되지 않습니다.",
	);
}

// 음악 토글 버튼 이벤트 리스너
musicToggle.addEventListener("click", toggleMusic);

function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute("data-theme");
	const newTheme = currentTheme === "dark" ? "light" : "dark";
	document.documentElement.setAttribute("data-theme", newTheme);
	localStorage.setItem("theme", newTheme); // 사용자의 테마 선택을 저장
}

// 페이지 로드 시 저장된 테마 적용
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);

// 모달 관련 함수 추가
function openShareModal() {
	const modal = document.getElementById("shareModal");
	modal.style.display = "flex";
	document.body.style.overflow = "hidden"; // body 스크롤 막기

	// 모달 외부 클릭시 닫기
	modal.addEventListener("click", (e) => {
		if (e.target === modal) {
			closeShareModal();
		}
	});
}

function closeShareModal() {
	document.getElementById("shareModal").style.display = "none";
	document.body.style.overflow = ""; // body 스크롤 복구
}

// X(Twitter) 공유 함수 추가
function shareToX() {
	const resultData = getResultData();
	const score = totalScore;
	const text =
		currentLang === "ko"
			? `[Chill Guy 측정기]\n\n나의 Chill Guy 점수는 ${score}점!\n${resultData.text}\n\n테스트 하러가기 👇`
			: `[Chill Guy Test]\n\nMy Chill Guy score is ${score}!\n${resultData.text}\n\nTake the test 👇`;

	const url = "https://chill-guy.limcpf.com";
	const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;

	// 새 창에서 X 공유 페이지 열기
	window.open(shareUrl, "_blank", "width=600,height=400");
	closeShareModal();
}

// 정보 모달 관련 함수 추가
function openInfoModal() {
	const modal = document.getElementById("infoModal");
	modal.style.display = "flex";
	document.body.style.overflow = "hidden"; // body 스크롤 막기

	// 모달 외부 클릭시 닫기
	modal.addEventListener("click", (e) => {
		if (e.target === modal) {
			closeInfoModal();
		}
	});
}

function closeInfoModal() {
	document.getElementById("infoModal").style.display = "none";
	document.body.style.overflow = ""; // body 스크롤 복구
}

// showQuestion 함수 수정
function showQuestion(index) {
	const t = translations[currentLang];
	const question = t.questions[index];

	// 선택지 섞기
	const shuffledOptions = shuffleArray([...question.options]);

	// 프로그레스 바 업데이트
	const progress = ((index + 1) / t.questions.length) * 100;
	document.querySelector(".progress-bar").style.width = `${progress}%`;
	document.querySelector(".progress-text").textContent =
		`${index + 1}/${t.questions.length}`;

	// 질문 번호 설정
	const questionNumber =
		index === t.questions.length - 1 ? "Chill." : `${index + 1}.`;

	// 질문 컨테이너 내용 업데이트
	quizContainer.innerHTML = `
	  <div class="progress-bar-container">
		<div class="progress-bar" style="width: ${progress}%"></div>
		<div class="progress-text">${index + 1}/${t.questions.length}</div>
	  </div>
	  <div class="question">
		${questionNumber} ${question.question}
	  </div>
	  <div class="question-image skeleton">
		<img 
		  src="${question.image}" 
		  alt="Question Image" 
		  style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;"
		  onload="this.classList.add('loaded'); this.parentElement.classList.remove('skeleton')"
		>
	  </div>
	  ${
			question.imageBy
				? `
		<div class="image-credit">
		  Image by <a href="${question.imageBy.url}" target="_blank" rel="noopener">${question.imageBy.name}</a>
		</div>
	  `
				: ""
		}
	  ${shuffledOptions
			.map(
				(option) => `
		<button class="option" onclick="selectOption(${option.score})">${option.text}</button>
	  `,
			)
			.join("")}
	`;
}
