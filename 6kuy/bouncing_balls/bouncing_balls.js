function bouncingBall(h, bounce, window) {
    if (bounce <= 0 || bounce >= 1 || window >= h || h <= 0) return -1;
    let timesSeen = 1;
    while (true) {
        h = bounce * h;
        if (h > window) timesSeen += 2;
        else return timesSeen;
    }
}