/*
A child plays with a ball on the nth floor of a big building. The height of this floor is known:

(float parameter "h" in meters, h > 0) .

He lets out the ball. The ball rebounds for example to two-thirds:

(float parameter "bounce", 0 < bounce < 1)

of its height.

His mother looks out of a window that is 1.5 meters from the ground:

(float parameters window < h).

How many times will the mother see the ball either falling or bouncing in front of the window

(return a positive integer unless conditions are not fulfilled in which case return -1) ?
*/

function bouncingBall(h,  bounce,  window) {
  if (!h || !bounce || !window) {
    return -1
  }
  if((bounce >=1) || (bounce <= 0)) {
    return -1
  }
  if (window >= h) {
    return -1
  }
  let falling = 1
  while((h * bounce) > window) {
    falling += 2
    h = h*bounce
  }
  return falling
}
