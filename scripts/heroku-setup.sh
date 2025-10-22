#!/bin/bash

# Heroku Setup Script for Portfolio
# This script automates the Heroku deployment process

echo "======================================"
echo "  Heroku Portfolio Setup Script"
echo "======================================"
echo ""

# Check if Heroku CLI is installed
if ! command -v heroku &> /dev/null; then
    echo "❌ Heroku CLI is not installed."
    echo "Please install it from: https://devcenter.heroku.com/articles/heroku-cli"
    exit 1
fi

echo "✅ Heroku CLI is installed"
echo ""

# Login to Heroku
echo "📝 Please login to Heroku..."
heroku login

echo ""
echo "======================================"
echo "  Creating Heroku App"
echo "======================================"
echo ""

# Ask for app name
read -p "Enter your Heroku app name (or press Enter for auto-generated): " APP_NAME

if [ -z "$APP_NAME" ]; then
    echo "Creating Heroku app with auto-generated name..."
    heroku create
else
    echo "Creating Heroku app: $APP_NAME"
    heroku create "$APP_NAME"
fi

# Get the app name (in case it was auto-generated)
HEROKU_APP=$(heroku apps:info --json | grep -o '"name":"[^"]*' | grep -o '[^"]*$')
echo ""
echo "✅ Heroku app created: $HEROKU_APP"
echo ""

# Setup environment variables
echo "======================================"
echo "  Setting Up Environment Variables"
echo "======================================"
echo ""

echo "Please provide your SMTP configuration:"
echo ""

read -p "SMTP Host (e.g., smtp.gmail.com): " SMTP_HOST
read -p "SMTP Port (e.g., 587): " SMTP_PORT
read -p "SMTP User (your email): " SMTP_USER
read -sp "SMTP Password (hidden): " SMTP_PASSWORD
echo ""
read -p "Mail From (usually same as SMTP User): " MAIL_FROM

echo ""
echo "Setting environment variables..."

heroku config:set NODE_ENV=production --app "$HEROKU_APP"
heroku config:set SMTP_HOST="$SMTP_HOST" --app "$HEROKU_APP"
heroku config:set SMTP_PORT="$SMTP_PORT" --app "$HEROKU_APP"
heroku config:set SMTP_USER="$SMTP_USER" --app "$HEROKU_APP"
heroku config:set SMTP_PASSWORD="$SMTP_PASSWORD" --app "$HEROKU_APP"
heroku config:set MAIL_FROM="$MAIL_FROM" --app "$HEROKU_APP"
heroku config:set NEXT_PUBLIC_BASE_URL="https://$HEROKU_APP.herokuapp.com" --app "$HEROKU_APP"

echo ""
echo "✅ Environment variables set!"
echo ""

# Ask if user wants to deploy now
echo "======================================"
echo "  Deployment"
echo "======================================"
echo ""

read -p "Do you want to deploy now? (y/n): " DEPLOY_NOW

if [ "$DEPLOY_NOW" = "y" ] || [ "$DEPLOY_NOW" = "Y" ]; then
    echo ""
    echo "Deploying to Heroku..."
    echo "This may take a few minutes..."
    echo ""
    
    # Check current branch
    CURRENT_BRANCH=$(git branch --show-current)
    
    if [ "$CURRENT_BRANCH" = "main" ]; then
        git push heroku main
    else
        echo "You're on branch: $CURRENT_BRANCH"
        read -p "Push this branch to Heroku main? (y/n): " PUSH_BRANCH
        if [ "$PUSH_BRANCH" = "y" ] || [ "$PUSH_BRANCH" = "Y" ]; then
            git push heroku "$CURRENT_BRANCH:main"
        else
            echo "Skipping deployment. You can deploy later with:"
            echo "  git push heroku main"
        fi
    fi
    
    echo ""
    echo "✅ Deployment complete!"
    echo ""
    echo "Opening your app in browser..."
    heroku open --app "$HEROKU_APP"
else
    echo ""
    echo "Skipping deployment. You can deploy later with:"
    echo "  git push heroku main"
fi

echo ""
echo "======================================"
echo "  Setup Complete! 🎉"
echo "======================================"
echo ""
echo "Your app URL: https://$HEROKU_APP.herokuapp.com"
echo ""
echo "Useful commands:"
echo "  heroku logs --tail --app $HEROKU_APP    # View logs"
echo "  heroku open --app $HEROKU_APP           # Open in browser"
echo "  heroku config --app $HEROKU_APP         # View config vars"
echo "  heroku ps --app $HEROKU_APP             # Check dyno status"
echo ""
echo "For more info, see HEROKU_DEPLOYMENT.md"
echo ""

