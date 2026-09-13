import * as migration_20260913_182227_initial from './20260913_182227_initial';

export const migrations = [
  {
    up: migration_20260913_182227_initial.up,
    down: migration_20260913_182227_initial.down,
    name: '20260913_182227_initial'
  },
];
