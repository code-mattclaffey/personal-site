interface Player {
  playerId: string;
  name: string;
  correctAnswers: number;
  incorrectAnswers: number;
}

interface ScoreBoard {
  scores: Array<Player>;
}

interface OpenTbdApi {
  token: string;
  amount: number;
  category?: string;
  type?: "any" | "multiple" | "true/false";
  difficulty?: "any" | "easy" | "medium" | "hard";
}

interface Question extends OpenTbdApi {
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

interface OpenTbdApiResponse {
  response_code: number;
  results: Array<Question>;
}

interface Game {
  gameId: string | null;
  status: "NOT_STARTED" | "IN_PLAY" | "FINISHED";
  questionStage: number;
  questions: Array<Question>;
  players?: Array<Player>;
}

interface FirebaseState {
  games: {
    [quid: string]: Game;
  };
}
