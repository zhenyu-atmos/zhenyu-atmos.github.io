# Zhenyu You's academic website

Five simple pages with a dark background, concise text, and a shared navigation bar. Plain HTML and CSS; no build tools or dependencies.

## Editing

| File | Content |
| --- | --- |
| `index.html` | Home and short biography |
| `publications/index.html` | Journal articles and preprints |
| `research/index.html` | One page listing research topics |
| `cv/index.html` | CV link and education |
| `resources/index.html` | Space for useful website links |
| `styles.css` | Shared colors, type, spacing, and mobile layout |
| `assets/CV_ZhenyuYou.pdf` | Public CV copy |

The Resources page includes a commented example showing how to add links. Navigation is repeated in each HTML file so there is no build step.

## Preview

Open `index.html` directly, or run this command inside the website directory:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000/> and refresh after edits. Stop the server with Control-C.

## Git and GitHub Pages

This directory is its own Git repository on `main`. The parent application workspace is outside this repository. Its remote points to the planned GitHub repository; nothing has been uploaded.

The chosen address is `zhenyu-atmos.github.io`. The GitHub account or organization must be named `zhenyu-atmos`, and the repository must be named `zhenyu-atmos.github.io`. A free organization owned by the existing account avoids changing the current login. The organization and remote repository still need to be created.

After creating or accessing the matching organization, create an empty public repository named `zhenyu-atmos.github.io`. The local remote is already configured, so upload with:

```bash
git push -u origin main
```

In the GitHub repository, select **Settings → Pages → Deploy from a branch → main → /(root) → Save**. Only the website files and public CV belong in this repository.

The intended public address is <https://zhenyu-atmos.github.io/>.

[GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

## Routine updates

After editing and previewing, run:

```bash
git status
git diff
git add index.html publications/index.html research/index.html cv/index.html resources/index.html styles.css assets/CV_ZhenyuYou.pdf
git commit -m "Update website"
git push
```

Stage any new assets explicitly. GitHub Pages republishes when the configured publishing branch changes. Run `git pull --ff-only` before working on another computer.

## Sources

Biography, affiliation, education, contact information, and publication metadata follow the candidate-provided `CV_ZhenyuYou_updated.pdf`. The website's CV is an unchanged copy. Preprints are identified separately from journal articles.

Research topics were grounded in `You_Deng_2023.pdf`, `You_etal_2024.pdf`, `You_Deng_2025.pdf`, `manuscript_ERL_final.md`, and `manuscript_ZY_PL_YM_HZ_SP.md`. Application drafts and source manuscripts remain outside this repository.

The visual and writing style was inspired by [Serena Scholz's website](https://serenarscholz.github.io/). Its personal claims and assets were not copied.
