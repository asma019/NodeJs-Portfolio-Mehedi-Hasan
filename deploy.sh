#!/bin/bash

echo "===== Starting Portfolio Deployment ====="

# Check for updates and install dependencies
echo "Updating dependencies..."
npm install

# Build the application
echo "Building the application..."
npm run build

# Verify PWA icon files
echo "Verifying PWA icon files..."
if [ ! -d "public/icons" ]; then
  mkdir -p public/icons
fi

# Copy base icon to all required sizes if they don't exist
if [ -f "public/icons/icon-144x144.png" ]; then
  for size in 72 96 128 144 152 192 384 512; do
    if [ ! -f "public/icons/icon-${size}x${size}.png" ]; then
      echo "Creating icon-${size}x${size}.png"
      cp public/icons/icon-144x144.png public/icons/icon-${size}x${size}.png
    fi
  done
else
  echo "Warning: Base icon file missing. Please add public/icons/icon-144x144.png"
  if [ -f "public/images/socialshare.png" ]; then
    echo "Using socialshare.png as fallback for icons"
    mkdir -p public/icons
    cp public/images/socialshare.png public/icons/icon-144x144.png
    for size in 72 96 128 144 152 192 384 512; do
      cp public/icons/icon-144x144.png public/icons/icon-${size}x${size}.png
    done
  fi
fi

# Check if PM2 is installed
if command -v pm2 &> /dev/null; then
  # Check if portfolio is already running in PM2
  if pm2 list | grep -q "portfolio"; then
    echo "Restarting PM2 service..."
    pm2 restart portfolio
  else
    echo "Starting portfolio with PM2..."
    pm2 start ecosystem.config.js
    pm2 save
  fi
  echo "PM2 status:"
  pm2 status portfolio
else
  echo "PM2 is not installed. Starting with npm..."
  npm start
fi

echo "===== Deployment Complete =====" 