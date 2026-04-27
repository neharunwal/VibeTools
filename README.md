# Vibe Tools Atlas

A lightweight static website for exploring vibe coding tools, their history, how to use them, and links to official docs and videos.

## Files

- `index.html` - main page
- `styles.css` - theme system and layout
- `script.js` - tool data, search/filter UI, and cookie-backed settings
- `.nojekyll` - tells GitHub Pages to serve the site as plain static files

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files in this folder to the repository root.
3. Open the repository on GitHub.
4. Go to `Settings -> Pages`.
5. Under `Build and deployment`, choose `Deploy from a branch`.
6. Select the `main` branch and the `/root` folder.
7. Save.

Your site will be available at:

- `https://YOUR-USERNAME.github.io/REPO-NAME/` for a project site
- `https://YOUR-USERNAME.github.io/` if the repository is named `YOUR-USERNAME.github.io`

## Notes

- No build step is required.
- No backend is required.
- Theme settings are stored in browser cookies for each visitor.
