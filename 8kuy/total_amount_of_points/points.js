const points = games => games.map(score => score[0] > score[2] ? 3 : (score[0] < score[2] ? 0 : 1)).reduce((a, b) => a + b);
