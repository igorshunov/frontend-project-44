#!/usr/bin/env node
import gameGenerator from '../games/brain-even-logic.js';
import engine from '../src/index.js';

engine(gameGenerator());
