# Email Troubleshooting Guide

## Issue: Contact Form Not Sending Emails

If your contact form says "Email sent successfully" but you're not receiving emails at `mehedims2005@gmail.com` or `hello@mehedims.com`, follow this guide.

---

## ✅ Quick Checklist

Before diving into troubleshooting:

- [ ] SMTP credentials are correctly set in environment variables
- [ ] Using Gmail App Password (not regular password)
- [ ] Both email addresses exist and can receive mail
- [ ] Check spam/junk folder
- [ ] SMTP server allows connections from your hosting platform

---

## 🔧 Step-by-Step Troubleshooting

### Step 1: Verify Environment Variables

#### For Heroku:
```bash
heroku config --app your-app-name
```

Check that these are set:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-16-char-app-password
MAIL_FROM=your-email@gmail.com
```

#### For Vercel:
1. Go to your project settings
2. Click "Environment Variables"
3. Verify all SMTP variables are set

#### For Local (.env.local):
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
MAIL_FROM=your-email@gmail.com
```

---

### Step 2: Gmail App Password Setup

**IMPORTANT:** You MUST use an App Password, not your regular Gmail password.

1. **Enable 2-Factor Authentication:**
   - Go to https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Generate App Password:**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Portfolio Contact Form"
   - Click "Generate"
   - Copy the 16-character password (no spaces)
   - Use this as `SMTP_PASSWORD`

3. **Update Environment Variable:**
   ```bash
   # For Heroku
   heroku config:set SMTP_PASSWORD=your-16-char-password
   
   # For Vercel
   # Update in Vercel dashboard → Settings → Environment Variables
   
   # For Local
   # Update in .env.local file
   ```

---

### Step 3: Check Gmail Security Settings

1. **Allow Less Secure Apps (if needed):**
   - Go to https://myaccount.google.com/lesssecureapps
   - Turn ON "Allow less secure apps"
   - Note: This is needed even with App Password for some accounts

2. **Check for Blocked Sign-in Attempts:**
   - Go to https://myaccount.google.com/notifications
   - Look for blocked sign-in attempts
   - If found, allow the attempt and try again

3. **Verify Account Activity:**
   - Go to https://myaccount.google.com/device-activity
   - Make sure your app/server isn't blocked

---

### Step 4: Test SMTP Connection

#### Using the Built-in Checker:
```bash
npm run check-env
```

This will verify:
- All environment variables are set
- SMTP connection can be established

#### Manual Test (Node.js):
Create a file `test-email.js`:
```javascript
const nodemailer = require('nodemailer');

async function testEmail() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-app-password',
    },
  });

  try {
    await transporter.verify();
    console.log('✅ SMTP connection successful!');
    
    const info = await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: 'mehedims2005@gmail.com, hello@mehedims.com',
      subject: 'Test Email',
      text: 'This is a test email',
    });
    
    console.log('✅ Email sent:', info.messageId);
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testEmail();
```

Run it:
```bash
node test-email.js
```

---

### Step 5: Check Application Logs

#### For Heroku:
```bash
heroku logs --tail --app your-app-name
```

Look for errors like:
- `EAUTH` - Authentication failed (wrong credentials)
- `ETIMEDOUT` - Connection timeout (firewall/network issue)
- `ECONNECTION` - Cannot connect to SMTP server

#### For Vercel:
1. Go to your deployment
2. Click "Functions" tab
3. Click on the `/api/contact` function
4. Check logs for errors

---

### Step 6: Common Error Solutions

#### Error: "EAUTH - Invalid login"
**Solution:**
- Verify you're using App Password, not regular password
- Make sure 2FA is enabled
- Regenerate App Password

#### Error: "ETIMEDOUT" or "ECONNECTION"
**Solution:**
- Check firewall settings
- Try port 465 with `secure: true`:
  ```javascript
  port: 465,
  secure: true,
  ```
- Some hosting platforms block port 587

#### Error: "Recipient address rejected"
**Solution:**
- Verify email addresses are correct
- Check for typos in `mehedims2005@gmail.com` and `hello@mehedims.com`
- Make sure both email addresses can receive mail

#### Error: No error but email not received
**Solution:**
- Check spam/junk folder
- Check Gmail filters (Settings → Filters)
- Verify email isn't being auto-archived
- Wait a few minutes (SMTP can be delayed)

---

### Step 7: Alternative SMTP Providers

If Gmail doesn't work, try these alternatives:

#### SendGrid (Recommended for production):
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

**Setup:**
1. Sign up at https://sendgrid.com (Free tier: 100 emails/day)
2. Create API key
3. Use `apikey` as username
4. Use API key as password

#### Mailgun:
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASSWORD=your-mailgun-password
```

#### Outlook/Hotmail:
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
```

---

### Step 8: Update Heroku Configuration

If you changed anything, redeploy:

```bash
# Set new env vars
heroku config:set SMTP_PASSWORD=new-password

# Restart app
heroku restart

# Check logs
heroku logs --tail
```

---

## 🧪 Testing After Fixes

1. **Submit Test Form:**
   - Go to your live site
   - Fill out contact form
   - Click send

2. **Check Logs Immediately:**
   ```bash
   heroku logs --tail  # For Heroku
   ```

3. **Look for Success Message:**
   ```
   Email sent successfully: {
     messageId: '...',
     accepted: ['mehedims2005@gmail.com', 'hello@mehedims.com'],
     rejected: []
   }
   ```

4. **Check Both Email Inboxes:**
   - mehedims2005@gmail.com
   - hello@mehedims.com
   - Also check spam folder

---

## 📊 Verification Checklist

After fixing, verify:

- [ ] Environment variables are correct
- [ ] Using Gmail App Password
- [ ] SMTP connection test passes
- [ ] Test email received at mehedims2005@gmail.com
- [ ] Test email received at hello@mehedims.com
- [ ] Logs show "Email sent successfully"
- [ ] No errors in application logs

---

## 🆘 Still Not Working?

### Debug Mode

Add detailed logging to `app/api/contact/route.ts`:

```javascript
console.log('SMTP Config:', {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER,
  hasPassword: !!process.env.SMTP_PASSWORD,
});
```

### Contact Support

If still having issues:
1. Check Heroku/Vercel status pages
2. Verify your hosting plan allows SMTP
3. Try from a different network
4. Contact hosting support

---

## ✅ Success Indicators

You'll know it's working when:
- ✅ Logs show "Email sent successfully"
- ✅ Both emails received at mehedims2005@gmail.com
- ✅ Both emails received at hello@mehedims.com
- ✅ No errors in application logs
- ✅ Contact form shows success message

---

## 📝 Final Notes

- Gmail has daily sending limits (100-500 emails/day)
- For production, consider SendGrid or Mailgun
- Always use App Password for Gmail
- Check spam folder first
- SMTP can take 1-2 minutes to deliver

---

**Need more help?** Open an issue on GitHub with:
- Error messages from logs
- Environment variable setup (hide passwords!)
- Hosting platform (Heroku/Vercel)
- SMTP provider being used

