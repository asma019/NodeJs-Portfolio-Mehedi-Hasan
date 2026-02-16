# 📧 Email Setup - Quick Reference Card

## ✅ What You Need to Know

### Required Environment Variables:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASSWORD=<16-char-app-password>
MAIL_FROM=your-gmail@gmail.com
CONTACT_RECIPIENTS=your@email.com,another@email.com
```

---

## 🚀 Quick Setup (3 Steps)

### Step 1: Get Gmail App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Select "Mail" → "Other" → Name it "Portfolio"
3. Copy the 16-character password (remove spaces)

### Step 2: Set Environment Variables

**Heroku:**
```bash
heroku config:set SMTP_HOST=smtp.gmail.com
heroku config:set SMTP_PORT=587
heroku config:set SMTP_USER=your@gmail.com
heroku config:set SMTP_PASSWORD=your-app-password
heroku config:set MAIL_FROM=your@gmail.com
heroku config:set CONTACT_RECIPIENTS=your@email.com,another@email.com
```

**Vercel:**
- Dashboard → Settings → Environment Variables
- Add all 6 variables above

**Local (.env.local):**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASSWORD=your-app-password
MAIL_FROM=your@gmail.com
CONTACT_RECIPIENTS=your@email.com,another@email.com
```

### Step 3: Test
1. Deploy/restart app
2. Submit contact form
3. Check both inboxes (and spam!)

---

## 🔍 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| "Invalid login" | Use App Password, not regular password |
| "Connection timeout" | Try port 465 instead of 587 |
| No email received | Check spam folder first |
| "EAUTH" error | Regenerate App Password |

---

## 📚 Full Guides

- **Setup:** [SMTP_SETUP_GUIDE.md](./SMTP_SETUP_GUIDE.md)
- **Troubleshooting:** [EMAIL_TROUBLESHOOTING.md](./EMAIL_TROUBLESHOOTING.md)
- **Deployment:** [DEPLOYMENT_FIXES_SUMMARY.md](./DEPLOYMENT_FIXES_SUMMARY.md)

---

## ✅ Success Indicators

You'll know it's working when:
- ✅ Contact form shows: "Email sent successfully"
- ✅ Logs show: `accepted: ['your@email.com', 'another@email.com']`
- ✅ Emails received at all configured addresses
- ✅ No errors in logs

---

## 🆘 Still Having Issues?

1. Check [EMAIL_TROUBLESHOOTING.md](./EMAIL_TROUBLESHOOTING.md)
2. Verify 2FA is enabled
3. Check spam folders
4. Review Heroku/Vercel logs
5. Test SMTP connection

---

**Quick Links:**
- App Passwords: https://myaccount.google.com/apppasswords
- 2FA Setup: https://myaccount.google.com/security
- Less Secure Apps: https://myaccount.google.com/lesssecureapps

