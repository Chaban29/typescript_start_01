let Env: 'development' | 'staging' | 'production' = 'production';

function setEnv(env: 'development' | 'staging' | 'production' = 'production') {
  return env;
}

// Types && Enums

type Env = 'development' | 'staging' | 'production' | number | boolean;

// Enums

enum Env_2 {
  Development = 'development',
  Staging = 'staging',
  Production = 'production',
  Current = 100,
}
