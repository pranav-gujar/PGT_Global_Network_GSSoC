````md
# 🤝 Contributing to PGT Global Network – GSSoC Open Source Edition

First off, thank you for your interest in contributing to PGT Global Network through GirlScript Summer of Code (GSSoC)!  

This repository is maintained specifically for open-source contributions under GSSoC.  
The production website is managed separately, and all contributions here are reviewed before being integrated into the official system.

---

# 📌 Contribution Philosophy

We believe in:
- Clean, scalable code
- Beginner-friendly collaboration
- Real-world development experience
- Quality over quantity
- Respectful and constructive communication

---

# 🚀 Getting Started

## 1️⃣ Fork the Repository
Click the **Fork** button on the top-right of this repository.

## 2️⃣ Clone Your Fork
```bash
git clone https://github.com/your-username/PGT_Global_Network_GSSoC.git
cd PGT_Global_Network_GSSoC
````

## 3️⃣ Install Dependencies

```bash
npm install
```

## 4️⃣ Environment Setup

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 5️⃣ Start Development Server

```bash
npm run dev
```

---

# 🏷️ Issue Guidelines

We use structured labels to help contributors:

* `good first issue` → Beginner-friendly tasks
* `bug` → Fixes for existing issues
* `feature` → New functionality
* `documentation` → README/docs improvements
* `help wanted` → Open for community support

## Before Starting:

* Comment on the issue to request assignment
* Wait for confirmation before beginning work
* Work only on assigned issues

---

# 🌿 Branch Naming Convention

Please create a new branch for every contribution:

```bash
feature/issue-number-short-title
bugfix/issue-number-short-title
docs/issue-number-short-title
```

### Example:

```bash
feature/42-navbar-mobile-fix
```

---

# 📝 Commit Message Convention

Use clear, professional commit messages:

```bash
feat: improve mobile navbar responsiveness
fix: resolve blog like state bug
docs: update setup instructions
style: improve footer spacing
```

---

# 📤 Pull Request Guidelines

## Before Submitting:

✔ Code builds successfully
✔ Lint checks pass
✔ Existing functionality is not broken
✔ Code follows project structure
✔ No sensitive keys or secrets included

## PR Title Format:

```bash
[Issue #42] Improve mobile navbar responsiveness
```

## PR Description Must Include:

* What was changed
* Why it was changed
* Screenshots (if UI related)
* Testing performed

---

# 🧪 Testing Expectations

Before submitting:

```bash
npm run lint
npm run build
```

If applicable:

```bash
npx playwright test
```

---

# 🎨 Code Style Standards

* Maintain TypeScript type safety
* Follow existing folder architecture
* Use reusable components when possible
* Keep code readable and modular
* Prefer clarity over complexity
* Match existing UI/UX design consistency

---

# 🔒 Security Rules

## Strictly Prohibited:

* Exposing API keys
* Modifying production deployment settings
* Pushing `.env` files
* Breaking authentication/security flows without justification
* Uploading sensitive data

---

# ⏱️ Review Timeline

Typical review turnaround:

## 24–48 hours

Project admins may:

* Request revisions
* Ask implementation questions
* Reject low-quality PRs
* Suggest optimization improvements

---

# 💬 Communication & Support

If you need help:

* Use GitHub Issues
* Participate in official GSSoC communication channels
* Ask clear, specific questions

---

# 🏆 Contributor Best Practices

To stand out:

* Write clean PR descriptions
* Choose meaningful issues
* Communicate proactively
* Prioritize quality
* Respect deadlines
* Focus on genuine impact

---

# 📜 Code of Conduct

By participating, you agree to maintain professionalism, inclusivity, and respect toward all contributors and maintainers.

---

# ❤️ Final Note

This project is more than a website — it is part of a broader mission to empower students through technology, leadership, and purpose-driven growth.

We appreciate your time, skill, and contribution.

### Welcome to PGT Global Network – GSSoC Open Source Edition 🚀

```
```
