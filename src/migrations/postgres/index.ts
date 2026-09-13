import * as migration_20260913_182251_initial from './20260913_182251_initial';

export const migrations = [
  {
    up: migration_20260913_182251_initial.up,
    down: migration_20260913_182251_initial.down,
    name: '20260913_182251_initial'
  },
];
