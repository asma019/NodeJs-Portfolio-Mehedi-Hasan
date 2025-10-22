# Heroku Deployment Guide

This guide will help you deploy the portfolio to Heroku using different methods.

## 🚀 One-Click Deployment

The easiest way to deploy this portfolio to Heroku is using the one-click deploy button:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/asma019/NodeJs-Portfolio-Mehedi-Hasan)

### After One-Click Deployment:

1. **Click the button** above
2. **Choose an app name** (or let Heroku generate one)
3. **Fill in the required environment variables:**
   - `SMTP_HOST`: Your SMTP server (e.g., `smtp.gmail.com`)
   - `SMTP_PORT`: SMTP port (usually `587`)
   - `SMTP_USER`: Your email address
   - `SMTP_PASSWORD`: Your email password or app-specific password
   - `MAIL_FROM`: Email address to send from (same as SMTP_USER)
   - `NEXT_PUBLIC_BASE_URL`: (Optional) Will be auto-set to your Heroku URL
4. **Click "Deploy app"**
5. Wait for the build to complete
6. Click **"View"** to see your deployed portfolio!

---

## 📋 Manual Deployment via Heroku CLI

### Prerequisites

- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed
- Git installed
- Heroku account

### Steps

1. **Login to Heroku:**
   ```bash
   heroku login
   ```

2. **Create a new Heroku app:**
   ```bash
   heroku create your-portfolio-name
   ```

3. **Set environment variables:**
   ```bash
   heroku config:set SMTP_HOST=smtp.gmail.com
   heroku config:set SMTP_PORT=587
   heroku config:set SMTP_USER=your-email@gmail.com
   heroku config:set SMTP_PASSWORD=your-password
   heroku config:set MAIL_FROM=your-email@gmail.com
   heroku config:set NODE_ENV=production
   ```

4. **Deploy your code:**
   ```bash
   git push heroku main
   ```
   
   Or if you're on a different branch:
   ```bash
   git push heroku your-branch:main
   ```

5. **Open your app:**
   ```bash
   heroku open
   ```

---

## 🐳 Docker Deployment on Heroku

Heroku also supports Docker deployments using Container Registry.

### Steps

1. **Login to Heroku Container Registry:**
   ```bash
   heroku login
   heroku container:login
   ```

2. **Create a Heroku app:**
   ```bash
   heroku create your-portfolio-name
   ```

3. **Set environment variables:**
   ```bash
   heroku config:set SMTP_HOST=smtp.gmail.com
   heroku config:set SMTP_PORT=587
   heroku config:set SMTP_USER=your-email@gmail.com
   heroku config:set SMTP_PASSWORD=your-password
   heroku config:set MAIL_FROM=your-email@gmail.com
   ```

4. **Build and push the Docker image:**
   ```bash
   heroku container:push web
   ```

5. **Release the image:**
   ```bash
   heroku container:release web
   ```

6. **Open your app:**
   ```bash
   heroku open
   ```

---

## 🔧 Environment Variables

Make sure to set these environment variables in your Heroku app:

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Node environment | `production` |
| `SMTP_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` |
| `SMTP_USER` | SMTP username/email | `your-email@gmail.com` |
| `SMTP_PASSWORD` | SMTP password | `your-app-password` |
| `MAIL_FROM` | Send from email | `your-email@gmail.com` |
| `NEXT_PUBLIC_BASE_URL` | Base URL | `https://your-app.herokuapp.com` |

### Setting up Gmail SMTP

If using Gmail, you need to:

1. Enable 2-factor authentication on your Google account
2. Generate an [App Password](https://myaccount.google.com/apppasswords)
3. Use the app password as `SMTP_PASSWORD`

---

## 📊 Monitoring Your App

### View logs:
```bash
heroku logs --tail
```

### Check app status:
```bash
heroku ps
```

### Open app in browser:
```bash
heroku open
```

### Check dyno usage:
```bash
heroku ps:scale
```

---

## 🔄 Updating Your Deployment

When you make changes to your code:

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

2. **Push to Heroku:**
   ```bash
   git push heroku main
   ```

Heroku will automatically rebuild and redeploy your app.

---

## ⚙️ Scaling Your App

### Scale up (more powerful dyno):
```bash
heroku ps:scale web=1:standard-1x
```

### Scale down (free/hobby dyno):
```bash
heroku ps:scale web=1:basic
```

---

## 🐛 Troubleshooting

### Build fails:
```bash
# Check build logs
heroku logs --tail

# Try clearing cache
heroku plugins:install heroku-repo
heroku repo:purge_cache -a your-app-name
```

### App crashes on startup:
```bash
# Check logs
heroku logs --tail

# Verify environment variables
heroku config

# Restart the app
heroku restart
```

### Port issues:
Heroku automatically assigns a port via the `$PORT` environment variable. Make sure your `start` script uses:
```json
"start": "next start -p $PORT"
```

### Memory issues:
```bash
# Upgrade to a larger dyno
heroku ps:scale web=1:standard-1x
```

---

## 💰 Cost Considerations

- **Free Tier**: Apps sleep after 30 minutes of inactivity
- **Hobby ($7/month)**: Apps don't sleep, SSL certificates
- **Standard ($25+/month)**: Better performance, horizontal scaling

---

## 📚 Additional Resources

- [Heroku Node.js Documentation](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Environment Variables](https://devcenter.heroku.com/articles/config-vars)
- [Heroku Container Registry](https://devcenter.heroku.com/articles/container-registry-and-runtime)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

## 🆘 Need Help?

If you encounter issues:

1. Check the [Heroku Status](https://status.heroku.com/)
2. Review [Heroku Logs](https://devcenter.heroku.com/articles/logging)
3. Visit [Heroku Dev Center](https://devcenter.heroku.com/)
4. Open an issue on [GitHub](https://github.com/asma019/NodeJs-Portfolio-Mehedi-Hasan/issues)

---

**Happy Deploying! 🚀**

