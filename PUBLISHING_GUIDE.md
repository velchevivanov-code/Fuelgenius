# FuelGenius Publishing Guide

## 1. Update the repo

Replace your current project files with this package, then run:

```bash
git status
git add .
git commit -m "Prepare FuelGenius for release"
git push origin main
```

## 2. What is already done in the files

- Contact email set to `fuelgenius_support@napomniapp.site`
- Legal pages filled out
- Privacy choices button and consent banner added
- Optional analytics and ads blocked by default
- Single config file added: `release-config.js`

## 3. Before enabling analytics or ads

Do all of these first:

- Replace placeholder IDs in `release-config.js`
- Set `enabled: true` only after the final app build really includes the relevant service
- Keep consent required for analytics and ads
- Update Google Play Data safety answers to **Yes** for collected/shared data if the final release uses AdMob or Firebase
- Review your age rating and ad content settings in Play Console

## 4. Important limitation

For Google Play, AdMob and Firebase are typically implemented in the Android wrapper/app, not in a plain static PWA alone. These files are prepared for the legal and consent side, but the actual mobile SDK integration still belongs in the Android build.

## 5. Production checklist

- Test the legal links on the live site
- Test save/delete/export/history
- Test offline support after first load
- Test privacy choices save/reopen/reset
- Verify `release-config.js` does not contain fake placeholders in the final release if you enable optional services
- Verify Play Console text matches the final APK/AAB behavior exactly
