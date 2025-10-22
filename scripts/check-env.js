#!/usr/bin/env node

/**
 * Environment Variables Checker
 * Validates that all required environment variables are set
 */

const chalk = require('chalk') || { 
  green: (text) => `✅ ${text}`,
  red: (text) => `❌ ${text}`,
  yellow: (text) => `⚠️  ${text}`,
  blue: (text) => `ℹ️  ${text}`,
  bold: (text) => text
};

const requiredVars = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASSWORD',
  'MAIL_FROM'
];

const optionalVars = [
  'NEXT_PUBLIC_BASE_URL',
  'NODE_ENV'
];

console.log('\n' + '='.repeat(50));
console.log('   Environment Variables Check');
console.log('='.repeat(50) + '\n');

let hasErrors = false;
let hasWarnings = false;

// Check required variables
console.log('Required Variables:\n');
requiredVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(`  ✅ ${varName}: Set`);
  } else {
    console.log(`  ❌ ${varName}: MISSING`);
    hasErrors = true;
  }
});

// Check optional variables
console.log('\nOptional Variables:\n');
optionalVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(`  ✅ ${varName}: ${value}`);
  } else {
    console.log(`  ⚠️  ${varName}: Not set (using default)`);
    hasWarnings = true;
  }
});

// Platform detection
console.log('\nPlatform Detection:\n');
if (process.env.HEROKU) {
  console.log('  ℹ️  Running on Heroku');
} else if (process.env.VERCEL) {
  console.log('  ℹ️  Running on Vercel');
} else if (process.env.NODE_ENV === 'production') {
  console.log('  ℹ️  Running in production mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('  ℹ️  Running in development mode');
} else {
  console.log('  ⚠️  Unknown environment');
}

// Port check
const port = process.env.PORT || 3000;
console.log(`  ℹ️  Port: ${port}`);

console.log('\n' + '='.repeat(50));

// Summary
if (hasErrors) {
  console.log('\n❌ Environment check FAILED!');
  console.log('Please set the missing environment variables.\n');
  console.log('For local development, create a .env.local file with:');
  console.log('');
  requiredVars.forEach(varName => {
    if (!process.env[varName]) {
      console.log(`${varName}=your-value-here`);
    }
  });
  console.log('');
  console.log('For Heroku, set variables with:');
  console.log('heroku config:set VAR_NAME=value');
  console.log('');
  process.exit(1);
} else if (hasWarnings) {
  console.log('\n⚠️  Environment check passed with warnings.');
  console.log('Some optional variables are not set.\n');
  process.exit(0);
} else {
  console.log('\n✅ All environment variables are properly configured!\n');
  process.exit(0);
}

