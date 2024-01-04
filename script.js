let TL = gsap.timeline();
TL.from(".image,.middle ,.last",{
  duration:.3,
  delay:.5,
  y:-100,
  opacity:0,
  stagger:1
})
TL.from(".background h1",{
  duration:.5,
  delay:.5,
  y:-200,
  opacity:0,
  stagger:1,
  scale:0
})
TL.from(".background h2",{
  duration:.5,
  y:500,
  opacity:0,
  delay:.5,
  stagger:1,
  scale:0
})
TL.from(".scroll",{
  y:20,
  duration:.5,
  opacity:0,
  delay:1,
  stagger:1,
  yoyo:true,
  repeat:-1
})