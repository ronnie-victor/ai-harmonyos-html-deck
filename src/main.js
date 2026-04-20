import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import './theme.css';
import './deck.css';
import { renderSlides } from './slides.js';

const slidesRoot = document.getElementById('slides');
slidesRoot.innerHTML = renderSlides();

const deck = new Reveal({
  hash: true,
  controls: true,
  progress: true,
  center: false,
  transition: 'fade',
  backgroundTransition: 'fade',
  width: 1600,
  height: 900,
  margin: 0.04
});

deck.initialize();
