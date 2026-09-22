# Security Researcher Portfolio

Personal site for security research writeups.

## Hosting (GitHub Pages)

1. Create a GitHub repository named `YOUR_USER.github.io`
2. Push these files to the repository
3. Go to **Settings -> Pages** and select the `main` branch
4. Your site will be live at `https://YOUR_USER.github.io`

## Structure

```
├── index.html          # Main page with writeups
├── whoami.html         # About page
├── css/
│   └── style.css       # Styles
├── js/
│   └── main.js         # Logic (typing effect, card rendering)
└── README.md
```

## How to Add Writeups

Open `js/main.js` and add a new object to the `writeups` array:

```js
{
  tag: 'Web',
  title: 'Writeup Title',
  description: 'Short description of the vulnerability.',
  date: '2026-08',
  url: 'writeups/my-writeup.html'
}
```

## How to Update Whoami

Edit `whoami.html` and replace the placeholder data (name, handle, profile fields, social links).
