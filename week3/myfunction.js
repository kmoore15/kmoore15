function kendall(a, b, c) {
  if (a <  b){
      return a + b;
     }
     else if (b < a && a < c){
      return a - b * c;
     }
  else if (a > c){
    return a * c / a;
  }
  else if (a == b){
    return a;
  }
  else if (b < a){
    return b + c;
  }
  else if (a < b  && b < c){
    return c - a + b;
  }
  else if (b > c){
    return c + a * a;
  }
  else if (b == c){
    return c + b - a;
  }
  else if (c < a){
    return a - a + c;
  }
  else if (a < c && c < b){
    return c + c - b;
  }
  else if (c > b){
    return b + a * a;
  }
  else {
    a + a - c;
  }
}

show(kendall(2,4,6));
show(kendall(4,2,6));
show(kendall(6,2,4));
show(kendall(2,6,4));
show(kendall(4,6,2));
show(kendall(6,4,2));
    