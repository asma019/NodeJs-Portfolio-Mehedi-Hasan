# SMTP Setup Guide for Gmail

This guide will help you set up Gmail SMTP for the contact form to send emails to `mehedims2005@gmail.com` and `hello@mehedims.com`.

---

## 🎯 Quick Setup (5 Minutes)

### Step 1: Enable 2-Factor Authentication

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click on "2-Step Verification"
3. Follow the prompts to enable 2FA
4. Verify with your phone number

### Step 2: Generate App Password

1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - If you don't see this option, make sure 2FA is enabled
2. Select "Mail" from the app dropdown
3. Select "Other (Custom name)" from device dropdown
4. Enter "Portfolio Contact Form" as the name
5. Click "Generate"
6. **Copy the 16-character password** (looks like: `abcd efgh ijkl mnop`)
7. Remove spaces: `abcdefghijklmnop`

### Step 3: Set Environment Variables

The emails will be sent to **both addresses**:
- `mehedims2005@gmail.com`
- `hello@mehedims.com`

#### For Heroku:
```bash
heroku config:set SMTP_HOST=smtp.gmail.com
heroku config:set SMTP_PORT=587
heroku config:set SMTP_USER=your-gmail@gmail.com
heroku config:set SMTP_PASSWORD=abcdefghijklmnop
heroku config:set MAIL_FROM=your-gmail@gmail.com
```

#### For Vercel:
1. Go to your project on Vercel
2. Click "Settings" → "Environment Variables"
3. Add these variables:
   ```
   SMTP_HOST = smtp.gmail.com
   SMTP_PORT = 587
   SMTP_USER = your-gmail@gmail.com
   SMTP_PASSWORD = abcdefghijklmnop
   MAIL_FROM = your-gmail@gmail.com
   ```
4. Click "Save"
5. Redeploy your project

#### For Local Development (.env.local):
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASSWORD=abcdefghijklmnop
MAIL_FROM=your-gmail@gmail.com
```

---

## 📧 Which Gmail Account to Use?

You have 2 options:

### Option 1: Use mehedims2005@gmail.com
```env
SMTP_USER=mehedims2005@gmail.com
SMTP_PASSWORD=<app-password-for-mehedims2005>
MAIL_FROM=mehedims2005@gmail.com
```

### Option 2: Use hello@mehedims.com (if it's Gmail)
```env
SMTP_USER=hello@mehedims.com
SMTP_PASSWORD=<app-password-for-hello>
MAIL_FROM=hello@mehedims.com
```

**Emails will be sent TO both addresses regardless of which one you use as sender.**

---

## ✅ Testing Your Setup

### Test 1: Environment Variables
```bash
# For Heroku
heroku config --app your-app-name

# Should show:
# SMTP_HOST: smtp.gmail.com
# SMTP_PORT: 587
# SMTP_USER: your-gmail@gmail.com
# SMTP_PASSWORD: ***
# MAIL_FROM: your-gmail@gmail.com
```

### Test 2: Send Test Email

1. Go to your deployed site
2. Fill out the contact form:
   ```
   Name: Test User
   Email: test@example.com
   Subject: Test Email
   Message: This is a test message
   ```
3. Click "Send Message"
4. Check **both** email inboxes:
   - mehedims2005@gmail.com
   - hello@mehedims.com
5. Also check spam folders!

### Test 3: Check Logs

```bash
# For Heroku
heroku logs --tail

# Look for:
# "Email sent successfully"
# "accepted: ['mehedims2005@gmail.com', 'hello@mehedims.com']"
```

---

## 🔐 Security Best Practices

1. **Never commit credentials:**
   - ✅ Use `.env.local` for local development
   - ✅ Use environment variables on Heroku/Vercel
   - ❌ Never put passwords in code

2. **Rotate App Passwords regularly:**
   - Generate new App Password every 3-6 months
   - Revoke old ones

3. **Use separate App Passwords:**
   - Different password for each app
   - Easy to revoke if compromised

---

## 🚨 Common Issues & Solutions

### Issue 1: "Invalid login" Error

**Cause:** Wrong App Password or using regular password

**Solution:**
1. Make sure you're using App Password, not regular password
2. Verify 2FA is enabled
3. Regenerate App Password
4. Remove any spaces from the password

### Issue 2: "Connection timeout"

**Cause:** Firewall blocking port 587

**Solution:**
Try port 465 instead:
```env
SMTP_PORT=465
```

Update code to use `secure: true` for port 465.

### Issue 3: Emails going to spam

**Cause:** SPF/DKIM not configured

**Solution:**
1. Check spam folder
2. Mark as "Not Spam"
3. Add sender to contacts
4. For production, use SendGrid or similar

### Issue 4: "Less secure app access"

**Cause:** App Password not working

**Solution:**
1. Go to https://myaccount.google.com/lesssecureapps
2. Turn ON "Allow less secure apps"
3. Wait 5-10 minutes
4. Try again

---

## 📊 Gmail Limitations

Be aware of these Gmail limits:

| Limit Type | Free Gmail | Google Workspace |
|------------|-----------|------------------|
| Daily emails | 100-500 | 2,000 |
| Recipients per email | 100 | 2,000 |
| Emails per message | 500 | 10,000 |

**For high-volume sites, use:**
- SendGrid (100 free emails/day)
- Mailgun (100 free emails/day)
- Amazon SES (pay as you go)

---

## 🎓 Alternative SMTP Providers

If Gmail doesn't work, try these:

### SendGrid (Recommended)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=<your-sendgrid-api-key>
MAIL_FROM=verified-sender@yourdomain.com
```

**Benefits:**
- 100 free emails/day
- Better deliverability
- Detailed analytics
- No App Password needed

**Setup:**
1. Sign up: https://sendgrid.com
2. Verify sender email
3. Create API key
4. Use `apikey` as username

### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@your-domain
SMTP_PASSWORD=<mailgun-password>
```

### Outlook
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your@outlook.com
SMTP_PASSWORD=<your-password>
```

---

## ✨ Verification Checklist

Before going live, verify:

- [ ] 2FA enabled on Gmail
- [ ] App Password generated
- [ ] Environment variables set correctly
- [ ] Test email sent successfully
- [ ] Email received at mehedims2005@gmail.com
- [ ] Email received at hello@mehedims.com
- [ ] No errors in logs
- [ ] Emails not in spam

---

## 📞 Need Help?

1. Check [EMAIL_TROUBLESHOOTING.md](./EMAIL_TROUBLESHOOTING.md)
2. Review Heroku/Vercel logs
3. Test with `npm run check-env`
4. Open GitHub issue with:
   - Error messages
   - Log output
   - Environment setup

---

**You're all set!** Contact form will now send to both `mehedims2005@gmail.com` and `hello@mehedims.com`! 🎉

