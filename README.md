# Zhenyu You's academic website

A small, responsive academic website with a black background and a monochrome palette. It uses plain HTML and CSS, with no build step or package installation.

## Editing

- `index.html` contains the biography, research descriptions, publications, education, and contact details. Comments identify the main editing points.
- `styles.css` contains the layout, fonts, spacing, mobile styles, and color variables at the top of the file.
- `assets/CV_ZhenyuYou.pdf` is the public CV. Replace this copy when updating the CV; the original application materials remain outside this repository.
- `favicon.svg` is the browser-tab icon.
- `.nojekyll` tells GitHub Pages to serve these static files directly.

Only put material intended for the public website in this repository.

## Local preview

Open `index.html` directly in a browser, or run the following from this directory:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open <http://127.0.0.1:8000>. Refresh the page after editing. Stop the server with Control-C.

## First upload to GitHub

The local Git repository is already initialized on `main`. Create an **empty public repository** named `zyou2998.github.io` in the `zyou2998` GitHub account. Do not add a README, license, or gitignore on GitHub, because this local repository already has its own files and history.

Authenticate if necessary:

```bash
gh auth login --hostname github.com --web --git-protocol https
```

With GitHub CLI, create and push the repository in one step, provided it does not already exist:

```bash
gh repo create zyou2998/zyou2998.github.io --public --source=. --remote=origin --push
```

If you created the empty repository using the GitHub website instead, connect and push with:

```bash
git remote add origin https://github.com/zyou2998/zyou2998.github.io.git
git push -u origin main
```

Enable hosting in the repository's **Settings → Pages**:

1. Select **Deploy from a branch**.
2. Select **main** and **/(root)**.
3. Click **Save**.

The website address will be <https://zyou2998.github.io/> once GitHub Pages finishes publishing.

GitHub documentation: [Uploading a local repository](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github) and [configuring GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Routine updates

After editing and previewing, review the changes and publish:

```bash
git status
git diff
git add index.html styles.css assets/CV_ZhenyuYou.pdf
git commit -m "Update website"
git push
```

Stage any additional files explicitly when you add them. GitHub Pages republishes after changes are pushed to its publishing branch. Before editing on another computer, run `git pull --ff-only` to get the latest committed version.

## Content sources

The initial biography, affiliation, education, contact details, and publication metadata were prepared from the candidate-provided `CV_ZhenyuYou_updated.pdf`. The public CV is an unchanged copy of that document.

The research descriptions were grounded in the candidate's first-author papers and manuscripts, including `You_Deng_2023.pdf`, `You_etal_2024.pdf`, `You_Deng_2025.pdf`, `manuscript_ZY_PL_YM_HZ_SP.md`, and `manuscript_ERL_final.md`. Source manuscripts and application drafts are not part of this website repository.

The three selected published papers link to their DOI records. The CV contains the full publication list, including preprints. No portrait or social profile links were invented.
