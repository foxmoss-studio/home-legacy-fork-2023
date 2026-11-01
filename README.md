# Foxmoss Website Repository

## Current authority — read before editing

This repository's inherited GitHub Pages template notes are preserved below as historical orientation, but they are **not** the current top authority for Foxmoss website work.

Before a substantive edit, audit, deployment/domain change, or public-copy change, read:

1. [AGENTS.md](AGENTS.md) — repository execution/read rules.
2. [WEBSITE-AUTHORITY.md](WEBSITE-AUTHORITY.md) — Git ↔ Google Drive authority/source map.
3. [Drive START HERE — Foxmoss Website Authority Map + Read Routing](https://docs.google.com/document/d/13Tl_Drg-jjCB6U0d7gu7GSnW-ESKFcU00Deqb4WoldM/edit).
4. [Drive Website Working Queue](https://docs.google.com/document/d/1TsfOy_EkQIcsYBgJ_Nj-Mxj8_n8KzvfDfuldcSiOLvY/edit).
5. The ACTIVE Website Working named by that queue, then only the source owners relevant to the requested change.

The current public direction is **Emira only**. Wordleaf, Nalia, and Storage Guard source is preserved but unpublished until explicitly restored. Current identity direction is **Foxmoss Studio**, with **Foxmoss** as the compact mark/name and `foxmoss.studio` as the intended canonical domain; the production rename/domain cutover is not claimed complete merely because this README records the direction.

Current source must be read fresh before implementation. Do not treat any hash or older Working as a permanent selector.

## Git / GitHub operating rules

These rules are grounded in the current official Git and GitHub documentation. Their purpose is to prevent repository, branch, and GitHub Pages deployment assumptions.

### Git and GitHub are different layers

- **Git** is the version-control system: commits, branches, refs, remotes, fetch, pull, push, status, and history.
- **GitHub** hosts Git repositories and adds repository settings, pull requests, Actions, Pages, permissions, deployment history, and other service behavior.
- A Git branch name does not by itself tell you what GitHub Pages is publishing.

### Never infer repository identity from a branch name

A branch such as `main`, `master`, or `gh-pages` belongs to one specific repository. The fact that `FoxandMoss/emira`, `FoxandMoss/Aubrey`, `FoxandMoss/ARTIST-SCAPE`, `FoxandMoss/Nalia`, `FoxandMoss/Wordleaf`, and `FoxandMoss/WordLeaf-releases` use `main` does not imply that `FoxandMoss/home` has a `main` branch.

If Aleianna says “push to main,” do **not** immediately contradict her because the currently selected repository lacks that branch. First establish which repository/deployment target she means, then inspect that repository's refs.

### Default branch is not the same thing as Pages publishing source

GitHub defines the **default branch** as the branch shown by default in the repository and normally used as the base for new pull requests and commits. New repositories commonly use `main`, but existing repositories can use another default branch.

GitHub Pages can publish from:

- any configured branch using either the repository root `/` or `/docs`; or
- a GitHub Actions workflow.

Therefore:

> Never equate “default branch” with “the branch that powers the website.”

Before changing or deploying the site, verify the actual Pages publishing source or workflow.

### Required discovery before a website write

1. Identify the exact repository.
2. Read fresh repository metadata, including `default_branch`.
3. Enumerate current branches/refs instead of assuming `main`, `master`, or `gh-pages` exists.
4. Read the target file from the **explicit target ref** before editing it.
5. For Pages work, verify the configured publishing source or deployment workflow.
6. Compare current remote state before moving refs or rewriting branch history.
7. Preserve unrelated branches and work.

At the time this section was written, fresh GitHub metadata for `FoxandMoss/home` reports `gh-pages` as its default branch and the branch listing contains `gh-pages` and `typst-bridge-test`. This is an observation of current state, not a permanent rule. Re-check it before future implementation.

### Safe local Git workflow

Useful commands and what they actually do:

```text
git status
```

Inspect the working tree and index before changing anything.

```text
git fetch origin
```

Refresh remote-tracking refs without changing the working tree.

```text
git branch -a
```

Inspect known local and remote-tracking branches.

```text
git switch <branch>
git switch -c <new-branch>
```

Switch to an existing branch or create and switch to a new branch.

```text
git pull
```

Fetch and integrate the configured upstream branch. Use only after confirming the intended branch/upstream.

```text
git add <paths>
git commit -m "message"
```

Stage intended changes and record a local commit.

```text
git push origin <branch>
```

Update that specific remote branch. `git push origin main` updates remote `main`; it does not automatically update `gh-pages` or whichever branch/folder/workflow GitHub Pages actually uses.

Avoid blind force pushes. If branch history genuinely must be rewritten, verify the remote head first and use a lease/expected-head safety check.

### GitHub Pages deployment verification

A commit existing in Git is **not** proof that the live website updated.

For every Pages deployment claim:

1. verify the configured Pages source or workflow;
2. verify the intended commit reached that source;
3. inspect the relevant GitHub Actions / Pages deployment run and its logs/status;
4. inspect the live site and confirm it serves the intended content.

Do not use a generic commit-status response with no checks as proof that Pages succeeded or failed. GitHub documents Pages deployment troubleshooting through the site workflow/deployment run.

GitHub also documents an important trigger caveat: when publishing from a branch, commits pushed by a GitHub Actions workflow using `GITHUB_TOKEN` do **not** trigger a Pages build. Automation-created commits therefore require source/deployment verification rather than assuming a rebuild happened.

### What to do when a branch appears to be “missing”

If a requested branch is not found in the currently selected repository:

1. do not conclude the user is wrong;
2. re-check the repository identity;
3. inspect accessible repositories and branch refs;
4. inspect the Pages publishing source/workflow if this is a deployment question;
5. only then state whether the branch exists in the specific repository being discussed.

### Official references

- [GitHub Docs — Branches](https://docs.github.com/en/pull-requests/reference/branches)
- [GitHub Docs — Changing the default branch](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch)
- [GitHub Docs — Configuring a publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Docs — Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [GitHub Docs — Viewing workflow run history](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-workflow-run-history)
- [Git documentation — git switch](https://git-scm.com/docs/git-switch)
- [Git documentation — git fetch](https://git-scm.com/docs/git-fetch)
- [Git documentation — git pull](https://git-scm.com/docs/git-pull)
- [Git documentation — git push](https://git-scm.com/docs/git-push)

---

# Historical template orientation

The material below originated from the simple GitHub Pages template and remains useful only where it does not conflict with the current authorities above.

## Simple Website Using Github Pages
Make a simple HTML website and publish it using Github Pages.  
View example: https://cplmakerlab.github.io/simple-website-template/

## Setup
- Create a Github account (if you don't have one yet)
- Fork this repository to copy it to your account, i.e. github.com/username/simple-website-template (you can rename it as well)
- Make sure you see the gh-pages branch (it should be the default)
- Edit website files on the gh-pages branch, then wait a minute or two for Github Pages to update and deploy your site.
- View your site: https://username.github.io/simple-website-template

## How does this work?
This website template uses CSS & JS to hide and show different parts of index.html and uses Github Pages to render the website from the gh-pages branch.

For current Foxmoss architecture and the limits of JavaScript-only hiding, use [AGENTS.md](AGENTS.md), [WEBSITE-AUTHORITY.md](WEBSITE-AUTHORITY.md), and the active Drive Working rather than assuming this inherited template architecture remains the final design.

## Things to try
- Edit index.html and change the title of the page (both ```<title>``` in the header and ```<h1>``` in the body)
- Upload your own logo.jpg and background.jpg images to overwrite the default images.
- Edit index.html and change the content displayed in home, about, and contact.
- Edit index.html and change the content in the footer region.
- Edit style.css and change the link color and font style.
- Update the metadata in the header portion of index.html (this is used by search engines and browsers).

## Common tags

Element | Tag | Example usage
--- | --- | ---
Header | h1 | ```<h1>Title of page</h1>```
Link | a | ```<a href="http://example.com">Check out this link</a>```
Image | img | ```<img src="http://example.com/image.jpg">```
Paragraph | p | ```<p>This is a new paragraph.</p>```
Line break | br | ```This is the first line of a poem. <br> This second line will appear below the first. ```

## Further reading

### Where can I learn more about HTML, CSS, JS, and webdevelopment in general?
Check out Mozilla Developers Network (https://developer.mozilla.org). They have lots of good resources, tips, and tutorials to further your knowledge.

### Can I configure a custom domain for my site, i.e. johnnymakerportfolio.com?
Yes. For this project, however, follow the current Drive Website Working Queue + Website Master Plan + current official GitHub Pages documentation. Do not add a guessed CNAME or DNS values from this inherited template text.

### Can I add tracking?
Technically yes, but Foxmoss website privacy/analytics decisions belong to the current Website Master Plan/Working. Do not add analytics merely because the old template suggests it.

### Can I add a blog, etc?
The current Foxmoss roadmap deliberately keeps the site small/static and defers any Jekyll/blog decision to its dedicated Website Working. Do not add a CMS or build framework from this inherited suggestion alone.

### Can I sell products or add a store?
Payment/support architecture belongs to the dedicated Website Working and must keep sensitive payment handling on an appropriate hosted provider. Do not implement a store from this template note alone.

### Can I make separate HTML files for each page?
Yes. Current product-page/canonicalization decisions are owned by the Website Master Plan and active Working, not by the old template's AJAX suggestion.

### I heard I need to be using XYZ framework (Bootstrap, React, etc).
The current Website Master Plan explicitly favors the simplest architecture that meets the requirements. Do not adopt a framework solely because it is popular.

### I don't want to write code or deal with website hosting. Are there any website builders you recommend?
This project currently uses GitHub Pages. Changing hosting/platform belongs to an explicit Website Working.

## Universal file-inspection rule

When work requires examining a file that lives in the user's Google Drive, use the connected Drive source directly when available and follow the current authority/read-routing contract in [AGENTS.md](AGENTS.md) and the Drive START HERE document. Historical file-transfer/workspace instructions do not override current connector/tool capabilities or the owning Website Working.

The configured Google Drive root is searchable. Relevant files may be inside subfolders and should be discovered rather than requiring manual file-by-file instructions.

## Public site

Current intended public product surface:

- Site: https://foxandmoss.github.io/home/
- Emira: https://foxandmoss.github.io/home/emira/
- Wordleaf: preserved/unpublished for now
- Nalia: preserved/unpublished for now
- Storage Guard: preserved/unpublished for now

The custom-domain target is `foxmoss.studio`, but domain purchase/DNS/HTTPS cutover must be established by evidence before this README calls it live.

## Shared Windows installer rule

All Foxmoss Studio Windows desktop installers must follow [INSTALLER-CONTRACT.md](INSTALLER-CONTRACT.md). This includes stable versionless download URLs, pre-install release checks, radio-button drive choice, and a hardware/free-space-based Recommended drive. Website work that exposes/restores a Windows download must also follow [WEBSITE-AUTHORITY.md](WEBSITE-AUTHORITY.md) and the active Drive Working.
