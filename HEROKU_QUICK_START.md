# Heroku Quick Start Guide

Get your portfolio deployed to Heroku in under 5 minutes! 🚀

## Method 1: One-Click Deploy (Easiest) ⚡

**Click this button:**

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/asma019/NodeJs-Portfolio-Mehedi-Hasan)

**That's it!** Just:
1. Login to Heroku (or create a free account)
2. Name your app
3. Fill in environment variables
4. Click "Deploy app"
5. Wait 2-3 minutes
6. Your portfolio is live! 🎉

---

## Method 2: Automated Script (For developers)

If you have Heroku CLI installed:

```bash
npm run heroku-setup
```

This interactive script will:
- Create your Heroku app
- Set up environment variables
- Deploy your code
- Open your live site

---

## Method 3: Manual CLI Deploy

### Prerequisites
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed
- Git installed

### Steps

**1. Login to Heroku**
```bash
heroku login
```

**2. Create your app**
```bash
heroku create your-portfolio-name
```

**3. Set environment variables**
```bash
heroku config:set SMTP_HOST=smtp.gmail.com
heroku config:set SMTP_PORT=587
heroku config:set SMTP_USER=your-email@gmail.com
heroku config:set SMTP_PASSWORD=your-password
heroku config:set MAIL_FROM=your-email@gmail.com
```

**4. Deploy**
```bash
git push heroku main
```

**5. Open your app**
```bash
heroku open
```

---

## 📧 Setting up Gmail SMTP

For the contact form to work, you need SMTP credentials.

### Using Gmail:

1. **Enable 2-Factor Authentication**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Create App Password**
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Other (Custom name)"
   - Enter "Portfolio" as the name
   - Click "Generate"
   - Copy the 16-character password

3. **Use these settings:**
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-16-char-app-password
   MAIL_FROM=your-email@gmail.com
   ```

### Using Other Email Providers:

| Provider | SMTP Host | Port |
|----------|-----------|------|
| **Gmail** | smtp.gmail.com | 587 |
| **Outlook** | smtp-mail.outlook.com | 587 |
| **Yahoo** | smtp.mail.yahoo.com | 587 |
| **SendGrid** | smtp.sendgrid.net | 587 |
| **Mailgun** | smtp.mailgun.org | 587 |

---

## ✅ Verify Deployment

After deploying, test your site:

1. **Homepage loads:** `https://your-app.herokuapp.com`
2. **Contact form works:** Submit a test message
3. **Dark mode toggles:** Click theme switcher
4. **All sections visible:** Scroll through entire page

---

## 🐛 Troubleshooting

### Build Fails
```bash
# View detailed logs
heroku logs --tail

# Rebuild
git commit --allow-empty -m "Trigger rebuild"
git push heroku main
```

### Contact Form Not Working
```bash
# Check environment variables
heroku config

# Make sure SMTP settings are correct
heroku config:set SMTP_PASSWORD=new-password
```

### App Crashes
```bash
# Check logs
heroku logs --tail

# Restart app
heroku restart
```

### Slow Performance (Free Tier)
- Free dynos sleep after 30 min of inactivity
- First request after sleep takes ~10 seconds
- Upgrade to Hobby dyno ($7/mo) for always-on:
  ```bash
  heroku ps:scale web=1:hobby
  ```

---

## 💰 Heroku Pricing

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 550 hours/month, sleeps after 30min |
| **Hobby** | $7/month | Always on, custom domain, SSL |
| **Standard-1X** | $25/month | Better performance, metrics |
| **Standard-2X** | $50/month | 2x RAM, 2x CPU |

**Recommendation:** Start with Free, upgrade to Hobby when needed.

---

## 📊 Monitoring Your App

### View Logs
```bash
heroku logs --tail
```

### Check Status
```bash
heroku ps
```

### View Config
```bash
heroku config
```

### Open App
```bash
heroku open
```

### View Metrics (Paid tiers)
```bash
heroku addons:open librato
```

---

## 🔄 Updating Your App

When you make changes:

```bash
# Commit changes
git add .
git commit -m "Update portfolio"

# Deploy to Heroku
git push heroku main

# Changes are live in ~2 minutes!
```

---

## 🎯 Next Steps

After deployment:

1. ✅ **Add custom domain** (optional)
   ```bash
   heroku domains:add www.yoursite.com
   ```

2. ✅ **Enable metrics** (paid tier)
   ```bash
   heroku addons:create librato
   ```

3. ✅ **Setup CI/CD** with GitHub
   - Enable automatic deploys from GitHub
   - Deploy when you push to main branch

4. ✅ **Monitor performance**
   - Check logs regularly
   - Monitor dyno usage
   - Set up alerts

---

## 🆘 Need More Help?

- **Detailed Guide:** [HEROKU_DEPLOYMENT.md](./HEROKU_DEPLOYMENT.md)
- **Compare Platforms:** [DEPLOYMENT_COMPARISON.md](./DEPLOYMENT_COMPARISON.md)
- **Heroku Docs:** https://devcenter.heroku.com/
- **GitHub Issues:** https://github.com/asma019/NodeJs-Portfolio-Mehedi-Hasan/issues

---

## 🎉 Success!

Your portfolio is now live on Heroku! Share it with the world:

- Add it to your resume
- Share on LinkedIn
- Update your GitHub profile
- Send to potential clients/employers

**Happy deploying! 🚀**

