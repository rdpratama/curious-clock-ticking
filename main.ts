// The hall clock has not worked for years, yet the reader winds it
// every morning out of habit. This morning it ticks, and no one wound it.
// The reader stands and listens, and does not touch it.
// The question stays open: why is the broken clock ticking, and who wound it?
import { mkdirSync, writeFileSync } from 'node:fs';

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT =
  'You wind the hall clock every morning, though it has not worked for years. You wind it out of habit. It never ticks. This morning it is ticking. You did not wind it. You stand in the hall and listen. It ticks. Slow. A while. Slower. You do not touch it.';

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, `${TEXT}\n`);
